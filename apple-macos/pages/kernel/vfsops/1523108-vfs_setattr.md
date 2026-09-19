> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/vfsops/1523108-vfs_setattr

# vfs_setattr

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

## Declaration

```objectivec
int (*vfs_setattr)(struct mount *mp, struct vfs_attr *vfa, vfs_context_t context);
```
