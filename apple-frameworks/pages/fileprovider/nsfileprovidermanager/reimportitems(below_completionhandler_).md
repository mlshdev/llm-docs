> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/reimportitems(below:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/reimportitems(below:completionhandler:))

# reimportItems(below:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Tells the system to reimport the item and its content recursively.

## Declaration

```swift
func reimportItems(below itemIdentifier: NSFileProviderItemIdentifier, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func reimportItems(below itemIdentifier: NSFileProviderItemIdentifier) async throws
```

## Parameters

- `itemIdentifier`: The identifier of the item to reimport. The system reimports the item and all of its children.
- `completionHandler`: A block called by the system immediately after receiving the request. The completion handler takes the following parameters:

  - **error**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func reimportItems(below itemIdentifier: NSFileProviderItemIdentifier) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method tells the system that the specified item identifiers are no longer valid. Your file provider extension should call this method if it has lost track of its synchronization state and can’t guarantee the stability of the item identifiers anymore.

The system calls [createItem(basedOn:fields:contents:options:request:completionHandler:)](../nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md) and passes the [mayAlreadyExist](../nsfileprovidercreateitemoptions/mayalreadyexist.md) option for each affected identifier in its working set. Your File Provider extension can then specify a new identifier for each item.

The system then calls [importDidFinish(completionHandler:)](../nsfileproviderreplicatedextension/importdidfinish%28completionhandler_%29.md) when the import is complete. If successful, the system always reimports the specified subtree, but it may reimport other items as well. If the item specified by the `itemIdentifier` parameter has no on-disk representation, the method fails with an [NSFileProviderError.Code.noSuchItem](../nsfileprovidererror/code/nosuchitem.md) error.

If your file provider loses synchronization but is still able to guarantee the stability of the identifiers, you don’t need to reimport the items. Instead, if the system queries the working set with an anchor that predates the synchronization loss, your File Provider extension can fail with an [NSFileProviderError.Code.syncAnchorExpired](../nsfileprovidererror/code/syncanchorexpired.md) error.

If your file provider loses synchronization, but you aren’t interested in preserving the local data, you can resolve the issue by removing and then adding the domain back.

## See Also

### Working with items

- [evictItem(identifier:completionHandler:)](evictitem%28identifier_completionhandler_%29.md): Asks the system to remove an item from its cache.
- [requestDownloadForItem(withIdentifier:requestedRange:)](requestdownloadforitem%28withidentifier_requestedrange_%29.md)
- [requestDownloadForItem(withIdentifier:requestedRange:completionHandler:)](requestdownloadforitem%28withidentifier_requestedrange_completionhandler_%29.md)
- [requestModification(of:forItemWithIdentifier:options:completionHandler:)](requestmodification%28of_foritemwithidentifier_options_completionhandler_%29.md)
- [enumeratorForMaterializedItems()](enumeratorformaterializeditems%28%29.md): Returns an enumerator for all the items the system currently stores on disk.
- [enumeratorForPendingItems()](enumeratorforpendingitems%28%29.md): Returns an enumerator for the set of pending items.

# reimportItemsBelowItemWithIdentifier:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Tells the system to reimport the item and its content recursively.

## Declaration

```objectivec
- (void) reimportItemsBelowItemWithIdentifier:(NSFileProviderItemIdentifier) itemIdentifier completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `itemIdentifier`: The identifier of the item to reimport. The system reimports the item and all of its children.
- `completionHandler`: A block called by the system immediately after receiving the request. The completion handler takes the following parameters:

  - **error**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func reimportItems(below itemIdentifier: NSFileProviderItemIdentifier) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method tells the system that the specified item identifiers are no longer valid. Your file provider extension should call this method if it has lost track of its synchronization state and can’t guarantee the stability of the item identifiers anymore.

The system calls [createItemBasedOnTemplate:fields:contents:options:request:completionHandler:](../nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md) and passes the [NSFileProviderCreateItemMayAlreadyExist](../nsfileprovidercreateitemoptions/mayalreadyexist.md) option for each affected identifier in its working set. Your File Provider extension can then specify a new identifier for each item.

The system then calls [importDidFinishWithCompletionHandler:](../nsfileproviderreplicatedextension/importdidfinish%28completionhandler_%29.md) when the import is complete. If successful, the system always reimports the specified subtree, but it may reimport other items as well. If the item specified by the `itemIdentifier` parameter has no on-disk representation, the method fails with an [NSFileProviderErrorNoSuchItem](../nsfileprovidererror/code/nosuchitem.md) error.

If your file provider loses synchronization but is still able to guarantee the stability of the identifiers, you don’t need to reimport the items. Instead, if the system queries the working set with an anchor that predates the synchronization loss, your File Provider extension can fail with an [NSFileProviderErrorSyncAnchorExpired](../nsfileprovidererror/code/syncanchorexpired.md) error.

If your file provider loses synchronization, but you aren’t interested in preserving the local data, you can resolve the issue by removing and then adding the domain back.

## See Also

### Working with items

- [evictItemWithIdentifier:completionHandler:](evictitem%28identifier_completionhandler_%29.md): Asks the system to remove an item from its cache.
- [requestDownloadForItemWithIdentifier:requestedRange:completionHandler:](requestdownloadforitemwithidentifier_requestedrange_completionhandler_.md)
- [requestModificationOfFields:forItemWithIdentifier:options:completionHandler:](requestmodification%28of_foritemwithidentifier_options_completionhandler_%29.md)
- [enumeratorForMaterializedItems](enumeratorformaterializeditems%28%29.md): Returns an enumerator for all the items the system currently stores on disk.
- [enumeratorForPendingItems](enumeratorforpendingitems%28%29.md): Returns an enumerator for the set of pending items.
