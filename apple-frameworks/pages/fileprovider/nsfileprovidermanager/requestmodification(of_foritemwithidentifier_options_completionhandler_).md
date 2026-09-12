> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/requestmodification(of:foritemwithidentifier:options:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/requestmodification(of:foritemwithidentifier:options:completionhandler:))

# requestModification(of:forItemWithIdentifier:options:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func requestModification(of fields: NSFileProviderItemFields, forItemWithIdentifier itemIdentifier: NSFileProviderItemIdentifier, options: NSFileProviderModifyItemOptions = [], completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func requestModification(of fields: NSFileProviderItemFields, forItemWithIdentifier itemIdentifier: NSFileProviderItemIdentifier, options: NSFileProviderModifyItemOptions = []) async throws
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func requestModification(of fields: NSFileProviderItemFields, forItemWithIdentifier itemIdentifier: NSFileProviderItemIdentifier, options: NSFileProviderModifyItemOptions = []) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Working with items

- [reimportItems(below:completionHandler:)](reimportitems%28below_completionhandler_%29.md): Tells the system to reimport the item and its content recursively.
- [evictItem(identifier:completionHandler:)](evictitem%28identifier_completionhandler_%29.md): Asks the system to remove an item from its cache.
- [requestDownloadForItem(withIdentifier:requestedRange:)](requestdownloadforitem%28withidentifier_requestedrange_%29.md)
- [requestDownloadForItem(withIdentifier:requestedRange:completionHandler:)](requestdownloadforitem%28withidentifier_requestedrange_completionhandler_%29.md)
- [enumeratorForMaterializedItems()](enumeratorformaterializeditems%28%29.md): Returns an enumerator for all the items the system currently stores on disk.
- [enumeratorForPendingItems()](enumeratorforpendingitems%28%29.md): Returns an enumerator for the set of pending items.

# requestModificationOfFields:forItemWithIdentifier:options:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) requestModificationOfFields:(NSFileProviderItemFields) fields forItemWithIdentifier:(NSFileProviderItemIdentifier) itemIdentifier options:(NSFileProviderModifyItemOptions) options completionHandler:(void (^)(NSError *error)) completionHandler;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func requestModification(of fields: NSFileProviderItemFields, forItemWithIdentifier itemIdentifier: NSFileProviderItemIdentifier, options: NSFileProviderModifyItemOptions = []) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Working with items

- [reimportItemsBelowItemWithIdentifier:completionHandler:](reimportitems%28below_completionhandler_%29.md): Tells the system to reimport the item and its content recursively.
- [evictItemWithIdentifier:completionHandler:](evictitem%28identifier_completionhandler_%29.md): Asks the system to remove an item from its cache.
- [requestDownloadForItemWithIdentifier:requestedRange:completionHandler:](requestdownloadforitemwithidentifier_requestedrange_completionhandler_.md)
- [enumeratorForMaterializedItems](enumeratorformaterializeditems%28%29.md): Returns an enumerator for all the items the system currently stores on disk.
- [enumeratorForPendingItems](enumeratorforpendingitems%28%29.md): Returns an enumerator for the set of pending items.
