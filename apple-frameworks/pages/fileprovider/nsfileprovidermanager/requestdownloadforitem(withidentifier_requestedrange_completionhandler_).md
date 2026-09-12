> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/requestdownloadforitem(withidentifier:requestedrange:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/requestdownloadforitem(withidentifier:requestedrange:completionhandler:))

# requestDownloadForItem(withIdentifier:requestedRange:completionHandler:)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func requestDownloadForItem(withIdentifier itemIdentifier: NSFileProviderItemIdentifier, requestedRange: NSRange? = nil, completionHandler: @escaping ((any Error)?) -> Void)
```

## See Also

### Working with items

- [reimportItems(below:completionHandler:)](reimportitems%28below_completionhandler_%29.md): Tells the system to reimport the item and its content recursively.
- [evictItem(identifier:completionHandler:)](evictitem%28identifier_completionhandler_%29.md): Asks the system to remove an item from its cache.
- [requestDownloadForItem(withIdentifier:requestedRange:)](requestdownloadforitem%28withidentifier_requestedrange_%29.md)
- [requestModification(of:forItemWithIdentifier:options:completionHandler:)](requestmodification%28of_foritemwithidentifier_options_completionhandler_%29.md)
- [enumeratorForMaterializedItems()](enumeratorformaterializeditems%28%29.md): Returns an enumerator for all the items the system currently stores on disk.
- [enumeratorForPendingItems()](enumeratorforpendingitems%28%29.md): Returns an enumerator for the set of pending items.
