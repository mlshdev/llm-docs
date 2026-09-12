> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/startmagnetometerupdates()](https://developer.apple.com/documentation/coremotion/cmmotionmanager/startmagnetometerupdates())

# startMagnetometerUpdates() (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Starts magnetometer updates without a block handler.

## Declaration

```swift
func startMagnetometerUpdates()
```

<a id="Discussion"></a>

## Discussion

You can get the latest magnetometer data through the [magnetometerData](magnetometerdata.md) property. You must call [stopMagnetometerUpdates()](stopmagnetometerupdates%28%29.md) when you no longer want your app to process magnetometer updates.

## See Also

### Managing Magnetometer Updates

- [magnetometerUpdateInterval](magnetometerupdateinterval.md): The interval, in seconds, at which the system delivers magnetometer data to the block handler.
- [startMagnetometerUpdates(to:withHandler:)](startmagnetometerupdates%28to_withhandler_%29.md): Starts magnetometer updates on an operation queue and with a specified handler.
- [stopMagnetometerUpdates()](stopmagnetometerupdates%28%29.md): Stops magnetometer updates.
- [magnetometerData](magnetometerdata.md): The latest sample of magnetometer data.
- [CMMagnetometerHandler](../cmmagnetometerhandler.md): The type of block callback for handling magnetometer data.

# startMagnetometerUpdates (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Starts magnetometer updates without a block handler.

## Declaration

```objectivec
- (void) startMagnetometerUpdates;
```

<a id="Discussion"></a>

## Discussion

You can get the latest magnetometer data through the [magnetometerData](magnetometerdata.md) property. You must call [stopMagnetometerUpdates](stopmagnetometerupdates%28%29.md) when you no longer want your app to process magnetometer updates.

## See Also

### Managing Magnetometer Updates

- [magnetometerUpdateInterval](magnetometerupdateinterval.md): The interval, in seconds, at which the system delivers magnetometer data to the block handler.
- [startMagnetometerUpdatesToQueue:withHandler:](startmagnetometerupdates%28to_withhandler_%29.md): Starts magnetometer updates on an operation queue and with a specified handler.
- [stopMagnetometerUpdates](stopmagnetometerupdates%28%29.md): Stops magnetometer updates.
- [magnetometerData](magnetometerdata.md): The latest sample of magnetometer data.
- [CMMagnetometerHandler](../cmmagnetometerhandler.md): The type of block callback for handling magnetometer data.
