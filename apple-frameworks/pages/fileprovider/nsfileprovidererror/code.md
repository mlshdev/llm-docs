> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidererror/code](https://developer.apple.com/documentation/fileprovider/nsfileprovidererror/code)

# NSFileProviderError.Code (Swift)

**Framework:** File Provider  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

The error codes for the File Provider extension.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [NSFileProviderError.Code.filenameCollision](code/filenamecollision.md): An error indicating that an item with the same name already exists in the same directory.
- [NSFileProviderError.Code.insufficientQuota](code/insufficientquota.md): An error indicating that the File Provider extension can’t upload the item because it would push the account over its quota.
- [NSFileProviderError.Code.noSuchItem](code/nosuchitem.md): An error indicating that the specified item doesn’t exist.
- [NSFileProviderError.Code.notAuthenticated](code/notauthenticated.md): An error indicating that you can’t verify the user’s credentials.
- [NSFileProviderError.Code.serverUnreachable](code/serverunreachable.md): An error indicating that the File Provider extension can’t reach the remote server.
- [NSFileProviderError.Code.syncAnchorExpired](code/syncanchorexpired.md): An error indicating that the sync anchor is too old, and that the system must restart the sync operation from the beginning.
- [pageExpired](code/pageexpired.md): An error indicating that the page is too old, and that the system must restart the enumeration operation from the beginning.
- [NSFileProviderError.Code.directoryNotEmpty](code/directorynotempty.md): An error indicating an attempt to nonrecursively delete a directory that isn’t empty.
- [NSFileProviderError.Code.providerNotFound](code/providernotfound.md): An error indicating that the File Provider manager can’t find the specified provider.
- [NSFileProviderError.Code.providerTranslocated](code/providertranslocated.md): An error indicating the File Provider extension is in a disabled state due to Gatekeeper’s restrictions for apps from outside the App Store.
- [NSFileProviderError.Code.olderExtensionVersionRunning](code/olderextensionversionrunning.md): An error indicating that the registered provider in the system is an older version than the one the app uses.
- [NSFileProviderError.Code.newerExtensionVersionFound](code/newerextensionversionfound.md): An error indicating that the registered provider in the system is a newer version than the one the app uses.
- [NSFileProviderError.Code.nonEvictable](code/nonevictable.md): An error indicating that the File Provider extension can’t evict an item.
- [NSFileProviderError.Code.nonEvictableChildren](code/nonevictablechildren.md): An error indicating that the File Provider extension can’t evict a directory because it contains nonevictable items.
- [NSFileProviderError.Code.unsyncedEdits](code/unsyncededits.md): An error indicating that the item contains unsynced changes.
- [NSFileProviderError.Code.cannotSynchronize](code/cannotsynchronize.md): An error indicating a failed sync attempt.
- [NSFileProviderError.Code.deletionRejected](code/deletionrejected.md): An error indicating a failed deletion action.
- [NSFileProviderError.Code.versionNoLongerAvailable](code/versionnolongeravailable.md): An error indicating that the specified version is no longer available.
- [NSFileProviderError.Code.domainDisabled](code/domaindisabled.md)
- [NSFileProviderError.Code.excludedFromSync](code/excludedfromsync.md)
- [NSFileProviderError.Code.applicationExtensionNotFound](code/applicationextensionnotfound.md): An error indicating that there isn’t an app extension within the app bundle.
- [NSFileProviderError.Code.providerDomainNotFound](code/providerdomainnotfound.md): An error indicating that there isn’t a registered domain for the corresponding identifier.
- [NSFileProviderError.Code.providerDomainTemporarilyUnavailable](code/providerdomaintemporarilyunavailable.md): An error indicating that the system is unable to service requests for the domain temporarily, and you can try again later.

### Enumeration Cases

- [NSFileProviderError.Code.localVersionConflictingWithServer](code/localversionconflictingwithserver.md): Returned by createItemBasedOnTemplate or modifyItem if the provider does not wish to sync the item.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [NSFileProviderError](../nsfileprovidererror.md): A structure that contains information about File Provider extension errors.
- [NSFileProviderErrorDomain](../nsfileprovidererrordomain.md): The error domain for the File Provider extension.
- [NSFileProviderErrorItemKey](../nsfileprovidererroritemkey.md): The key for accessing information about sync-related errors.
- [NSFileProviderErrorNonExistentItemIdentifierKey](../nsfileprovidererrornonexistentitemidentifierkey.md): The key for accessing the specified item’s identifier when the item doesn’t exist.
- [NSFileProviderErrorCollidingItemKey](../nsfileprovidererrorcollidingitemkey.md): Deprecated. The key for accessing the existing item from a filename collision error’s user info dictionary.

# NSFileProviderErrorCode (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

The error codes for the File Provider extension.

## Declaration

```objectivec
enum NSFileProviderErrorCode : NSInteger;
```

## Topics

### Error codes

- [NSFileProviderErrorFilenameCollision](code/filenamecollision.md): An error indicating that an item with the same name already exists in the same directory.
- [NSFileProviderErrorInsufficientQuota](code/insufficientquota.md): An error indicating that the File Provider extension can’t upload the item because it would push the account over its quota.
- [NSFileProviderErrorNoSuchItem](code/nosuchitem.md): An error indicating that the specified item doesn’t exist.
- [NSFileProviderErrorNotAuthenticated](code/notauthenticated.md): An error indicating that you can’t verify the user’s credentials.
- [NSFileProviderErrorServerUnreachable](code/serverunreachable.md): An error indicating that the File Provider extension can’t reach the remote server.
- [NSFileProviderErrorSyncAnchorExpired](code/syncanchorexpired.md): An error indicating that the sync anchor is too old, and that the system must restart the sync operation from the beginning.
- [NSFileProviderErrorDirectoryNotEmpty](code/directorynotempty.md): An error indicating an attempt to nonrecursively delete a directory that isn’t empty.
- [NSFileProviderErrorProviderNotFound](code/providernotfound.md): An error indicating that the File Provider manager can’t find the specified provider.
- [NSFileProviderErrorProviderTranslocated](code/providertranslocated.md): An error indicating the File Provider extension is in a disabled state due to Gatekeeper’s restrictions for apps from outside the App Store.
- [NSFileProviderErrorOlderExtensionVersionRunning](code/olderextensionversionrunning.md): An error indicating that the registered provider in the system is an older version than the one the app uses.
- [NSFileProviderErrorNewerExtensionVersionFound](code/newerextensionversionfound.md): An error indicating that the registered provider in the system is a newer version than the one the app uses.
- [NSFileProviderErrorNonEvictable](code/nonevictable.md): An error indicating that the File Provider extension can’t evict an item.
- [NSFileProviderErrorNonEvictableChildren](code/nonevictablechildren.md): An error indicating that the File Provider extension can’t evict a directory because it contains nonevictable items.
- [NSFileProviderErrorUnsyncedEdits](code/unsyncededits.md): An error indicating that the item contains unsynced changes.
- [NSFileProviderErrorCannotSynchronize](code/cannotsynchronize.md): An error indicating a failed sync attempt.
- [NSFileProviderErrorDeletionRejected](code/deletionrejected.md): An error indicating a failed deletion action.
- [NSFileProviderErrorVersionNoLongerAvailable](code/versionnolongeravailable.md): An error indicating that the specified version is no longer available.
- [NSFileProviderErrorDomainDisabled](code/domaindisabled.md)
- [NSFileProviderErrorExcludedFromSync](code/excludedfromsync.md)
- [NSFileProviderErrorApplicationExtensionNotFound](code/applicationextensionnotfound.md): An error indicating that there isn’t an app extension within the app bundle.
- [NSFileProviderErrorProviderDomainNotFound](code/providerdomainnotfound.md): An error indicating that there isn’t a registered domain for the corresponding identifier.
- [NSFileProviderErrorProviderDomainTemporarilyUnavailable](code/providerdomaintemporarilyunavailable.md): An error indicating that the system is unable to service requests for the domain temporarily, and you can try again later.

### Enumeration Cases

- [NSFileProviderErrorLocalVersionConflictingWithServer](code/localversionconflictingwithserver.md): Returned by createItemBasedOnTemplate or modifyItem if the provider does not wish to sync the item.
- [NSFileProviderErrorPageExpired](../nsfileprovidererrorcode/nsfileprovidererrorpageexpired.md): An error indicating that the page is too old, and that the system must restart the enumeration operation from the beginning.

## See Also

### Errors

- [NSFileProviderErrorDomain](../nsfileprovidererrordomain.md): The error domain for the File Provider extension.
- [NSFileProviderErrorItemKey](../nsfileprovidererroritemkey.md): The key for accessing information about sync-related errors.
- [NSFileProviderErrorNonExistentItemIdentifierKey](../nsfileprovidererrornonexistentitemidentifierkey.md): The key for accessing the specified item’s identifier when the item doesn’t exist.
- [NSFileProviderErrorCollidingItemKey](../nsfileprovidererrorcollidingitemkey.md): Deprecated. The key for accessing the existing item from a filename collision error’s user info dictionary.
