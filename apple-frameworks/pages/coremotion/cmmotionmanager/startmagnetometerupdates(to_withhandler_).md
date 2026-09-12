> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/startmagnetometerupdates(to:withhandler:)](https://developer.apple.com/documentation/coremotion/cmmotionmanager/startmagnetometerupdates(to:withhandler:))

# startMagnetometerUpdates(to:withHandler:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Starts magnetometer updates on an operation queue and with a specified handler.

## Declaration

```swift
func startMagnetometerUpdates(to queue: OperationQueue, withHandler handler: @escaping CMMagnetometerHandler)
```

## Parameters

- `queue`: An operation queue provided by the caller. Because the processed events might arrive at a high rate, using the main operation queue is not recommended.
- `handler`: A block that is invoked with each update to handle new magnetometer data. The block must conform to the [CMMagnetometerHandler](../cmmagnetometerhandler.md) type.

<a id="Discussion"></a>

## Discussion

You must call [stopMagnetometerUpdates()](stopmagnetometerupdates%28%29.md) when you no longer want your app to process magnetometer updates.

## See Also

### Managing Magnetometer Updates

- [magnetometerUpdateInterval](magnetometerupdateinterval.md): The interval, in seconds, at which the system delivers magnetometer data to the block handler.
- [startMagnetometerUpdates()](startmagnetometerupdates%28%29.md): Starts magnetometer updates without a block handler.
- [stopMagnetometerUpdates()](stopmagnetometerupdates%28%29.md): Stops magnetometer updates.
- [magnetometerData](magnetometerdata.md): The latest sample of magnetometer data.
- [CMMagnetometerHandler](../cmmagnetometerhandler.md): The type of block callback for handling magnetometer data.

# startMagnetometerUpdatesToQueue:withHandler: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Starts magnetometer updates on an operation queue and with a specified handler.

## Declaration

```objectivec
- (void) startMagnetometerUpdatesToQueue:(NSOperationQueue *) queue withHandler:(CMMagnetometerHandler) handler;
```

## Parameters

- `queue`: An operation queue provided by the caller. Because the processed events might arrive at a high rate, using the main operation queue is not recommended.
- `handler`: A block that is invoked with each update to handle new magnetometer data. The block must conform to the [CMMagnetometerHandler](../cmmagnetometerhandler.md) type.

<a id="Discussion"></a>

## Discussion

You must call [stopMagnetometerUpdates](stopmagnetometerupdates%28%29.md) when you no longer want your app to process magnetometer updates.

## See Also

### Managing Magnetometer Updates

- [magnetometerUpdateInterval](magnetometerupdateinterval.md): The interval, in seconds, at which the system delivers magnetometer data to the block handler.
- [startMagnetometerUpdates](startmagnetometerupdates%28%29.md): Starts magnetometer updates without a block handler.
- [stopMagnetometerUpdates](stopmagnetometerupdates%28%29.md): Stops magnetometer updates.
- [magnetometerData](magnetometerdata.md): The latest sample of magnetometer data.
- [CMMagnetometerHandler](../cmmagnetometerhandler.md): The type of block callback for handling magnetometer data.
