> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/magnetometerupdateinterval](https://developer.apple.com/documentation/coremotion/cmmotionmanager/magnetometerupdateinterval)

# magnetometerUpdateInterval (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

The interval, in seconds, at which the system delivers magnetometer data to the block handler.

## Declaration

```swift
var magnetometerUpdateInterval: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

The supplies magnetometer data to the block handler specified in [startMagnetometerUpdates(to:withHandler:)](startmagnetometerupdates%28to_withhandler_%29.md) at regular intervals determined by the value of this property. The interval unit are in seconds. The value of this property is capped to minimum and maximum values; the maximum value is determined by the maximum frequency supported by the hardware. If your app is sensitive to the intervals of magnetometer data, it should always check the timestamps of the delivered [CMMagnetometerData](../cmmagnetometerdata.md) instances to determine the true update interval.

## See Also

### Managing Magnetometer Updates

- [startMagnetometerUpdates(to:withHandler:)](startmagnetometerupdates%28to_withhandler_%29.md): Starts magnetometer updates on an operation queue and with a specified handler.
- [startMagnetometerUpdates()](startmagnetometerupdates%28%29.md): Starts magnetometer updates without a block handler.
- [stopMagnetometerUpdates()](stopmagnetometerupdates%28%29.md): Stops magnetometer updates.
- [magnetometerData](magnetometerdata.md): The latest sample of magnetometer data.
- [CMMagnetometerHandler](../cmmagnetometerhandler.md): The type of block callback for handling magnetometer data.

# magnetometerUpdateInterval (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

The interval, in seconds, at which the system delivers magnetometer data to the block handler.

## Declaration

```objectivec
@property (nonatomic, assign) NSTimeInterval magnetometerUpdateInterval;
```

<a id="Discussion"></a>

## Discussion

The supplies magnetometer data to the block handler specified in [startMagnetometerUpdatesToQueue:withHandler:](startmagnetometerupdates%28to_withhandler_%29.md) at regular intervals determined by the value of this property. The interval unit are in seconds. The value of this property is capped to minimum and maximum values; the maximum value is determined by the maximum frequency supported by the hardware. If your app is sensitive to the intervals of magnetometer data, it should always check the timestamps of the delivered [CMMagnetometerData](../cmmagnetometerdata.md) instances to determine the true update interval.

## See Also

### Managing Magnetometer Updates

- [startMagnetometerUpdatesToQueue:withHandler:](startmagnetometerupdates%28to_withhandler_%29.md): Starts magnetometer updates on an operation queue and with a specified handler.
- [startMagnetometerUpdates](startmagnetometerupdates%28%29.md): Starts magnetometer updates without a block handler.
- [stopMagnetometerUpdates](stopmagnetometerupdates%28%29.md): Stops magnetometer updates.
- [magnetometerData](magnetometerdata.md): The latest sample of magnetometer data.
- [CMMagnetometerHandler](../cmmagnetometerhandler.md): The type of block callback for handling magnetometer data.
