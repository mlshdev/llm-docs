> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservice/3538566-createpropertymatchingdictionary

# CreatePropertyMatchingDictionary

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Type Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.4+

## Declaration

```objectivec
static OSDictionary * CreatePropertyMatchingDictionary(const char *key, OSObjectPtr value, OSDictionary *matching);
```
