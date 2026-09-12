> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkobserverquery](https://developer.apple.com/documentation/healthkit/hkobserverquery)

# HKObserverQuery (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A long-running query that monitors the HealthKit store and updates your app when the HealthKit store saves or deletes a matching sample.

## Declaration

```swift
class HKObserverQuery
```

## Mentioned In

- [Reading data from HealthKit](reading-data-from-healthkit.md)

<a id="overview"></a>

## Overview

Observer queries set up a long-running task on a background queue. This task watches the HealthKit store, and alerts you when the store saves or removes matching data. Your app uses observer queries to respond to changes made by other apps and devices.

> **Important**

>  Background server queries aren’t supported on the Simulator. Be sure to test your background queries on a device.

Observer queries are immutable: You set their properties when you first create them, and you can’t change them.

## Topics

### Creating Observer Queries

- [Executing Observer Queries](executing-observer-queries.md): Create and run observer queries.
- [init(sampleType:predicate:updateHandler:)](hkobserverquery/init%28sampletype_predicate_updatehandler_%29.md): Instantiates and returns a query that monitors the HealthKit store and responds to changes.
- [init(queryDescriptors:updateHandler:)](hkobserverquery/init%28querydescriptors_updatehandler_%29.md): Creates a query that monitors the HealthKit store and responds to any changes matching any of the query descriptors you provided.
- [HKObserverQueryCompletionHandler](hkobserverquerycompletionhandler.md): The completion handler for background deliveries.

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
- [HKAnchoredObjectQuery](hkanchoredobjectquery.md): A query that returns changes to the HealthKit store, including a snapshot of new changes and continuous monitoring as a long-running query.

# HKObserverQuery (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A long-running query that monitors the HealthKit store and updates your app when the HealthKit store saves or deletes a matching sample.

## Declaration

```objectivec
@interface HKObserverQuery : HKQuery
```

## Mentioned In

- [Reading data from HealthKit](reading-data-from-healthkit.md)

<a id="overview"></a>

## Overview

Observer queries set up a long-running task on a background queue. This task watches the HealthKit store, and alerts you when the store saves or removes matching data. Your app uses observer queries to respond to changes made by other apps and devices.

> **Important**

>  Background server queries aren’t supported on the Simulator. Be sure to test your background queries on a device.

Observer queries are immutable: You set their properties when you first create them, and you can’t change them.

## Topics

### Creating Observer Queries

- [Executing Observer Queries](executing-observer-queries.md): Create and run observer queries.
- [initWithSampleType:predicate:updateHandler:](hkobserverquery/init%28sampletype_predicate_updatehandler_%29.md): Instantiates and returns a query that monitors the HealthKit store and responds to changes.
- [initWithQueryDescriptors:updateHandler:](hkobserverquery/init%28querydescriptors_updatehandler_%29.md): Creates a query that monitors the HealthKit store and responds to any changes matching any of the query descriptors you provided.
- [HKObserverQueryCompletionHandler](hkobserverquerycompletionhandler.md): The completion handler for background deliveries.

## Relationships

### Inherits From

- [HKQuery](hkquery.md)

## See Also

### Long-running queries

- [HKActivitySummaryQuery](hkactivitysummaryquery.md): A query for reading activity summary objects from the HealthKit store.
- [HKAnchoredObjectQuery](hkanchoredobjectquery.md): A query that returns changes to the HealthKit store, including a snapshot of new changes and continuous monitoring as a long-running query.
