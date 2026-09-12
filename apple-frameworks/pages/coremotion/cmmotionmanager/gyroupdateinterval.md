> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/gyroupdateinterval](https://developer.apple.com/documentation/coremotion/cmmotionmanager/gyroupdateinterval)

# gyroUpdateInterval (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

The interval, in seconds, for providing gyroscope updates to the block handler.

## Declaration

```swift
var gyroUpdateInterval: TimeInterval { get set }
```

## Mentioned In

- [Getting raw gyroscope events](../getting-raw-gyroscope-events.md)

<a id="Discussion"></a>

## Discussion

The system supplies gyroscope (that is, rotation rate) updates to the block handler specified in [startGyroUpdates(to:withHandler:)](startgyroupdates%28to_withhandler_%29.md) at regular intervals determined by the value of this property. The interval units are in seconds. The value of this property is capped to minimum and maximum values; the maximum value is determined by the maximum frequency supported by the hardware. If your app is sensitive to the intervals of gyroscope data, it should always check the timestamps of the delivered [CMGyroData](../cmgyrodata.md) instances to determine the true update interval.

## See Also

### Managing Gyroscope Updates

- [startGyroUpdates(to:withHandler:)](startgyroupdates%28to_withhandler_%29.md): Starts gyroscope updates on an operation queue and with a specified handler.
- [startGyroUpdates()](startgyroupdates%28%29.md): Starts gyroscope updates without a handler.
- [stopGyroUpdates()](stopgyroupdates%28%29.md): Stops gyroscope updates.
- [gyroData](gyrodata.md): The latest sample of gyroscope data.
- [CMGyroHandler](../cmgyrohandler.md): The type of block callback for handling gyroscope data.

# gyroUpdateInterval (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

The interval, in seconds, for providing gyroscope updates to the block handler.

## Declaration

```objectivec
@property (nonatomic, assign) NSTimeInterval gyroUpdateInterval;
```

## Mentioned In

- [Getting raw gyroscope events](../getting-raw-gyroscope-events.md)

<a id="Discussion"></a>

## Discussion

The system supplies gyroscope (that is, rotation rate) updates to the block handler specified in [startGyroUpdatesToQueue:withHandler:](startgyroupdates%28to_withhandler_%29.md) at regular intervals determined by the value of this property. The interval units are in seconds. The value of this property is capped to minimum and maximum values; the maximum value is determined by the maximum frequency supported by the hardware. If your app is sensitive to the intervals of gyroscope data, it should always check the timestamps of the delivered [CMGyroData](../cmgyrodata.md) instances to determine the true update interval.

## See Also

### Managing Gyroscope Updates

- [startGyroUpdatesToQueue:withHandler:](startgyroupdates%28to_withhandler_%29.md): Starts gyroscope updates on an operation queue and with a specified handler.
- [startGyroUpdates](startgyroupdates%28%29.md): Starts gyroscope updates without a handler.
- [stopGyroUpdates](stopgyroupdates%28%29.md): Stops gyroscope updates.
- [gyroData](gyrodata.md): The latest sample of gyroscope data.
- [CMGyroHandler](../cmgyrohandler.md): The type of block callback for handling gyroscope data.
