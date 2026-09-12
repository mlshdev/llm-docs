> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindexdelegate/searchableitemsdidupdate(_:)](https://developer.apple.com/documentation/corespotlight/cssearchableindexdelegate/searchableitemsdidupdate(_:))

# searchableItemsDidUpdate(\_:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Tells the delegate that the framework updated the specified items.

## Declaration

```swift
optional func searchableItemsDidUpdate(_ items: [CSSearchableItem])
```

## Parameters

- `items`: The updated items.

## Mentioned In

- [Generating summary and priority data for indexed items](../generating-summary-and-priority-data-for-indexed-items.md)

<a id="Discussion"></a>

## Discussion

When the system updates properties of your searchable item’s [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md), it calls this method to notify you that the attributes changed. For example, it calls this method when summary or priority information from Apple Intelligence becomes available. For more information, see [Generating summary and priority data for indexed items](../generating-summary-and-priority-data-for-indexed-items.md).

## See Also

### Updating the index

- [searchableIndex(\_:reindexAllSearchableItemsWithAcknowledgementHandler:)](searchableindex%28__reindexallsearchableitemswithacknowledgementhandler_%29.md): Tells the delegate to reindex all searchable data and clear all local state information.
- [searchableIndex(\_:reindexSearchableItemsWithIdentifiers:acknowledgementHandler:)](searchableindex%28__reindexsearchableitemswithidentifiers_acknowledgementhandler_%29.md): Tells the delegate to reindex the searchable items associated with the specified identifiers.

# searchableItemsDidUpdate: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Tells the delegate that the framework updated the specified items.

## Declaration

```objectivec
- (void) searchableItemsDidUpdate:(NSArray<CSSearchableItem *> *) items;
```

## Parameters

- `items`: The updated items.

## Mentioned In

- [Generating summary and priority data for indexed items](../generating-summary-and-priority-data-for-indexed-items.md)

<a id="Discussion"></a>

## Discussion

When the system updates properties of your searchable item’s [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md), it calls this method to notify you that the attributes changed. For example, it calls this method when summary or priority information from Apple Intelligence becomes available. For more information, see [Generating summary and priority data for indexed items](../generating-summary-and-priority-data-for-indexed-items.md).

## See Also

### Updating the index

- [searchableIndex:reindexAllSearchableItemsWithAcknowledgementHandler:](searchableindex%28__reindexallsearchableitemswithacknowledgementhandler_%29.md): Tells the delegate to reindex all searchable data and clear all local state information.
- [searchableIndex:reindexSearchableItemsWithIdentifiers:acknowledgementHandler:](searchableindex%28__reindexsearchableitemswithidentifiers_acknowledgementhandler_%29.md): Tells the delegate to reindex the searchable items associated with the specified identifiers.
