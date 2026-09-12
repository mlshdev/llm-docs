> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkanchoredobjectquery](https://developer.apple.com/documentation/healthkit/hkanchoredobjectquery)

# HKAnchoredObjectQuery (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A query that returns changes to the HealthKit store, including a snapshot of new changes and continuous monitoring as a long-running query.

## Declaration

```swift
class HKAnchoredObjectQuery
```

## Mentioned In

- [About the HealthKit framework](about-the-healthkit-framework.md)
- [Executing Observer Queries](executing-observer-queries.md)
- [Receiving Downhill Skiing and Snowboarding Data](receiving-downhill-skiing-and-snowboarding-data.md)

<a id="overview"></a>

## Overview

Anchored object queries provide an easy way to search for new data in the HealthKit store. An [HKAnchoredObjectQuery](hkanchoredobjectquery.md) returns an anchor value that corresponds to the last sample or deleted object received by that query. Subsequent queries can use this anchor to restrict their results to only newer saved or deleted objects.

Anchored object queries are mostly immutable. You can assign the query’s [updateHandler](hkanchoredobjectquery/updatehandler.md) property after instantiating the object, but you must set all other properties when you instantiate the object. You can’t change them.

<a id="Combine-Snapshots-and-Updates"></a>

### Combine Snapshots and Updates

The anchored object query can combine the abilities of a regular query with a long-running query.

- It grabs a snapshot of the data currently stored in the HealthKit store (like an [HKSampleQuery](hksamplequery.md)).
- It can also perform a long-running query that responds to updates (like an [HKObserverQuery](hkobserverquery.md)).

Often, it’s more efficient to set up and run a single anchored object query than to run separate sample and observer queries. As a result, you may want to use anchored object queries, even when you aren’t using anchors to limit the results. In this case, set the anchor parameter to `nil`.

## Topics

### Creating Anchored Object Queries

- [Executing Anchored Object Queries](executing-anchored-object-queries.md): Create and run an anchored object query.
- [init(type:predicate:anchor:limit:resultsHandler:)](hkanchoredobjectquery/init%28type_predicate_anchor_limit_resultshandler_%29.md): Initializes a new anchored object query.
- [init(queryDescriptors:anchor:limit:resultsHandler:)](hkanchoredobjectquery/init%28querydescriptors_anchor_limit_resultshandler_%29.md): Creates an anchored object query that matches any of the query descriptors you provided.
- [HKObjectQueryNoLimit](hkobjectquerynolimit.md): A value indicating that the query returns all the matching samples in the HealthKit store.
- [init(type:predicate:anchor:limit:completionHandler:)](hkanchoredobjectquery/init%28type_predicate_anchor_limit_completionhandler_%29.md): Deprecated. Initializes a new anchored object query.

### Receiving Updates

- [updateHandler](hkanchoredobjectquery/updatehandler.md): Handler for monitoring updates to the HealthKit store.

### Tracking Anchors

- [HKQueryAnchor](hkqueryanchor.md): An object used to identify all the samples previously returned by an anchored object query.

### Tracking Deleted Objects

- [HKDeletedObject](hkdeletedobject.md): An object that represents a sample that has been deleted from the HealthKit store.

## Relationships

### Inherits From

- [HKQuery](hkquery.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Long-running queries

- [HKActivitySummaryQueryDescriptor](hkactivitysummaryquerydescriptor.md): A query interface that reads activity summaries using Swift concurrency.
- [HKActivitySummaryQuery](hkactivitysummaryquery.md): A query for reading activity summary objects from the HealthKit store.
- [HKAnchoredObjectQueryDescriptor](hkanchoredobjectquerydescriptor.md): A query interface that runs anchored object queries using Swift concurrency.
- [HKObserverQuery](hkobserverquery.md): A long-running query that monitors the HealthKit store and updates your app when the HealthKit store saves or deletes a matching sample.

# HKAnchoredObjectQuery (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A query that returns changes to the HealthKit store, including a snapshot of new changes and continuous monitoring as a long-running query.

## Declaration

```objectivec
@interface HKAnchoredObjectQuery : HKQuery
```

## Mentioned In

- [About the HealthKit framework](about-the-healthkit-framework.md)
- [Executing Observer Queries](executing-observer-queries.md)
- [Receiving Downhill Skiing and Snowboarding Data](receiving-downhill-skiing-and-snowboarding-data.md)

<a id="overview"></a>

## Overview

Anchored object queries provide an easy way to search for new data in the HealthKit store. An [HKAnchoredObjectQuery](hkanchoredobjectquery.md) returns an anchor value that corresponds to the last sample or deleted object received by that query. Subsequent queries can use this anchor to restrict their results to only newer saved or deleted objects.

Anchored object queries are mostly immutable. You can assign the query’s [updateHandler](hkanchoredobjectquery/updatehandler.md) property after instantiating the object, but you must set all other properties when you instantiate the object. You can’t change them.

<a id="Combine-Snapshots-and-Updates"></a>

### Combine Snapshots and Updates

The anchored object query can combine the abilities of a regular query with a long-running query.

- It grabs a snapshot of the data currently stored in the HealthKit store (like an [HKSampleQuery](hksamplequery.md)).
- It can also perform a long-running query that responds to updates (like an [HKObserverQuery](hkobserverquery.md)).

Often, it’s more efficient to set up and run a single anchored object query than to run separate sample and observer queries. As a result, you may want to use anchored object queries, even when you aren’t using anchors to limit the results. In this case, set the anchor parameter to `nil`.

## Topics

### Creating Anchored Object Queries

- [Executing Anchored Object Queries](executing-anchored-object-queries.md): Create and run an anchored object query.
- [initWithType:predicate:anchor:limit:resultsHandler:](hkanchoredobjectquery/init%28type_predicate_anchor_limit_resultshandler_%29.md): Initializes a new anchored object query.
- [initWithQueryDescriptors:anchor:limit:resultsHandler:](hkanchoredobjectquery/init%28querydescriptors_anchor_limit_resultshandler_%29.md): Creates an anchored object query that matches any of the query descriptors you provided.
- [HKObjectQueryNoLimit](hkobjectquerynolimit.md): A value indicating that the query returns all the matching samples in the HealthKit store.
- [initWithType:predicate:anchor:limit:completionHandler:](hkanchoredobjectquery/init%28type_predicate_anchor_limit_completionhandler_%29.md): Deprecated. Initializes a new anchored object query.

### Receiving Updates

- [updateHandler](hkanchoredobjectquery/updatehandler.md): Handler for monitoring updates to the HealthKit store.

### Tracking Anchors

- [HKQueryAnchor](hkqueryanchor.md): An object used to identify all the samples previously returned by an anchored object query.

### Tracking Deleted Objects

- [HKDeletedObject](hkdeletedobject.md): An object that represents a sample that has been deleted from the HealthKit store.

## Relationships

### Inherits From

- [HKQuery](hkquery.md)

## See Also

### Long-running queries

- [HKActivitySummaryQuery](hkactivitysummaryquery.md): A query for reading activity summary objects from the HealthKit store.
- [HKObserverQuery](hkobserverquery.md): A long-running query that monitors the HealthKit store and updates your app when the HealthKit store saves or deletes a matching sample.
