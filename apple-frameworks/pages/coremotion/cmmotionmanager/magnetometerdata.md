> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/magnetometerdata](https://developer.apple.com/documentation/coremotion/cmmotionmanager/magnetometerdata)

# magnetometerData (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

The latest sample of magnetometer data.

## Declaration

```swift
var magnetometerData: CMMagnetometerData? { get }
```

<a id="Discussion"></a>

## Discussion

If no magnetometer data is available, the value of this property is `nil`. An app that is receiving magnetometer data after calling [startMagnetometerUpdates()](startmagnetometerupdates%28%29.md) periodically checks the value of this property and processes the magnetometer data.

## See Also

### Managing Magnetometer Updates

- [magnetometerUpdateInterval](magnetometerupdateinterval.md): The interval, in seconds, at which the system delivers magnetometer data to the block handler.
- [startMagnetometerUpdates(to:withHandler:)](startmagnetometerupdates%28to_withhandler_%29.md): Starts magnetometer updates on an operation queue and with a specified handler.
- [startMagnetometerUpdates()](startmagnetometerupdates%28%29.md): Starts magnetometer updates without a block handler.
- [stopMagnetometerUpdates()](stopmagnetometerupdates%28%29.md): Stops magnetometer updates.
- [CMMagnetometerHandler](../cmmagnetometerhandler.md): The type of block callback for handling magnetometer data.

# magnetometerData (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

The latest sample of magnetometer data.

## Declaration

```objectivec
@property (readonly, nullable) CMMagnetometerData * magnetometerData;
```

<a id="Discussion"></a>

## Discussion

If no magnetometer data is available, the value of this property is `nil`. An app that is receiving magnetometer data after calling [startMagnetometerUpdates](startmagnetometerupdates%28%29.md) periodically checks the value of this property and processes the magnetometer data.

## See Also

### Managing Magnetometer Updates

- [magnetometerUpdateInterval](magnetometerupdateinterval.md): The interval, in seconds, at which the system delivers magnetometer data to the block handler.
- [startMagnetometerUpdatesToQueue:withHandler:](startmagnetometerupdates%28to_withhandler_%29.md): Starts magnetometer updates on an operation queue and with a specified handler.
- [startMagnetometerUpdates](startmagnetometerupdates%28%29.md): Starts magnetometer updates without a block handler.
- [stopMagnetometerUpdates](stopmagnetometerupdates%28%29.md): Stops magnetometer updates.
- [CMMagnetometerHandler](../cmmagnetometerhandler.md): The type of block callback for handling magnetometer data.
