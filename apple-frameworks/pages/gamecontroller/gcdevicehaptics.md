> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicehaptics](https://developer.apple.com/documentation/gamecontroller/gcdevicehaptics)

# GCDeviceHaptics (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The locations of haptic actuators on a game controller.

## Declaration

```swift
class GCDeviceHaptics
```

<a id="overview"></a>

## Overview

Use this class to create a haptic engine with a specified locality. Any patterns you send to that engine play on the specified actuators.

> **Important**

>  The [supportsHaptics](../corehaptics/chhapticdevicecapability/supportshaptics.md) property of the engine that returns from the [createEngine(withLocality:)](gcdevicehaptics/createengine%28withlocality_%29.md) method applies to the device, not the game controller. Use the [supportedLocalities](gcdevicehaptics/supportedlocalities.md) method in this class to determine whether a game controller supports haptics.

## Topics

### Creating a haptics engine

- [createEngine(withLocality:)](gcdevicehaptics/createengine%28withlocality_%29.md): Creates a haptics engine with the specified locality.
- [GCHapticDurationInfinite](gchapticdurationinfinite.md): An infinite duration for a haptics event.

### Getting the localities

- [supportedLocalities](gcdevicehaptics/supportedlocalities.md): The locations of haptic actuators on the device.
- [GCHapticsLocality](gchapticslocality.md): The location of one or more haptics actuators on a game controller.

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
- [GCMotion](gcmotion.md): A controller profile that supports orientation and motion.
- [GCDeviceBattery](gcdevicebattery.md): The charge level and state of a device’s battery.
- [GCDeviceLight](gcdevicelight.md): The colored light on a device.

# GCDeviceHaptics (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The locations of haptic actuators on a game controller.

## Declaration

```objectivec
@interface GCDeviceHaptics : NSObject
```

<a id="overview"></a>

## Overview

Use this class to create a haptic engine with a specified locality. Any patterns you send to that engine play on the specified actuators.

> **Important**

>  The [supportsHaptics](../corehaptics/chhapticdevicecapability/supportshaptics.md) property of the engine that returns from the [createEngineWithLocality:](gcdevicehaptics/createengine%28withlocality_%29.md) method applies to the device, not the game controller. Use the [supportedLocalities](gcdevicehaptics/supportedlocalities.md) method in this class to determine whether a game controller supports haptics.

## Topics

### Creating a haptics engine

- [createEngineWithLocality:](gcdevicehaptics/createengine%28withlocality_%29.md): Creates a haptics engine with the specified locality.
- [GCHapticDurationInfinite](gchapticdurationinfinite.md): An infinite duration for a haptics event.

### Getting the localities

- [supportedLocalities](gcdevicehaptics/supportedlocalities.md): The locations of haptic actuators on the device.
- [GCHapticsLocality](gchapticslocality.md): The location of one or more haptics actuators on a game controller.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Game controller profiles

- [Input](input.md): Receive controller input in the way that best integrates with the flow of your game or game engine.
- [GCMotion](gcmotion.md): A controller profile that supports orientation and motion.
- [GCDeviceBattery](gcdevicebattery.md): The charge level and state of a device’s battery.
- [GCDeviceLight](gcdevicelight.md): The colored light on a device.
