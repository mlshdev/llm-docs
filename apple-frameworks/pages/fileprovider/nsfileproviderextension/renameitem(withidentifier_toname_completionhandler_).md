> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderextension/renameitem(withidentifier:toname:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderextension/renameitem(withidentifier:toname:completionhandler:))

# renameItem(withIdentifier:toName:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

Renames a document or directory.

## Declaration

```swift
func renameItem(withIdentifier itemIdentifier: NSFileProviderItemIdentifier, toName itemName: String, completionHandler: @escaping @Sendable (NSFileProviderItem?, (any Error)?) -> Void)
```

```swift
func renameItem(withIdentifier itemIdentifier: NSFileProviderItemIdentifier, toName itemName: String) async throws -> NSFileProviderItem
```

## Parameters

- `itemIdentifier`: The item’s persistent identifier.
- `itemName`: The new name of the file or directory, including the file extension.
- `completionHandler`: A block that takes the following parameters:

  - **`renamedItem`**: A file provider item that represents the renamed item, or `nil` if an error occurred.
  - **`error`**: An error object. If an error occurs, pass in an object that describes the error; otherwise, set it to `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func renameItem(withIdentifier itemIdentifier: NSFileProviderItemIdentifier, toName itemName: String) async throws -> NSFileProviderItem
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method is called when the user renames a document or directory. Override this method to rename the item locally. Your implementation should return immediately. Call the completion handler before performing any network activity or other long-running tasks. Defer these tasks to the background.

The `renamedItem` instance that you pass to the completion handler should match the item’s old file provider item, with only one change: set the [filename](../nsfileprovideritemprotocol/filename.md) property to the value passed to the `itemName` parameter.

The user’s ability to rename an item is controlled by the item’s [allowsRenaming](../nsfileprovideritemcapabilities/allowsrenaming.md) capability.

## See Also

### Handling actions

- [Providing support for user-driven actions](../providing-support-for-user-driven-actions.md): Override methods to handle user-initiated actions.
- [createDirectory(withName:inParentItemIdentifier:completionHandler:)](createdirectory%28withname_inparentitemidentifier_completionhandler_%29.md): Creates a directory with the given name inside the given parent directory.
- [deleteItem(withIdentifier:completionHandler:)](deleteitem%28withidentifier_completionhandler_%29.md): Permanently deletes an item from the trash.
- [importDocument(at:toParentItemIdentifier:completionHandler:)](importdocument%28at_toparentitemidentifier_completionhandler_%29.md): Imports a file or package into the given parent directory.
- [reparentItem(withIdentifier:toParentItemWithIdentifier:newName:completionHandler:)](reparentitem%28withidentifier_toparentitemwithidentifier_newname_completionhandler_%29.md): Moves the specified item into the given parent directory.
- [setFavoriteRank(\_:forItemIdentifier:completionHandler:)](setfavoriterank%28__foritemidentifier_completionhandler_%29.md): Marks a directory as a favorite and sets its relative order in the Favorites list.
- [setLastUsedDate(\_:forItemIdentifier:completionHandler:)](setlastuseddate%28__foritemidentifier_completionhandler_%29.md): Marks an item as recently used and sets its relative order in the Recents list.
- [setTagData(\_:forItemIdentifier:completionHandler:)](settagdata%28__foritemidentifier_completionhandler_%29.md): Tags an item.
- [trashItem(withIdentifier:completionHandler:)](trashitem%28withidentifier_completionhandler_%29.md): Moves an item into the trash.
- [untrashItem(withIdentifier:toParentItemIdentifier:completionHandler:)](untrashitem%28withidentifier_toparentitemidentifier_completionhandler_%29.md): Moves an item out of the trash.

# renameItemWithIdentifier:toName:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+

Renames a document or directory.

## Declaration

```objectivec
- (void) renameItemWithIdentifier:(NSFileProviderItemIdentifier) itemIdentifier toName:(NSString *) itemName completionHandler:(void (^)(NSFileProviderItem renamedItem, NSError *error)) completionHandler;
```

## Parameters

- `itemIdentifier`: The item’s persistent identifier.
- `itemName`: The new name of the file or directory, including the file extension.
- `completionHandler`: A block that takes the following parameters:

  - **`renamedItem`**: A file provider item that represents the renamed item, or `nil` if an error occurred.
  - **`error`**: An error object. If an error occurs, pass in an object that describes the error; otherwise, set it to `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func renameItem(withIdentifier itemIdentifier: NSFileProviderItemIdentifier, toName itemName: String) async throws -> NSFileProviderItem
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method is called when the user renames a document or directory. Override this method to rename the item locally. Your implementation should return immediately. Call the completion handler before performing any network activity or other long-running tasks. Defer these tasks to the background.

The `renamedItem` instance that you pass to the completion handler should match the item’s old file provider item, with only one change: set the [filename](../nsfileprovideritemprotocol/filename.md) property to the value passed to the `itemName` parameter.

The user’s ability to rename an item is controlled by the item’s [NSFileProviderItemCapabilitiesAllowsRenaming](../nsfileprovideritemcapabilities/allowsrenaming.md) capability.

## See Also

### Handling actions

- [Providing support for user-driven actions](../providing-support-for-user-driven-actions.md): Override methods to handle user-initiated actions.
- [createDirectoryWithName:inParentItemIdentifier:completionHandler:](createdirectory%28withname_inparentitemidentifier_completionhandler_%29.md): Creates a directory with the given name inside the given parent directory.
- [deleteItemWithIdentifier:completionHandler:](deleteitem%28withidentifier_completionhandler_%29.md): Permanently deletes an item from the trash.
- [importDocumentAtURL:toParentItemIdentifier:completionHandler:](importdocument%28at_toparentitemidentifier_completionhandler_%29.md): Imports a file or package into the given parent directory.
- [reparentItemWithIdentifier:toParentItemWithIdentifier:newName:completionHandler:](reparentitem%28withidentifier_toparentitemwithidentifier_newname_completionhandler_%29.md): Moves the specified item into the given parent directory.
- [setFavoriteRank:forItemIdentifier:completionHandler:](setfavoriterank%28__foritemidentifier_completionhandler_%29.md): Marks a directory as a favorite and sets its relative order in the Favorites list.
- [setLastUsedDate:forItemIdentifier:completionHandler:](setlastuseddate%28__foritemidentifier_completionhandler_%29.md): Marks an item as recently used and sets its relative order in the Recents list.
- [setTagData:forItemIdentifier:completionHandler:](settagdata%28__foritemidentifier_completionhandler_%29.md): Tags an item.
- [trashItemWithIdentifier:completionHandler:](trashitem%28withidentifier_completionhandler_%29.md): Moves an item into the trash.
- [untrashItemWithIdentifier:toParentItemIdentifier:completionHandler:](untrashitem%28withidentifier_toparentitemidentifier_completionhandler_%29.md): Moves an item out of the trash.
