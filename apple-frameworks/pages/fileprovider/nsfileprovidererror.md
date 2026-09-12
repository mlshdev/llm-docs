> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidererror](https://developer.apple.com/documentation/fileprovider/nsfileprovidererror)

# NSFileProviderError

**Framework:** File Provider  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

A structure that contains information about File Provider extension errors.

## Declaration

```swift
struct NSFileProviderError
```

## Topics

### Accessing error codes

- [NSFileProviderError.Code](nsfileprovidererror/code.md): The error codes for the File Provider extension.
- [filenameCollision](nsfileprovidererror/filenamecollision.md): An error indicating that an item with the same name already exists in the same directory.
- [insufficientQuota](nsfileprovidererror/insufficientquota.md): An error indicating that the File Provider extension can’t upload the item because it would push the account over its quota.
- [noSuchItem](nsfileprovidererror/nosuchitem.md): An error indicating that the specified item doesn’t exist.
- [notAuthenticated](nsfileprovidererror/notauthenticated.md): An error indicating that you can’t verify the user’s credentials.
- [pageExpired](nsfileprovidererror/pageexpired.md): An error indicating that the page is too old, and that the system must restart the enumeration operation from the beginning.
- [serverUnreachable](nsfileprovidererror/serverunreachable.md): An error indicating that the File Provider extension can’t reach the remote server.
- [syncAnchorExpired](nsfileprovidererror/syncanchorexpired.md): An error indicating that the sync anchor is too old, and that the system must restart the sync operation from the beginning.
- [directoryNotEmpty](nsfileprovidererror/directorynotempty.md): An error indicating an attempt to nonrecursively delete a directory that isn’t empty.
- [providerNotFound](nsfileprovidererror/providernotfound.md): An error indicating that the File Provider manager can’t find the specified provider.
- [providerTranslocated](nsfileprovidererror/providertranslocated.md): An error indicating the File Provider extension is in a disabled state due to Gatekeeper’s restrictions for apps from outside the App Store.
- [olderExtensionVersionRunning](nsfileprovidererror/olderextensionversionrunning.md): An error indicating that the registered provider in the system is an older version than the one the app uses.
- [newerExtensionVersionFound](nsfileprovidererror/newerextensionversionfound.md): An error indicating that the registered provider in the system is a newer version than the one the app uses.
- [nonEvictable](nsfileprovidererror/nonevictable.md): An error indicating that the File Provider extension can’t evict an item.
- [nonEvictableChildren](nsfileprovidererror/nonevictablechildren.md): An error indicating that the File Provider extension can’t evict a directory because it contains nonevictable items.
- [unsyncedEdits](nsfileprovidererror/unsyncededits.md): An error indicating that the item contains unsynced changes.
- [cannotSynchronize](nsfileprovidererror/cannotsynchronize.md): An error indicating a failed sync attempt.
- [deletionRejected](nsfileprovidererror/deletionrejected.md): An error indicating a failed deletion action.
- [versionNoLongerAvailable](nsfileprovidererror/versionnolongeravailable.md): An error that indicates whether the specified version is no longer available.
- [domainDisabled](nsfileprovidererror/domaindisabled.md)
- [excludedFromSync](nsfileprovidererror/excludedfromsync.md)
- [applicationExtensionNotFound](nsfileprovidererror/applicationextensionnotfound.md): An error indicating that there isn’t an app extension within the app bundle.
- [providerDomainNotFound](nsfileprovidererror/providerdomainnotfound.md): An error indicating that there isn’t a registered domain for the corresponding identifier.
- [providerDomainTemporarilyUnavailable](nsfileprovidererror/providerdomaintemporarilyunavailable.md): An error indicating that the system is unable to service requests for the domain temporarily, and you can try again later.

### Type Properties

- [errorDomain](nsfileprovidererror/errordomain.md)
- [localVersionConflictingWithServer](nsfileprovidererror/localversionconflictingwithserver.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [NSFileProviderError.Code](nsfileprovidererror/code.md): The error codes for the File Provider extension.
- [NSFileProviderErrorDomain](nsfileprovidererrordomain.md): The error domain for the File Provider extension.
- [NSFileProviderErrorItemKey](nsfileprovidererroritemkey.md): The key for accessing information about sync-related errors.
- [NSFileProviderErrorNonExistentItemIdentifierKey](nsfileprovidererrornonexistentitemidentifierkey.md): The key for accessing the specified item’s identifier when the item doesn’t exist.
- [NSFileProviderErrorCollidingItemKey](nsfileprovidererrorcollidingitemkey.md): Deprecated. The key for accessing the existing item from a filename collision error’s user info dictionary.
