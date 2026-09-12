> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindex](https://developer.apple.com/documentation/corespotlight/cssearchableindex)

# CSSearchableIndex (Swift)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An on-device index for your app’s searchable content.

## Declaration

```swift
class CSSearchableIndex
```

## Mentioned In

- [Adding your app’s content to Spotlight indexes](adding-your-app-s-content-to-spotlight-indexes.md)
- [Generating summary and priority data for indexed items](generating-summary-and-priority-data-for-indexed-items.md)

<a id="overview"></a>

## Overview

A `CSSearchableIndex` object manages an on-device index for your app’s searchable content. To make your app’s content searchable, create one or more [CSSearchableItem](cssearchableitem.md) objects for your content and add those items to the index. If your app defines [AppEntity](../appintents/appentity.md) types, you can also index those types directly or associate them with your [CSSearchableItem](cssearchableitem.md) objects. When you execute a query, Core Spotlight searches your indexes for the requested information and returns the results to your code.

Create custom `CSSearchableIndex` objects in your production code to store your app’s content, instead of using the default index. Custom indexes support data protection, which allows you to encrypt your data and protect it from unauthorized access. Custom indexes also support batch operations, which allow you to index large amounts of data more efficiently and with less risk. For example, you can add custom state information to each batch operation to make it easier to restart the indexing process if your app or app extension crashes. Use the default index only during testing or prototyping of your features.

Modify a `CSSearchableIndex` object from only one thread or task at a time, and modify it only from your signed app or app extension. It’s a programming error to access a custom index from multiple threads simultaneously or from an unsigned bundle. When performing batch updates on an index, start each new batch operation only after calling the [endBatch(withClientState:completionHandler:)](cssearchableindex/endbatch%28withclientstate_completionhandler_%29.md) or [endIndexBatch(expectedClientState:newClientState:completionHandler:)](cssearchableindex/endindexbatch%28expectedclientstate_newclientstate_completionhandler_%29.md) method of the previous batch operation.

> **Note**

> If your app creates [NSUserActivity](../foundation/nsuseractivity.md) objects, set the [isEligibleForSearch](../foundation/nsuseractivity/iseligibleforsearch.md) property of those objects to `true` if you want them to appear in search results.

## Topics

### Creating an index

- [default()](cssearchableindex/default%28%29.md): Returns the default on-device index.
- [init(name:)](cssearchableindex/init%28name_%29.md): Returns an on-device index with the specified name.
- [init(name:protectionClass:)](cssearchableindex/init%28name_protectionclass_%29.md): Returns an on-device index with the specified name and data protection class.

### Determining if indexing is available

- [isIndexingAvailable()](cssearchableindex/isindexingavailable%28%29.md): Returns a Boolean value that indicates whether indexing is available on the current device.

### Responding to index-related changes

- [CSSearchableIndexDelegate](cssearchableindexdelegate.md): A protocol that defines methods a delegate object or app extension uses to handle communication from the on-device index.
- [indexDelegate](cssearchableindex/indexdelegate.md): The delegate object that can handle index-management tasks.

### Managing items in an index

- [indexSearchableItems(\_:completionHandler:)](cssearchableindex/indexsearchableitems%28__completionhandler_%29.md): Adds or updates items in the index.
- [deleteAllSearchableItems(completionHandler:)](cssearchableindex/deleteallsearchableitems%28completionhandler_%29.md): Deletes all searchable items from the index.
- [deleteSearchableItems(withDomainIdentifiers:completionHandler:)](cssearchableindex/deletesearchableitems%28withdomainidentifiers_completionhandler_%29.md): Removes from the index all searchable items associated with the specified domain.
- [deleteSearchableItems(withIdentifiers:completionHandler:)](cssearchableindex/deletesearchableitems%28withidentifiers_completionhandler_%29.md): Removes from the index all items with the specified identifiers.

### Indexing app entities

- [indexAppEntities(\_:priority:)](cssearchableindex/indexappentities%28__priority_%29.md): Indexes one or more app entities and assigns an optional priority to them.
- [deleteAppEntities(ofType:)](cssearchableindex/deleteappentities%28oftype_%29.md): Deletes all app entities of the specified type from the current index.
- [deleteAppEntities(identifiedBy:ofType:)](cssearchableindex/deleteappentities%28identifiedby_oftype_%29.md): Deletes entities with the specified identifiers and type from the current index.

### Batching index updates

- [beginBatch()](cssearchableindex/beginbatch%28%29.md): Begins a batch of updates to an index.
- [endBatch(withClientState:completionHandler:)](cssearchableindex/endbatch%28withclientstate_completionhandler_%29.md): Ends a batch of index updates and stores the specified state information.
- [endIndexBatch(expectedClientState:newClientState:completionHandler:)](cssearchableindex/endindexbatch%28expectedclientstate_newclientstate_completionhandler_%29.md): Ends a batch of index updates and stores the specified state information.
- [fetchLastClientState(completionHandler:)](cssearchableindex/fetchlastclientstate%28completionhandler_%29.md): Fetches the app’s most recent client state information asynchronously.

### Handling drag and drop content

- [fetchData(forBundleIdentifier:itemIdentifier:contentType:completionHandler:)](cssearchableindex/fetchdata%28forbundleidentifier_itemidentifier_contenttype_completionhandler_%29.md): Fetches data from an external provider.

### Getting the protection class

- [protectionClass](cssearchableindex/protectionclass.md)

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

### Indexes

- [Generating summary and priority data for indexed items](generating-summary-and-priority-data-for-indexed-items.md): Summarize mail, message, and audio transcripts or assess the priority of mail and messages using Spotlight and Apple Intelligence.
- [CSSearchableIndexDelegate](cssearchableindexdelegate.md): A protocol that defines methods a delegate object or app extension uses to handle communication from the on-device index.
- [CSSearchableIndexDescription](cssearchableindexdescription.md)

# CSSearchableIndex (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An on-device index for your app’s searchable content.

## Declaration

```objectivec
@interface CSSearchableIndex : NSObject
```

## Mentioned In

- [Adding your app’s content to Spotlight indexes](adding-your-app-s-content-to-spotlight-indexes.md)
- [Generating summary and priority data for indexed items](generating-summary-and-priority-data-for-indexed-items.md)

<a id="overview"></a>

## Overview

A `CSSearchableIndex` object manages an on-device index for your app’s searchable content. To make your app’s content searchable, create one or more [CSSearchableItem](cssearchableitem.md) objects for your content and add those items to the index. If your app defines [AppEntity](../appintents/appentity.md) types, you can also index those types directly or associate them with your [CSSearchableItem](cssearchableitem.md) objects. When you execute a query, Core Spotlight searches your indexes for the requested information and returns the results to your code.

Create custom `CSSearchableIndex` objects in your production code to store your app’s content, instead of using the default index. Custom indexes support data protection, which allows you to encrypt your data and protect it from unauthorized access. Custom indexes also support batch operations, which allow you to index large amounts of data more efficiently and with less risk. For example, you can add custom state information to each batch operation to make it easier to restart the indexing process if your app or app extension crashes. Use the default index only during testing or prototyping of your features.

Modify a `CSSearchableIndex` object from only one thread or task at a time, and modify it only from your signed app or app extension. It’s a programming error to access a custom index from multiple threads simultaneously or from an unsigned bundle. When performing batch updates on an index, start each new batch operation only after calling the [endIndexBatchWithClientState:completionHandler:](cssearchableindex/endbatch%28withclientstate_completionhandler_%29.md) or [endIndexBatchWithExpectedClientState:newClientState:completionHandler:](cssearchableindex/endindexbatch%28expectedclientstate_newclientstate_completionhandler_%29.md) method of the previous batch operation.

> **Note**

> If your app creates [NSUserActivity](../foundation/nsuseractivity.md) objects, set the [eligibleForSearch](../foundation/nsuseractivity/iseligibleforsearch.md) property of those objects to `true` if you want them to appear in search results.

## Topics

### Creating an index

- [defaultSearchableIndex](cssearchableindex/default%28%29.md): Returns the default on-device index.
- [initWithName:](cssearchableindex/init%28name_%29.md): Returns an on-device index with the specified name.
- [initWithName:protectionClass:](cssearchableindex/init%28name_protectionclass_%29.md): Returns an on-device index with the specified name and data protection class.

### Determining if indexing is available

- [isIndexingAvailable](cssearchableindex/isindexingavailable%28%29.md): Returns a Boolean value that indicates whether indexing is available on the current device.

### Responding to index-related changes

- [CSSearchableIndexDelegate](cssearchableindexdelegate.md): A protocol that defines methods a delegate object or app extension uses to handle communication from the on-device index.
- [indexDelegate](cssearchableindex/indexdelegate.md): The delegate object that can handle index-management tasks.

### Managing items in an index

- [indexSearchableItems:completionHandler:](cssearchableindex/indexsearchableitems%28__completionhandler_%29.md): Adds or updates items in the index.
- [deleteAllSearchableItemsWithCompletionHandler:](cssearchableindex/deleteallsearchableitems%28completionhandler_%29.md): Deletes all searchable items from the index.
- [deleteSearchableItemsWithDomainIdentifiers:completionHandler:](cssearchableindex/deletesearchableitems%28withdomainidentifiers_completionhandler_%29.md): Removes from the index all searchable items associated with the specified domain.
- [deleteSearchableItemsWithIdentifiers:completionHandler:](cssearchableindex/deletesearchableitems%28withidentifiers_completionhandler_%29.md): Removes from the index all items with the specified identifiers.

### Batching index updates

- [beginIndexBatch](cssearchableindex/beginbatch%28%29.md): Begins a batch of updates to an index.
- [endIndexBatchWithClientState:completionHandler:](cssearchableindex/endbatch%28withclientstate_completionhandler_%29.md): Ends a batch of index updates and stores the specified state information.
- [endIndexBatchWithExpectedClientState:newClientState:completionHandler:](cssearchableindex/endindexbatch%28expectedclientstate_newclientstate_completionhandler_%29.md): Ends a batch of index updates and stores the specified state information.
- [fetchLastClientStateWithCompletionHandler:](cssearchableindex/fetchlastclientstate%28completionhandler_%29.md): Fetches the app’s most recent client state information asynchronously.

### Handling drag and drop content

- [fetchDataForBundleIdentifier:itemIdentifier:contentType:completionHandler:](cssearchableindex/fetchdata%28forbundleidentifier_itemidentifier_contenttype_completionhandler_%29.md): Fetches data from an external provider.

### Getting the protection class

- [protectionClass](cssearchableindex/protectionclass.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Indexes

- [Generating summary and priority data for indexed items](generating-summary-and-priority-data-for-indexed-items.md): Summarize mail, message, and audio transcripts or assess the priority of mail and messages using Spotlight and Apple Intelligence.
- [CSSearchableIndexDelegate](cssearchableindexdelegate.md): A protocol that defines methods a delegate object or app extension uses to handle communication from the on-device index.
- [CSSearchableIndexDescription](cssearchableindexdescription.md)
