> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmattitudereferenceframe](https://developer.apple.com/documentation/coremotion/cmattitudereferenceframe)

# CMAttitudeReferenceFrame (Swift)

**Framework:** Core Motion  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

Constants that indicate the frame of reference for attitude-related motion data.

## Declaration

```swift
struct CMAttitudeReferenceFrame
```

<a id="overview"></a>

## Overview

When you start a service that reports the device’s attitude in three-dimensional space, Core Motion establishes a frame of reference for reporting pitch, roll, and yaw values. All subsequent data values specify the device attitude relative to this frame of reference. To get a list of the currently available reference frames for the current device, call the [availableAttitudeReferenceFrames()](cmmotionmanager/availableattitudereferenceframes%28%29.md) class method.

When starting services, it’s your responsibility to specify a reference frame that’s available on the current device. Services that don’t let you specify a reference frame explicitly rely on the value in the [attitudeReferenceFrame](cmmotionmanager/attitudereferenceframe.md) property of [CMMotionManager](cmmotionmanager.md).

## Topics

### Getting the reference frames

- [xArbitraryZVertical](cmattitudereferenceframe/xarbitraryzvertical.md): A reference frame where the Z axis is vertical and the X axis points in an arbitrary direction in the horizontal plane.
- [xArbitraryCorrectedZVertical](cmattitudereferenceframe/xarbitrarycorrectedzvertical.md): A reference frame where the Z axis is vertical and has improved rotation accuracy, and the X axis points in an arbitrary direction in the horizontal plane.
- [xMagneticNorthZVertical](cmattitudereferenceframe/xmagneticnorthzvertical.md): A reference frame where the Z axis is vertical and the X axis points to the magnetic north pole.
- [xTrueNorthZVertical](cmattitudereferenceframe/xtruenorthzvertical.md): A reference frame where the Z axis is vertical and the X axis points to the geographic north pole.

### Initializers

- [init(rawValue:)](cmattitudereferenceframe/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Device motion

- [Getting processed device-motion data](getting-processed-device-motion-data.md): Retrieve motion data that the system processed to remove environmental bias, such as the effects of gravity.
- [CMDeviceMotion](cmdevicemotion.md): Encapsulated measurements of the attitude, rotation rate, and acceleration of a device.
- [CMAttitude](cmattitude.md): The device’s orientation relative to a known frame of reference at a point in time.
- [CMHeadphoneMotionManager](cmheadphonemotionmanager.md): An object that starts and manages headphone motion services.

# CMAttitudeReferenceFrame (Objective-C)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

Constants that indicate the frame of reference for attitude-related motion data.

## Declaration

```objectivec
enum CMAttitudeReferenceFrame : NSUInteger;
```

<a id="overview"></a>

## Overview

When you start a service that reports the device’s attitude in three-dimensional space, Core Motion establishes a frame of reference for reporting pitch, roll, and yaw values. All subsequent data values specify the device attitude relative to this frame of reference. To get a list of the currently available reference frames for the current device, call the [availableAttitudeReferenceFrames](cmmotionmanager/availableattitudereferenceframes%28%29.md) class method.

When starting services, it’s your responsibility to specify a reference frame that’s available on the current device. Services that don’t let you specify a reference frame explicitly rely on the value in the [attitudeReferenceFrame](cmmotionmanager/attitudereferenceframe.md) property of [CMMotionManager](cmmotionmanager.md).

## Topics

### Getting the reference frames

- [CMAttitudeReferenceFrameXArbitraryZVertical](cmattitudereferenceframe/xarbitraryzvertical.md): A reference frame where the Z axis is vertical and the X axis points in an arbitrary direction in the horizontal plane.
- [CMAttitudeReferenceFrameXArbitraryCorrectedZVertical](cmattitudereferenceframe/xarbitrarycorrectedzvertical.md): A reference frame where the Z axis is vertical and has improved rotation accuracy, and the X axis points in an arbitrary direction in the horizontal plane.
- [CMAttitudeReferenceFrameXMagneticNorthZVertical](cmattitudereferenceframe/xmagneticnorthzvertical.md): A reference frame where the Z axis is vertical and the X axis points to the magnetic north pole.
- [CMAttitudeReferenceFrameXTrueNorthZVertical](cmattitudereferenceframe/xtruenorthzvertical.md): A reference frame where the Z axis is vertical and the X axis points to the geographic north pole.

## See Also

### Device motion

- [Getting processed device-motion data](getting-processed-device-motion-data.md): Retrieve motion data that the system processed to remove environmental bias, such as the effects of gravity.
- [CMDeviceMotion](cmdevicemotion.md): Encapsulated measurements of the attitude, rotation rate, and acceleration of a device.
- [CMAttitude](cmattitude.md): The device’s orientation relative to a known frame of reference at a point in time.
- [CMHeadphoneMotionManager](cmheadphonemotionmanager.md): An object that starts and manages headphone motion services.
