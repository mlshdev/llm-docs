> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatisticscollectionquery/initialresultshandler](https://developer.apple.com/documentation/healthkit/hkstatisticscollectionquery/initialresultshandler)

# initialResultsHandler (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The results handler for the query’s initial results.

## Declaration

```swift
var initialResultsHandler: (@Sendable (HKStatisticsCollectionQuery, HKStatisticsCollection?, (any Error)?) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is not set to `nil`, the query executes the results handler on a background queue after it has finished calculating the statistics for all matching samples currently stored in HealthKit.

## See Also

### Getting and Setting Results Handlers

- [statisticsUpdateHandler](statisticsupdatehandler.md): The results handler for monitoring updates to the HealthKit store.

# initialResultsHandler (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The results handler for the query’s initial results.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^initialResultsHandler)(HKStatisticsCollectionQuery *query, HKStatisticsCollection *result, NSError *error);
```

<a id="Discussion"></a>

## Discussion

If this property is not set to `nil`, the query executes the results handler on a background queue after it has finished calculating the statistics for all matching samples currently stored in HealthKit.

## See Also

### Getting and Setting Results Handlers

- [statisticsUpdateHandler](statisticsupdatehandler.md): The results handler for monitoring updates to the HealthKit store.
