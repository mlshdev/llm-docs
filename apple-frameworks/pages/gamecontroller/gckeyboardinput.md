> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gckeyboardinput](https://developer.apple.com/documentation/gamecontroller/gckeyboardinput)

# GCKeyboardInput (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A controller profile that uses the keyboard as the input device.

## Declaration

```swift
class GCKeyboardInput
```

<a id="overview"></a>

## Overview

Use this profile to get the state of the keyboard buttons that the [GCKeyCode](gckeycode.md) structure defines.

## Topics

### Getting Change Information

- [keyChangedHandler](gckeyboardinput/keychangedhandler.md): The block that the profile calls when the user presses a key.
- [GCKeyboardValueChangedHandler](gckeyboardvaluechangedhandler.md): The signature for the block that the keyboard input profile calls when a key value changes.

### Accessing Buttons

- [isAnyKeyPressed](gckeyboardinput/isanykeypressed.md): A Boolean value that indicates whether the user is pressing any of the keys.
- [button(forKeyCode:)](gckeyboardinput/button%28forkeycode_%29.md): Returns the button element for the specified key code.
- [GCKeyCode](gckeycode.md): The key codes for keys on a keyboard.
- [Keycode Constants](keycode-constants.md): Constants for the codes of keyboard keys.

## Relationships

### Inherits From

- [GCPhysicalInputProfile](gcphysicalinputprofile.md)

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
- [GCMouseInput](gcmouseinput.md): A controller profile that tracks input from a mouse.
- [GCExtendedGamepad](gcextendedgamepad.md): A controller profile that supports the extended set of gamepad controls.
- [GCDualShockGamepad](gcdualshockgamepad.md): A controller profile that supports the DualShock 4 controller.
- [GCXboxGamepad](gcxboxgamepad.md): A controller profile that supports the Xbox controller.
- [GCDualSenseGamepad](gcdualsensegamepad.md): A controller profile that supported the DualSense controller.
- [microGamepad](gccontroller/microgamepad.md): The micro gamepad profile.
- [GCMicroGamepad](gcmicrogamepad.md): A controller profile that supports the Siri Remote.
- [GCDirectionalGamepad](gcdirectionalgamepad.md): A profile that supports only the directional pad, without motion or rotation.
- [motion](gccontroller/motion.md): The motion input profile.
- [physicalInputProfile](gccontroller/physicalinputprofile.md): The physical input profile for the controller.
- [gamepad](gccontroller/gamepad.md): Deprecated. The gamepad profile.

# GCKeyboardInput (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A controller profile that uses the keyboard as the input device.

## Declaration

```objectivec
@interface GCKeyboardInput : GCPhysicalInputProfile
```

<a id="overview"></a>

## Overview

Use this profile to get the state of the keyboard buttons that the [GCKeyCode](gckeycode.md) structure defines.

## Topics

### Getting Change Information

- [keyChangedHandler](gckeyboardinput/keychangedhandler.md): The block that the profile calls when the user presses a key.
- [GCKeyboardValueChangedHandler](gckeyboardvaluechangedhandler.md): The signature for the block that the keyboard input profile calls when a key value changes.

### Accessing Buttons

- [anyKeyPressed](gckeyboardinput/isanykeypressed.md): A Boolean value that indicates whether the user is pressing any of the keys.
- [buttonForKeyCode:](gckeyboardinput/button%28forkeycode_%29.md): Returns the button element for the specified key code.
- [GCKeyCode](gckeycode.md): The key codes for keys on a keyboard.
- [Keycode Constants](keycode-constants.md): Constants for the codes of keyboard keys.

## Relationships

### Inherits From

- [GCPhysicalInputProfile](gcphysicalinputprofile.md)

## See Also

### Accessing controller profiles

- [extendedGamepad](gccontroller/extendedgamepad.md): The extended gamepad profile.
- [GCPhysicalInputProfile](gcphysicalinputprofile.md): The base class for controller profiles that support physical buttons, thumbsticks, and directional pads.
- [GCMouseInput](gcmouseinput.md): A controller profile that tracks input from a mouse.
- [GCExtendedGamepad](gcextendedgamepad.md): A controller profile that supports the extended set of gamepad controls.
- [GCDualShockGamepad](gcdualshockgamepad.md): A controller profile that supports the DualShock 4 controller.
- [GCXboxGamepad](gcxboxgamepad.md): A controller profile that supports the Xbox controller.
- [GCDualSenseGamepad](gcdualsensegamepad.md): A controller profile that supported the DualSense controller.
- [microGamepad](gccontroller/microgamepad.md): The micro gamepad profile.
- [GCMicroGamepad](gcmicrogamepad.md): A controller profile that supports the Siri Remote.
- [GCDirectionalGamepad](gcdirectionalgamepad.md): A profile that supports only the directional pad, without motion or rotation.
- [motion](gccontroller/motion.md): The motion input profile.
- [physicalInputProfile](gccontroller/physicalinputprofile.md): The physical input profile for the controller.
- [gamepad](gccontroller/gamepad.md): Deprecated. The gamepad profile.
