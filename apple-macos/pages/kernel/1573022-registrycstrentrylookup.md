> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1573022-registrycstrentrylookup

# RegistryCStrEntryLookup

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.6+

## Declaration

```objectivec
OSStatus RegistryCStrEntryLookup(const RegEntryID *parentEntry, const RegCStrPathName *path, RegEntryID *newEntry);
```

## See Also

### C String Utilities

- [RegistryCStrEntryToName](1573086-registrycstrentrytoname.md)
