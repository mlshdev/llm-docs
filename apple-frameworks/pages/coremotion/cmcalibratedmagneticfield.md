> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmcalibratedmagneticfield](https://developer.apple.com/documentation/coremotion/cmcalibratedmagneticfield)

# CMCalibratedMagneticField (Swift)

**Framework:** Core Motion  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

Calibrated magnetic field data and an estimate of the accuracy of the calibration.

## Declaration

```swift
struct CMCalibratedMagneticField
```

## Topics

### Initializers

- [init()](cmcalibratedmagneticfield/init%28%29.md): Initializes the magnetic field to a set of default values.
- [init(field:accuracy:)](cmcalibratedmagneticfield/init%28field_accuracy_%29.md): Initializes the magnetic field to the specified set of values.

### Accessing the Field Values

- [field](cmcalibratedmagneticfield/field.md): A structure containing 3-axis calibrated magnetic field data. See the description of the [CMMagneticField](cmmagneticfield.md) structure.
- [accuracy](cmcalibratedmagneticfield/accuracy.md): An enum-constant value that indicates the accuracy of the magnetic field estimate. See [CMMagneticFieldCalibrationAccuracy](cmmagneticfieldcalibrationaccuracy.md).

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Getting the Calibrated Magnetic Field

- [magneticField](cmdevicemotion/magneticfield.md): Returns the magnetic field vector with respect to the device.
- [CMMagneticFieldCalibrationAccuracy](cmmagneticfieldcalibrationaccuracy.md): Indicates the calibration accuracy of a magnetic field estimate

# CMCalibratedMagneticField (Objective-C)

**Framework:** Core Motion  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

Calibrated magnetic field data and an estimate of the accuracy of the calibration.

## Declaration

```objectivec
typedef struct { ... } CMCalibratedMagneticField;
```

## Topics

### Accessing the Field Values

- [field](cmcalibratedmagneticfield/field.md): A structure containing 3-axis calibrated magnetic field data. See the description of the [CMMagneticField](cmmagneticfield.md) structure.
- [accuracy](cmcalibratedmagneticfield/accuracy.md): An enum-constant value that indicates the accuracy of the magnetic field estimate. See [CMMagneticFieldCalibrationAccuracy](cmmagneticfieldcalibrationaccuracy.md).

## See Also

### Getting the Calibrated Magnetic Field

- [magneticField](cmdevicemotion/magneticfield.md): Returns the magnetic field vector with respect to the device.
- [CMMagneticFieldCalibrationAccuracy](cmmagneticfieldcalibrationaccuracy.md): Indicates the calibration accuracy of a magnetic field estimate
