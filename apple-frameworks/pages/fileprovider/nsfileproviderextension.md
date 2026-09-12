> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderextension](https://developer.apple.com/documentation/fileprovider/nsfileproviderextension)

# NSFileProviderExtension (Swift)

**Framework:** File Provider  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

The principal class for the nonreplicated File Provider extension.

## Declaration

```swift
class NSFileProviderExtension
```

<a id="overview"></a>

## Overview

To create a nonreplicated File Provider extension, start by creating a subclass of the [NSFileProviderExtension](nsfileproviderextension.md) class. When implementing your [NSFileProviderExtension](nsfileproviderextension.md) subclass, remember:

- Override all of the extension’s methods (except the deprecated methods), even if your implementation is only an empty method.
- Use your method implementations to provide access to the documents and folders managed by your file provider.
- Don’t call `super` in your method implementations.

Don’t use the [NSFileProviderExtension](nsfileproviderextension.md) class in macOS. Instead, create an [NSObject](../objectivec/nsobject-swift.class.md) subclass that adopts the [NSFileProviderReplicatedExtension](nsfileproviderreplicatedextension.md) and [NSFileProviderEnumerating](nsfileproviderenumerating.md) protocols. For more information, see [Replicated File Provider extension](replicated-file-provider-extension.md).

## Topics

### Working with items and persistent identifiers

- [persistentIdentifierForItem(at:)](nsfileproviderextension/persistentidentifierforitem%28at_%29.md): Returns a unique identifier for the given URL.
- [urlForItem(withPersistentIdentifier:)](nsfileproviderextension/urlforitem%28withpersistentidentifier_%29.md): Returns the URL for a given persistent identifier.
- [item(for:)](nsfileproviderextension/item%28for_%29.md): Returns a description of the item associated with the persistent identifier.
- [enumerator(for:)](nsfileproviderextension/enumerator%28for_%29.md): Returns an enumerator for the specified item.
- [NSFileProviderItemIdentifier](nsfileprovideritemidentifier.md): A unique identifier for an item managed by the File Provider extension.

### Managing shared files

- [itemChanged(at:)](nsfileproviderextension/itemchanged%28at_%29.md): Tells the File Provider extension that a document has changed.
- [providePlaceholder(at:completionHandler:)](nsfileproviderextension/provideplaceholder%28at_completionhandler_%29.md): Triggers the creation of a placeholder for the given URL.
- [startProvidingItem(at:completionHandler:)](nsfileproviderextension/startprovidingitem%28at_completionhandler_%29.md): Provides an actual file on disk for a placeholder.
- [stopProvidingItem(at:)](nsfileproviderextension/stopprovidingitem%28at_%29.md): Tells the File Provider extension that a given document is no longer being accessed.

### Handling actions

- [Providing support for user-driven actions](providing-support-for-user-driven-actions.md): Override methods to handle user-initiated actions.
- [createDirectory(withName:inParentItemIdentifier:completionHandler:)](nsfileproviderextension/createdirectory%28withname_inparentitemidentifier_completionhandler_%29.md): Creates a directory with the given name inside the given parent directory.
- [deleteItem(withIdentifier:completionHandler:)](nsfileproviderextension/deleteitem%28withidentifier_completionhandler_%29.md): Permanently deletes an item from the trash.
- [importDocument(at:toParentItemIdentifier:completionHandler:)](nsfileproviderextension/importdocument%28at_toparentitemidentifier_completionhandler_%29.md): Imports a file or package into the given parent directory.
- [renameItem(withIdentifier:toName:completionHandler:)](nsfileproviderextension/renameitem%28withidentifier_toname_completionhandler_%29.md): Renames a document or directory.
- [reparentItem(withIdentifier:toParentItemWithIdentifier:newName:completionHandler:)](nsfileproviderextension/reparentitem%28withidentifier_toparentitemwithidentifier_newname_completionhandler_%29.md): Moves the specified item into the given parent directory.
- [setFavoriteRank(\_:forItemIdentifier:completionHandler:)](nsfileproviderextension/setfavoriterank%28__foritemidentifier_completionhandler_%29.md): Marks a directory as a favorite and sets its relative order in the Favorites list.
- [setLastUsedDate(\_:forItemIdentifier:completionHandler:)](nsfileproviderextension/setlastuseddate%28__foritemidentifier_completionhandler_%29.md): Marks an item as recently used and sets its relative order in the Recents list.
- [setTagData(\_:forItemIdentifier:completionHandler:)](nsfileproviderextension/settagdata%28__foritemidentifier_completionhandler_%29.md): Tags an item.
- [trashItem(withIdentifier:completionHandler:)](nsfileproviderextension/trashitem%28withidentifier_completionhandler_%29.md): Moves an item into the trash.
- [untrashItem(withIdentifier:toParentItemIdentifier:completionHandler:)](nsfileproviderextension/untrashitem%28withidentifier_toparentitemidentifier_completionhandler_%29.md): Moves an item out of the trash.

### Managing domains

- [domain](nsfileproviderextension/domain.md): The domain managed by this file provider object.

### Accessing thumbnails

- [fetchThumbnails(for:requestedSize:perThumbnailCompletionHandler:completionHandler:)](nsfileproviderextension/fetchthumbnails%28for_requestedsize_perthumbnailcompletionhandler_completionhandler_%29.md): Fetches the thumbnails for items that have been enumerated by the file provider.

### Working with services

- [supportedServiceSources(for:)](nsfileproviderextension/supportedservicesources%28for_%29.md): Return an array of service sources that let the host app perform actions associated with the specified item.
- [NSFileProviderServiceSource](nsfileproviderservicesource.md): A service that provides a custom communication channel between the host app and the File Provider extension.

### Managing placeholders

These methods have been deprecated and moved to the [NSFileProviderManager](nsfileprovidermanager.md) class.

- [placeholderURL(for:)](nsfileproviderextension/placeholderurl%28for_%29.md): Deprecated. Returns a placeholder URL for a given document URL.
- [writePlaceholder(at:withMetadata:)](nsfileproviderextension/writeplaceholder%28at_withmetadata_%29.md): Deprecated. Writes a document placeholder with the provided metadata.

### Accessing the document storage

These methods have been deprecated and moved to the [NSFileProviderManager](nsfileprovidermanager.md) class.

- [documentStorageURL](nsfileproviderextension/documentstorageurl.md): Deprecated. The root URL for all shared documents.
- [providerIdentifier](nsfileproviderextension/provideridentifier.md): Deprecated. A purpose identifier for coordinated reads and writes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Nonreplicated extension

- [Content and Change Tracking](content-and-change-tracking.md): Create enumerators to specify your file provider’s content, and track changes to that content.

# NSFileProviderExtension (Objective-C)

**Framework:** File Provider  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 1.0+

The principal class for the nonreplicated File Provider extension.

## Declaration

```objectivec
@interface NSFileProviderExtension : NSObject
```

<a id="overview"></a>

## Overview

To create a nonreplicated File Provider extension, start by creating a subclass of the [NSFileProviderExtension](nsfileproviderextension.md) class. When implementing your [NSFileProviderExtension](nsfileproviderextension.md) subclass, remember:

- Override all of the extension’s methods (except the deprecated methods), even if your implementation is only an empty method.
- Use your method implementations to provide access to the documents and folders managed by your file provider.
- Don’t call `super` in your method implementations.

Don’t use the [NSFileProviderExtension](nsfileproviderextension.md) class in macOS. Instead, create an [NSObject](../objectivec/nsobject-swift.class.md) subclass that adopts the [NSFileProviderReplicatedExtension](nsfileproviderreplicatedextension.md) and [NSFileProviderEnumerating](nsfileproviderenumerating.md) protocols. For more information, see [Replicated File Provider extension](replicated-file-provider-extension.md).

## Topics

### Working with items and persistent identifiers

- [persistentIdentifierForItemAtURL:](nsfileproviderextension/persistentidentifierforitem%28at_%29.md): Returns a unique identifier for the given URL.
- [URLForItemWithPersistentIdentifier:](nsfileproviderextension/urlforitem%28withpersistentidentifier_%29.md): Returns the URL for a given persistent identifier.
- [itemForIdentifier:error:](nsfileproviderextension/item%28for_%29.md): Returns a description of the item associated with the persistent identifier.
- [enumeratorForContainerItemIdentifier:error:](nsfileproviderextension/enumerator%28for_%29.md): Returns an enumerator for the specified item.
- [NSFileProviderItemIdentifier](nsfileprovideritemidentifier.md): A unique identifier for an item managed by the File Provider extension.

### Managing shared files

- [itemChangedAtURL:](nsfileproviderextension/itemchanged%28at_%29.md): Tells the File Provider extension that a document has changed.
- [providePlaceholderAtURL:completionHandler:](nsfileproviderextension/provideplaceholder%28at_completionhandler_%29.md): Triggers the creation of a placeholder for the given URL.
- [startProvidingItemAtURL:completionHandler:](nsfileproviderextension/startprovidingitem%28at_completionhandler_%29.md): Provides an actual file on disk for a placeholder.
- [stopProvidingItemAtURL:](nsfileproviderextension/stopprovidingitem%28at_%29.md): Tells the File Provider extension that a given document is no longer being accessed.

### Handling actions

- [Providing support for user-driven actions](providing-support-for-user-driven-actions.md): Override methods to handle user-initiated actions.
- [createDirectoryWithName:inParentItemIdentifier:completionHandler:](nsfileproviderextension/createdirectory%28withname_inparentitemidentifier_completionhandler_%29.md): Creates a directory with the given name inside the given parent directory.
- [deleteItemWithIdentifier:completionHandler:](nsfileproviderextension/deleteitem%28withidentifier_completionhandler_%29.md): Permanently deletes an item from the trash.
- [importDocumentAtURL:toParentItemIdentifier:completionHandler:](nsfileproviderextension/importdocument%28at_toparentitemidentifier_completionhandler_%29.md): Imports a file or package into the given parent directory.
- [renameItemWithIdentifier:toName:completionHandler:](nsfileproviderextension/renameitem%28withidentifier_toname_completionhandler_%29.md): Renames a document or directory.
- [reparentItemWithIdentifier:toParentItemWithIdentifier:newName:completionHandler:](nsfileproviderextension/reparentitem%28withidentifier_toparentitemwithidentifier_newname_completionhandler_%29.md): Moves the specified item into the given parent directory.
- [setFavoriteRank:forItemIdentifier:completionHandler:](nsfileproviderextension/setfavoriterank%28__foritemidentifier_completionhandler_%29.md): Marks a directory as a favorite and sets its relative order in the Favorites list.
- [setLastUsedDate:forItemIdentifier:completionHandler:](nsfileproviderextension/setlastuseddate%28__foritemidentifier_completionhandler_%29.md): Marks an item as recently used and sets its relative order in the Recents list.
- [setTagData:forItemIdentifier:completionHandler:](nsfileproviderextension/settagdata%28__foritemidentifier_completionhandler_%29.md): Tags an item.
- [trashItemWithIdentifier:completionHandler:](nsfileproviderextension/trashitem%28withidentifier_completionhandler_%29.md): Moves an item into the trash.
- [untrashItemWithIdentifier:toParentItemIdentifier:completionHandler:](nsfileproviderextension/untrashitem%28withidentifier_toparentitemidentifier_completionhandler_%29.md): Moves an item out of the trash.

### Managing domains

- [domain](nsfileproviderextension/domain.md): The domain managed by this file provider object.

### Accessing thumbnails

- [fetchThumbnailsForItemIdentifiers:requestedSize:perThumbnailCompletionHandler:completionHandler:](nsfileproviderextension/fetchthumbnails%28for_requestedsize_perthumbnailcompletionhandler_completionhandler_%29.md): Fetches the thumbnails for items that have been enumerated by the file provider.

### Working with services

- [supportedServiceSourcesForItemIdentifier:error:](nsfileproviderextension/supportedservicesources%28for_%29.md): Return an array of service sources that let the host app perform actions associated with the specified item.
- [NSFileProviderServiceSource](nsfileproviderservicesource.md): A service that provides a custom communication channel between the host app and the File Provider extension.

### Managing placeholders

These methods have been deprecated and moved to the [NSFileProviderManager](nsfileprovidermanager.md) class.

- [placeholderURLForURL:](nsfileproviderextension/placeholderurl%28for_%29.md): Deprecated. Returns a placeholder URL for a given document URL.
- [writePlaceholderAtURL:withMetadata:error:](nsfileproviderextension/writeplaceholder%28at_withmetadata_%29.md): Deprecated. Writes a document placeholder with the provided metadata.

### Accessing the document storage

These methods have been deprecated and moved to the [NSFileProviderManager](nsfileprovidermanager.md) class.

- [documentStorageURL](nsfileproviderextension/documentstorageurl.md): Deprecated. The root URL for all shared documents.
- [providerIdentifier](nsfileproviderextension/provideridentifier.md): Deprecated. A purpose identifier for coordinated reads and writes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Nonreplicated extension

- [Content and Change Tracking](content-and-change-tracking.md): Create enumerators to specify your file provider’s content, and track changes to that content.
