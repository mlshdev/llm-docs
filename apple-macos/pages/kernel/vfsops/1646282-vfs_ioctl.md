> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/vfsops/1646282-vfs_ioctl](https://developer.apple.com/documentation/kernel/vfsops/1646282-vfs_ioctl)

# vfs_ioctl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

## Declaration

```objectivec
int (*vfs_ioctl)(struct mount *mp, u_long command, caddr_t data, int flags, vfs_context_t context);
```
