> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/stop(_:)](https://developer.apple.com/documentation/healthkit/hkhealthstore/stop(_:))

# stop(\_:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Stops a long-running query.

## Declaration

```swift
func stop(_ query: HKQuery)
```

## Parameters

- `query`: Either an [HKObserverQuery](../hkobserverquery.md) instance or an [HKStatisticsCollectionQuery](../hkstatisticscollectionquery.md) instance.

## Mentioned In

- [Executing Observer Queries](../executing-observer-queries.md)
- [Reading route data](../reading-route-data.md)

<a id="Discussion"></a>

## Discussion

Use this method on long-running queries only. Most queries automatically stop after they have gathered the requested data. Long-running queries continue to operate on a background thread, watching the HealthKit store for updates. You can cancel these queries by using this method.

## See Also

### Querying HealthKit data

- [execute(\_:)](execute%28__%29.md): Starts executing the provided query.

# stopQuery: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Stops a long-running query.

## Declaration

```objectivec
- (void) stopQuery:(HKQuery *) query;
```

## Parameters

- `query`: Either an [HKObserverQuery](../hkobserverquery.md) instance or an [HKStatisticsCollectionQuery](../hkstatisticscollectionquery.md) instance.

## Mentioned In

- [Executing Observer Queries](../executing-observer-queries.md)
- [Reading route data](../reading-route-data.md)

<a id="Discussion"></a>

## Discussion

Use this method on long-running queries only. Most queries automatically stop after they have gathered the requested data. Long-running queries continue to operate on a background thread, watching the HealthKit store for updates. You can cancel these queries by using this method.

## See Also

### Querying HealthKit data

- [executeQuery:](execute%28__%29.md): Starts executing the provided query.
