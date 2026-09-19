> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1573153-registryentryidcopy

# RegistryEntryIDCopy

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.6+

## Declaration

```objectivec
OSStatus RegistryEntryIDCopy(const RegEntryID *entryID, RegEntryID *to);
```

## See Also

### Entry IDs

- [RegistryEntryIDInit](1573061-registryentryidinit.md)
- [RegistryEntryIDCompare](1573064-registryentryidcompare.md)
- [RegistryEntryIDDispose](1573067-registryentryiddispose.md)
