> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iouserclient/3553395-copycliententitlementvnode](https://developer.apple.com/documentation/kernel/iouserclient/3553395-copycliententitlementvnode)

# copyClientEntitlementVnode

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
static OSPtr<OSObject> copyClientEntitlementVnode(struct vnode *vnode, off_t offset, const char *entitlement);
```
