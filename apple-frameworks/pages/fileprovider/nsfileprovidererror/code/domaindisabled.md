> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidererror/code/domaindisabled](https://developer.apple.com/documentation/fileprovider/nsfileprovidererror/code/domaindisabled)

# NSFileProviderError.Code.domainDisabled (Swift)

**Framework:** File Provider  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

## Declaration

```swift
case domainDisabled
```

## See Also

### Error codes

- [NSFileProviderError.Code.filenameCollision](filenamecollision.md): An error indicating that an item with the same name already exists in the same directory.
- [NSFileProviderError.Code.insufficientQuota](insufficientquota.md): An error indicating that the File Provider extension can’t upload the item because it would push the account over its quota.
- [NSFileProviderError.Code.noSuchItem](nosuchitem.md): An error indicating that the specified item doesn’t exist.
- [NSFileProviderError.Code.notAuthenticated](notauthenticated.md): An error indicating that you can’t verify the user’s credentials.
- [NSFileProviderError.Code.serverUnreachable](serverunreachable.md): An error indicating that the File Provider extension can’t reach the remote server.
- [NSFileProviderError.Code.syncAnchorExpired](syncanchorexpired.md): An error indicating that the sync anchor is too old, and that the system must restart the sync operation from the beginning.
- [pageExpired](pageexpired.md): An error indicating that the page is too old, and that the system must restart the enumeration operation from the beginning.
- [NSFileProviderError.Code.directoryNotEmpty](directorynotempty.md): An error indicating an attempt to nonrecursively delete a directory that isn’t empty.
- [NSFileProviderError.Code.providerNotFound](providernotfound.md): An error indicating that the File Provider manager can’t find the specified provider.
- [NSFileProviderError.Code.providerTranslocated](providertranslocated.md): An error indicating the File Provider extension is in a disabled state due to Gatekeeper’s restrictions for apps from outside the App Store.
- [NSFileProviderError.Code.olderExtensionVersionRunning](olderextensionversionrunning.md): An error indicating that the registered provider in the system is an older version than the one the app uses.
- [NSFileProviderError.Code.newerExtensionVersionFound](newerextensionversionfound.md): An error indicating that the registered provider in the system is a newer version than the one the app uses.
- [NSFileProviderError.Code.nonEvictable](nonevictable.md): An error indicating that the File Provider extension can’t evict an item.
- [NSFileProviderError.Code.nonEvictableChildren](nonevictablechildren.md): An error indicating that the File Provider extension can’t evict a directory because it contains nonevictable items.
- [NSFileProviderError.Code.unsyncedEdits](unsyncededits.md): An error indicating that the item contains unsynced changes.

# NSFileProviderErrorDomainDisabled (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
NSFileProviderErrorDomainDisabled
```

## See Also

### Error codes

- [NSFileProviderErrorFilenameCollision](filenamecollision.md): An error indicating that an item with the same name already exists in the same directory.
- [NSFileProviderErrorInsufficientQuota](insufficientquota.md): An error indicating that the File Provider extension can’t upload the item because it would push the account over its quota.
- [NSFileProviderErrorNoSuchItem](nosuchitem.md): An error indicating that the specified item doesn’t exist.
- [NSFileProviderErrorNotAuthenticated](notauthenticated.md): An error indicating that you can’t verify the user’s credentials.
- [NSFileProviderErrorServerUnreachable](serverunreachable.md): An error indicating that the File Provider extension can’t reach the remote server.
- [NSFileProviderErrorSyncAnchorExpired](syncanchorexpired.md): An error indicating that the sync anchor is too old, and that the system must restart the sync operation from the beginning.
- [NSFileProviderErrorDirectoryNotEmpty](directorynotempty.md): An error indicating an attempt to nonrecursively delete a directory that isn’t empty.
- [NSFileProviderErrorProviderNotFound](providernotfound.md): An error indicating that the File Provider manager can’t find the specified provider.
- [NSFileProviderErrorProviderTranslocated](providertranslocated.md): An error indicating the File Provider extension is in a disabled state due to Gatekeeper’s restrictions for apps from outside the App Store.
- [NSFileProviderErrorOlderExtensionVersionRunning](olderextensionversionrunning.md): An error indicating that the registered provider in the system is an older version than the one the app uses.
- [NSFileProviderErrorNewerExtensionVersionFound](newerextensionversionfound.md): An error indicating that the registered provider in the system is a newer version than the one the app uses.
- [NSFileProviderErrorNonEvictable](nonevictable.md): An error indicating that the File Provider extension can’t evict an item.
- [NSFileProviderErrorNonEvictableChildren](nonevictablechildren.md): An error indicating that the File Provider extension can’t evict a directory because it contains nonevictable items.
- [NSFileProviderErrorUnsyncedEdits](unsyncededits.md): An error indicating that the item contains unsynced changes.
- [NSFileProviderErrorCannotSynchronize](cannotsynchronize.md): An error indicating a failed sync attempt.
