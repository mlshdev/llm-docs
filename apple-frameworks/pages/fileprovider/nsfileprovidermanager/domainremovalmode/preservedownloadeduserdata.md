> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/domainremovalmode/preservedownloadeduserdata

# NSFileProviderManager.DomainRemovalMode.preserveDownloadedUserData (Swift)

**Framework:** File Provider  
**Kind:** Case  
**Availability:** macOS 12.0+

Deletes the domain, but keeps the downloaded user data.

## Declaration

```swift
case preserveDownloadedUserData
```

## See Also

### Options

- [NSFileProviderManager.DomainRemovalMode.removeAll](removeall.md): Deletes all items in the domain.
- [NSFileProviderManager.DomainRemovalMode.preserveDirtyUserData](preservedirtyuserdata.md): Deletes the domain but keeps any items with unsynced, local changes.

# NSFileProviderDomainRemovalModePreserveDownloadedUserData (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** macOS 12.0+

Deletes the domain, but keeps the downloaded user data.

## Declaration

```objectivec
NSFileProviderDomainRemovalModePreserveDownloadedUserData
```

## See Also

### Options

- [NSFileProviderDomainRemovalModeRemoveAll](removeall.md): Deletes all items in the domain.
- [NSFileProviderDomainRemovalModePreserveDirtyUserData](preservedirtyuserdata.md): Deletes the domain but keeps any items with unsynced, local changes.
