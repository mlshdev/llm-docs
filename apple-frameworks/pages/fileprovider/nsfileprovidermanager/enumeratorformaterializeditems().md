> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/enumeratorformaterializeditems()](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/enumeratorformaterializeditems())

# enumeratorForMaterializedItems() (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Returns an enumerator for all the items the system currently stores on disk.

## Declaration

```swift
func enumeratorForMaterializedItems() -> any NSFileProviderEnumerator
```

## Mentioned In

- [Synchronizing the File Provider Extension](../synchronizing-the-file-provider-extension.md)

<a id="Discussion"></a>

## Discussion

In most cases, the system requests an enumerator from the File Provider. The file provider creates the enumerator, and uses it to pass information back to the system. In this case, however, the roles are reversed. The File Provider extension calls this method to request an enumerator from the system. The system then creates the enumerator and uses it to pass the list of items currently stored on disk back to the File Provider extension.

## See Also

### Working with items

- [reimportItems(below:completionHandler:)](reimportitems%28below_completionhandler_%29.md): Tells the system to reimport the item and its content recursively.
- [evictItem(identifier:completionHandler:)](evictitem%28identifier_completionhandler_%29.md): Asks the system to remove an item from its cache.
- [requestDownloadForItem(withIdentifier:requestedRange:)](requestdownloadforitem%28withidentifier_requestedrange_%29.md)
- [requestDownloadForItem(withIdentifier:requestedRange:completionHandler:)](requestdownloadforitem%28withidentifier_requestedrange_completionhandler_%29.md)
- [requestModification(of:forItemWithIdentifier:options:completionHandler:)](requestmodification%28of_foritemwithidentifier_options_completionhandler_%29.md)
- [enumeratorForPendingItems()](enumeratorforpendingitems%28%29.md): Returns an enumerator for the set of pending items.

# enumeratorForMaterializedItems (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Returns an enumerator for all the items the system currently stores on disk.

## Declaration

```objectivec
- (id<NSFileProviderEnumerator>) enumeratorForMaterializedItems;
```

## Mentioned In

- [Synchronizing the File Provider Extension](../synchronizing-the-file-provider-extension.md)

<a id="Discussion"></a>

## Discussion

In most cases, the system requests an enumerator from the File Provider. The file provider creates the enumerator, and uses it to pass information back to the system. In this case, however, the roles are reversed. The File Provider extension calls this method to request an enumerator from the system. The system then creates the enumerator and uses it to pass the list of items currently stored on disk back to the File Provider extension.

## See Also

### Working with items

- [reimportItemsBelowItemWithIdentifier:completionHandler:](reimportitems%28below_completionhandler_%29.md): Tells the system to reimport the item and its content recursively.
- [evictItemWithIdentifier:completionHandler:](evictitem%28identifier_completionhandler_%29.md): Asks the system to remove an item from its cache.
- [requestDownloadForItemWithIdentifier:requestedRange:completionHandler:](requestdownloadforitemwithidentifier_requestedrange_completionhandler_.md)
- [requestModificationOfFields:forItemWithIdentifier:options:completionHandler:](requestmodification%28of_foritemwithidentifier_options_completionhandler_%29.md)
- [enumeratorForPendingItems](enumeratorforpendingitems%28%29.md): Returns an enumerator for the set of pending items.
