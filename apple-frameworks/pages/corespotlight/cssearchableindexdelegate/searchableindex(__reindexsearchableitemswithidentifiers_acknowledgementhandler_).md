> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindexdelegate/searchableindex(_:reindexsearchableitemswithidentifiers:acknowledgementhandler:)](https://developer.apple.com/documentation/corespotlight/cssearchableindexdelegate/searchableindex(_:reindexsearchableitemswithidentifiers:acknowledgementhandler:))

# searchableIndex(\_:reindexSearchableItemsWithIdentifiers:acknowledgementHandler:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Tells the delegate to reindex the searchable items associated with the specified identifiers.

## Declaration

```swift
func searchableIndex(_ searchableIndex: CSSearchableIndex, reindexSearchableItemsWithIdentifiers identifiers: [String], acknowledgementHandler: @escaping () -> Void)
```

## Parameters

- `searchableIndex`: The index in which to reindex the specified searchable data. To update the state of the items, the delegate or app extension should call [indexSearchableItems(\_:completionHandler:)](../cssearchableindex/indexsearchableitems%28__completionhandler_%29.md) passing in `searchableIndex`.
- `identifiers`: An array of identifiers that specify searchable items.
- `acknowledgementHandler`: The handler to call after all client state has been saved. Note that if the app passes client state information in a batch (for example, by calling [endBatch(withClientState:completionHandler:)](../cssearchableindex/endbatch%28withclientstate_completionhandler_%29.md)), the acknowledgement handler can be called immediately.

  The delegate or app extension must call the acknowledgement handler after all client state information has been saved, so that the indexer can call this method again in case of a crash.

<a id="Discussion"></a>

## Discussion

An app extension should not use the index passed in `searchableIndex` when a custom data protection class is needed.

## See Also

### Updating the index

- [searchableIndex(\_:reindexAllSearchableItemsWithAcknowledgementHandler:)](searchableindex%28__reindexallsearchableitemswithacknowledgementhandler_%29.md): Tells the delegate to reindex all searchable data and clear all local state information.
- [searchableItemsDidUpdate(\_:)](searchableitemsdidupdate%28__%29.md): Tells the delegate that the framework updated the specified items.

# searchableIndex:reindexSearchableItemsWithIdentifiers:acknowledgementHandler: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Tells the delegate to reindex the searchable items associated with the specified identifiers.

## Declaration

```objectivec
- (void) searchableIndex:(CSSearchableIndex *) searchableIndex reindexSearchableItemsWithIdentifiers:(NSArray<NSString *> *) identifiers acknowledgementHandler:(void (^)()) acknowledgementHandler;
```

## Parameters

- `searchableIndex`: The index in which to reindex the specified searchable data. To update the state of the items, the delegate or app extension should call [indexSearchableItems:completionHandler:](../cssearchableindex/indexsearchableitems%28__completionhandler_%29.md) passing in `searchableIndex`.
- `identifiers`: An array of identifiers that specify searchable items.
- `acknowledgementHandler`: The handler to call after all client state has been saved. Note that if the app passes client state information in a batch (for example, by calling [endIndexBatchWithClientState:completionHandler:](../cssearchableindex/endbatch%28withclientstate_completionhandler_%29.md)), the acknowledgement handler can be called immediately.

  The delegate or app extension must call the acknowledgement handler after all client state information has been saved, so that the indexer can call this method again in case of a crash.

<a id="Discussion"></a>

## Discussion

An app extension should not use the index passed in `searchableIndex` when a custom data protection class is needed.

## See Also

### Updating the index

- [searchableIndex:reindexAllSearchableItemsWithAcknowledgementHandler:](searchableindex%28__reindexallsearchableitemswithacknowledgementhandler_%29.md): Tells the delegate to reindex all searchable data and clear all local state information.
- [searchableItemsDidUpdate:](searchableitemsdidupdate%28__%29.md): Tells the delegate that the framework updated the specified items.
