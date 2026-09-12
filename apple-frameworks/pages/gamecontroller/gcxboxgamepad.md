> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcxboxgamepad](https://developer.apple.com/documentation/gamecontroller/gcxboxgamepad)

# GCXboxGamepad (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A controller profile that supports the Xbox controller.

## Declaration

```swift
class GCXboxGamepad
```

<a id="overview"></a>

## Overview

The Xbox controller profile is similar to an extended game pad ([GCExtendedGamepad](gcextendedgamepad.md)), but has four paddle button elements.

![An illustration of an Xbox controller with callouts for the four paddle buttons.](https://developer.apple.com/images/com.apple.gamecontroller/media-3830808@2x.png)

## Topics

### Getting button inputs

- [paddleButton1](gcxboxgamepad/paddlebutton1.md): The controller’s paddle 1 button element, which has a P1 label on the back of the controller.
- [paddleButton2](gcxboxgamepad/paddlebutton2.md): The paddle 2 button element, which has a P2 label on the back of the controller.
- [paddleButton3](gcxboxgamepad/paddlebutton3.md): The paddle 3 button element, which has a P3 label on the back of the controller.
- [paddleButton4](gcxboxgamepad/paddlebutton4.md): The paddle 4 button element, which has a P4 label on the back of the controller.
- [buttonShare](gcxboxgamepad/buttonshare.md): The share button on an Xbox Series X|S controller or later.

### Accessing elements by name

- [Xbox controller input names](xbox-controller-input-names.md): Constants for names of Xbox elements.

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
- [GCDualSenseGamepad](gcdualsensegamepad.md): A controller profile that supported the DualSense controller.
- [microGamepad](gccontroller/microgamepad.md): The micro gamepad profile.
- [GCMicroGamepad](gcmicrogamepad.md): A controller profile that supports the Siri Remote.
- [GCDirectionalGamepad](gcdirectionalgamepad.md): A profile that supports only the directional pad, without motion or rotation.
- [motion](gccontroller/motion.md): The motion input profile.
- [physicalInputProfile](gccontroller/physicalinputprofile.md): The physical input profile for the controller.
- [gamepad](gccontroller/gamepad.md): Deprecated. The gamepad profile.

# GCXboxGamepad (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A controller profile that supports the Xbox controller.

## Declaration

```objectivec
@interface GCXboxGamepad : GCExtendedGamepad
```

<a id="overview"></a>

## Overview

The Xbox controller profile is similar to an extended game pad ([GCExtendedGamepad](gcextendedgamepad.md)), but has four paddle button elements.

![An illustration of an Xbox controller with callouts for the four paddle buttons.](https://developer.apple.com/images/com.apple.gamecontroller/media-3830808@2x.png)

## Topics

### Getting button inputs

- [paddleButton1](gcxboxgamepad/paddlebutton1.md): The controller’s paddle 1 button element, which has a P1 label on the back of the controller.
- [paddleButton2](gcxboxgamepad/paddlebutton2.md): The paddle 2 button element, which has a P2 label on the back of the controller.
- [paddleButton3](gcxboxgamepad/paddlebutton3.md): The paddle 3 button element, which has a P3 label on the back of the controller.
- [paddleButton4](gcxboxgamepad/paddlebutton4.md): The paddle 4 button element, which has a P4 label on the back of the controller.
- [buttonShare](gcxboxgamepad/buttonshare.md): The share button on an Xbox Series X|S controller or later.

### Accessing elements by name

- [Xbox controller input names](xbox-controller-input-names.md): Constants for names of Xbox elements.

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
- [GCDualSenseGamepad](gcdualsensegamepad.md): A controller profile that supported the DualSense controller.
- [microGamepad](gccontroller/microgamepad.md): The micro gamepad profile.
- [GCMicroGamepad](gcmicrogamepad.md): A controller profile that supports the Siri Remote.
- [GCDirectionalGamepad](gcdirectionalgamepad.md): A profile that supports only the directional pad, without motion or rotation.
- [motion](gccontroller/motion.md): The motion input profile.
- [physicalInputProfile](gccontroller/physicalinputprofile.md): The physical input profile for the controller.
- [gamepad](gccontroller/gamepad.md): Deprecated. The gamepad profile.
