> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/enumeratorforpendingitems()](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/enumeratorforpendingitems())

# enumeratorForPendingItems() (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

Returns an enumerator for the set of pending items.

## Declaration

```swift
func enumeratorForPendingItems() -> any NSFileProviderPendingSetEnumerator
```

<a id="Discussion"></a>

## Discussion

When the set of pending items changes, the system calls [pendingItemsDidChange(completionHandler:)](../nsfileproviderreplicatedextension/pendingitemsdidchange%28completionhandler_%29.md).

## See Also

### Working with items

- [reimportItems(below:completionHandler:)](reimportitems%28below_completionhandler_%29.md): Tells the system to reimport the item and its content recursively.
- [evictItem(identifier:completionHandler:)](evictitem%28identifier_completionhandler_%29.md): Asks the system to remove an item from its cache.
- [requestDownloadForItem(withIdentifier:requestedRange:)](requestdownloadforitem%28withidentifier_requestedrange_%29.md)
- [requestDownloadForItem(withIdentifier:requestedRange:completionHandler:)](requestdownloadforitem%28withidentifier_requestedrange_completionhandler_%29.md)
- [requestModification(of:forItemWithIdentifier:options:completionHandler:)](requestmodification%28of_foritemwithidentifier_options_completionhandler_%29.md)
- [enumeratorForMaterializedItems()](enumeratorformaterializeditems%28%29.md): Returns an enumerator for all the items the system currently stores on disk.

# enumeratorForPendingItems (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

Returns an enumerator for the set of pending items.

## Declaration

```objectivec
- (id<NSFileProviderPendingSetEnumerator>) enumeratorForPendingItems;
```

<a id="Discussion"></a>

## Discussion

When the set of pending items changes, the system calls [pendingItemsDidChangeWithCompletionHandler:](../nsfileproviderreplicatedextension/pendingitemsdidchange%28completionhandler_%29.md).

## See Also

### Working with items

- [reimportItemsBelowItemWithIdentifier:completionHandler:](reimportitems%28below_completionhandler_%29.md): Tells the system to reimport the item and its content recursively.
- [evictItemWithIdentifier:completionHandler:](evictitem%28identifier_completionhandler_%29.md): Asks the system to remove an item from its cache.
- [requestDownloadForItemWithIdentifier:requestedRange:completionHandler:](requestdownloadforitemwithidentifier_requestedrange_completionhandler_.md)
- [requestModificationOfFields:forItemWithIdentifier:options:completionHandler:](requestmodification%28of_foritemwithidentifier_options_completionhandler_%29.md)
- [enumeratorForMaterializedItems](enumeratorformaterializeditems%28%29.md): Returns an enumerator for all the items the system currently stores on disk.
