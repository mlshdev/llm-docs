> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1451578-pewritenvramproperty](https://developer.apple.com/documentation/kernel/1451578-pewritenvramproperty)

# PEWriteNVRAMProperty

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.7+

## Declaration

```objectivec
boolean_t PEWriteNVRAMProperty(const char *symbol, const void *value, const unsigned int len);
```

## See Also

### NVRAM

- [PEReadNVRAMProperty](1451596-pereadnvramproperty.md)
- [PERemoveNVRAMProperty](1451580-peremovenvramproperty.md)
- [PEWriteNVRAMBooleanProperty](1451625-pewritenvrambooleanproperty.md)
- [PEWriteNVRAMPropertyWithCopy](3151873-pewritenvrampropertywithcopy.md)
