> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/vfsops/1523499-vfs_getattr](https://developer.apple.com/documentation/kernel/vfsops/1523499-vfs_getattr)

# vfs_getattr

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

## Declaration

```objectivec
int (*vfs_getattr)(struct mount *mp, struct vfs_attr *vfa, vfs_context_t context);
```
