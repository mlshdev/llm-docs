> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiperipheraldevicenub/1569611-scompareioproperty

# sCompareIOProperty

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static bool sCompareIOProperty(IOService *object, OSDictionary *table, char *propertyKeyName, bool *matches);
```
