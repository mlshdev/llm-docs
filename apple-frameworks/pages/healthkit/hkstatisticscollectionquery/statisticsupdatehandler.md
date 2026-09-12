> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatisticscollectionquery/statisticsupdatehandler](https://developer.apple.com/documentation/healthkit/hkstatisticscollectionquery/statisticsupdatehandler)

# statisticsUpdateHandler (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The results handler for monitoring updates to the HealthKit store.

## Declaration

```swift
var statisticsUpdateHandler: (@Sendable (HKStatisticsCollectionQuery, HKStatistics?, HKStatisticsCollection?, (any Error)?) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is set to `nil`, the statistics collection query will automatically stop as soon as it has finished calculating the initial results. If this property is not `nil`, the query behaves similarly to the observer query. It continues to run, monitoring the HealthKit store. If any new, matching samples are saved to the store—or if any of the existing matching samples are deleted from the store—the query executes the update handler on a background queue.

## See Also

### Getting and Setting Results Handlers

- [initialResultsHandler](initialresultshandler.md): The results handler for the query’s initial results.

# statisticsUpdateHandler (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The results handler for monitoring updates to the HealthKit store.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^statisticsUpdateHandler)(HKStatisticsCollectionQuery *query, HKStatistics *statistics, HKStatisticsCollection *collection, NSError *error);
```

<a id="Discussion"></a>

## Discussion

If this property is set to `nil`, the statistics collection query will automatically stop as soon as it has finished calculating the initial results. If this property is not `nil`, the query behaves similarly to the observer query. It continues to run, monitoring the HealthKit store. If any new, matching samples are saved to the store—or if any of the existing matching samples are deleted from the store—the query executes the update handler on a background queue.

## See Also

### Getting and Setting Results Handlers

- [initialResultsHandler](initialresultshandler.md): The results handler for the query’s initial results.
