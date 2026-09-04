import { PRESETS } from '../data/presets.js';

export interface FileItem {
  id: string;
  slug: string;
  title: string;
  path: string;
  content: string;
}

export interface TreeNode {
  name: string;
  displayName: string;
  type: 'folder' | 'file';
  id?: string;
  slug?: string;
  children?: TreeNode[];
}

export function formatName(name: string): string {
  return name
    .replace(/\.md$/, '')
    .split(/[-_]/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export function parseContentFiles(contentFilesRecord: Record<string, unknown>): {
  docList: FileItem[];
  treeRoot: TreeNode[];
} {
  const docList: FileItem[] = [];
  const treeRoot: TreeNode[] = [];

  function getOrCreateFolder(parentChildren: TreeNode[], folderName: string): TreeNode {
    let folder = parentChildren.find(c => c.type === 'folder' && c.name === folderName);
    if (!folder) {
      folder = {
        name: folderName,
        displayName: formatName(folderName),
        type: 'folder',
        children: []
      };
      parentChildren.push(folder);
    }
    return folder;
  }

  Object.entries(contentFilesRecord).forEach(([filePath, content]) => {
    const relative = filePath.replace(/^.*\/content\//, '');
    const parts = relative.split('/');
    const fileName = parts.pop() || '';
    const docId = relative.replace(/\.md$/, '').replace(/[\/\s]+/g, '-');
    const slug = relative.replace(/\.md$/, '').toLowerCase().replace(/[\/\s]+/g, '/');
    const title = formatName(fileName);

    docList.push({
      id: docId,
      slug,
      title,
      path: relative,
      content: content as string
    });

    let currentLevel = treeRoot;
    parts.forEach(folderName => {
      const folder = getOrCreateFolder(currentLevel, folderName);
      currentLevel = folder.children!;
    });

    currentLevel.push({
      name: fileName,
      displayName: title,
      type: 'file',
      id: docId,
      slug
    });
  });

  return { docList, treeRoot };
}

export { PRESETS };
