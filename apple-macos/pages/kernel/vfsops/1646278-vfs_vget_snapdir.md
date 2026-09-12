> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/vfsops/1646278-vfs_vget_snapdir](https://developer.apple.com/documentation/kernel/vfsops/1646278-vfs_vget_snapdir)

# vfs_vget_snapdir

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

## Declaration

```objectivec
int (*vfs_vget_snapdir)(struct mount *mp, struct vnode **vpp, vfs_context_t context);
```
