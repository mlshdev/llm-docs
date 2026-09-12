> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmouseinput](https://developer.apple.com/documentation/gamecontroller/gcmouseinput)

# GCMouseInput (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A controller profile that tracks input from a mouse.

## Declaration

```swift
class GCMouseInput
```

<a id="overview"></a>

## Overview

This profile supports a mouse with the following features:

- A two-axis cursor and scroll
- A left button
- An optional right button
- An optional middle button
- An optional set of auxiliary buttons

This profile provides only raw mouse movement delta values. For the cursor position at a specific time, use the [UIHoverGestureRecognizer](../uikit/uihovergesturerecognizer.md) class and the `NSEvent` [mouseLocation](https://developer.apple.com/documentation/appkit/nsevent/mouselocation) method.

## Topics

### Getting Change Information

- [mouseMovedHandler](gcmouseinput/mousemovedhandler.md): The block that the profile calls when the mouse moves.
- [GCMouseMoved](gcmousemoved.md): The signature for the block that the mouse input profile calls when the mouse moves.

### Accessing Buttons

- [leftButton](gcmouseinput/leftbutton.md): The left button on the mouse.
- [rightButton](gcmouseinput/rightbutton.md): The optional right button on the mouse.
- [middleButton](gcmouseinput/middlebutton.md): The optional middle button on the mouse.
- [auxiliaryButtons](gcmouseinput/auxiliarybuttons.md): The optional additional buttons on the mouse.

### Scrolling

- [scroll](gcmouseinput/scroll.md): The location of the directional pad cursor with an undefined range.

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
- [GCKeyboardInput](gckeyboardinput.md): A controller profile that uses the keyboard as the input device.
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

# GCMouseInput (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A controller profile that tracks input from a mouse.

## Declaration

```objectivec
@interface GCMouseInput : GCPhysicalInputProfile
```

<a id="overview"></a>

## Overview

This profile supports a mouse with the following features:

- A two-axis cursor and scroll
- A left button
- An optional right button
- An optional middle button
- An optional set of auxiliary buttons

This profile provides only raw mouse movement delta values. For the cursor position at a specific time, use the [UIHoverGestureRecognizer](../uikit/uihovergesturerecognizer.md) class and the `NSEvent` [mouseLocation](https://developer.apple.com/documentation/appkit/nsevent/mouselocation) method.

## Topics

### Getting Change Information

- [mouseMovedHandler](gcmouseinput/mousemovedhandler.md): The block that the profile calls when the mouse moves.
- [GCMouseMoved](gcmousemoved.md): The signature for the block that the mouse input profile calls when the mouse moves.

### Accessing Buttons

- [leftButton](gcmouseinput/leftbutton.md): The left button on the mouse.
- [rightButton](gcmouseinput/rightbutton.md): The optional right button on the mouse.
- [middleButton](gcmouseinput/middlebutton.md): The optional middle button on the mouse.
- [auxiliaryButtons](gcmouseinput/auxiliarybuttons.md): The optional additional buttons on the mouse.

### Scrolling

- [scroll](gcmouseinput/scroll.md): The location of the directional pad cursor with an undefined range.

## Relationships

### Inherits From

- [GCPhysicalInputProfile](gcphysicalinputprofile.md)

## See Also

### Accessing controller profiles

- [extendedGamepad](gccontroller/extendedgamepad.md): The extended gamepad profile.
- [GCPhysicalInputProfile](gcphysicalinputprofile.md): The base class for controller profiles that support physical buttons, thumbsticks, and directional pads.
- [GCKeyboardInput](gckeyboardinput.md): A controller profile that uses the keyboard as the input device.
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
