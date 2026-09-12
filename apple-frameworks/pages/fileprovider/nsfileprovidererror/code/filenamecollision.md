> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidererror/code/filenamecollision](https://developer.apple.com/documentation/fileprovider/nsfileprovidererror/code/filenamecollision)

# NSFileProviderError.Code.filenameCollision (Swift)

**Framework:** File Provider  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

An error indicating that an item with the same name already exists in the same directory.

## Declaration

```swift
case filenameCollision
```

## Mentioned In

- [Handling Errors with User-Driven Actions](../../handling-errors-with-user-driven-actions.md)

<a id="Discussion"></a>

## Discussion

Use the [fileProviderErrorForCollision(with:)](../../../foundation/nserror/fileprovidererrorforcollision%28with_%29.md) method to create properly formatted [filenameCollision](../filenamecollision.md) errors.

You have two options for resolving file name collisions:

- Your file provider extension can return this error. In this case the system renames the new item.
- You can rename the new item yourself. This gives you complete control over the process.

## See Also

### Error codes

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
- [NSFileProviderError.Code.cannotSynchronize](cannotsynchronize.md): An error indicating a failed sync attempt.

# NSFileProviderErrorFilenameCollision (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

An error indicating that an item with the same name already exists in the same directory.

## Declaration

```objectivec
NSFileProviderErrorFilenameCollision
```

## Mentioned In

- [Handling Errors with User-Driven Actions](../../handling-errors-with-user-driven-actions.md)

<a id="Discussion"></a>

## Discussion

Use the [fileProviderErrorForCollisionWithItem:](../../../foundation/nserror/fileprovidererrorforcollision%28with_%29.md) method to create properly formatted [filenameCollision](../filenamecollision.md) errors.

You have two options for resolving file name collisions:

- Your file provider extension can return this error. In this case the system renames the new item.
- You can rename the new item yourself. This gives you complete control over the process.

## See Also

### Error codes

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
- [NSFileProviderErrorDeletionRejected](deletionrejected.md): An error indicating a failed deletion action.
