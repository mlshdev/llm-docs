> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/vfsops/1523398-vfs_unmount

# vfs_unmount

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

## Declaration

```objectivec
int (*vfs_unmount)(struct mount *mp, int mntflags, vfs_context_t context);
```
