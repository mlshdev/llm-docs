> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionactivitymanager/queryactivitystarting(from:to:to:withhandler:)](https://developer.apple.com/documentation/coremotion/cmmotionactivitymanager/queryactivitystarting(from:to:to:withhandler:))

# queryActivityStarting(from:to:to:withHandler:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Gathers and returns historical motion data for the specified time period

## Declaration

```swift
func queryActivityStarting(from start: Date, to end: Date, to queue: OperationQueue, withHandler handler: @escaping CMMotionActivityQueryHandler)
```

## Parameters

- `start`: The start time to use when gathering motion data. This parameter must not be `nil`.
- `end`: The end time to use when gathering motion data. This parameter must not be `nil`.
- `queue`: The operation queue on which to execute the specified `handler` block. You can specify a custom queue or use the operation queue associated with your app’s main thread. This parameter must not be `nil`.
- `handler`: The block to execute with the results. For information about the parameters of this block, see [CMMotionActivityQueryHandler](../cmmotionactivityqueryhandler.md). This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method runs asynchronously, returning immediately and delivering the results to the specified `handler` block. A delay of up to several minutes in reported activities is expected.

The system stores only the last seven days worth of activity data at most. If there are no samples for the specified range of time, an error object with the code [CMErrorUnknown](../cmerrorunknown.md) is passed to the `handler` block.

## See Also

### Getting Historical Activity Data

- [CMMotionActivityQueryHandler](../cmmotionactivityqueryhandler.md): A block that reports the motion updates that occurred between the specified query interval.

# queryActivityStartingFromDate:toDate:toQueue:withHandler: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Gathers and returns historical motion data for the specified time period

## Declaration

```objectivec
- (void) queryActivityStartingFromDate:(NSDate *) start toDate:(NSDate *) end toQueue:(NSOperationQueue *) queue withHandler:(CMMotionActivityQueryHandler) handler;
```

## Parameters

- `start`: The start time to use when gathering motion data. This parameter must not be `nil`.
- `end`: The end time to use when gathering motion data. This parameter must not be `nil`.
- `queue`: The operation queue on which to execute the specified `handler` block. You can specify a custom queue or use the operation queue associated with your app’s main thread. This parameter must not be `nil`.
- `handler`: The block to execute with the results. For information about the parameters of this block, see [CMMotionActivityQueryHandler](../cmmotionactivityqueryhandler.md). This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method runs asynchronously, returning immediately and delivering the results to the specified `handler` block. A delay of up to several minutes in reported activities is expected.

The system stores only the last seven days worth of activity data at most. If there are no samples for the specified range of time, an error object with the code [CMErrorUnknown](../cmerrorunknown.md) is passed to the `handler` block.

## See Also

### Getting Historical Activity Data

- [CMMotionActivityQueryHandler](../cmmotionactivityqueryhandler.md): A block that reports the motion updates that occurred between the specified query interval.
