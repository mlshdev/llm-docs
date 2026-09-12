> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/accelerometerdata](https://developer.apple.com/documentation/coremotion/cmmotionmanager/accelerometerdata)

# accelerometerData (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

The latest sample of accelerometer data.

## Declaration

```swift
var accelerometerData: CMAccelerometerData? { get }
```

## Mentioned In

- [Getting raw accelerometer events](../getting-raw-accelerometer-events.md)

<a id="Discussion"></a>

## Discussion

If no accelerometer data is available, the value of this property is `nil`. An app that is receiving accelerometer data after calling [startAccelerometerUpdates()](startaccelerometerupdates%28%29.md) periodically checks the value of this property and processes the acceleration data.

## See Also

### Managing Accelerometer Updates

- [accelerometerUpdateInterval](accelerometerupdateinterval.md): The interval, in seconds, for providing accelerometer updates to the block handler.
- [startAccelerometerUpdates(to:withHandler:)](startaccelerometerupdates%28to_withhandler_%29.md): Starts accelerometer updates on an operation queue and with a specified handler.
- [startAccelerometerUpdates()](startaccelerometerupdates%28%29.md): Starts accelerometer updates without a handler.
- [stopAccelerometerUpdates()](stopaccelerometerupdates%28%29.md): Stops accelerometer updates.
- [CMAccelerometerHandler](../cmaccelerometerhandler.md): The type of block callback for handling accelerometer data.

# accelerometerData (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

The latest sample of accelerometer data.

## Declaration

```objectivec
@property (readonly, nullable) CMAccelerometerData * accelerometerData;
```

## Mentioned In

- [Getting raw accelerometer events](../getting-raw-accelerometer-events.md)

<a id="Discussion"></a>

## Discussion

If no accelerometer data is available, the value of this property is `nil`. An app that is receiving accelerometer data after calling [startAccelerometerUpdates](startaccelerometerupdates%28%29.md) periodically checks the value of this property and processes the acceleration data.

## See Also

### Managing Accelerometer Updates

- [accelerometerUpdateInterval](accelerometerupdateinterval.md): The interval, in seconds, for providing accelerometer updates to the block handler.
- [startAccelerometerUpdatesToQueue:withHandler:](startaccelerometerupdates%28to_withhandler_%29.md): Starts accelerometer updates on an operation queue and with a specified handler.
- [startAccelerometerUpdates](startaccelerometerupdates%28%29.md): Starts accelerometer updates without a handler.
- [stopAccelerometerUpdates](stopaccelerometerupdates%28%29.md): Stops accelerometer updates.
- [CMAccelerometerHandler](../cmaccelerometerhandler.md): The type of block callback for handling accelerometer data.
