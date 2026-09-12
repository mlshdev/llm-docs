> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderextension/createdirectory(withname:inparentitemidentifier:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderextension/createdirectory(withname:inparentitemidentifier:completionhandler:))

# createDirectory(withName:inParentItemIdentifier:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

Creates a directory with the given name inside the given parent directory.

## Declaration

```swift
func createDirectory(withName directoryName: String, inParentItemIdentifier parentItemIdentifier: NSFileProviderItemIdentifier, completionHandler: @escaping @Sendable (NSFileProviderItem?, (any Error)?) -> Void)
```

```swift
func createDirectory(withName directoryName: String, inParentItemIdentifier parentItemIdentifier: NSFileProviderItemIdentifier) async throws -> NSFileProviderItem
```

## Parameters

- `directoryName`: The name of the directory to be created.
- `parentItemIdentifier`: The persistent identifier for the parent directory.
- `completionHandler`: A block that takes the following parameters:

  - **`createdDirectoryItem`**: A provider item that describes the newly created directory, or `nil` if an error occurred.
  - **`error`**: An error object. If an error occurs, pass in an object that describes the error; otherwise, set it to `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func createDirectory(withName directoryName: String, inParentItemIdentifier parentItemIdentifier: NSFileProviderItemIdentifier) async throws -> NSFileProviderItem
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method is called when the user creates a directory. Override this method to create the directory locally. Your implementation should return immediately. Call the completion handler before performing any network activity or other long-running tasks. Defer these tasks to the background.

The `createdDirectoryItem` instance that you pass to the completion handler must define the following properties:

- **[itemIdentifier](../nsfileprovideritemprotocol/itemidentifier.md)**: This identifier may be temporary. If you later receive a permanent identifier from your server, delete the temporary item and add the permanent one.
- **[parentItemIdentifier](../nsfileprovideritemprotocol/parentitemidentifier.md)**: Set to the value passed to the `parentItemIdentifier` parameter.
- **[filename](../nsfileprovideritemprotocol/filename.md)**: Set to the value passed to the `directoryName` parameter.
- **[creationDate](../nsfileprovideritemprotocol/creationdate.md)**: Set to the current date and time.
- **[typeIdentifier](../nsfileprovideritemprotocol/typeidentifier.md)**: Set to `public.folder`.
- **[childItemCount](../nsfileprovideritemprotocol/childitemcount.md)**: Set to `0`.
- **[capabilities](../nsfileprovideritemprotocol/capabilities.md)**: Set to define the actions that the user can perform on the directory (for example, [allowsAddingSubItems](../nsfileprovideritemcapabilities/allowsaddingsubitems.md), [allowsReading](../nsfileprovideritemcapabilities/allowsreading.md), and [allowsWriting](../nsfileprovideritemcapabilities/allowswriting.md)).

The user’s ability to create a directory is controlled by the parent directory’s [allowsAddingSubItems](../nsfileprovideritemcapabilities/allowsaddingsubitems.md) capability.

## See Also

### Handling actions

- [Providing support for user-driven actions](../providing-support-for-user-driven-actions.md): Override methods to handle user-initiated actions.
- [deleteItem(withIdentifier:completionHandler:)](deleteitem%28withidentifier_completionhandler_%29.md): Permanently deletes an item from the trash.
- [importDocument(at:toParentItemIdentifier:completionHandler:)](importdocument%28at_toparentitemidentifier_completionhandler_%29.md): Imports a file or package into the given parent directory.
- [renameItem(withIdentifier:toName:completionHandler:)](renameitem%28withidentifier_toname_completionhandler_%29.md): Renames a document or directory.
- [reparentItem(withIdentifier:toParentItemWithIdentifier:newName:completionHandler:)](reparentitem%28withidentifier_toparentitemwithidentifier_newname_completionhandler_%29.md): Moves the specified item into the given parent directory.
- [setFavoriteRank(\_:forItemIdentifier:completionHandler:)](setfavoriterank%28__foritemidentifier_completionhandler_%29.md): Marks a directory as a favorite and sets its relative order in the Favorites list.
- [setLastUsedDate(\_:forItemIdentifier:completionHandler:)](setlastuseddate%28__foritemidentifier_completionhandler_%29.md): Marks an item as recently used and sets its relative order in the Recents list.
- [setTagData(\_:forItemIdentifier:completionHandler:)](settagdata%28__foritemidentifier_completionhandler_%29.md): Tags an item.
- [trashItem(withIdentifier:completionHandler:)](trashitem%28withidentifier_completionhandler_%29.md): Moves an item into the trash.
- [untrashItem(withIdentifier:toParentItemIdentifier:completionHandler:)](untrashitem%28withidentifier_toparentitemidentifier_completionhandler_%29.md): Moves an item out of the trash.

# createDirectoryWithName:inParentItemIdentifier:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+

Creates a directory with the given name inside the given parent directory.

## Declaration

```objectivec
- (void) createDirectoryWithName:(NSString *) directoryName inParentItemIdentifier:(NSFileProviderItemIdentifier) parentItemIdentifier completionHandler:(void (^)(NSFileProviderItem createdDirectoryItem, NSError *error)) completionHandler;
```

## Parameters

- `directoryName`: The name of the directory to be created.
- `parentItemIdentifier`: The persistent identifier for the parent directory.
- `completionHandler`: A block that takes the following parameters:

  - **`createdDirectoryItem`**: A provider item that describes the newly created directory, or `nil` if an error occurred.
  - **`error`**: An error object. If an error occurs, pass in an object that describes the error; otherwise, set it to `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func createDirectory(withName directoryName: String, inParentItemIdentifier parentItemIdentifier: NSFileProviderItemIdentifier) async throws -> NSFileProviderItem
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method is called when the user creates a directory. Override this method to create the directory locally. Your implementation should return immediately. Call the completion handler before performing any network activity or other long-running tasks. Defer these tasks to the background.

