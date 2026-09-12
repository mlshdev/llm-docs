> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmaccelerometerhandler](https://developer.apple.com/documentation/coremotion/cmaccelerometerhandler)

# CMAccelerometerHandler (Swift)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The type of block callback for handling accelerometer data.

## Declaration

```swift
typealias CMAccelerometerHandler = (CMAccelerometerData?, (any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

Blocks of type `CMAccelerometerHandler` are called when there is accelerometer data to process. You pass the block into [startAccelerometerUpdates(to:withHandler:)](cmmotionmanager/startaccelerometerupdates%28to_withhandler_%29.md) as the second argument. Blocks of this type return no value but take two arguments:

- **`accelerometerData`**: An object that encapsulates a [CMAcceleration](cmacceleration.md) structure with fields holding acceleration values for the three axes of movement.
- **`error`**: An error object representing an error encountered in providing accelerometer updates. If an error occurs, you should stop accelerometer updates and inform the user of the problem. If there is no error, this argument is `nil`. Core Motion errors are of the [CMErrorDomain](cmerrordomain.md) domain and the [CMError](cmerror.md) type.

## See Also

### Managing Accelerometer Updates

- [accelerometerUpdateInterval](cmmotionmanager/accelerometerupdateinterval.md): The interval, in seconds, for providing accelerometer updates to the block handler.
- [startAccelerometerUpdates(to:withHandler:)](cmmotionmanager/startaccelerometerupdates%28to_withhandler_%29.md): Starts accelerometer updates on an operation queue and with a specified handler.
- [startAccelerometerUpdates()](cmmotionmanager/startaccelerometerupdates%28%29.md): Starts accelerometer updates without a handler.
- [stopAccelerometerUpdates()](cmmotionmanager/stopaccelerometerupdates%28%29.md): Stops accelerometer updates.
- [accelerometerData](cmmotionmanager/accelerometerdata.md): The latest sample of accelerometer data.

# CMAccelerometerHandler (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The type of block callback for handling accelerometer data.

## Declaration

```objectivec
typedef void (^)(CMAccelerometerData *, NSError *) CMAccelerometerHandler;
```

<a id="Discussion"></a>

## Discussion

Blocks of type `CMAccelerometerHandler` are called when there is accelerometer data to process. You pass the block into [startAccelerometerUpdatesToQueue:withHandler:](cmmotionmanager/startaccelerometerupdates%28to_withhandler_%29.md) as the second argument. Blocks of this type return no value but take two arguments:

- **`accelerometerData`**: An object that encapsulates a [CMAcceleration](cmacceleration.md) structure with fields holding acceleration values for the three axes of movement.
- **`error`**: An error object representing an error encountered in providing accelerometer updates. If an error occurs, you should stop accelerometer updates and inform the user of the problem. If there is no error, this argument is `nil`. Core Motion errors are of the [CMErrorDomain](cmerrordomain.md) domain and the [CMError](cmerror.md) type.

## See Also

### Managing Accelerometer Updates

- [accelerometerUpdateInterval](cmmotionmanager/accelerometerupdateinterval.md): The interval, in seconds, for providing accelerometer updates to the block handler.
- [startAccelerometerUpdatesToQueue:withHandler:](cmmotionmanager/startaccelerometerupdates%28to_withhandler_%29.md): Starts accelerometer updates on an operation queue and with a specified handler.
- [startAccelerometerUpdates](cmmotionmanager/startaccelerometerupdates%28%29.md): Starts accelerometer updates without a handler.
- [stopAccelerometerUpdates](cmmotionmanager/stopaccelerometerupdates%28%29.md): Stops accelerometer updates.
- [accelerometerData](cmmotionmanager/accelerometerdata.md): The latest sample of accelerometer data.
