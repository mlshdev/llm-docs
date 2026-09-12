> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdualshockgamepad](https://developer.apple.com/documentation/gamecontroller/gcdualshockgamepad)

# GCDualShockGamepad (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A controller profile that supports the DualShock 4 controller.

## Declaration

```swift
class GCDualShockGamepad
```

<a id="overview"></a>

## Overview

The DualShock 4 controller profile is similar to an extended gamepad ([GCExtendedGamepad](gcextendedgamepad.md)), but has a touchpad with a button and two-finger tracking.

![An illustration of a DualShock 4 controller showing the touchpad.](https://developer.apple.com/images/com.apple.gamecontroller/media-3830806@2x.png)

This profile also supports motion — that is, the controller’s [motion](gccontroller/motion.md) property is non-nil. If you hold the controller in front of you, the direction of the axes are:

- The positive x-axis points to your right.
- The positive y-axis points up.
- The positive z-axis starts at the touchpad and points to you.

![An illustration of a DualShock 4 controller showing the directions of the x, y, and z axes.](https://developer.apple.com/images/com.apple.gamecontroller/media-3856422@2x.png)

## Topics

### Getting button input

- [touchpadButton](gcdualshockgamepad/touchpadbutton.md): The button element on the touchpad of the controller.

### Tracking finger locations

- [touchpadPrimary](gcdualshockgamepad/touchpadprimary.md): The location of the player’s primary finger on the touchpad.
- [touchpadSecondary](gcdualshockgamepad/touchpadsecondary.md): The location of the player’s secondary finger on the touchpad.

### Accessing elements by name

- [DualShock controller input names](dualshock-controller-input-names.md): Constants for names of DualShock 4 elements.

## Relationships

### Inherits From

- [GCExtendedGamepad](gcextendedgamepad.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Accessing controller profiles

- [extendedGamepad](gccontroller/extendedgamepad.md): The extended gamepad profile.
- [GCPhysicalInputProfile](gcphysicalinputprofile.md): The base class for controller profiles that support physical buttons, thumbsticks, and directional pads.
- [GCKeyboardInput](gckeyboardinput.md): A controller profile that uses the keyboard as the input device.
- [GCMouseInput](gcmouseinput.md): A controller profile that tracks input from a mouse.
- [GCExtendedGamepad](gcextendedgamepad.md): A controller profile that supports the extended set of gamepad controls.
- [GCXboxGamepad](gcxboxgamepad.md): A controller profile that supports the Xbox controller.
- [GCDualSenseGamepad](gcdualsensegamepad.md): A controller profile that supported the DualSense controller.
- [microGamepad](gccontroller/microgamepad.md): The micro gamepad profile.
- [GCMicroGamepad](gcmicrogamepad.md): A controller profile that supports the Siri Remote.
- [GCDirectionalGamepad](gcdirectionalgamepad.md): A profile that supports only the directional pad, without motion or rotation.
- [motion](gccontroller/motion.md): The motion input profile.
- [physicalInputProfile](gccontroller/physicalinputprofile.md): The physical input profile for the controller.
- [gamepad](gccontroller/gamepad.md): Deprecated. The gamepad profile.

# GCDualShockGamepad (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A controller profile that supports the DualShock 4 controller.

## Declaration

```objectivec
@interface GCDualShockGamepad : GCExtendedGamepad
```

<a id="overview"></a>

## Overview

The DualShock 4 controller profile is similar to an extended gamepad ([GCExtendedGamepad](gcextendedgamepad.md)), but has a touchpad with a button and two-finger tracking.

![An illustration of a DualShock 4 controller showing the touchpad.](https://developer.apple.com/images/com.apple.gamecontroller/media-3830806@2x.png)

This profile also supports motion — that is, the controller’s [motion](gccontroller/motion.md) property is non-nil. If you hold the controller in front of you, the direction of the axes are:

- The positive x-axis points to your right.
- The positive y-axis points up.
- The positive z-axis starts at the touchpad and points to you.

![An illustration of a DualShock 4 controller showing the directions of the x, y, and z axes.](https://developer.apple.com/images/com.apple.gamecontroller/media-3856422@2x.png)

## Topics

### Getting button input

- [touchpadButton](gcdualshockgamepad/touchpadbutton.md): The button element on the touchpad of the controller.

### Tracking finger locations

- [touchpadPrimary](gcdualshockgamepad/touchpadprimary.md): The location of the player’s primary finger on the touchpad.
- [touchpadSecondary](gcdualshockgamepad/touchpadsecondary.md): The location of the player’s secondary finger on the touchpad.

### Accessing elements by name

- [DualShock controller input names](dualshock-controller-input-names.md): Constants for names of DualShock 4 elements.

## Relationships

### Inherits From

- [GCExtendedGamepad](gcextendedgamepad.md)

## See Also

### Accessing controller profiles

- [extendedGamepad](gccontroller/extendedgamepad.md): The extended gamepad profile.
- [GCPhysicalInputProfile](gcphysicalinputprofile.md): The base class for controller profiles that support physical buttons, thumbsticks, and directional pads.
- [GCKeyboardInput](gckeyboardinput.md): A controller profile that uses the keyboard as the input device.
- [GCMouseInput](gcmouseinput.md): A controller profile that tracks input from a mouse.
- [GCExtendedGamepad](gcextendedgamepad.md): A controller profile that supports the extended set of gamepad controls.
- [GCXboxGamepad](gcxboxgamepad.md): A controller profile that supports the Xbox controller.
- [GCDualSenseGamepad](gcdualsensegamepad.md): A controller profile that supported the DualSense controller.
- [microGamepad](gccontroller/microgamepad.md): The micro gamepad profile.
- [GCMicroGamepad](gcmicrogamepad.md): A controller profile that supports the Siri Remote.
- [GCDirectionalGamepad](gcdirectionalgamepad.md): A profile that supports only the directional pad, without motion or rotation.
- [motion](gccontroller/motion.md): The motion input profile.
- [physicalInputProfile](gccontroller/physicalinputprofile.md): The physical input profile for the controller.
- [gamepad](gccontroller/gamepad.md): Deprecated. The gamepad profile.
