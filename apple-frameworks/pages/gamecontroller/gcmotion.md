> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmotion](https://developer.apple.com/documentation/gamecontroller/gcmotion)

# GCMotion (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A controller profile that supports orientation and motion.

## Declaration

```swift
class GCMotion
```

<a id="overview"></a>

## Overview

The motion controller profile provides attitude and rotation data, as well as acceleration and sensor information. Use this profile to get motion input from a controller that measures acceleration and rotation rate. If the controller’s [motion](gccontroller/motion.md) property is a `GCMotion` object, the controller supports motion.

This illustration shows the direction of the x, y, and z axes of an iPhone when held upright.

![An illustration of a vertical iPhone with the  x-axis passing through its center from side to side, the y-axis passing through its center from top to bottom, and the z-axis passing through its center from back to front.](https://developer.apple.com/images/com.apple.gamecontroller/media-2930224@2x.png)

## Topics

### Getting the Controller

- [controller](gcmotion/controller.md): The controller for the profile.

### Receiving a Callback When Input Values Change

- [valueChangedHandler](gcmotion/valuechangedhandler.md): The block that the profile calls when an element’s value changes.
- [GCMotionValueChangedHandler](gcmotionvaluechangedhandler.md): The signature for the block that the profile calls when an element’s value changes.

### Verifying Capabilities

- [hasAttitude](gcmotion/hasattitude.md): A Boolean value that indicates whether the controller provides attitude data.
- [hasRotationRate](gcmotion/hasrotationrate.md): A Boolean value that indicates whether the controller provides rotation data.
- [hasGravityAndUserAcceleration](gcmotion/hasgravityanduseracceleration.md): A Boolean value that indicates whether the controller provides gravity and user acceleration data.
- [hasAttitudeAndRotationRate](gcmotion/hasattitudeandrotationrate.md): Deprecated. A Boolean value that indicates whether the controller provides attitude and rotation data.

### Accessing Attitude and Rotation Data

- [attitude](gcmotion/attitude.md): The attitude of the controller.
- [GCQuaternion](gcquaternion.md): A quaternion that represents a controller’s measurement of attitude.
- [rotationRate](gcmotion/rotationrate.md): The rotation rate of the controller.
- [GCRotationRate](gcrotationrate.md): A structure that represents rotation rates around the x, y, and z axes.
- [GCEulerAngles](gceulerangles.md): A structure that specifies the controller’s attitude as a series of rotations around the x, y, and z axes.

### Accessing Gravity and Acceleration Data

- [acceleration](gcmotion/acceleration.md): The total acceleration of the controller that includes gravity and the acceleration the user applies to the controller.
- [gravity](gcmotion/gravity.md): The gravity acceleration vector from the controller’s reference frame.
- [userAcceleration](gcmotion/useracceleration.md): The acceleration that the user applies to the controller.
- [GCAcceleration](gcacceleration.md): A three-dimensional acceleration vector.

### Accessing Sensor Data

- [sensorsRequireManualActivation](gcmotion/sensorsrequiremanualactivation.md): A Boolean value that indicates whether the sensors that compute the motion data require manual activation.
- [sensorsActive](gcmotion/sensorsactive.md): A Boolean value that indicates whether the sensors that compute the motion data are active.

### Setting Snapshot Values

- [setStateFrom(\_:)](gcmotion/setstatefrom%28__%29.md): Copies the input values from a specified motion profile to a snapshot of a motion profile.
- [setAttitude(\_:)](gcmotion/setattitude%28__%29.md): Sets the controller’s attitude.
- [setRotationRate(\_:)](gcmotion/setrotationrate%28__%29.md): Sets the controller’s rotation rate.
- [setAcceleration(\_:)](gcmotion/setacceleration%28__%29.md): Sets the total acceleration of the controller that includes gravity and the user’s acceleration.
- [setGravity(\_:)](gcmotion/setgravity%28__%29.md): Sets the controller’s gravity data.
- [setUserAcceleration(\_:)](gcmotion/setuseracceleration%28__%29.md): Sets the acceleration the user applies to the controller.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Game controller profiles

- [Input](input.md): Receive controller input in the way that best integrates with the flow of your game or game engine.
- [GCDeviceBattery](gcdevicebattery.md): The charge level and state of a device’s battery.
- [GCDeviceHaptics](gcdevicehaptics.md): The locations of haptic actuators on a game controller.
- [GCDeviceLight](gcdevicelight.md): The colored light on a device.

# GCMotion (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A controller profile that supports orientation and motion.

## Declaration

```objectivec
@interface GCMotion : NSObject
```

<a id="overview"></a>

## Overview

The motion controller profile provides attitude and rotation data, as well as acceleration and sensor information. Use this profile to get motion input from a controller that measures acceleration and rotation rate. If the controller’s [motion](gccontroller/motion.md) property is a `GCMotion` object, the controller supports motion.

This illustration shows the direction of the x, y, and z axes of an iPhone when held upright.

![An illustration of a vertical iPhone with the  x-axis passing through its center from side to side, the y-axis passing through its center from top to bottom, and the z-axis passing through its center from back to front.](https://developer.apple.com/images/com.apple.gamecontroller/media-2930224@2x.png)

## Topics

### Getting the Controller

- [controller](gcmotion/controller.md): The controller for the profile.

### Receiving a Callback When Input Values Change

- [valueChangedHandler](gcmotion/valuechangedhandler.md): The block that the profile calls when an element’s value changes.
- [GCMotionValueChangedHandler](gcmotionvaluechangedhandler.md): The signature for the block that the profile calls when an element’s value changes.

### Verifying Capabilities

- [hasAttitude](gcmotion/hasattitude.md): A Boolean value that indicates whether the controller provides attitude data.
- [hasRotationRate](gcmotion/hasrotationrate.md): A Boolean value that indicates whether the controller provides rotation data.
- [hasGravityAndUserAcceleration](gcmotion/hasgravityanduseracceleration.md): A Boolean value that indicates whether the controller provides gravity and user acceleration data.
- [hasAttitudeAndRotationRate](gcmotion/hasattitudeandrotationrate.md): Deprecated. A Boolean value that indicates whether the controller provides attitude and rotation data.

### Accessing Attitude and Rotation Data

- [attitude](gcmotion/attitude.md): The attitude of the controller.
- [GCQuaternion](gcquaternion.md): A quaternion that represents a controller’s measurement of attitude.
- [rotationRate](gcmotion/rotationrate.md): The rotation rate of the controller.
- [GCRotationRate](gcrotationrate.md): A structure that represents rotation rates around the x, y, and z axes.
- [GCEulerAngles](gceulerangles.md): A structure that specifies the controller’s attitude as a series of rotations around the x, y, and z axes.

### Accessing Gravity and Acceleration Data

- [acceleration](gcmotion/acceleration.md): The total acceleration of the controller that includes gravity and the acceleration the user applies to the controller.
- [gravity](gcmotion/gravity.md): The gravity acceleration vector from the controller’s reference frame.
- [userAcceleration](gcmotion/useracceleration.md): The acceleration that the user applies to the controller.
- [GCAcceleration](gcacceleration.md): A three-dimensional acceleration vector.

### Accessing Sensor Data

- [sensorsRequireManualActivation](gcmotion/sensorsrequiremanualactivation.md): A Boolean value that indicates whether the sensors that compute the motion data require manual activation.
- [sensorsActive](gcmotion/sensorsactive.md): A Boolean value that indicates whether the sensors that compute the motion data are active.

### Setting Snapshot Values

- [setStateFromMotion:](gcmotion/setstatefrom%28__%29.md): Copies the input values from a specified motion profile to a snapshot of a motion profile.
- [setAttitude:](gcmotion/setattitude%28__%29.md): Sets the controller’s attitude.
- [setRotationRate:](gcmotion/setrotationrate%28__%29.md): Sets the controller’s rotation rate.
- [setAcceleration:](gcmotion/setacceleration%28__%29.md): Sets the total acceleration of the controller that includes gravity and the user’s acceleration.
- [setGravity:](gcmotion/setgravity%28__%29.md): Sets the controller’s gravity data.
- [setUserAcceleration:](gcmotion/setuseracceleration%28__%29.md): Sets the acceleration the user applies to the controller.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Game controller profiles

- [Input](input.md): Receive controller input in the way that best integrates with the flow of your game or game engine.
- [GCDeviceBattery](gcdevicebattery.md): The charge level and state of a device’s battery.
- [GCDeviceHaptics](gcdevicehaptics.md): The locations of haptic actuators on a game controller.
- [GCDeviceLight](gcdevicelight.md): The colored light on a device.
