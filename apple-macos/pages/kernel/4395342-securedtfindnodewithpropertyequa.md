> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/4395342-securedtfindnodewithpropertyequa](https://developer.apple.com/documentation/kernel/4395342-securedtfindnodewithpropertyequa)

# SecureDTFindNodeWithPropertyEqualToValue

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 15.0+

## Declaration

```objectivec
int SecureDTFindNodeWithPropertyEqualToValue(const char *const propertyName, const void *const propertyValue, const size_t propertyValueSize, const DeviceTreeNode **const devicetreeNode);
```
