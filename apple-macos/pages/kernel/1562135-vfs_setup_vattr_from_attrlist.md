> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1562135-vfs_setup_vattr_from_attrlist](https://developer.apple.com/documentation/kernel/1562135-vfs_setup_vattr_from_attrlist)

# vfs_setup_vattr_from_attrlist

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.10+

## Declaration

```objectivec
errno_t vfs_setup_vattr_from_attrlist(struct attrlist *alp, struct vnode_attr *vap, enum vtype obj_vtype, ssize_t *attr_fixed_sizep, vfs_context_t ctx);
```
