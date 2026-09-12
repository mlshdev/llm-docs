> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmagneticfieldcalibrationaccuracy](https://developer.apple.com/documentation/coremotion/cmmagneticfieldcalibrationaccuracy)

# CMMagneticFieldCalibrationAccuracy (Swift)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

Indicates the calibration accuracy of a magnetic field estimate

## Declaration

```swift
enum CMMagneticFieldCalibrationAccuracy
```

<a id="overview"></a>

## Overview

One of the `enum` constants of the `CMMagneticFieldCalibrationAccuracy` type is the value of the accuracy field of the [CMCalibratedMagneticField](cmcalibratedmagneticfield.md) structure returned from the [magneticField](cmdevicemotion/magneticfield.md) property.

## Topics

### Constants

- [CMMagneticFieldCalibrationAccuracy.uncalibrated](cmmagneticfieldcalibrationaccuracy/uncalibrated.md): The magnetic field estimate is not calibrated.
- [CMMagneticFieldCalibrationAccuracy.low](cmmagneticfieldcalibrationaccuracy/low.md): The accuracy of the magnetic field calibration is low.
- [CMMagneticFieldCalibrationAccuracy.medium](cmmagneticfieldcalibrationaccuracy/medium.md): The accuracy of the magnetic field calibration is medium.
- [CMMagneticFieldCalibrationAccuracy.high](cmmagneticfieldcalibrationaccuracy/high.md): The accuracy of the magnetic field calibration is high.

### Initializers

- [init(rawValue:)](cmmagneticfieldcalibrationaccuracy/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Calibrated Magnetic Field

- [magneticField](cmdevicemotion/magneticfield.md): Returns the magnetic field vector with respect to the device.
- [CMCalibratedMagneticField](cmcalibratedmagneticfield.md): Calibrated magnetic field data and an estimate of the accuracy of the calibration.

# CMMagneticFieldCalibrationAccuracy (Objective-C)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

Indicates the calibration accuracy of a magnetic field estimate

## Declaration

```objectivec
enum CMMagneticFieldCalibrationAccuracy : int;
```

<a id="overview"></a>

## Overview

One of the `enum` constants of the `CMMagneticFieldCalibrationAccuracy` type is the value of the accuracy field of the [CMCalibratedMagneticField](cmcalibratedmagneticfield.md) structure returned from the [magneticField](cmdevicemotion/magneticfield.md) property.

## Topics

### Constants

- [CMMagneticFieldCalibrationAccuracyUncalibrated](cmmagneticfieldcalibrationaccuracy/uncalibrated.md): The magnetic field estimate is not calibrated.
- [CMMagneticFieldCalibrationAccuracyLow](cmmagneticfieldcalibrationaccuracy/low.md): The accuracy of the magnetic field calibration is low.
- [CMMagneticFieldCalibrationAccuracyMedium](cmmagneticfieldcalibrationaccuracy/medium.md): The accuracy of the magnetic field calibration is medium.
- [CMMagneticFieldCalibrationAccuracyHigh](cmmagneticfieldcalibrationaccuracy/high.md): The accuracy of the magnetic field calibration is high.

## See Also

### Getting the Calibrated Magnetic Field

- [magneticField](cmdevicemotion/magneticfield.md): Returns the magnetic field vector with respect to the device.
- [CMCalibratedMagneticField](cmcalibratedmagneticfield.md): Calibrated magnetic field data and an estimate of the accuracy of the calibration.
