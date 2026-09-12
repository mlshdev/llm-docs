> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmetadataquery/stop()](https://developer.apple.com/documentation/foundation/nsmetadataquery/stop())

# stop() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Stops the receiver’s current query from gathering any further results.

## Declaration

```swift
func stop()
```

<a id="Discussion"></a>

## Discussion

The receiver first completes gathering any unprocessed results. If a query is stopped before the gathering phase finishes, it does not post an `NSMetadataQueryDidStartGatheringNotification` notification.

You call this function to stop a query that is generating too many results to be useful but you still want to access the available results. If the receiver is sent a `startQuery` message after performing this method, the existing results are discarded.

## See Also

### Running queries

- [isStarted](isstarted.md): A Boolean value that indicates whether the query has started. (read-only)
- [start()](start%28%29.md): Attempts to start the query.
- [isGathering](isgathering.md): A Boolean value that indicates whether the receiver is in the initial gathering phase of the query. (read-only)
- [isStopped](isstopped.md): A Boolean value that indicates whether the query has stopped.

# stopQuery (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Stops the receiver’s current query from gathering any further results.

## Declaration

```objectivec
- (void) stopQuery;
```

<a id="Discussion"></a>

## Discussion

The receiver first completes gathering any unprocessed results. If a query is stopped before the gathering phase finishes, it does not post an `NSMetadataQueryDidStartGatheringNotification` notification.

You call this function to stop a query that is generating too many results to be useful but you still want to access the available results. If the receiver is sent a `startQuery` message after performing this method, the existing results are discarded.

## See Also

### Running queries

- [started](isstarted.md): A Boolean value that indicates whether the query has started. (read-only)
- [startQuery](start%28%29.md): Attempts to start the query.
- [gathering](isgathering.md): A Boolean value that indicates whether the receiver is in the initial gathering phase of the query. (read-only)
- [stopped](isstopped.md): A Boolean value that indicates whether the query has stopped.
