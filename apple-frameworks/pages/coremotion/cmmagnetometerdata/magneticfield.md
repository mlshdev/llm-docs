> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmagnetometerdata/magneticfield](https://developer.apple.com/documentation/coremotion/cmmagnetometerdata/magneticfield)

# magneticField (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

Returns the magnetic field measured by the magnetometer.

## Declaration

```swift
var magneticField: CMMagneticField { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the total magnetic field observed by the device which is equal to the Earth’s geomagnetic field plus bias introduced from the device itself and its surroundings.

This is the “raw” magnetic-field value, unlike the calibrated value of the [magneticField](../cmdevicemotion/magneticfield.md) property of [CMDeviceMotion](../cmdevicemotion.md) which filters out the bias introduced by the device and, in some cases, its surrounding fields.

## See Also

### Getting the Field Strength

- [CMMagneticField](../cmmagneticfield.md): A structure containing 3-axis magnetometer data

# magneticField (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

Returns the magnetic field measured by the magnetometer.

## Declaration

```objectivec
@property (nonatomic, readonly) CMMagneticField magneticField;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the total magnetic field observed by the device which is equal to the Earth’s geomagnetic field plus bias introduced from the device itself and its surroundings.

This is the “raw” magnetic-field value, unlike the calibrated value of the [magneticField](../cmdevicemotion/magneticfield.md) property of [CMDeviceMotion](../cmdevicemotion.md) which filters out the bias introduced by the device and, in some cases, its surrounding fields.

## See Also

### Getting the Field Strength

- [CMMagneticField](../cmmagneticfield.md): A structure containing 3-axis magnetometer data
