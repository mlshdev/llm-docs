> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmagnetometerhandler](https://developer.apple.com/documentation/coremotion/cmmagnetometerhandler)

# CMMagnetometerHandler (Swift)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

The type of block callback for handling magnetometer data.

## Declaration

```swift
typealias CMMagnetometerHandler = (CMMagnetometerData?, (any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

Blocks of type `CMMagnetometerHandler` are called when there is magnetometer data to process. You pass the block into the [startMagnetometerUpdates(to:withHandler:)](cmmotionmanager/startmagnetometerupdates%28to_withhandler_%29.md) method as the second argument. Blocks of this type return no value but take two arguments:

- **`magnetometerData`**: An object that encapsulates a [CMMagneticField](cmmagneticfield.md) structure with fields holding magnetic-field values for the three axes of movement.
- **`error`**: An error object representing an error encountered in providing magnetometer data. If an error occurs, you should stop magnetometer updates and inform the user of the problem. If there is no error, this argument is `nil`. Core Motion errors are of the [CMErrorDomain](cmerrordomain.md) domain and the [CMError](cmerror.md) type.

## See Also

### Managing Magnetometer Updates

- [magnetometerUpdateInterval](cmmotionmanager/magnetometerupdateinterval.md): The interval, in seconds, at which the system delivers magnetometer data to the block handler.
- [startMagnetometerUpdates(to:withHandler:)](cmmotionmanager/startmagnetometerupdates%28to_withhandler_%29.md): Starts magnetometer updates on an operation queue and with a specified handler.
- [startMagnetometerUpdates()](cmmotionmanager/startmagnetometerupdates%28%29.md): Starts magnetometer updates without a block handler.
- [stopMagnetometerUpdates()](cmmotionmanager/stopmagnetometerupdates%28%29.md): Stops magnetometer updates.
- [magnetometerData](cmmotionmanager/magnetometerdata.md): The latest sample of magnetometer data.

# CMMagnetometerHandler (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

The type of block callback for handling magnetometer data.

## Declaration

```objectivec
typedef void (^)(CMMagnetometerData *, NSError *) CMMagnetometerHandler;
```

<a id="Discussion"></a>

## Discussion

Blocks of type `CMMagnetometerHandler` are called when there is magnetometer data to process. You pass the block into the [startMagnetometerUpdatesToQueue:withHandler:](cmmotionmanager/startmagnetometerupdates%28to_withhandler_%29.md) method as the second argument. Blocks of this type return no value but take two arguments:

- **`magnetometerData`**: An object that encapsulates a [CMMagneticField](cmmagneticfield.md) structure with fields holding magnetic-field values for the three axes of movement.
- **`error`**: An error object representing an error encountered in providing magnetometer data. If an error occurs, you should stop magnetometer updates and inform the user of the problem. If there is no error, this argument is `nil`. Core Motion errors are of the [CMErrorDomain](cmerrordomain.md) domain and the [CMError](cmerror.md) type.

## See Also

### Managing Magnetometer Updates

- [magnetometerUpdateInterval](cmmotionmanager/magnetometerupdateinterval.md): The interval, in seconds, at which the system delivers magnetometer data to the block handler.
- [startMagnetometerUpdatesToQueue:withHandler:](cmmotionmanager/startmagnetometerupdates%28to_withhandler_%29.md): Starts magnetometer updates on an operation queue and with a specified handler.
- [startMagnetometerUpdates](cmmotionmanager/startmagnetometerupdates%28%29.md): Starts magnetometer updates without a block handler.
- [stopMagnetometerUpdates](cmmotionmanager/stopmagnetometerupdates%28%29.md): Stops magnetometer updates.
- [magnetometerData](cmmotionmanager/magnetometerdata.md): The latest sample of magnetometer data.
