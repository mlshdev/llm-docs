> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iovideocontroldictionary/1517845-createselectorcontrol

# createSelectorControl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSDictionary * createSelectorControl(UInt32 controlID, UInt32 baseClass, UInt32 derivedClass, UInt32 scope, UInt32 element, UInt32 value, OSArray *selectorMap, bool isReadOnly, UInt32 variant, OSString *name);
```
