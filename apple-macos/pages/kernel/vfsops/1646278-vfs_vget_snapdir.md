> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/vfsops/1646278-vfs_vget_snapdir

# vfs_vget_snapdir

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

## Declaration

```objectivec
int (*vfs_vget_snapdir)(struct mount *mp, struct vnode **vpp, vfs_context_t context);
```
