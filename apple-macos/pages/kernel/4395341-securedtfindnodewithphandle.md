> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4395341-securedtfindnodewithphandle

# SecureDTFindNodeWithPhandle

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 15.0+

## Declaration

```objectivec
int SecureDTFindNodeWithPhandle(const uint32_t phandle, const DeviceTreeNode **const devicetreeNode);
```
