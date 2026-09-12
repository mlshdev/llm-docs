> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nscoredatacorespotlightdelegate/searchableindex(_:reindexallsearchableitemswithacknowledgementhandler:)](https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate/searchableindex(_:reindexallsearchableitemswithacknowledgementhandler:))

# searchableIndex(\_:reindexAllSearchableItemsWithAcknowledgementHandler:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Reindexes all searchable items and clears any local state.

## Declaration

```swift
func searchableIndex(_ searchableIndex: CSSearchableIndex, reindexAllSearchableItemsWithAcknowledgementHandler acknowledgementHandler: @escaping () -> Void)
```

## Parameters

- `searchableIndex`: The index that requires reindexing.
- `acknowledgementHandler`: The handler to call when you finish saving client state information.

<a id="Discussion"></a>

## Discussion

For more information, see [searchableIndex(\_:reindexAllSearchableItemsWithAcknowledgementHandler:)](../../corespotlight/cssearchableindexdelegate/searchableindex%28__reindexallsearchableitemswithacknowledgementhandler_%29.md).

## See Also

### Updating the Index

- [indexDidUpdateNotification](indexdidupdatenotification.md): The notification the delegate posts after Spotlight updates the index.
- [searchableIndex(\_:reindexSearchableItemsWithIdentifiers:acknowledgementHandler:)](searchableindex%28__reindexsearchableitemswithidentifiers_acknowledgementhandler_%29.md): Reindexes the searchable items for the specified identifiers.

# searchableIndex:reindexAllSearchableItemsWithAcknowledgementHandler: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Reindexes all searchable items and clears any local state.

## Declaration

```objectivec
- (void) searchableIndex:(CSSearchableIndex *) searchableIndex reindexAllSearchableItemsWithAcknowledgementHandler:(void (^)()) acknowledgementHandler;
```

## Parameters

- `searchableIndex`: The index that requires reindexing.
- `acknowledgementHandler`: The handler to call when you finish saving client state information.

<a id="Discussion"></a>

## Discussion

For more information, see [searchableIndex:reindexAllSearchableItemsWithAcknowledgementHandler:](../../corespotlight/cssearchableindexdelegate/searchableindex%28__reindexallsearchableitemswithacknowledgementhandler_%29.md).

## See Also

### Updating the Index

- [searchableIndex:reindexSearchableItemsWithIdentifiers:acknowledgementHandler:](searchableindex%28__reindexsearchableitemswithidentifiers_acknowledgementhandler_%29.md): Reindexes the searchable items for the specified identifiers.
