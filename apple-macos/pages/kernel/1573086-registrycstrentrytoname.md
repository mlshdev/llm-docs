> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1573086-registrycstrentrytoname](https://developer.apple.com/documentation/kernel/1573086-registrycstrentrytoname)

# RegistryCStrEntryToName

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.6+

## Declaration

```objectivec
OSStatus RegistryCStrEntryToName(const RegEntryID *entryID, RegEntryID *parentEntry, RegCStrEntryName *nameComponent, Boolean *done);
```

## See Also

### C String Utilities

- [RegistryCStrEntryLookup](1573022-registrycstrentrylookup.md)
