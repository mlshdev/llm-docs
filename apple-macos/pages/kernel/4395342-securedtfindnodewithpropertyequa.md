> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4395342-securedtfindnodewithpropertyequa

# SecureDTFindNodeWithPropertyEqualToValue

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 15.0+

## Declaration

```objectivec
int SecureDTFindNodeWithPropertyEqualToValue(const char *const propertyName, const void *const propertyValue, const size_t propertyValueSize, const DeviceTreeNode **const devicetreeNode);
```
