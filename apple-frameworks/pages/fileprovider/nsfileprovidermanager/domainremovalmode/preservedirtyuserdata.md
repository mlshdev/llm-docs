> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/domainremovalmode/preservedirtyuserdata

# NSFileProviderManager.DomainRemovalMode.preserveDirtyUserData (Swift)

**Framework:** File Provider  
**Kind:** Case  
**Availability:** macOS 12.0+

Deletes the domain but keeps any items with unsynced, local changes.

## Declaration

```swift
case preserveDirtyUserData
```

## See Also

### Options

- [NSFileProviderManager.DomainRemovalMode.removeAll](removeall.md): Deletes all items in the domain.
- [NSFileProviderManager.DomainRemovalMode.preserveDownloadedUserData](preservedownloadeduserdata.md): Deletes the domain, but keeps the downloaded user data.

# NSFileProviderDomainRemovalModePreserveDirtyUserData (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** macOS 12.0+

Deletes the domain but keeps any items with unsynced, local changes.

## Declaration

```objectivec
NSFileProviderDomainRemovalModePreserveDirtyUserData
```

## See Also

### Options

- [NSFileProviderDomainRemovalModeRemoveAll](removeall.md): Deletes all items in the domain.
- [NSFileProviderDomainRemovalModePreserveDownloadedUserData](preservedownloadeduserdata.md): Deletes the domain, but keeps the downloaded user data.
