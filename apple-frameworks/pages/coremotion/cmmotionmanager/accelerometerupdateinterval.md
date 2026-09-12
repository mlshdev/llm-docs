> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/accelerometerupdateinterval](https://developer.apple.com/documentation/coremotion/cmmotionmanager/accelerometerupdateinterval)

# accelerometerUpdateInterval (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

The interval, in seconds, for providing accelerometer updates to the block handler.

## Declaration

```swift
var accelerometerUpdateInterval: TimeInterval { get set }
```

## Mentioned In

- [Getting raw accelerometer events](../getting-raw-accelerometer-events.md)

<a id="Discussion"></a>

## Discussion

The system supplies accelerometer updates to the block handler specified in [startAccelerometerUpdates(to:withHandler:)](startaccelerometerupdates%28to_withhandler_%29.md) at regular intervals determined by the value of this property. The interval units are in seconds. The value of this property is capped to minimum and maximum values; the maximum value is determined by the maximum frequency supported by the hardware. If your app is sensitive to the intervals of acceleration data, it should always check the timestamps of the delivered [CMAccelerometerData](../cmaccelerometerdata.md) instances to determine the true update interval.

## See Also

### Related Documentation

- [Event Handling Guide for UIKit Apps](https://developer.apple.com/library/archive/documentation/EventHandling/Conceptual/EventHandlingiPhoneOS/index.html?language=swift#//apple_ref/doc/uid/TP40009541)

### Managing Accelerometer Updates

- [startAccelerometerUpdates(to:withHandler:)](startaccelerometerupdates%28to_withhandler_%29.md): Starts accelerometer updates on an operation queue and with a specified handler.
- [startAccelerometerUpdates()](startaccelerometerupdates%28%29.md): Starts accelerometer updates without a handler.
- [stopAccelerometerUpdates()](stopaccelerometerupdates%28%29.md): Stops accelerometer updates.
- [accelerometerData](accelerometerdata.md): The latest sample of accelerometer data.
- [CMAccelerometerHandler](../cmaccelerometerhandler.md): The type of block callback for handling accelerometer data.

# accelerometerUpdateInterval (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

The interval, in seconds, for providing accelerometer updates to the block handler.

## Declaration

```objectivec
@property (nonatomic, assign) NSTimeInterval accelerometerUpdateInterval;
```

## Mentioned In

- [Getting raw accelerometer events](../getting-raw-accelerometer-events.md)

<a id="Discussion"></a>

## Discussion

The system supplies accelerometer updates to the block handler specified in [startAccelerometerUpdatesToQueue:withHandler:](startaccelerometerupdates%28to_withhandler_%29.md) at regular intervals determined by the value of this property. The interval units are in seconds. The value of this property is capped to minimum and maximum values; the maximum value is determined by the maximum frequency supported by the hardware. If your app is sensitive to the intervals of acceleration data, it should always check the timestamps of the delivered [CMAccelerometerData](../cmaccelerometerdata.md) instances to determine the true update interval.

## See Also

### Related Documentation

- [Event Handling Guide for UIKit Apps](https://developer.apple.com/library/archive/documentation/EventHandling/Conceptual/EventHandlingiPhoneOS/index.html?language=swift#//apple_ref/doc/uid/TP40009541)

### Managing Accelerometer Updates

- [startAccelerometerUpdatesToQueue:withHandler:](startaccelerometerupdates%28to_withhandler_%29.md): Starts accelerometer updates on an operation queue and with a specified handler.
- [startAccelerometerUpdates](startaccelerometerupdates%28%29.md): Starts accelerometer updates without a handler.
- [stopAccelerometerUpdates](stopaccelerometerupdates%28%29.md): Stops accelerometer updates.
- [accelerometerData](accelerometerdata.md): The latest sample of accelerometer data.
- [CMAccelerometerHandler](../cmaccelerometerhandler.md): The type of block callback for handling accelerometer data.
