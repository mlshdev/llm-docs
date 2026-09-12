> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/evictitem(identifier:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/evictitem(identifier:completionhandler:))

# evictItem(identifier:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Asks the system to remove an item from its cache.

## Declaration

```swift
func evictItem(identifier itemIdentifier: NSFileProviderItemIdentifier, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func evictItem(identifier itemIdentifier: NSFileProviderItemIdentifier) async throws
```

## Parameters

- `itemIdentifier`: The item’s identifier.
- `completionHandler`: A block that the system calls after removing the item from disk. The system passes the following parameter:

  - **`error`**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func evictItem(identifier itemIdentifier: NSFileProviderItemIdentifier) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Calling this method turns a materialized item into a dataless item to free up disk space. For more information on materialized and dataless items, see [Synchronizing the File Provider Extension](../synchronizing-the-file-provider-extension.md).

If the item is a document without local changes, this method deletes the local copy of the item’s content. If the item has local changes, it fails with an [NSFileWriteNoPermissionError](../../foundation/nsfilewritenopermissionerror-swift.var.md) error.

When called on a directory, the system recursively evicts the directory’s content. It deletes the content of any materialized files, and recursively evicts any subdirectories. After it has successfully evicted all the content, it deletes its list of the directory’s content, making the directory dataless. The next time the system accesses the directory, it requests a list of the contents using the [NSFileProviderEnumerating](../nsfileproviderenumerating.md) protocol.

If the system encounters a nonevictable child, eviction stops immediately, and the system calls the completion handler with a [NSFileProviderError.Code.nonEvictableChildren](../nsfileprovidererror/code/nonevictablechildren.md) error. The error includes information about the nonevictable child in its [underlyingErrors](../../foundation/nserror/underlyingerrors.md) property. The system may have evicted other materialized items, based on the traversal order.

The system calls the completion handler after it successfully evicts all items, or immediately when an error occurs. Eviction might fail with the following errors:

- [NSFileProviderError.Code.unsyncedEdits](../nsfileprovidererror/code/unsyncededits.md) if the item had nonuploaded changes.
- [NSFileProviderError.Code.nonEvictable](../nsfileprovidererror/code/nonevictable.md) if the user has marked the item as nonevictable.
- `EBUSY` if the item has open file descriptors on it.
- `EMLINK` if the item has too many hardlinks.
- Other [NSPOSIXErrorDomain](../../foundation/nsposixerrordomain.md) error codes if the system can’t access or manipulate the corresponding file.

## See Also

### Working with items

- [reimportItems(below:completionHandler:)](reimportitems%28below_completionhandler_%29.md): Tells the system to reimport the item and its content recursively.
- [requestDownloadForItem(withIdentifier:requestedRange:)](requestdownloadforitem%28withidentifier_requestedrange_%29.md)
- [requestDownloadForItem(withIdentifier:requestedRange:completionHandler:)](requestdownloadforitem%28withidentifier_requestedrange_completionhandler_%29.md)
- [requestModification(of:forItemWithIdentifier:options:completionHandler:)](requestmodification%28of_foritemwithidentifier_options_completionhandler_%29.md)
- [enumeratorForMaterializedItems()](enumeratorformaterializeditems%28%29.md): Returns an enumerator for all the items the system currently stores on disk.
- [enumeratorForPendingItems()](enumeratorforpendingitems%28%29.md): Returns an enumerator for the set of pending items.

# evictItemWithIdentifier:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Asks the system to remove an item from its cache.

## Declaration

```objectivec
- (void) evictItemWithIdentifier:(NSFileProviderItemIdentifier) itemIdentifier completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `itemIdentifier`: The item’s identifier.
- `completionHandler`: A block that the system calls after removing the item from disk. The system passes the following parameter:

  - **`error`**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func evictItem(identifier itemIdentifier: NSFileProviderItemIdentifier) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Calling this method turns a materialized item into a dataless item to free up disk space. For more information on materialized and dataless items, see [Synchronizing the File Provider Extension](../synchronizing-the-file-provider-extension.md).

If the item is a document without local changes, this method deletes the local copy of the item’s content. If the item has local changes, it fails with an [NSFileWriteNoPermissionError](../../foundation/nsfilewritenopermissionerror-swift.var.md) error.

When called on a directory, the system recursively evicts the directory’s content. It deletes the content of any materialized files, and recursively evicts any subdirectories. After it has successfully evicted all the content, it deletes its list of the directory’s content, making the directory dataless. The next time the system accesses the directory, it requests a list of the contents using the [NSFileProviderEnumerating](../nsfileproviderenumerating.md) protocol.

If the system encounters a nonevictable child, eviction stops immediately, and the system calls the completion handler with a [NSFileProviderErrorNonEvictableChildren](../nsfileprovidererror/code/nonevictablechildren.md) error. The error includes information about the nonevictable child in its [underlyingErrors](../../foundation/nserror/underlyingerrors.md) property. The system may have evicted other materialized items, based on the traversal order.

The system calls the completion handler after it successfully evicts all items, or immediately when an error occurs. Eviction might fail with the following errors:

- [NSFileProviderErrorUnsyncedEdits](../nsfileprovidererror/code/unsyncededits.md) if the item had nonuploaded changes.
- [NSFileProviderErrorNonEvictable](../nsfileprovidererror/code/nonevictable.md) if the user has marked the item as nonevictable.
- `EBUSY` if the item has open file descriptors on it.
- `EMLINK` if the item has too many hardlinks.
- Other [NSPOSIXErrorDomain](../../foundation/nsposixerrordomain.md) error codes if the system can’t access or manipulate the corresponding file.

## See Also

### Working with items

- [reimportItemsBelowItemWithIdentifier:completionHandler:](reimportitems%28below_completionhandler_%29.md): Tells the system to reimport the item and its content recursively.
- [requestDownloadForItemWithIdentifier:requestedRange:completionHandler:](requestdownloadforitemwithidentifier_requestedrange_completionhandler_.md)
- [requestModificationOfFields:forItemWithIdentifier:options:completionHandler:](requestmodification%28of_foritemwithidentifier_options_completionhandler_%29.md)
- [enumeratorForMaterializedItems](enumeratorformaterializeditems%28%29.md): Returns an enumerator for all the items the system currently stores on disk.
- [enumeratorForPendingItems](enumeratorforpendingitems%28%29.md): Returns an enumerator for the set of pending items.
