> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/osdictionary/1412890-withobjects

# withObjects

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<OSDictionary> withObjects(const OSObject *objects[], const OSSymbol *keys[], unsigned int count, unsigned int capacity);
```
