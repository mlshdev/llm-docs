> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/startgyroupdates(to:withhandler:)](https://developer.apple.com/documentation/coremotion/cmmotionmanager/startgyroupdates(to:withhandler:))

# startGyroUpdates(to:withHandler:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Starts gyroscope updates on an operation queue and with a specified handler.

## Declaration

```swift
func startGyroUpdates(to queue: OperationQueue, withHandler handler: @escaping CMGyroHandler)
```

## Parameters

- `queue`: An operation queue provided by the caller. Because the processed events might arrive at a high rate, using the main operation queue is not recommended.
- `handler`: A block that is invoked with each update to handle new gyroscope data. The block must conform to the [CMGyroHandler](../cmgyrohandler.md) type.

## Mentioned In

- [Getting raw gyroscope events](../getting-raw-gyroscope-events.md)

<a id="Discussion"></a>

## Discussion

You must call [stopGyroUpdates()](stopgyroupdates%28%29.md) when you no longer want your app to process gyroscope updates.

## See Also

### Managing Gyroscope Updates

- [gyroUpdateInterval](gyroupdateinterval.md): The interval, in seconds, for providing gyroscope updates to the block handler.
- [startGyroUpdates()](startgyroupdates%28%29.md): Starts gyroscope updates without a handler.
- [stopGyroUpdates()](stopgyroupdates%28%29.md): Stops gyroscope updates.
- [gyroData](gyrodata.md): The latest sample of gyroscope data.
- [CMGyroHandler](../cmgyrohandler.md): The type of block callback for handling gyroscope data.

# startGyroUpdatesToQueue:withHandler: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Starts gyroscope updates on an operation queue and with a specified handler.

## Declaration

```objectivec
- (void) startGyroUpdatesToQueue:(NSOperationQueue *) queue withHandler:(CMGyroHandler) handler;
```

## Parameters

- `queue`: An operation queue provided by the caller. Because the processed events might arrive at a high rate, using the main operation queue is not recommended.
- `handler`: A block that is invoked with each update to handle new gyroscope data. The block must conform to the [CMGyroHandler](../cmgyrohandler.md) type.

## Mentioned In

- [Getting raw gyroscope events](../getting-raw-gyroscope-events.md)

<a id="Discussion"></a>

## Discussion

You must call [stopGyroUpdates](stopgyroupdates%28%29.md) when you no longer want your app to process gyroscope updates.

## See Also

### Managing Gyroscope Updates

- [gyroUpdateInterval](gyroupdateinterval.md): The interval, in seconds, for providing gyroscope updates to the block handler.
- [startGyroUpdates](startgyroupdates%28%29.md): Starts gyroscope updates without a handler.
- [stopGyroUpdates](stopgyroupdates%28%29.md): Stops gyroscope updates.
- [gyroData](gyrodata.md): The latest sample of gyroscope data.
- [CMGyroHandler](../cmgyrohandler.md): The type of block callback for handling gyroscope data.
