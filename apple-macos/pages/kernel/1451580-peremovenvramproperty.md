> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1451580-peremovenvramproperty

# PERemoveNVRAMProperty

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.9+

## Declaration

```objectivec
boolean_t PERemoveNVRAMProperty(const char *symbol);
```

## See Also

### NVRAM

- [PEReadNVRAMProperty](1451596-pereadnvramproperty.md)
- [PEWriteNVRAMBooleanProperty](1451625-pewritenvrambooleanproperty.md)
- [PEWriteNVRAMProperty](1451578-pewritenvramproperty.md)
- [PEWriteNVRAMPropertyWithCopy](3151873-pewritenvrampropertywithcopy.md)
