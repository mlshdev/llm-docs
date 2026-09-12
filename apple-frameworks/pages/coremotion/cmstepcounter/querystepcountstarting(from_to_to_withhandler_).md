> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmstepcounter/querystepcountstarting(from:to:to:withhandler:)](https://developer.apple.com/documentation/coremotion/cmstepcounter/querystepcountstarting(from:to:to:withhandler:))

# queryStepCountStarting(from:to:to:withHandler:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Gathers and returns historical step count data for the specified time period.

> Use CMPedometer instead

## Declaration

```swift
func queryStepCountStarting(from start: Date, to end: Date, to queue: OperationQueue, withHandler handler: @escaping CMStepQueryHandler)
```

## Parameters

- `start`: The start time to use when gathering step count data. This parameter must not be `nil`.
- `end`: The end time to use when gathering step count data. This parameter must not be `nil`.
- `queue`: The operation queue on which to execute the specified `handler` block. You can specify a custom queue or use the operation queue associated with your app’s main thread. This parameter must not be `nil`.
- `handler`: The block to execute with the results. For information about the parameters of this block, see [CMStepQueryHandler](../cmstepqueryhandler.md). This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method runs asynchronously, returning immediately and delivering the results to the specified `handler` block. The system stores only the last seven days worth of step data at most. If there are no samples for the specified range of time, a value of 0 is passed to the `handler` block.

## See Also

### Getting Historical Step Counting Data

- [CMStepQueryHandler](../cmstepqueryhandler.md): A block that reports the number of steps for a query operation.

# queryStepCountStartingFrom:to:toQueue:withHandler: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Gathers and returns historical step count data for the specified time period.

> Use CMPedometer instead

## Declaration

```objectivec
- (void) queryStepCountStartingFrom:(NSDate *) start to:(NSDate *) end toQueue:(NSOperationQueue *) queue withHandler:(CMStepQueryHandler) handler;
```

## Parameters

- `start`: The start time to use when gathering step count data. This parameter must not be `nil`.
- `end`: The end time to use when gathering step count data. This parameter must not be `nil`.
- `queue`: The operation queue on which to execute the specified `handler` block. You can specify a custom queue or use the operation queue associated with your app’s main thread. This parameter must not be `nil`.
- `handler`: The block to execute with the results. For information about the parameters of this block, see [CMStepQueryHandler](../cmstepqueryhandler.md). This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method runs asynchronously, returning immediately and delivering the results to the specified `handler` block. The system stores only the last seven days worth of step data at most. If there are no samples for the specified range of time, a value of 0 is passed to the `handler` block.

## See Also

### Getting Historical Step Counting Data

- [CMStepQueryHandler](../cmstepqueryhandler.md): A block that reports the number of steps for a query operation.
