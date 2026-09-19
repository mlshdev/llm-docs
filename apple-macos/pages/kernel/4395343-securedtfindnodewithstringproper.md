> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4395343-securedtfindnodewithstringproper

# SecureDTFindNodeWithStringProperty

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 15.0+

## Declaration

```objectivec
int SecureDTFindNodeWithStringProperty(const char *const propertyName, const char *const propertyValue, const DeviceTreeNode **const devicetreeNode);
```
