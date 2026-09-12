> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdualsensegamepad](https://developer.apple.com/documentation/gamecontroller/gcdualsensegamepad)

# GCDualSenseGamepad (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+

A controller profile that supported the DualSense controller.

## Declaration

```swift
class GCDualSenseGamepad
```

<a id="overview"></a>

## Overview

The DualSense controller profile is similar to a DualShock profile ([GCDualShockGamepad](gcdualshockgamepad.md)), but has adaptive triggers that allow you to specify a dynamic resistance force when the user pulls the trigger. For example, you can emulate the feeling of pulling back a bow string, firing a weapon, or pulling a lever.

This profile also supports motion — that is, the controller’s [motion](gccontroller/motion.md) property is non-nil. If you hold the controller in front of you, the direction of the axes are:

- The positive x-axis points to your right.
- The positive y-axis points up out of the USB-C port.
- The positive z-axis starts at the touchpad and points to you.

## Topics

### Getting button input

- [touchpadButton](gcdualsensegamepad/touchpadbutton.md): The button element on the touchpad of the controller.

### Tracking finger locations

- [touchpadPrimary](gcdualsensegamepad/touchpadprimary.md): The location of the player’s primary finger on the touchpad.
- [touchpadSecondary](gcdualsensegamepad/touchpadsecondary.md): The location of the player’s secondary finger on the touchpad.

### Getting adaptive triggers

- [leftTrigger](gcdualsensegamepad/lefttrigger.md): The controller’s left adaptive trigger element.
- [rightTrigger](gcdualsensegamepad/righttrigger.md): The controller’s right adaptive trigger element.

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
- [GCDualShockGamepad](gcdualshockgamepad.md): A controller profile that supports the DualShock 4 controller.
- [GCXboxGamepad](gcxboxgamepad.md): A controller profile that supports the Xbox controller.
- [microGamepad](gccontroller/microgamepad.md): The micro gamepad profile.
- [GCMicroGamepad](gcmicrogamepad.md): A controller profile that supports the Siri Remote.
- [GCDirectionalGamepad](gcdirectionalgamepad.md): A profile that supports only the directional pad, without motion or rotation.
- [motion](gccontroller/motion.md): The motion input profile.
- [physicalInputProfile](gccontroller/physicalinputprofile.md): The physical input profile for the controller.
- [gamepad](gccontroller/gamepad.md): Deprecated. The gamepad profile.

# GCDualSenseGamepad (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+

A controller profile that supported the DualSense controller.

## Declaration

```objectivec
@interface GCDualSenseGamepad : GCExtendedGamepad
```

<a id="overview"></a>

## Overview

The DualSense controller profile is similar to a DualShock profile ([GCDualShockGamepad](gcdualshockgamepad.md)), but has adaptive triggers that allow you to specify a dynamic resistance force when the user pulls the trigger. For example, you can emulate the feeling of pulling back a bow string, firing a weapon, or pulling a lever.

This profile also supports motion — that is, the controller’s [motion](gccontroller/motion.md) property is non-nil. If you hold the controller in front of you, the direction of the axes are:

- The positive x-axis points to your right.
- The positive y-axis points up out of the USB-C port.
- The positive z-axis starts at the touchpad and points to you.

## Topics

### Getting button input

- [touchpadButton](gcdualsensegamepad/touchpadbutton.md): The button element on the touchpad of the controller.

### Tracking finger locations

- [touchpadPrimary](gcdualsensegamepad/touchpadprimary.md): The location of the player’s primary finger on the touchpad.
- [touchpadSecondary](gcdualsensegamepad/touchpadsecondary.md): The location of the player’s secondary finger on the touchpad.

### Getting adaptive triggers

- [leftTrigger](gcdualsensegamepad/lefttrigger.md): The controller’s left adaptive trigger element.
- [rightTrigger](gcdualsensegamepad/righttrigger.md): The controller’s right adaptive trigger element.

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
- [GCDualShockGamepad](gcdualshockgamepad.md): A controller profile that supports the DualShock 4 controller.
- [GCXboxGamepad](gcxboxgamepad.md): A controller profile that supports the Xbox controller.
- [microGamepad](gccontroller/microgamepad.md): The micro gamepad profile.
- [GCMicroGamepad](gcmicrogamepad.md): A controller profile that supports the Siri Remote.
- [GCDirectionalGamepad](gcdirectionalgamepad.md): A profile that supports only the directional pad, without motion or rotation.
- [motion](gccontroller/motion.md): The motion input profile.
- [physicalInputProfile](gccontroller/physicalinputprofile.md): The physical input profile for the controller.
- [gamepad](gccontroller/gamepad.md): Deprecated. The gamepad profile.
