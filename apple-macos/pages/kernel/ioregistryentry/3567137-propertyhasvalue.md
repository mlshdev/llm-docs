> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioregistryentry/3567137-propertyhasvalue

# propertyHasValue

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
bool propertyHasValue(const OSSymbol *aKey, const OSObject *value, const IORegistryPlane *plane, uint32_t options);
```
