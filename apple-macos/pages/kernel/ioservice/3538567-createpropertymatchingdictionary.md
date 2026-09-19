> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservice/3538567-createpropertymatchingdictionary

# CreatePropertyMatchingDictionary

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Type Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.4+

## Declaration

```objectivec
static OSDictionary * CreatePropertyMatchingDictionary(const char *key, const char *stringValue, OSDictionary *matching);
```
