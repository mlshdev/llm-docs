> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindexdelegate](https://developer.apple.com/documentation/corespotlight/cssearchableindexdelegate)

# CSSearchableIndexDelegate (Swift)

**Framework:** Core Spotlight  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A protocol that defines methods a delegate object or app extension uses to handle communication from the on-device index.

## Declaration

```swift
protocol CSSearchableIndexDelegate : NSObjectProtocol
```

## Mentioned In

- [Regenerating your app’s indexes on demand](regenerating-your-app-s-indexes-on-demand.md)

<a id="overview"></a>

## Overview

The `CSSearchableIndexDelegate` protocol defines methods that a delegate object or an app extension can use to handle communication from the on-device index. Apps that are long-running or that perform batch updates to the index should implement the required methods of this protocol in either a delegate object or an app extension.

The index delegate methods are called when there is an issue with the index and more information is needed from an app. For example, the methods can be called when the entire index is lost or there was a failure to process data for some identifiers.

## Topics

### Updating the index

- [searchableIndex(\_:reindexAllSearchableItemsWithAcknowledgementHandler:)](cssearchableindexdelegate/searchableindex%28__reindexallsearchableitemswithacknowledgementhandler_%29.md): Tells the delegate to reindex all searchable data and clear all local state information.
- [searchableIndex(\_:reindexSearchableItemsWithIdentifiers:acknowledgementHandler:)](cssearchableindexdelegate/searchableindex%28__reindexsearchableitemswithidentifiers_acknowledgementhandler_%29.md): Tells the delegate to reindex the searchable items associated with the specified identifiers.
- [searchableItemsDidUpdate(\_:)](cssearchableindexdelegate/searchableitemsdidupdate%28__%29.md): Tells the delegate that the framework updated the specified items.

### Providing data for an item

- [searchableItems(forIdentifiers:searchableItemsHandler:)](cssearchableindexdelegate/searchableitems%28foridentifiers_searchableitemshandler_%29.md): Requests that the delegate provide searchable items for the provided identifiers.
- [searchableItems(forIdentifiers:protectionClass:searchableItemsHandler:)](cssearchableindexdelegate/searchableitems%28foridentifiers_protectionclass_searchableitemshandler_%29.md)
- [data(for:itemIdentifier:typeIdentifier:)](cssearchableindexdelegate/data%28for_itemidentifier_typeidentifier_%29.md): Returns the data for the requested item during a drag-and-drop operation.
- [fileURL(for:itemIdentifier:typeIdentifier:inPlace:)](cssearchableindexdelegate/fileurl%28for_itemidentifier_typeidentifier_inplace_%29.md): Returns a file URL for the requested item during a drag-and-drop operation.

### Monitoring Spotlight status

- [searchableIndexDidThrottle(\_:)](cssearchableindexdelegate/searchableindexdidthrottle%28__%29.md): Tells the delegate that indexing is being throttled.
- [searchableIndexDidFinishThrottle(\_:)](cssearchableindexdelegate/searchableindexdidfinishthrottle%28__%29.md): Tells the delegate that the index throttling has finished.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [CSIndexExtensionRequestHandler](csindexextensionrequesthandler.md)

## See Also

### Indexes

- [Generating summary and priority data for indexed items](generating-summary-and-priority-data-for-indexed-items.md): Summarize mail, message, and audio transcripts or assess the priority of mail and messages using Spotlight and Apple Intelligence.
- [CSSearchableIndex](cssearchableindex.md): An on-device index for your app’s searchable content.
- [CSSearchableIndexDescription](cssearchableindexdescription.md)

# CSSearchableIndexDelegate (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A protocol that defines methods a delegate object or app extension uses to handle communication from the on-device index.

## Declaration

```objectivec
@protocol CSSearchableIndexDelegate <NSObject>
```

## Mentioned In

- [Regenerating your app’s indexes on demand](regenerating-your-app-s-indexes-on-demand.md)

<a id="overview"></a>

## Overview

The `CSSearchableIndexDelegate` protocol defines methods that a delegate object or an app extension can use to handle communication from the on-device index. Apps that are long-running or that perform batch updates to the index should implement the required methods of this protocol in either a delegate object or an app extension.

The index delegate methods are called when there is an issue with the index and more information is needed from an app. For example, the methods can be called when the entire index is lost or there was a failure to process data for some identifiers.

## Topics

### Updating the index

- [searchableIndex:reindexAllSearchableItemsWithAcknowledgementHandler:](cssearchableindexdelegate/searchableindex%28__reindexallsearchableitemswithacknowledgementhandler_%29.md): Tells the delegate to reindex all searchable data and clear all local state information.
- [searchableIndex:reindexSearchableItemsWithIdentifiers:acknowledgementHandler:](cssearchableindexdelegate/searchableindex%28__reindexsearchableitemswithidentifiers_acknowledgementhandler_%29.md): Tells the delegate to reindex the searchable items associated with the specified identifiers.
- [searchableItemsDidUpdate:](cssearchableindexdelegate/searchableitemsdidupdate%28__%29.md): Tells the delegate that the framework updated the specified items.

### Providing data for an item

- [searchableItemsForIdentifiers:searchableItemsHandler:](cssearchableindexdelegate/searchableitems%28foridentifiers_searchableitemshandler_%29.md): Requests that the delegate provide searchable items for the provided identifiers.
- [searchableItemsForIdentifiers:protectionClass:searchableItemsHandler:](cssearchableindexdelegate/searchableitems%28foridentifiers_protectionclass_searchableitemshandler_%29.md)
- [dataForSearchableIndex:itemIdentifier:typeIdentifier:error:](cssearchableindexdelegate/data%28for_itemidentifier_typeidentifier_%29.md): Returns the data for the requested item during a drag-and-drop operation.
- [fileURLForSearchableIndex:itemIdentifier:typeIdentifier:inPlace:error:](cssearchableindexdelegate/fileurl%28for_itemidentifier_typeidentifier_inplace_%29.md): Returns a file URL for the requested item during a drag-and-drop operation.

### Monitoring Spotlight status

- [searchableIndexDidThrottle:](cssearchableindexdelegate/searchableindexdidthrottle%28__%29.md): Tells the delegate that indexing is being throttled.
- [searchableIndexDidFinishThrottle:](cssearchableindexdelegate/searchableindexdidfinishthrottle%28__%29.md): Tells the delegate that the index throttling has finished.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [CSIndexExtensionRequestHandler](csindexextensionrequesthandler.md)

## See Also

### Indexes

- [Generating summary and priority data for indexed items](generating-summary-and-priority-data-for-indexed-items.md): Summarize mail, message, and audio transcripts or assess the priority of mail and messages using Spotlight and Apple Intelligence.
- [CSSearchableIndex](cssearchableindex.md): An on-device index for your app’s searchable content.
- [CSSearchableIndexDescription](cssearchableindexdescription.md)
