> Snapshot-pinned source payload for Apple macOS snapshot-8257b11be327; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iouserclient/3553396-copycliententitlementsvnode

# copyClientEntitlementsVnode

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
static OSPtr<OSDictionary> copyClientEntitlementsVnode(struct vnode *vnode, off_t offset);
```
