> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/execute(_:)](https://developer.apple.com/documentation/healthkit/hkhealthstore/execute(_:))

# execute(\_:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Starts executing the provided query.

## Declaration

```swift
func execute(_ query: HKQuery)
```

## Parameters

- `query`: A concrete subclass of the [HKQuery](../hkquery.md) class (any of the classes [HKSampleQuery](../hksamplequery.md), [HKAnchoredObjectQuery](../hkanchoredobjectquery.md), [HKCorrelationQuery](../hkcorrelationquery.md), [HKObserverQuery](../hkobserverquery.md), [HKSourceQuery](../hksourcequery.md), [HKStatisticsQuery](../hkstatisticsquery.md), or [HKStatisticsCollectionQuery](../hkstatisticscollectionquery.md)).

## Mentioned In

- [Executing Activity Summary Queries](../executing-activity-summary-queries.md)
- [Executing Anchored Object Queries](../executing-anchored-object-queries.md)
- [Executing Observer Queries](../executing-observer-queries.md)
- [Executing Sample Queries](../executing-sample-queries.md)
- [Executing Source Queries](../executing-source-queries.md)
- [Executing Statistical Queries](../executing-statistical-queries.md)
- [Reading route data](../reading-route-data.md)

<a id="Discussion"></a>

## Discussion

HealthKit executes queries asynchronously on a background queue. Most queries automatically stop after they have finished executing. However, long-running queries—such as observer queries and some statistics collection queries—continue to execute in the background. To stop long-running queries, call the [stop(\_:)](stop%28__%29.md) method.

## See Also

### Querying HealthKit data

- [stop(\_:)](stop%28__%29.md): Stops a long-running query.

# executeQuery: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Starts executing the provided query.

## Declaration

```objectivec
- (void) executeQuery:(HKQuery *) query;
```

## Parameters

- `query`: A concrete subclass of the [HKQuery](../hkquery.md) class (any of the classes [HKSampleQuery](../hksamplequery.md), [HKAnchoredObjectQuery](../hkanchoredobjectquery.md), [HKCorrelationQuery](../hkcorrelationquery.md), [HKObserverQuery](../hkobserverquery.md), [HKSourceQuery](../hksourcequery.md), [HKStatisticsQuery](../hkstatisticsquery.md), or [HKStatisticsCollectionQuery](../hkstatisticscollectionquery.md)).

## Mentioned In

- [Executing Activity Summary Queries](../executing-activity-summary-queries.md)
- [Executing Anchored Object Queries](../executing-anchored-object-queries.md)
- [Executing Observer Queries](../executing-observer-queries.md)
- [Executing Sample Queries](../executing-sample-queries.md)
- [Executing Source Queries](../executing-source-queries.md)
- [Executing Statistical Queries](../executing-statistical-queries.md)
- [Reading route data](../reading-route-data.md)

<a id="Discussion"></a>

## Discussion

HealthKit executes queries asynchronously on a background queue. Most queries automatically stop after they have finished executing. However, long-running queries—such as observer queries and some statistics collection queries—continue to execute in the background. To stop long-running queries, call the [stopQuery:](stop%28__%29.md) method.

## See Also

### Querying HealthKit data

- [stopQuery:](stop%28__%29.md): Stops a long-running query.
