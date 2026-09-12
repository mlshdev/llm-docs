> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkactivitysummaryquery](https://developer.apple.com/documentation/healthkit/hkactivitysummaryquery)

# HKActivitySummaryQuery (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A query for reading activity summary objects from the HealthKit store.

## Declaration

```swift
class HKActivitySummaryQuery
```

<a id="overview"></a>

## Overview

Activity summary query objects are mostly immutable. You can assign the query’s [updateHandler](hkactivitysummaryquery/updatehandler.md) property after instantiating the object, but before executing the query. All other properties must be set when you instantiate the object, and they can’t change.

## Topics

### Creating activity summary queries

- [Executing Activity Summary Queries](executing-activity-summary-queries.md): Create and run activity summary queries.
- [init(predicate:resultsHandler:)](hkactivitysummaryquery/init%28predicate_resultshandler_%29.md): Initializes a new active summary query.

### Getting property data

- [updateHandler](hkactivitysummaryquery/updatehandler.md): The handler for monitoring updates to activity summaries saved in the HealthKit store.

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
- [HKAnchoredObjectQueryDescriptor](hkanchoredobjectquerydescriptor.md): A query interface that runs anchored object queries using Swift concurrency.
- [HKAnchoredObjectQuery](hkanchoredobjectquery.md): A query that returns changes to the HealthKit store, including a snapshot of new changes and continuous monitoring as a long-running query.
- [HKObserverQuery](hkobserverquery.md): A long-running query that monitors the HealthKit store and updates your app when the HealthKit store saves or deletes a matching sample.

# HKActivitySummaryQuery (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.2+

A query for reading activity summary objects from the HealthKit store.

## Declaration

```objectivec
@interface HKActivitySummaryQuery : HKQuery
```

<a id="overview"></a>

## Overview

Activity summary query objects are mostly immutable. You can assign the query’s [updateHandler](hkactivitysummaryquery/updatehandler.md) property after instantiating the object, but before executing the query. All other properties must be set when you instantiate the object, and they can’t change.

## Topics

### Creating activity summary queries

- [Executing Activity Summary Queries](executing-activity-summary-queries.md): Create and run activity summary queries.
- [initWithPredicate:resultsHandler:](hkactivitysummaryquery/init%28predicate_resultshandler_%29.md): Initializes a new active summary query.

### Getting property data

- [updateHandler](hkactivitysummaryquery/updatehandler.md): The handler for monitoring updates to activity summaries saved in the HealthKit store.

## Relationships

### Inherits From

- [HKQuery](hkquery.md)

## See Also

### Long-running queries

- [HKAnchoredObjectQuery](hkanchoredobjectquery.md): A query that returns changes to the HealthKit store, including a snapshot of new changes and continuous monitoring as a long-running query.
- [HKObserverQuery](hkobserverquery.md): A long-running query that monitors the HealthKit store and updates your app when the HealthKit store saves or deletes a matching sample.
