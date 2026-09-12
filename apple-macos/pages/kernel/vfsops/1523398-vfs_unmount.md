> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/vfsops/1523398-vfs_unmount](https://developer.apple.com/documentation/kernel/vfsops/1523398-vfs_unmount)

# vfs_unmount

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

## Declaration

```objectivec
int (*vfs_unmount)(struct mount *mp, int mntflags, vfs_context_t context);
```
