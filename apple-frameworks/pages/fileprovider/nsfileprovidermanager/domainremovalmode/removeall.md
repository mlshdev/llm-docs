> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/domainremovalmode/removeall

# NSFileProviderManager.DomainRemovalMode.removeAll (Swift)

**Framework:** File Provider  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

Deletes all items in the domain.

## Declaration

```swift
case removeAll
```

## See Also

### Options

- [NSFileProviderManager.DomainRemovalMode.preserveDirtyUserData](preservedirtyuserdata.md): Deletes the domain but keeps any items with unsynced, local changes.
- [NSFileProviderManager.DomainRemovalMode.preserveDownloadedUserData](preservedownloadeduserdata.md): Deletes the domain, but keeps the downloaded user data.

# NSFileProviderDomainRemovalModeRemoveAll (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 12.0+ · visionOS 1.0+

Deletes all items in the domain.

## Declaration

```objectivec
NSFileProviderDomainRemovalModeRemoveAll
```

## See Also

### Options

- [NSFileProviderDomainRemovalModePreserveDirtyUserData](preservedirtyuserdata.md): Deletes the domain but keeps any items with unsynced, local changes.
- [NSFileProviderDomainRemovalModePreserveDownloadedUserData](preservedownloadeduserdata.md): Deletes the domain, but keeps the downloaded user data.
