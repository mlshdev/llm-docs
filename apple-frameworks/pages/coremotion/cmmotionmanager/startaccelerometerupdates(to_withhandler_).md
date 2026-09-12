> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/startaccelerometerupdates(to:withhandler:)](https://developer.apple.com/documentation/coremotion/cmmotionmanager/startaccelerometerupdates(to:withhandler:))

# startAccelerometerUpdates(to:withHandler:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Starts accelerometer updates on an operation queue and with a specified handler.

## Declaration

```swift
func startAccelerometerUpdates(to queue: OperationQueue, withHandler handler: @escaping CMAccelerometerHandler)
```

## Parameters

- `queue`: An operation queue provided by the caller. Because the processed events might arrive at a high rate, using the main operation queue is not recommended.
- `handler`: A block that is invoked with each update to handle new accelerometer data. The block must conform to the [CMAccelerometerHandler](../cmaccelerometerhandler.md) type.

## Mentioned In

- [Getting raw accelerometer events](../getting-raw-accelerometer-events.md)

<a id="Discussion"></a>

## Discussion

You must call [stopAccelerometerUpdates()](stopaccelerometerupdates%28%29.md) when you no longer want your app to process accelerometer updates.

## See Also

### Managing Accelerometer Updates

- [accelerometerUpdateInterval](accelerometerupdateinterval.md): The interval, in seconds, for providing accelerometer updates to the block handler.
- [startAccelerometerUpdates()](startaccelerometerupdates%28%29.md): Starts accelerometer updates without a handler.
- [stopAccelerometerUpdates()](stopaccelerometerupdates%28%29.md): Stops accelerometer updates.
- [accelerometerData](accelerometerdata.md): The latest sample of accelerometer data.
- [CMAccelerometerHandler](../cmaccelerometerhandler.md): The type of block callback for handling accelerometer data.

# startAccelerometerUpdatesToQueue:withHandler: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Starts accelerometer updates on an operation queue and with a specified handler.

## Declaration

```objectivec
- (void) startAccelerometerUpdatesToQueue:(NSOperationQueue *) queue withHandler:(CMAccelerometerHandler) handler;
```

## Parameters

- `queue`: An operation queue provided by the caller. Because the processed events might arrive at a high rate, using the main operation queue is not recommended.
- `handler`: A block that is invoked with each update to handle new accelerometer data. The block must conform to the [CMAccelerometerHandler](../cmaccelerometerhandler.md) type.

## Mentioned In

- [Getting raw accelerometer events](../getting-raw-accelerometer-events.md)

<a id="Discussion"></a>

## Discussion

You must call [stopAccelerometerUpdates](stopaccelerometerupdates%28%29.md) when you no longer want your app to process accelerometer updates.

## See Also

### Managing Accelerometer Updates

- [accelerometerUpdateInterval](accelerometerupdateinterval.md): The interval, in seconds, for providing accelerometer updates to the block handler.
- [startAccelerometerUpdates](startaccelerometerupdates%28%29.md): Starts accelerometer updates without a handler.
- [stopAccelerometerUpdates](stopaccelerometerupdates%28%29.md): Stops accelerometer updates.
- [accelerometerData](accelerometerdata.md): The latest sample of accelerometer data.
- [CMAccelerometerHandler](../cmaccelerometerhandler.md): The type of block callback for handling accelerometer data.
