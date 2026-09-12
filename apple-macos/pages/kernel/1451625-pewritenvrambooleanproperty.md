> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1451625-pewritenvrambooleanproperty](https://developer.apple.com/documentation/kernel/1451625-pewritenvrambooleanproperty)

# PEWriteNVRAMBooleanProperty

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.11+

## Declaration

```objectivec
boolean_t PEWriteNVRAMBooleanProperty(const char *symbol, boolean_t value);
```

## See Also

### NVRAM

- [PEReadNVRAMProperty](1451596-pereadnvramproperty.md)
- [PERemoveNVRAMProperty](1451580-peremovenvramproperty.md)
- [PEWriteNVRAMProperty](1451578-pewritenvramproperty.md)
- [PEWriteNVRAMPropertyWithCopy](3151873-pewritenvrampropertywithcopy.md)
