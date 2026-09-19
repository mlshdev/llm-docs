> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1573127-registrypropertysetmod

# RegistryPropertySetMod

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.6+

## Declaration

```objectivec
OSStatus RegistryPropertySetMod(const RegEntryID *entry, const RegPropertyName *name, RegPropertyModifiers modifiers);
```

## See Also

### Property Management

- [RegistryPropertyCreate](1573027-registrypropertycreate.md)
- [RegistryPropertyDelete](1573057-registrypropertydelete.md)
- [RegistryPropertyGet](1573042-registrypropertyget.md)
- [RegistryPropertyGetMod](1573058-registrypropertygetmod.md)
- [RegistryPropertyGetSize](1573059-registrypropertygetsize.md)
- [RegistryPropertyIterate](1573092-registrypropertyiterate.md)
- [RegistryPropertyIterateCreate](1573069-registrypropertyiteratecreate.md)
- [RegistryPropertyIterateDispose](1573062-registrypropertyiteratedispose.md)
- [RegistryPropertySet](1573129-registrypropertyset.md)
