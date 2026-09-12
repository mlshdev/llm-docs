> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmdevicemotion](https://developer.apple.com/documentation/coremotion/cmdevicemotion)

# CMDeviceMotion (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

Encapsulated measurements of the attitude, rotation rate, and acceleration of a device.

## Declaration

```swift
class CMDeviceMotion
```

<a id="overview"></a>

## Overview

An application receives or samples `CMDeviceMotion` objects at regular intervals after calling the [startDeviceMotionUpdates(using:to:withHandler:)](cmmotionmanager/startdevicemotionupdates%28using_to_withhandler_%29.md) method, the [startDeviceMotionUpdates(to:withHandler:)](cmmotionmanager/startdevicemotionupdates%28to_withhandler_%29.md) method, the [startDeviceMotionUpdates(using:)](cmmotionmanager/startdevicemotionupdates%28using_%29.md) method, or the [startDeviceMotionUpdates()](cmmotionmanager/startdevicemotionupdates%28%29.md) method of the [CMMotionManager](cmmotionmanager.md) class.

The accelerometer measures the sum of two acceleration vectors: gravity and user acceleration. User acceleration is the acceleration that the user imparts to the device. Because Core Motion is able to track a device’s attitude using both the gyroscope and the accelerometer, it can differentiate between gravity and user acceleration. A `CMDeviceMotion` object provides both measurements in the [gravity](cmdevicemotion/gravity.md) and [userAcceleration](cmdevicemotion/useracceleration.md) properties.

## Topics

### Getting Attitude and Rotation Rate

- [attitude](cmdevicemotion/attitude.md): The attitude of the device.
- [rotationRate](cmdevicemotion/rotationrate.md): The rotation rate of the device.

### Getting Acceleration Data

- [gravity](cmdevicemotion/gravity.md): The gravity acceleration vector expressed in the device’s reference frame.
- [userAcceleration](cmdevicemotion/useracceleration.md): The acceleration that the user is giving to the device.

### Getting the Calibrated Magnetic Field

- [magneticField](cmdevicemotion/magneticfield.md): Returns the magnetic field vector with respect to the device.
- [CMCalibratedMagneticField](cmcalibratedmagneticfield.md): Calibrated magnetic field data and an estimate of the accuracy of the calibration.
- [CMMagneticFieldCalibrationAccuracy](cmmagneticfieldcalibrationaccuracy.md): Indicates the calibration accuracy of a magnetic field estimate

### Getting the Heading

- [heading](cmdevicemotion/heading.md): The heading angle (measured in degrees) relative to the current reference frame.

### Getting the Sensor Location

- [sensorLocation](cmdevicemotion/sensorlocation-swift.property.md): The location of the sensors that compute the device-motion data.
- [CMDeviceMotion.SensorLocation](cmdevicemotion/sensorlocation-swift.enum.md): Defines the device’s sensor locations.

### Instance Properties

- [headingAccuracy](cmdevicemotion/headingaccuracy.md)

## Relationships

### Inherits From

- [CMLogItem](cmlogitem.md)

### Inherited By

- [CMRecordedDeviceMotion](cmrecordeddevicemotion.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Device motion

- [Getting processed device-motion data](getting-processed-device-motion-data.md): Retrieve motion data that the system processed to remove environmental bias, such as the effects of gravity.
- [CMAttitude](cmattitude.md): The device’s orientation relative to a known frame of reference at a point in time.
- [CMAttitudeReferenceFrame](cmattitudereferenceframe.md): Constants that indicate the frame of reference for attitude-related motion data.
- [CMHeadphoneMotionManager](cmheadphonemotionmanager.md): An object that starts and manages headphone motion services.

# CMDeviceMotion (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

Encapsulated measurements of the attitude, rotation rate, and acceleration of a device.

## Declaration

```objectivec
@interface CMDeviceMotion : CMLogItem
```

<a id="overview"></a>

## Overview

An application receives or samples `CMDeviceMotion` objects at regular intervals after calling the [startDeviceMotionUpdatesUsingReferenceFrame:toQueue:withHandler:](cmmotionmanager/startdevicemotionupdates%28using_to_withhandler_%29.md) method, the [startDeviceMotionUpdatesToQueue:withHandler:](cmmotionmanager/startdevicemotionupdates%28to_withhandler_%29.md) method, the [startDeviceMotionUpdatesUsingReferenceFrame:](cmmotionmanager/startdevicemotionupdates%28using_%29.md) method, or the [startDeviceMotionUpdates](cmmotionmanager/startdevicemotionupdates%28%29.md) method of the [CMMotionManager](cmmotionmanager.md) class.

The accelerometer measures the sum of two acceleration vectors: gravity and user acceleration. User acceleration is the acceleration that the user imparts to the device. Because Core Motion is able to track a device’s attitude using both the gyroscope and the accelerometer, it can differentiate between gravity and user acceleration. A `CMDeviceMotion` object provides both measurements in the [gravity](cmdevicemotion/gravity.md) and [userAcceleration](cmdevicemotion/useracceleration.md) properties.

## Topics

### Getting Attitude and Rotation Rate

- [attitude](cmdevicemotion/attitude.md): The attitude of the device.
- [rotationRate](cmdevicemotion/rotationrate.md): The rotation rate of the device.

### Getting Acceleration Data

- [gravity](cmdevicemotion/gravity.md): The gravity acceleration vector expressed in the device’s reference frame.
- [userAcceleration](cmdevicemotion/useracceleration.md): The acceleration that the user is giving to the device.

### Getting the Calibrated Magnetic Field

- [magneticField](cmdevicemotion/magneticfield.md): Returns the magnetic field vector with respect to the device.
- [CMCalibratedMagneticField](cmcalibratedmagneticfield.md): Calibrated magnetic field data and an estimate of the accuracy of the calibration.
- [CMMagneticFieldCalibrationAccuracy](cmmagneticfieldcalibrationaccuracy.md): Indicates the calibration accuracy of a magnetic field estimate

### Getting the Heading

- [heading](cmdevicemotion/heading.md): The heading angle (measured in degrees) relative to the current reference frame.

### Getting the Sensor Location

- [sensorLocation](cmdevicemotion/sensorlocation-swift.property.md): The location of the sensors that compute the device-motion data.
- [CMDeviceMotionSensorLocation](cmdevicemotion/sensorlocation-swift.enum.md): Defines the device’s sensor locations.

### Instance Properties

- [headingAccuracy](cmdevicemotion/headingaccuracy.md)

## Relationships

### Inherits From

- [CMLogItem](cmlogitem.md)

### Inherited By

- [CMRecordedDeviceMotion](cmrecordeddevicemotion.md)

## See Also

### Device motion

- [Getting processed device-motion data](getting-processed-device-motion-data.md): Retrieve motion data that the system processed to remove environmental bias, such as the effects of gravity.
- [CMAttitude](cmattitude.md): The device’s orientation relative to a known frame of reference at a point in time.
- [CMAttitudeReferenceFrame](cmattitudereferenceframe.md): Constants that indicate the frame of reference for attitude-related motion data.
- [CMHeadphoneMotionManager](cmheadphonemotionmanager.md): An object that starts and manages headphone motion services.
