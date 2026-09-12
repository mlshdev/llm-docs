> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/stopmagnetometerupdates()](https://developer.apple.com/documentation/coremotion/cmmotionmanager/stopmagnetometerupdates())

# stopMagnetometerUpdates() (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Stops magnetometer updates.

## Declaration

```swift
func stopMagnetometerUpdates()
```

## See Also

### Managing Magnetometer Updates

- [magnetometerUpdateInterval](magnetometerupdateinterval.md): The interval, in seconds, at which the system delivers magnetometer data to the block handler.
- [startMagnetometerUpdates(to:withHandler:)](startmagnetometerupdates%28to_withhandler_%29.md): Starts magnetometer updates on an operation queue and with a specified handler.
- [startMagnetometerUpdates()](startmagnetometerupdates%28%29.md): Starts magnetometer updates without a block handler.
- [magnetometerData](magnetometerdata.md): The latest sample of magnetometer data.
- [CMMagnetometerHandler](../cmmagnetometerhandler.md): The type of block callback for handling magnetometer data.

# stopMagnetometerUpdates (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Stops magnetometer updates.

## Declaration

```objectivec
- (void) stopMagnetometerUpdates;
```

## See Also

### Managing Magnetometer Updates

- [magnetometerUpdateInterval](magnetometerupdateinterval.md): The interval, in seconds, at which the system delivers magnetometer data to the block handler.
- [startMagnetometerUpdatesToQueue:withHandler:](startmagnetometerupdates%28to_withhandler_%29.md): Starts magnetometer updates on an operation queue and with a specified handler.
- [startMagnetometerUpdates](startmagnetometerupdates%28%29.md): Starts magnetometer updates without a block handler.
- [magnetometerData](magnetometerdata.md): The latest sample of magnetometer data.
- [CMMagnetometerHandler](../cmmagnetometerhandler.md): The type of block callback for handling magnetometer data.
