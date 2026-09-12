> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/requestdownloadforitemwithidentifier:requestedrange:completionhandler:](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/requestdownloadforitemwithidentifier:requestedrange:completionhandler:)

# requestDownloadForItemWithIdentifier:requestedRange:completionHandler:

**Interface language:** Objective-C

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

## Declaration

```objectivec
- (void) requestDownloadForItemWithIdentifier:(NSFileProviderItemIdentifier) itemIdentifier requestedRange:(NSRange) rangeToMaterialize completionHandler:(void (^)(NSError *error)) completionHandler;
```

## See Also

### Working with items

- [reimportItemsBelowItemWithIdentifier:completionHandler:](reimportitems%28below_completionhandler_%29.md): Tells the system to reimport the item and its content recursively.
- [evictItemWithIdentifier:completionHandler:](evictitem%28identifier_completionhandler_%29.md): Asks the system to remove an item from its cache.
- [requestModificationOfFields:forItemWithIdentifier:options:completionHandler:](requestmodification%28of_foritemwithidentifier_options_completionhandler_%29.md)
- [enumeratorForMaterializedItems](enumeratorformaterializeditems%28%29.md): Returns an enumerator for all the items the system currently stores on disk.
- [enumeratorForPendingItems](enumeratorforpendingitems%28%29.md): Returns an enumerator for the set of pending items.
