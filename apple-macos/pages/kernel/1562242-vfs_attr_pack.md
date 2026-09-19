> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1562242-vfs_attr_pack

# vfs_attr_pack

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.10+

## Declaration

```objectivec
errno_t vfs_attr_pack(vnode_t vp, uio_t uio, struct attrlist *alp, uint64_t options, struct vnode_attr *vap, void *fndesc, vfs_context_t ctx);
```
