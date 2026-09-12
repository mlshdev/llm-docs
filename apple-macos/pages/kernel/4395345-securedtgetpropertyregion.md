> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/4395345-securedtgetpropertyregion](https://developer.apple.com/documentation/kernel/4395345-securedtgetpropertyregion)

# SecureDTGetPropertyRegion

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 15.0+

## Declaration

```objectivec
int SecureDTGetPropertyRegion(const DTEntry entry, const char *propertyName, const void **propertyValue, unsigned int *propertySize, const vm_offset_t region_start, vm_size_t region_size);
```
