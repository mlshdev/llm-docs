> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1573069-registrypropertyiteratecreate](https://developer.apple.com/documentation/kernel/1573069-registrypropertyiteratecreate)

# RegistryPropertyIterateCreate

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.6+

## Declaration

```objectivec
OSStatus RegistryPropertyIterateCreate(const RegEntryID *entry, RegPropertyIter *cookie);
```

## See Also

### Property Management

- [RegistryPropertyCreate](1573027-registrypropertycreate.md)
- [RegistryPropertyDelete](1573057-registrypropertydelete.md)
- [RegistryPropertyGet](1573042-registrypropertyget.md)
- [RegistryPropertyGetMod](1573058-registrypropertygetmod.md)
- [RegistryPropertyGetSize](1573059-registrypropertygetsize.md)
- [RegistryPropertyIterate](1573092-registrypropertyiterate.md)
- [RegistryPropertyIterateDispose](1573062-registrypropertyiteratedispose.md)
- [RegistryPropertySet](1573129-registrypropertyset.md)
- [RegistryPropertySetMod](1573127-registrypropertysetmod.md)
