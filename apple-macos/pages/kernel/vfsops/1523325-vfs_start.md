> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/vfsops/1523325-vfs_start](https://developer.apple.com/documentation/kernel/vfsops/1523325-vfs_start)

# vfs_start

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

## Declaration

```objectivec
int (*vfs_start)(struct mount *mp, int flags, vfs_context_t context);
```
