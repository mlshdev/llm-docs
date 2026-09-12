> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nscoredatacorespotlightdelegate/searchableindex(_:reindexsearchableitemswithidentifiers:acknowledgementhandler:)](https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate/searchableindex(_:reindexsearchableitemswithidentifiers:acknowledgementhandler:))

# searchableIndex(\_:reindexSearchableItemsWithIdentifiers:acknowledgementHandler:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Reindexes the searchable items for the specified identifiers.

## Declaration

```swift
func searchableIndex(_ searchableIndex: CSSearchableIndex, reindexSearchableItemsWithIdentifiers identifiers: [String], acknowledgementHandler: @escaping () -> Void)
```

## Parameters

- `searchableIndex`: The index that contains the items that require reindexing.
- `identifiers`: An array of strings that identify the searchable items.
- `acknowledgementHandler`: The handler to call when you finish saving client state information.

<a id="Discussion"></a>

## Discussion

For more information, see [searchableIndex(\_:reindexSearchableItemsWithIdentifiers:acknowledgementHandler:)](searchableindex%28__reindexsearchableitemswithidentifiers_acknowledgementhandler_%29.md).

## See Also

### Updating the Index

- [indexDidUpdateNotification](indexdidupdatenotification.md): The notification the delegate posts after Spotlight updates the index.
- [searchableIndex(\_:reindexAllSearchableItemsWithAcknowledgementHandler:)](searchableindex%28__reindexallsearchableitemswithacknowledgementhandler_%29.md): Reindexes all searchable items and clears any local state.

# searchableIndex:reindexSearchableItemsWithIdentifiers:acknowledgementHandler: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Reindexes the searchable items for the specified identifiers.

## Declaration

```objectivec
- (void) searchableIndex:(CSSearchableIndex *) searchableIndex reindexSearchableItemsWithIdentifiers:(NSArray<NSString *> *) identifiers acknowledgementHandler:(void (^)()) acknowledgementHandler;
```

## Parameters

- `searchableIndex`: The index that contains the items that require reindexing.
- `identifiers`: An array of strings that identify the searchable items.
- `acknowledgementHandler`: The handler to call when you finish saving client state information.

<a id="Discussion"></a>

## Discussion

For more information, see [searchableIndex:reindexSearchableItemsWithIdentifiers:acknowledgementHandler:](searchableindex%28__reindexsearchableitemswithidentifiers_acknowledgementhandler_%29.md).

## See Also

### Updating the Index

- [searchableIndex:reindexAllSearchableItemsWithAcknowledgementHandler:](searchableindex%28__reindexallsearchableitemswithacknowledgementhandler_%29.md): Reindexes all searchable items and clears any local state.
