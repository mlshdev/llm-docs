> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohikeyboardmapper/1415084-keyboardmapper

# keyboardMapper

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
static IOHIKeyboardMapper * keyboardMapper(IOHIKeyboard *delegate, const UInt8 *mapping, UInt32 mappingLength, bool mappingShouldBeFreed);
```
