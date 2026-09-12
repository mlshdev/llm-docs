> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1573113-registryentryiterate](https://developer.apple.com/documentation/kernel/1573113-registryentryiterate)

# RegistryEntryIterate

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.6+

## Declaration

```objectivec
OSStatus RegistryEntryIterate(RegEntryIter *cookie, RegEntryIterationOp relationship, RegEntryID *foundEntry, Boolean *done);
```

## See Also

### Entry Management

- [RegistryEntryIterateCreate](1573138-registryentryiteratecreate.md)
- [RegistryEntryIterateDispose](1573037-registryentryiteratedispose.md)
