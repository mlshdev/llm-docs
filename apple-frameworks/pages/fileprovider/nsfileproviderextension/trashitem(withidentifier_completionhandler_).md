> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderextension/trashitem(withidentifier:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderextension/trashitem(withidentifier:completionhandler:))

# trashItem(withIdentifier:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

Moves an item into the trash.

## Declaration

```swift
func trashItem(withIdentifier itemIdentifier: NSFileProviderItemIdentifier, completionHandler: @escaping @Sendable (NSFileProviderItem?, (any Error)?) -> Void)
```

```swift
func trashItem(withIdentifier itemIdentifier: NSFileProviderItemIdentifier) async throws -> NSFileProviderItem
```

## Parameters

- `itemIdentifier`: The item’s persistent identifier.
- `completionHandler`: A block that takes the following parameters:

  - **`trashedItem`**: A file provider item that represents the changed item, or `nil` if an error occurred.
  - **`error`**: An error object. If an error occurs, pass in an object that describes the error; otherwise, set it to `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func trashItem(withIdentifier itemIdentifier: NSFileProviderItemIdentifier) async throws -> NSFileProviderItem
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method is called when the user moves a document or directory into the trash. Override this method to make any necessary local changes to move the item to the trash, including updates to the working set. Your implementation should return immediately. Call the completion handler before performing any network activity or other long-running tasks. Defer these tasks to the background. The `trashedItem` instance that you pass to the completion handler should match the item’s old file provider item, with only one change: set the item’s [isTrashed](../nsfileprovideritemprotocol/istrashed.md) property to [true](https://developer.apple.com/documentation/swift/true).

Always include trashed items in your File Provider extension’s working set. Trashed items should be stored locally so that their content is available to offline users. However, if the trashed item is a directory, remove all of its children from the working set. If a shared document is trashed, stop sharing the document while it is trashed.

Be sure to record the item’s parent identifier, so that you can restore the item to its proper location in the [untrashItem(withIdentifier:toParentItemIdentifier:completionHandler:)](untrashitem%28withidentifier_toparentitemidentifier_completionhandler_%29.md) method. You can store this identifier in the `trashedItem` object’s [parentItemIdentifier](../nsfileprovideritemprotocol/parentitemidentifier.md) property.

The user’s ability to trash an item is controlled by the item’s [allowsTrashing](../nsfileprovideritemcapabilities/allowstrashing.md) capability.

## See Also

### Handling actions

- [Providing support for user-driven actions](../providing-support-for-user-driven-actions.md): Override methods to handle user-initiated actions.
- [createDirectory(withName:inParentItemIdentifier:completionHandler:)](createdirectory%28withname_inparentitemidentifier_completionhandler_%29.md): Creates a directory with the given name inside the given parent directory.
- [deleteItem(withIdentifier:completionHandler:)](deleteitem%28withidentifier_completionhandler_%29.md): Permanently deletes an item from the trash.
- [importDocument(at:toParentItemIdentifier:completionHandler:)](importdocument%28at_toparentitemidentifier_completionhandler_%29.md): Imports a file or package into the given parent directory.
- [renameItem(withIdentifier:toName:completionHandler:)](renameitem%28withidentifier_toname_completionhandler_%29.md): Renames a document or directory.
- [reparentItem(withIdentifier:toParentItemWithIdentifier:newName:completionHandler:)](reparentitem%28withidentifier_toparentitemwithidentifier_newname_completionhandler_%29.md): Moves the specified item into the given parent directory.
- [setFavoriteRank(\_:forItemIdentifier:completionHandler:)](setfavoriterank%28__foritemidentifier_completionhandler_%29.md): Marks a directory as a favorite and sets its relative order in the Favorites list.
- [setLastUsedDate(\_:forItemIdentifier:completionHandler:)](setlastuseddate%28__foritemidentifier_completionhandler_%29.md): Marks an item as recently used and sets its relative order in the Recents list.
- [setTagData(\_:forItemIdentifier:completionHandler:)](settagdata%28__foritemidentifier_completionhandler_%29.md): Tags an item.
- [untrashItem(withIdentifier:toParentItemIdentifier:completionHandler:)](untrashitem%28withidentifier_toparentitemidentifier_completionhandler_%29.md): Moves an item out of the trash.

# trashItemWithIdentifier:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+

Moves an item into the trash.

## Declaration

```objectivec
- (void) trashItemWithIdentifier:(NSFileProviderItemIdentifier) itemIdentifier completionHandler:(void (^)(NSFileProviderItem trashedItem, NSError *error)) completionHandler;
```

## Parameters

- `itemIdentifier`: The item’s persistent identifier.
- `completionHandler`: A block that takes the following parameters:

  - **`trashedItem`**: A file provider item that represents the changed item, or `nil` if an error occurred.
  - **`error`**: An error object. If an error occurs, pass in an object that describes the error; otherwise, set it to `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func trashItem(withIdentifier itemIdentifier: NSFileProviderItemIdentifier) async throws -> NSFileProviderItem
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method is called when the user moves a document or directory into the trash. Override this method to make any necessary local changes to move the item to the trash, including updates to the working set. Your implementation should return immediately. Call the completion handler before performing any network activity or other long-running tasks. Defer these tasks to the background. The `trashedItem` instance that you pass to the completion handler should match the item’s old file provider item, with only one change: set the item’s [trashed](../nsfileprovideritemprotocol/istrashed.md) property to [true](https://developer.apple.com/documentation/swift/true).

Always include trashed items in your File Provider extension’s working set. Trashed items should be stored locally so that their content is available to offline users. However, if the trashed item is a directory, remove all of its children from the working set. If a shared document is trashed, stop sharing the document while it is trashed.

Be sure to record the item’s parent identifier, so that you can restore the item to its proper location in the [untrashItemWithIdentifier:toParentItemIdentifier:completionHandler:](untrashitem%28withidentifier_toparentitemidentifier_completionhandler_%29.md) method. You can store this identifier in the `trashedItem` object’s [parentItemIdentifier](../nsfileprovideritemprotocol/parentitemidentifier.md) property.

The user’s ability to trash an item is controlled by the item’s [NSFileProviderItemCapabilitiesAllowsTrashing](../nsfileprovideritemcapabilities/allowstrashing.md) capability.

## See Also

### Handling actions

- [Providing support for user-driven actions](../providing-support-for-user-driven-actions.md): Override methods to handle user-initiated actions.
- [createDirectoryWithName:inParentItemIdentifier:completionHandler:](createdirectory%28withname_inparentitemidentifier_completionhandler_%29.md): Creates a directory with the given name inside the given parent directory.
- [deleteItemWithIdentifier:completionHandler:](deleteitem%28withidentifier_completionhandler_%29.md): Permanently deletes an item from the trash.
- [importDocumentAtURL:toParentItemIdentifier:completionHandler:](importdocument%28at_toparentitemidentifier_completionhandler_%29.md): Imports a file or package into the given parent directory.
- [renameItemWithIdentifier:toName:completionHandler:](renameitem%28withidentifier_toname_completionhandler_%29.md): Renames a document or directory.
- [reparentItemWithIdentifier:toParentItemWithIdentifier:newName:completionHandler:](reparentitem%28withidentifier_toparentitemwithidentifier_newname_completionhandler_%29.md): Moves the specified item into the given parent directory.
- [setFavoriteRank:forItemIdentifier:completionHandler:](setfavoriterank%28__foritemidentifier_completionhandler_%29.md): Marks a directory as a favorite and sets its relative order in the Favorites list.
- [setLastUsedDate:forItemIdentifier:completionHandler:](setlastuseddate%28__foritemidentifier_completionhandler_%29.md): Marks an item as recently used and sets its relative order in the Recents list.
- [setTagData:forItemIdentifier:completionHandler:](settagdata%28__foritemidentifier_completionhandler_%29.md): Tags an item.
- [untrashItemWithIdentifier:toParentItemIdentifier:completionHandler:](untrashitem%28withidentifier_toparentitemidentifier_completionhandler_%29.md): Moves an item out of the trash.
