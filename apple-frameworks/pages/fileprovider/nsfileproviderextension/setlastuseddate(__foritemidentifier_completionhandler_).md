> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderextension/setlastuseddate(_:foritemidentifier:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderextension/setlastuseddate(_:foritemidentifier:completionhandler:))

# setLastUsedDate(\_:forItemIdentifier:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

Marks an item as recently used and sets its relative order in the Recents list.

## Declaration

```swift
func setLastUsedDate(_ lastUsedDate: Date?, forItemIdentifier itemIdentifier: NSFileProviderItemIdentifier, completionHandler: @escaping @Sendable (NSFileProviderItem?, (any Error)?) -> Void)
```

```swift
func setLastUsedDate(_ lastUsedDate: Date?, forItemIdentifier itemIdentifier: NSFileProviderItemIdentifier) async throws -> NSFileProviderItem
```

## Parameters

- `lastUsedDate`: The date and time when the item was last used. This value is used as the sort key for the Recents list.
- `itemIdentifier`: The item’s persistent identifier.
- `completionHandler`: A block that takes the following parameters:

  - **`recentlyUsedItem`**: A file provider item that represents the changed item, or `nil` if an error occurred.
  - **`error`**: An error object. If an error occurs, pass in an object that describes the error; otherwise, set it to `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func setLastUsedDate(_ lastUsedDate: Date?, forItemIdentifier itemIdentifier: NSFileProviderItemIdentifier) async throws -> NSFileProviderItem
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method is called after the item is accessed by the host app. Override this method to make any necessary local changes. Your implementation should return immediately. Call the completion handler before performing any network activity or other long-running tasks. Defer these tasks to the background.

The `recentlyUsedItem` instance that you pass to the completion handler should match the item’s old file provider item, with only one change: set the item’s [lastUsedDate](../nsfileprovideritemprotocol/lastuseddate.md) property with the value of the `lastUsedDate` parameter

Always include Items with a non-`nil` [lastUsedDate](../nsfileprovideritemprotocol/lastuseddate.md) property in your File Provider extension’s working set.

The error parameter is used only for debugging purposes. The error is logged but not shown to the user.

## See Also

### Handling actions

- [Providing support for user-driven actions](../providing-support-for-user-driven-actions.md): Override methods to handle user-initiated actions.
- [createDirectory(withName:inParentItemIdentifier:completionHandler:)](createdirectory%28withname_inparentitemidentifier_completionhandler_%29.md): Creates a directory with the given name inside the given parent directory.
- [deleteItem(withIdentifier:completionHandler:)](deleteitem%28withidentifier_completionhandler_%29.md): Permanently deletes an item from the trash.
- [importDocument(at:toParentItemIdentifier:completionHandler:)](importdocument%28at_toparentitemidentifier_completionhandler_%29.md): Imports a file or package into the given parent directory.
- [renameItem(withIdentifier:toName:completionHandler:)](renameitem%28withidentifier_toname_completionhandler_%29.md): Renames a document or directory.
- [reparentItem(withIdentifier:toParentItemWithIdentifier:newName:completionHandler:)](reparentitem%28withidentifier_toparentitemwithidentifier_newname_completionhandler_%29.md): Moves the specified item into the given parent directory.
- [setFavoriteRank(\_:forItemIdentifier:completionHandler:)](setfavoriterank%28__foritemidentifier_completionhandler_%29.md): Marks a directory as a favorite and sets its relative order in the Favorites list.
- [setTagData(\_:forItemIdentifier:completionHandler:)](settagdata%28__foritemidentifier_completionhandler_%29.md): Tags an item.
- [trashItem(withIdentifier:completionHandler:)](trashitem%28withidentifier_completionhandler_%29.md): Moves an item into the trash.
- [untrashItem(withIdentifier:toParentItemIdentifier:completionHandler:)](untrashitem%28withidentifier_toparentitemidentifier_completionhandler_%29.md): Moves an item out of the trash.

# setLastUsedDate:forItemIdentifier:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+

Marks an item as recently used and sets its relative order in the Recents list.

## Declaration

```objectivec
- (void) setLastUsedDate:(NSDate *) lastUsedDate forItemIdentifier:(NSFileProviderItemIdentifier) itemIdentifier completionHandler:(void (^)(NSFileProviderItem recentlyUsedItem, NSError *error)) completionHandler;
```

## Parameters

- `lastUsedDate`: The date and time when the item was last used. This value is used as the sort key for the Recents list.
- `itemIdentifier`: The item’s persistent identifier.
- `completionHandler`: A block that takes the following parameters:

  - **`recentlyUsedItem`**: A file provider item that represents the changed item, or `nil` if an error occurred.
  - **`error`**: An error object. If an error occurs, pass in an object that describes the error; otherwise, set it to `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func setLastUsedDate(_ lastUsedDate: Date?, forItemIdentifier itemIdentifier: NSFileProviderItemIdentifier) async throws -> NSFileProviderItem
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method is called after the item is accessed by the host app. Override this method to make any necessary local changes. Your implementation should return immediately. Call the completion handler before performing any network activity or other long-running tasks. Defer these tasks to the background.

The `recentlyUsedItem` instance that you pass to the completion handler should match the item’s old file provider item, with only one change: set the item’s [lastUsedDate](../nsfileprovideritemprotocol/lastuseddate.md) property with the value of the `lastUsedDate` parameter

Always include Items with a non-`nil` [lastUsedDate](../nsfileprovideritemprotocol/lastuseddate.md) property in your File Provider extension’s working set.

The error parameter is used only for debugging purposes. The error is logged but not shown to the user.

## See Also

### Handling actions

- [Providing support for user-driven actions](../providing-support-for-user-driven-actions.md): Override methods to handle user-initiated actions.
- [createDirectoryWithName:inParentItemIdentifier:completionHandler:](createdirectory%28withname_inparentitemidentifier_completionhandler_%29.md): Creates a directory with the given name inside the given parent directory.
- [deleteItemWithIdentifier:completionHandler:](deleteitem%28withidentifier_completionhandler_%29.md): Permanently deletes an item from the trash.
- [importDocumentAtURL:toParentItemIdentifier:completionHandler:](importdocument%28at_toparentitemidentifier_completionhandler_%29.md): Imports a file or package into the given parent directory.
- [renameItemWithIdentifier:toName:completionHandler:](renameitem%28withidentifier_toname_completionhandler_%29.md): Renames a document or directory.
- [reparentItemWithIdentifier:toParentItemWithIdentifier:newName:completionHandler:](reparentitem%28withidentifier_toparentitemwithidentifier_newname_completionhandler_%29.md): Moves the specified item into the given parent directory.
- [setFavoriteRank:forItemIdentifier:completionHandler:](setfavoriterank%28__foritemidentifier_completionhandler_%29.md): Marks a directory as a favorite and sets its relative order in the Favorites list.
- [setTagData:forItemIdentifier:completionHandler:](settagdata%28__foritemidentifier_completionhandler_%29.md): Tags an item.
- [trashItemWithIdentifier:completionHandler:](trashitem%28withidentifier_completionhandler_%29.md): Moves an item into the trash.
- [untrashItemWithIdentifier:toParentItemIdentifier:completionHandler:](untrashitem%28withidentifier_toparentitemidentifier_completionhandler_%29.md): Moves an item out of the trash.
