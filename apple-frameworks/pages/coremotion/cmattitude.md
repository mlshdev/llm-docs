> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmattitude](https://developer.apple.com/documentation/coremotion/cmattitude)

# CMAttitude (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The device’s orientation relative to a known frame of reference at a point in time.

## Declaration

```swift
class CMAttitude
```

<a id="overview"></a>

## Overview

The `CMAttitude` class offers three different mathematical representations of attitude: a rotation matrix, a quaternion, and Euler angles (roll, pitch, and yaw values). You access `CMAttitude` objects through the attitude property of each [CMDeviceMotion](cmdevicemotion.md) objects passed to an application. An application starts receiving these device-motion objects as a result of calling the [startDeviceMotionUpdates(using:to:withHandler:)](cmmotionmanager/startdevicemotionupdates%28using_to_withhandler_%29.md) method, the [startDeviceMotionUpdates(to:withHandler:)](cmmotionmanager/startdevicemotionupdates%28to_withhandler_%29.md) method, the [startDeviceMotionUpdates(using:)](cmmotionmanager/startdevicemotionupdates%28using_%29.md) method, or the [startDeviceMotionUpdates()](cmmotionmanager/startdevicemotionupdates%28%29.md) method of the [CMMotionManager](cmmotionmanager.md) class.

> **Note**

>  Core Motion outputs a direction cosine matrix (DCM)—basically a rotation from the last “old” orientation to the new orientation of the device.

## Topics

### Getting a Mathematical Representation of Attitude as Euler Angles

- [roll](cmattitude/roll.md): The roll of the device, in radians.
- [pitch](cmattitude/pitch.md): The pitch of the device, in radians.
- [yaw](cmattitude/yaw.md): The yaw of the device, in radians.

### Getting a Mathematical Representation of Attitude as a Rotation Matrix

- [rotationMatrix](cmattitude/rotationmatrix.md): Returns a rotation matrix representing the device’s attitude.
- [CMRotationMatrix](cmrotationmatrix.md): The type of a structure representing a rotation matrix.

### Getting a Mathematical Representation of Attitude as a Quaternion

- [quaternion](cmattitude/quaternion.md): Returns a quaternion representing the device’s attitude.
- [CMQuaternion](cmquaternion.md): The type for a quaternion representing a measurement of attitude.

### Obtaining the Change in Attitude

- [multiply(byInverseOf:)](cmattitude/multiply%28byinverseof_%29.md): Yields the change in attitude given a specific attitude.

### Initializers

- [init(coder:)](cmattitude/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [CMDeviceMotion](cmdevicemotion.md): Encapsulated measurements of the attitude, rotation rate, and acceleration of a device.
- [CMAttitudeReferenceFrame](cmattitudereferenceframe.md): Constants that indicate the frame of reference for attitude-related motion data.
- [CMHeadphoneMotionManager](cmheadphonemotionmanager.md): An object that starts and manages headphone motion services.

# CMAttitude (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The device’s orientation relative to a known frame of reference at a point in time.

## Declaration

```objectivec
@interface CMAttitude : NSObject
```

<a id="overview"></a>

## Overview

The `CMAttitude` class offers three different mathematical representations of attitude: a rotation matrix, a quaternion, and Euler angles (roll, pitch, and yaw values). You access `CMAttitude` objects through the attitude property of each [CMDeviceMotion](cmdevicemotion.md) objects passed to an application. An application starts receiving these device-motion objects as a result of calling the [startDeviceMotionUpdatesUsingReferenceFrame:toQueue:withHandler:](cmmotionmanager/startdevicemotionupdates%28using_to_withhandler_%29.md) method, the [startDeviceMotionUpdatesToQueue:withHandler:](cmmotionmanager/startdevicemotionupdates%28to_withhandler_%29.md) method, the [startDeviceMotionUpdatesUsingReferenceFrame:](cmmotionmanager/startdevicemotionupdates%28using_%29.md) method, or the [startDeviceMotionUpdates](cmmotionmanager/startdevicemotionupdates%28%29.md) method of the [CMMotionManager](cmmotionmanager.md) class.

> **Note**

>  Core Motion outputs a direction cosine matrix (DCM)—basically a rotation from the last “old” orientation to the new orientation of the device.

## Topics

### Getting a Mathematical Representation of Attitude as Euler Angles

- [roll](cmattitude/roll.md): The roll of the device, in radians.
- [pitch](cmattitude/pitch.md): The pitch of the device, in radians.
- [yaw](cmattitude/yaw.md): The yaw of the device, in radians.

### Getting a Mathematical Representation of Attitude as a Rotation Matrix

- [rotationMatrix](cmattitude/rotationmatrix.md): Returns a rotation matrix representing the device’s attitude.
- [CMRotationMatrix](cmrotationmatrix.md): The type of a structure representing a rotation matrix.

### Getting a Mathematical Representation of Attitude as a Quaternion

- [quaternion](cmattitude/quaternion.md): Returns a quaternion representing the device’s attitude.
- [CMQuaternion](cmquaternion.md): The type for a quaternion representing a measurement of attitude.

### Obtaining the Change in Attitude

- [multiplyByInverseOfAttitude:](cmattitude/multiply%28byinverseof_%29.md): Yields the change in attitude given a specific attitude.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Device motion

- [Getting processed device-motion data](getting-processed-device-motion-data.md): Retrieve motion data that the system processed to remove environmental bias, such as the effects of gravity.
- [CMDeviceMotion](cmdevicemotion.md): Encapsulated measurements of the attitude, rotation rate, and acceleration of a device.
- [CMAttitudeReferenceFrame](cmattitudereferenceframe.md): Constants that indicate the frame of reference for attitude-related motion data.
- [CMHeadphoneMotionManager](cmheadphonemotionmanager.md): An object that starts and manages headphone motion services.
