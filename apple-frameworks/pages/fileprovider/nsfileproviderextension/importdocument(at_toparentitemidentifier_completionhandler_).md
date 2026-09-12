> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderextension/importdocument(at:toparentitemidentifier:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderextension/importdocument(at:toparentitemidentifier:completionhandler:))

# importDocument(at:toParentItemIdentifier:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

Imports a file or package into the given parent directory.

## Declaration

```swift
func importDocument(at fileURL: URL, toParentItemIdentifier parentItemIdentifier: NSFileProviderItemIdentifier, completionHandler: @escaping @Sendable (NSFileProviderItem?, (any Error)?) -> Void)
```

```swift
func importDocument(at fileURL: URL, toParentItemIdentifier parentItemIdentifier: NSFileProviderItemIdentifier) async throws -> NSFileProviderItem
```

## Parameters

- `fileURL`: A security-scoped URL for the file to import. Call [startAccessingSecurityScopedResource()](../../foundation/url/startaccessingsecurityscopedresource%28%29.md) on the URL before accessing it and  [stopAccessingSecurityScopedResource()](../../foundation/url/stopaccessingsecurityscopedresource%28%29.md) when finished.
- `parentItemIdentifier`: The persistent identifier for the directory where the item will be imported.
- `completionHandler`: A block that takes the following parameters:

  - **`importedDocumentItem`**: A provider item that describes the newly imported item, or `nil` if an error occurred.
  - **`error`**: An error object. If an error occurs, pass in an object that describes the error; otherwise, set it to `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func importDocument(at fileURL: URL, toParentItemIdentifier parentItemIdentifier: NSFileProviderItemIdentifier) async throws -> NSFileProviderItem
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method is called when the user imports a document or directory. Override this method to move the file at the provided security-scoped URL to the file provider’s storage. Your implementation should return immediately. Call the completion handler before performing any network activity or other long-running tasks. Defer these tasks to the background.

The `importedDocumentItem` instance that you pass to the completion handler must define the following properties:

- **[itemIdentifier](../nsfileprovideritemprotocol/itemidentifier.md)**: This identifier may be temporary. If you later receive a permanent identifier from your server, delete the temporary item and add the permanent one.
- **[parentItemIdentifier](../nsfileprovideritemprotocol/parentitemidentifier.md)**: Set to the value passed to the `parentItemIdentifier` parameter.
- **[filename](../nsfileprovideritemprotocol/filename.md)**: Set to the `fileURL` parameter’s  [nameKey](../../foundation/urlresourcekey/namekey.md) resource value.
- **[creationDate](../nsfileprovideritemprotocol/creationdate.md)**: Set to the `fileURL` parameter’s  [creationDateKey](../../foundation/urlresourcekey/creationdatekey.md) resource value.
- **[contentModificationDate](../nsfileprovideritemprotocol/contentmodificationdate.md)**: Set to the `fileURL` parameter’s  [contentModificationDateKey](../../foundation/urlresourcekey/contentmodificationdatekey.md) resource value.
- **[typeIdentifier](../nsfileprovideritemprotocol/typeidentifier.md)**: Set to the `fileURL` parameter’s  [typeIdentifierKey](../../foundation/urlresourcekey/typeidentifierkey.md) resource value.
- **[documentSize](../nsfileprovideritemprotocol/documentsize.md)**: For a flat file, set to the `fileURL` parameter’s [totalFileSizeKey](../../foundation/urlresourcekey/totalfilesizekey.md) resource value. For a package, set to the sum of the contents’ file sizes.
- **[capabilities](../nsfileprovideritemprotocol/capabilities.md)**: Set to define the actions that the user can perform on the directory (for example, [allowsReading](../nsfileprovideritemcapabilities/allowsreading.md) and [allowsWriting](../nsfileprovideritemcapabilities/allowswriting.md)).

The user’s ability to import an item into a directory is controlled by the parent directory’s [allowsAddingSubItems](../nsfileprovideritemcapabilities/allowsaddingsubitems.md) capability.

## See Also

### Handling actions

- [Providing support for user-driven actions](../providing-support-for-user-driven-actions.md): Override methods to handle user-initiated actions.
- [createDirectory(withName:inParentItemIdentifier:completionHandler:)](createdirectory%28withname_inparentitemidentifier_completionhandler_%29.md): Creates a directory with the given name inside the given parent directory.
- [deleteItem(withIdentifier:completionHandler:)](deleteitem%28withidentifier_completionhandler_%29.md): Permanently deletes an item from the trash.
- [renameItem(withIdentifier:toName:completionHandler:)](renameitem%28withidentifier_toname_completionhandler_%29.md): Renames a document or directory.
- [reparentItem(withIdentifier:toParentItemWithIdentifier:newName:completionHandler:)](reparentitem%28withidentifier_toparentitemwithidentifier_newname_completionhandler_%29.md): Moves the specified item into the given parent directory.
- [setFavoriteRank(\_:forItemIdentifier:completionHandler:)](setfavoriterank%28__foritemidentifier_completionhandler_%29.md): Marks a directory as a favorite and sets its relative order in the Favorites list.
- [setLastUsedDate(\_:forItemIdentifier:completionHandler:)](setlastuseddate%28__foritemidentifier_completionhandler_%29.md): Marks an item as recently used and sets its relative order in the Recents list.
- [setTagData(\_:forItemIdentifier:completionHandler:)](settagdata%28__foritemidentifier_completionhandler_%29.md): Tags an item.
- [trashItem(withIdentifier:completionHandler:)](trashitem%28withidentifier_completionhandler_%29.md): Moves an item into the trash.
- [untrashItem(withIdentifier:toParentItemIdentifier:completionHandler:)](untrashitem%28withidentifier_toparentitemidentifier_completionhandler_%29.md): Moves an item out of the trash.

# importDocumentAtURL:toParentItemIdentifier:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+

Imports a file or package into the given parent directory.

## Declaration

```objectivec
- (void) importDocumentAtURL:(NSURL *) fileURL toParentItemIdentifier:(NSFileProviderItemIdentifier) parentItemIdentifier completionHandler:(void (^)(NSFileProviderItem importedDocumentItem, NSError *error)) completionHandler;
```

## Parameters

- `fileURL`: A security-scoped URL for the file to import. Call [startAccessingSecurityScopedResource()](../../foundation/url/startaccessingsecurityscopedresource%28%29.md) on the URL before accessing it and  [stopAccessingSecurityScopedResource()](../../foundation/url/stopaccessingsecurityscopedresource%28%29.md) when finished.
- `parentItemIdentifier`: The persistent identifier for the directory where the item will be imported.
- `completionHandler`: A block that takes the following parameters:

  - **`importedDocumentItem`**: A provider item that describes the newly imported item, or `nil` if an error occurred.
  - **`error`**: An error object. If an error occurs, pass in an object that describes the error; otherwise, set it to `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func importDocument(at fileURL: URL, toParentItemIdentifier parentItemIdentifier: NSFileProviderItemIdentifier) async throws -> NSFileProviderItem
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method is called when the user imports a document or directory. Override this method to move the file at the provided security-scoped URL to the file provider’s storage. Your implementation should return immediately. Call the completion handler before performing any network activity or other long-running tasks. Defer these tasks to the background.