The `createdDirectoryItem` instance that you pass to the completion handler must define the following properties:

- **[itemIdentifier](../nsfileprovideritemprotocol/itemidentifier.md)**: This identifier may be temporary. If you later receive a permanent identifier from your server, delete the temporary item and add the permanent one.
- **[parentItemIdentifier](../nsfileprovideritemprotocol/parentitemidentifier.md)**: Set to the value passed to the `parentItemIdentifier` parameter.
- **[filename](../nsfileprovideritemprotocol/filename.md)**: Set to the value passed to the `directoryName` parameter.
- **[creationDate](../nsfileprovideritemprotocol/creationdate.md)**: Set to the current date and time.
- **[typeIdentifier](../nsfileprovideritemprotocol/typeidentifier.md)**: Set to `public.folder`.
- **[childItemCount](../nsfileprovideritemprotocol/childitemcount.md)**: Set to `0`.
- **[capabilities](../nsfileprovideritemprotocol/capabilities.md)**: Set to define the actions that the user can perform on the directory (for example, [NSFileProviderItemCapabilitiesAllowsAddingSubItems](../nsfileprovideritemcapabilities/allowsaddingsubitems.md), [NSFileProviderItemCapabilitiesAllowsReading](../nsfileprovideritemcapabilities/allowsreading.md), and [NSFileProviderItemCapabilitiesAllowsWriting](../nsfileprovideritemcapabilities/allowswriting.md)).

The user’s ability to create a directory is controlled by the parent directory’s [NSFileProviderItemCapabilitiesAllowsAddingSubItems](../nsfileprovideritemcapabilities/allowsaddingsubitems.md) capability.

## See Also

### Handling actions

- [Providing support for user-driven actions](../providing-support-for-user-driven-actions.md): Override methods to handle user-initiated actions.
- [deleteItemWithIdentifier:completionHandler:](deleteitem%28withidentifier_completionhandler_%29.md): Permanently deletes an item from the trash.
- [importDocumentAtURL:toParentItemIdentifier:completionHandler:](importdocument%28at_toparentitemidentifier_completionhandler_%29.md): Imports a file or package into the given parent directory.
- [renameItemWithIdentifier:toName:completionHandler:](renameitem%28withidentifier_toname_completionhandler_%29.md): Renames a document or directory.
- [reparentItemWithIdentifier:toParentItemWithIdentifier:newName:completionHandler:](reparentitem%28withidentifier_toparentitemwithidentifier_newname_completionhandler_%29.md): Moves the specified item into the given parent directory.
- [setFavoriteRank:forItemIdentifier:completionHandler:](setfavoriterank%28__foritemidentifier_completionhandler_%29.md): Marks a directory as a favorite and sets its relative order in the Favorites list.
- [setLastUsedDate:forItemIdentifier:completionHandler:](setlastuseddate%28__foritemidentifier_completionhandler_%29.md): Marks an item as recently used and sets its relative order in the Recents list.
- [setTagData:forItemIdentifier:completionHandler:](settagdata%28__foritemidentifier_completionhandler_%29.md): Tags an item.
- [trashItemWithIdentifier:completionHandler:](trashitem%28withidentifier_completionhandler_%29.md): Moves an item into the trash.
- [untrashItemWithIdentifier:toParentItemIdentifier:completionHandler:](untrashitem%28withidentifier_toparentitemidentifier_completionhandler_%29.md): Moves an item out of the trash.
