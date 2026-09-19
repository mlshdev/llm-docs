> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/vfsops/1523325-vfs_start

# vfs_start

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

## Declaration

```objectivec
int (*vfs_start)(struct mount *mp, int flags, vfs_context_t context);
```