The `importedDocumentItem` instance that you pass to the completion handler must define the following properties:

- **[itemIdentifier](../nsfileprovideritemprotocol/itemidentifier.md)**: This identifier may be temporary. If you later receive a permanent identifier from your server, delete the temporary item and add the permanent one.
- **[parentItemIdentifier](../nsfileprovideritemprotocol/parentitemidentifier.md)**: Set to the value passed to the `parentItemIdentifier` parameter.
- **[filename](../nsfileprovideritemprotocol/filename.md)**: Set to the `fileURL` parameter’s  [NSURLNameKey](../../foundation/urlresourcekey/namekey.md) resource value.
- **[creationDate](../nsfileprovideritemprotocol/creationdate.md)**: Set to the `fileURL` parameter’s  [NSURLCreationDateKey](../../foundation/urlresourcekey/creationdatekey.md) resource value.
- **[contentModificationDate](../nsfileprovideritemprotocol/contentmodificationdate.md)**: Set to the `fileURL` parameter’s  [NSURLContentModificationDateKey](../../foundation/urlresourcekey/contentmodificationdatekey.md) resource value.
- **[typeIdentifier](../nsfileprovideritemprotocol/typeidentifier.md)**: Set to the `fileURL` parameter’s  [NSURLTypeIdentifierKey](../../foundation/urlresourcekey/typeidentifierkey.md) resource value.
- **[documentSize](../nsfileprovideritemprotocol/documentsize.md)**: For a flat file, set to the `fileURL` parameter’s [NSURLTotalFileSizeKey](../../foundation/urlresourcekey/totalfilesizekey.md) resource value. For a package, set to the sum of the contents’ file sizes.
- **[capabilities](../nsfileprovideritemprotocol/capabilities.md)**: Set to define the actions that the user can perform on the directory (for example, [NSFileProviderItemCapabilitiesAllowsReading](../nsfileprovideritemcapabilities/allowsreading.md) and [NSFileProviderItemCapabilitiesAllowsWriting](../nsfileprovideritemcapabilities/allowswriting.md)).

The user’s ability to import an item into a directory is controlled by the parent directory’s [NSFileProviderItemCapabilitiesAllowsAddingSubItems](../nsfileprovideritemcapabilities/allowsaddingsubitems.md) capability.

## See Also

### Handling actions

- [Providing support for user-driven actions](../providing-support-for-user-driven-actions.md): Override methods to handle user-initiated actions.
- [createDirectoryWithName:inParentItemIdentifier:completionHandler:](createdirectory%28withname_inparentitemidentifier_completionhandler_%29.md): Creates a directory with the given name inside the given parent directory.
- [deleteItemWithIdentifier:completionHandler:](deleteitem%28withidentifier_completionhandler_%29.md): Permanently deletes an item from the trash.
- [renameItemWithIdentifier:toName:completionHandler:](renameitem%28withidentifier_toname_completionhandler_%29.md): Renames a document or directory.
- [reparentItemWithIdentifier:toParentItemWithIdentifier:newName:completionHandler:](reparentitem%28withidentifier_toparentitemwithidentifier_newname_completionhandler_%29.md): Moves the specified item into the given parent directory.
- [setFavoriteRank:forItemIdentifier:completionHandler:](setfavoriterank%28__foritemidentifier_completionhandler_%29.md): Marks a directory as a favorite and sets its relative order in the Favorites list.
- [setLastUsedDate:forItemIdentifier:completionHandler:](setlastuseddate%28__foritemidentifier_completionhandler_%29.md): Marks an item as recently used and sets its relative order in the Recents list.
- [setTagData:forItemIdentifier:completionHandler:](settagdata%28__foritemidentifier_completionhandler_%29.md): Tags an item.
- [trashItemWithIdentifier:completionHandler:](trashitem%28withidentifier_completionhandler_%29.md): Moves an item into the trash.
- [untrashItemWithIdentifier:toParentItemIdentifier:completionHandler:](untrashitem%28withidentifier_toparentitemidentifier_completionhandler_%29.md): Moves an item out of the trash.
