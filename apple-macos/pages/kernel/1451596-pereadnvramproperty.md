> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1451596-pereadnvramproperty](https://developer.apple.com/documentation/kernel/1451596-pereadnvramproperty)

# PEReadNVRAMProperty

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.7+

## Declaration

```objectivec
boolean_t PEReadNVRAMProperty(const char *symbol, void *value, unsigned int *len);
```

## See Also

### NVRAM

- [PERemoveNVRAMProperty](1451580-peremovenvramproperty.md)
- [PEWriteNVRAMBooleanProperty](1451625-pewritenvrambooleanproperty.md)
- [PEWriteNVRAMProperty](1451578-pewritenvramproperty.md)
- [PEWriteNVRAMPropertyWithCopy](3151873-pewritenvrampropertywithcopy.md)
