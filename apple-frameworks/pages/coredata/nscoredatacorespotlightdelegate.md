> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nscoredatacorespotlightdelegate](https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate)

# NSCoreDataCoreSpotlightDelegate (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

A set of methods that enable integration with Core Spotlight.

## Declaration

```swift
class NSCoreDataCoreSpotlightDelegate
```

<a id="overview"></a>

## Overview

> **Note**

>  Core Spotlight integration is only available for persistent stores that have a store type of [sqlite](nspersistentstore/storetype/sqlite.md), and which use persistent history tracking. For more information, see [Consuming relevant store changes](consuming-relevant-store-changes.md).

## Topics

### Creating a Core Spotlight Delegate

- [init(forStoreWith:coordinator:)](nscoredatacorespotlightdelegate/init%28forstorewith_coordinator_%29.md): Creates a Core Spotlight delegate with the specified store description and coordinator.
- [init(forStoreWith:model:)](nscoredatacorespotlightdelegate/init%28forstorewith_model_%29.md): Deprecated. Creates a Core Spotlight delegate with the specified store description and managed object model.

### Configuring the Index

- [isIndexingEnabled](nscoredatacorespotlightdelegate/isindexingenabled.md): A Boolean value that indicates whether Core Data is currently updating the Core Spotlight index with the persistent store’s entities.
- [domainIdentifier()](nscoredatacorespotlightdelegate/domainidentifier%28%29.md): Returns the domain identifier.
- [indexName()](nscoredatacorespotlightdelegate/indexname%28%29.md): Returns the index’s name.

### Managing the Index

- [attributeSet(for:)](nscoredatacorespotlightdelegate/attributeset%28for_%29.md): Returns the searchable attributes for the specified managed object.
- [deleteSpotlightIndex(completionHandler:)](nscoredatacorespotlightdelegate/deletespotlightindex%28completionhandler_%29.md): Deletes all searchable items from the configured index.
- [startSpotlightIndexing()](nscoredatacorespotlightdelegate/startspotlightindexing%28%29.md): Starts the indexing of the store’s entities.
- [stopSpotlightIndexing()](nscoredatacorespotlightdelegate/stopspotlightindexing%28%29.md): Stops the indexing of the store’s entities.

### Updating the Index

- [indexDidUpdateNotification](nscoredatacorespotlightdelegate/indexdidupdatenotification.md): The notification the delegate posts after Spotlight updates the index.
- [searchableIndex(\_:reindexAllSearchableItemsWithAcknowledgementHandler:)](nscoredatacorespotlightdelegate/searchableindex%28__reindexallsearchableitemswithacknowledgementhandler_%29.md): Reindexes all searchable items and clears any local state.
- [searchableIndex(\_:reindexSearchableItemsWithIdentifiers:acknowledgementHandler:)](nscoredatacorespotlightdelegate/searchableindex%28__reindexsearchableitemswithidentifiers_acknowledgementhandler_%29.md): Reindexes the searchable items for the specified identifiers.

### Structures

- [NSCoreDataCoreSpotlightDelegate.IndexDidUpdateMessage](nscoredatacorespotlightdelegate/indexdidupdatemessage.md): Posted when the Core Spotlight index is updated on a private queue.

### Initializers

- [init(forStoreWithDescription:coordinator:)](nscoredatacorespotlightdelegate/init%28forstorewithdescription_coordinator_%29.md)
- [init(forStoreWithDescription:model:)](nscoredatacorespotlightdelegate/init%28forstorewithdescription_model_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Integrating with Spotlight

- [NSCoreDataCoreSpotlightExporter](nscoredatacorespotlightexporter.md): The key you use to specify your Core Spotlight delegate.
- [Spotlight record keys](spotlight-record-keys.md): The keys for the values that exist in Spotlight’s external record files.
- [Showcase App Data in Spotlight](showcase-app-data-in-spotlight.md): Index app data so users can find it by using Spotlight search.

# NSCoreDataCoreSpotlightDelegate (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

A set of methods that enable integration with Core Spotlight.

## Declaration

```objectivec
@interface NSCoreDataCoreSpotlightDelegate : NSObject
```

<a id="overview"></a>

## Overview

> **Note**

>  Core Spotlight integration is only available for persistent stores that have a store type of [sqlite](nspersistentstore/storetype/sqlite.md), and which use persistent history tracking. For more information, see [Consuming relevant store changes](consuming-relevant-store-changes.md).

## Topics

### Creating a Core Spotlight Delegate

- [initForStoreWithDescription:coordinator:](nscoredatacorespotlightdelegate/init%28forstorewith_coordinator_%29.md): Creates a Core Spotlight delegate with the specified store description and coordinator.
- [initForStoreWithDescription:model:](nscoredatacorespotlightdelegate/init%28forstorewith_model_%29.md): Deprecated. Creates a Core Spotlight delegate with the specified store description and managed object model.

### Configuring the Index

- [indexingEnabled](nscoredatacorespotlightdelegate/isindexingenabled.md): A Boolean value that indicates whether Core Data is currently updating the Core Spotlight index with the persistent store’s entities.
- [domainIdentifier](nscoredatacorespotlightdelegate/domainidentifier%28%29.md): Returns the domain identifier.
- [indexName](nscoredatacorespotlightdelegate/indexname%28%29.md): Returns the index’s name.

### Managing the Index

- [attributeSetForObject:](nscoredatacorespotlightdelegate/attributeset%28for_%29.md): Returns the searchable attributes for the specified managed object.
- [deleteSpotlightIndexWithCompletionHandler:](nscoredatacorespotlightdelegate/deletespotlightindex%28completionhandler_%29.md): Deletes all searchable items from the configured index.
- [startSpotlightIndexing](nscoredatacorespotlightdelegate/startspotlightindexing%28%29.md): Starts the indexing of the store’s entities.
- [stopSpotlightIndexing](nscoredatacorespotlightdelegate/stopspotlightindexing%28%29.md): Stops the indexing of the store’s entities.

### Updating the Index

- [searchableIndex:reindexAllSearchableItemsWithAcknowledgementHandler:](nscoredatacorespotlightdelegate/searchableindex%28__reindexallsearchableitemswithacknowledgementhandler_%29.md): Reindexes all searchable items and clears any local state.
- [searchableIndex:reindexSearchableItemsWithIdentifiers:acknowledgementHandler:](nscoredatacorespotlightdelegate/searchableindex%28__reindexsearchableitemswithidentifiers_acknowledgementhandler_%29.md): Reindexes the searchable items for the specified identifiers.

### Notifications

- [NSCoreDataCoreSpotlightDelegateIndexDidUpdateNotification](nscoredatacorespotlightdelegateindexdidupdatenotification.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Integrating with Spotlight

- [NSCoreDataCoreSpotlightExporter](nscoredatacorespotlightexporter.md): The key you use to specify your Core Spotlight delegate.
- [Spotlight record keys](spotlight-record-keys.md): The keys for the values that exist in Spotlight’s external record files.
- [Showcase App Data in Spotlight](showcase-app-data-in-spotlight.md): Index app data so users can find it by using Spotlight search.
