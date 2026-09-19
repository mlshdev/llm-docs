> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4395345-securedtgetpropertyregion

# SecureDTGetPropertyRegion

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 15.0+

## Declaration

```objectivec
int SecureDTGetPropertyRegion(const DTEntry entry, const char *propertyName, const void **propertyValue, unsigned int *propertySize, const vm_offset_t region_start, vm_size_t region_size);
```
