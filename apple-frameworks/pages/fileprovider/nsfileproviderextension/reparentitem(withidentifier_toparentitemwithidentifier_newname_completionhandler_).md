> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderextension/reparentitem(withidentifier:toparentitemwithidentifier:newname:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderextension/reparentitem(withidentifier:toparentitemwithidentifier:newname:completionhandler:))

# reparentItem(withIdentifier:toParentItemWithIdentifier:newName:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

Moves the specified item into the given parent directory.

## Declaration

```swift
func reparentItem(withIdentifier itemIdentifier: NSFileProviderItemIdentifier, toParentItemWithIdentifier parentItemIdentifier: NSFileProviderItemIdentifier, newName: String?, completionHandler: @escaping @Sendable (NSFileProviderItem?, (any Error)?) -> Void)
```

```swift
func reparentItem(withIdentifier itemIdentifier: NSFileProviderItemIdentifier, toParentItemWithIdentifier parentItemIdentifier: NSFileProviderItemIdentifier, newName: String?) async throws -> NSFileProviderItem
```

## Parameters

- `itemIdentifier`: The item’s persistent identifier.
- `parentItemIdentifier`: The persistent identifier for the new parent directory.
- `newName`: The new name of the file or directory, including the file extension.
- `completionHandler`: A block that takes the following parameters:

  - **`reparentedItem`**: A file provider item that represents the reparented item, or `nil` if an error occurred.
  - **`error`**: An error object. If an error occurs, pass in an object that describes the error; otherwise, set it to `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func reparentItem(withIdentifier itemIdentifier: NSFileProviderItemIdentifier, toParentItemWithIdentifier parentItemIdentifier: NSFileProviderItemIdentifier, newName: String?) async throws -> NSFileProviderItem
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method is called when the user moves a document or directory. Override this method to make any necessary local changes to the item and both its old and new parents. Your implementation should return immediately. Call the completion handler before performing any network activity or other long-running tasks. Defer these tasks to the background.

The `reparentedItem` instance that you pass to the completion handler should match the item’s old file provider item, with only one change: set the [parentItemIdentifier](../nsfileprovideritemprotocol/parentitemidentifier.md) property to the value passed to the `parentItemIdentifier` parameter.

The user’s ability to rename an item is controlled by the item’s [allowsRenaming](../nsfileprovideritemcapabilities/allowsrenaming.md) capability.

## See Also

### Handling actions

- [Providing support for user-driven actions](../providing-support-for-user-driven-actions.md): Override methods to handle user-initiated actions.
- [createDirectory(withName:inParentItemIdentifier:completionHandler:)](createdirectory%28withname_inparentitemidentifier_completionhandler_%29.md): Creates a directory with the given name inside the given parent directory.
- [deleteItem(withIdentifier:completionHandler:)](deleteitem%28withidentifier_completionhandler_%29.md): Permanently deletes an item from the trash.
- [importDocument(at:toParentItemIdentifier:completionHandler:)](importdocument%28at_toparentitemidentifier_completionhandler_%29.md): Imports a file or package into the given parent directory.
- [renameItem(withIdentifier:toName:completionHandler:)](renameitem%28withidentifier_toname_completionhandler_%29.md): Renames a document or directory.
- [setFavoriteRank(\_:forItemIdentifier:completionHandler:)](setfavoriterank%28__foritemidentifier_completionhandler_%29.md): Marks a directory as a favorite and sets its relative order in the Favorites list.
- [setLastUsedDate(\_:forItemIdentifier:completionHandler:)](setlastuseddate%28__foritemidentifier_completionhandler_%29.md): Marks an item as recently used and sets its relative order in the Recents list.
- [setTagData(\_:forItemIdentifier:completionHandler:)](settagdata%28__foritemidentifier_completionhandler_%29.md): Tags an item.
- [trashItem(withIdentifier:completionHandler:)](trashitem%28withidentifier_completionhandler_%29.md): Moves an item into the trash.
- [untrashItem(withIdentifier:toParentItemIdentifier:completionHandler:)](untrashitem%28withidentifier_toparentitemidentifier_completionhandler_%29.md): Moves an item out of the trash.

# reparentItemWithIdentifier:toParentItemWithIdentifier:newName:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+

Moves the specified item into the given parent directory.

## Declaration

```objectivec
- (void) reparentItemWithIdentifier:(NSFileProviderItemIdentifier) itemIdentifier toParentItemWithIdentifier:(NSFileProviderItemIdentifier) parentItemIdentifier newName:(NSString *) newName completionHandler:(void (^)(NSFileProviderItem reparentedItem, NSError *error)) completionHandler;
```

## Parameters

- `itemIdentifier`: The item’s persistent identifier.
- `parentItemIdentifier`: The persistent identifier for the new parent directory.
- `newName`: The new name of the file or directory, including the file extension.
- `completionHandler`: A block that takes the following parameters:

  - **`reparentedItem`**: A file provider item that represents the reparented item, or `nil` if an error occurred.
  - **`error`**: An error object. If an error occurs, pass in an object that describes the error; otherwise, set it to `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func reparentItem(withIdentifier itemIdentifier: NSFileProviderItemIdentifier, toParentItemWithIdentifier parentItemIdentifier: NSFileProviderItemIdentifier, newName: String?) async throws -> NSFileProviderItem
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method is called when the user moves a document or directory. Override this method to make any necessary local changes to the item and both its old and new parents. Your implementation should return immediately. Call the completion handler before performing any network activity or other long-running tasks. Defer these tasks to the background.

The `reparentedItem` instance that you pass to the completion handler should match the item’s old file provider item, with only one change: set the [parentItemIdentifier](../nsfileprovideritemprotocol/parentitemidentifier.md) property to the value passed to the `parentItemIdentifier` parameter.

The user’s ability to rename an item is controlled by the item’s [NSFileProviderItemCapabilitiesAllowsRenaming](../nsfileprovideritemcapabilities/allowsrenaming.md) capability.

## See Also

### Handling actions

- [Providing support for user-driven actions](../providing-support-for-user-driven-actions.md): Override methods to handle user-initiated actions.
- [createDirectoryWithName:inParentItemIdentifier:completionHandler:](createdirectory%28withname_inparentitemidentifier_completionhandler_%29.md): Creates a directory with the given name inside the given parent directory.
- [deleteItemWithIdentifier:completionHandler:](deleteitem%28withidentifier_completionhandler_%29.md): Permanently deletes an item from the trash.
- [importDocumentAtURL:toParentItemIdentifier:completionHandler:](importdocument%28at_toparentitemidentifier_completionhandler_%29.md): Imports a file or package into the given parent directory.
- [renameItemWithIdentifier:toName:completionHandler:](renameitem%28withidentifier_toname_completionhandler_%29.md): Renames a document or directory.
- [setFavoriteRank:forItemIdentifier:completionHandler:](setfavoriterank%28__foritemidentifier_completionhandler_%29.md): Marks a directory as a favorite and sets its relative order in the Favorites list.
- [setLastUsedDate:forItemIdentifier:completionHandler:](setlastuseddate%28__foritemidentifier_completionhandler_%29.md): Marks an item as recently used and sets its relative order in the Recents list.
- [setTagData:forItemIdentifier:completionHandler:](settagdata%28__foritemidentifier_completionhandler_%29.md): Tags an item.
- [trashItemWithIdentifier:completionHandler:](trashitem%28withidentifier_completionhandler_%29.md): Moves an item into the trash.
- [untrashItemWithIdentifier:toParentItemIdentifier:completionHandler:](untrashitem%28withidentifier_toparentitemidentifier_completionhandler_%29.md): Moves an item out of the trash.
