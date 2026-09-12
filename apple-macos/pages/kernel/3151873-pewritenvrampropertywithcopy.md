> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3151873-pewritenvrampropertywithcopy](https://developer.apple.com/documentation/kernel/3151873-pewritenvrampropertywithcopy)

# PEWriteNVRAMPropertyWithCopy

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.14.4+

## Declaration

```objectivec
boolean_t PEWriteNVRAMPropertyWithCopy(const char *symbol, const void *value, const unsigned int len);
```

## See Also

### NVRAM

- [PEReadNVRAMProperty](1451596-pereadnvramproperty.md)
- [PERemoveNVRAMProperty](1451580-peremovenvramproperty.md)
- [PEWriteNVRAMBooleanProperty](1451625-pewritenvrambooleanproperty.md)
- [PEWriteNVRAMProperty](1451578-pewritenvramproperty.md)
