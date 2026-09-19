> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/vfsops/1523551-vfs_fhtovp

# vfs_fhtovp

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

## Declaration

```objectivec
int (*vfs_fhtovp)(struct mount *mp, int fhlen, unsigned char *fhp, struct vnode **vpp, vfs_context_t context);
```
