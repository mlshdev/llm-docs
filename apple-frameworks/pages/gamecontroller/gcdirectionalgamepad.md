> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdirectionalgamepad](https://developer.apple.com/documentation/gamecontroller/gcdirectionalgamepad)

# GCDirectionalGamepad (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · macOS 11.1+ · tvOS 14.3+ · visionOS 1.0+

A profile that supports only the directional pad, without motion or rotation.

## Declaration

```swift
class GCDirectionalGamepad
```

<a id="overview"></a>

## Overview

The directional gamepad profile is similar to a micro gamepad profile except it doesn’t support motion or rotation. The controller’s [motion](gccontroller/motion.md) property is `nil` and the inherited [allowsRotation](gcmicrogamepad/allowsrotation.md) property is [false](https://developer.apple.com/documentation/swift/false).

If you select Micro Gamepad when you add the Game Controllers capability ([GCSupportedGameControllers](../bundleresources/information-property-list/gcsupportedgamecontrollers.md) ) to your project, and you also support the GCDirectionalGamepad profile, select Directional Gamepad as well.

If you support the second-generation Siri Remote and later, set the [GCSupportsMultipleMicroGamepads](../bundleresources/information-property-list/gcsupportsmultiplemicrogamepads.md) key to `YES` in the information property list in your project.

In addition, the directional pad element may report digital or analog values. If the directional pad’s [isAnalog](gccontrollerelement/isanalog.md) property is [false](https://developer.apple.com/documentation/swift/false), it reports absolute directional pad values (the [reportsAbsoluteDpadValues](gcmicrogamepad/reportsabsolutedpadvalues.md) property is [true](https://developer.apple.com/documentation/swift/true)).

## Topics

### Accessing Elements by Name

- [Directional Gamepad Input Names](directional-gamepad-input-names.md): Constants for names of directional pad elements.

## Relationships

### Inherits From

- [GCMicroGamepad](gcmicrogamepad.md)

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
- [GCDualSenseGamepad](gcdualsensegamepad.md): A controller profile that supported the DualSense controller.
- [microGamepad](gccontroller/microgamepad.md): The micro gamepad profile.
- [GCMicroGamepad](gcmicrogamepad.md): A controller profile that supports the Siri Remote.
- [motion](gccontroller/motion.md): The motion input profile.
- [physicalInputProfile](gccontroller/physicalinputprofile.md): The physical input profile for the controller.
- [gamepad](gccontroller/gamepad.md): Deprecated. The gamepad profile.

# GCDirectionalGamepad (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · macOS 11.1+ · tvOS 14.3+ · visionOS 1.0+

A profile that supports only the directional pad, without motion or rotation.

## Declaration

```objectivec
@interface GCDirectionalGamepad : GCMicroGamepad
```

<a id="overview"></a>

## Overview

The directional gamepad profile is similar to a micro gamepad profile except it doesn’t support motion or rotation. The controller’s [motion](gccontroller/motion.md) property is `nil` and the inherited [allowsRotation](gcmicrogamepad/allowsrotation.md) property is [false](https://developer.apple.com/documentation/swift/false).

If you select Micro Gamepad when you add the Game Controllers capability ([GCSupportedGameControllers](../bundleresources/information-property-list/gcsupportedgamecontrollers.md) ) to your project, and you also support the GCDirectionalGamepad profile, select Directional Gamepad as well.

If you support the second-generation Siri Remote and later, set the [GCSupportsMultipleMicroGamepads](../bundleresources/information-property-list/gcsupportsmultiplemicrogamepads.md) key to `YES` in the information property list in your project.

In addition, the directional pad element may report digital or analog values. If the directional pad’s [analog](gccontrollerelement/isanalog.md) property is [false](https://developer.apple.com/documentation/swift/false), it reports absolute directional pad values (the [reportsAbsoluteDpadValues](gcmicrogamepad/reportsabsolutedpadvalues.md) property is [true](https://developer.apple.com/documentation/swift/true)).

## Topics

### Accessing Elements by Name

- [Directional Gamepad Input Names](directional-gamepad-input-names.md): Constants for names of directional pad elements.

## Relationships

### Inherits From

- [GCMicroGamepad](gcmicrogamepad.md)

## See Also

### Accessing controller profiles

- [extendedGamepad](gccontroller/extendedgamepad.md): The extended gamepad profile.
- [GCPhysicalInputProfile](gcphysicalinputprofile.md): The base class for controller profiles that support physical buttons, thumbsticks, and directional pads.
- [GCKeyboardInput](gckeyboardinput.md): A controller profile that uses the keyboard as the input device.
- [GCMouseInput](gcmouseinput.md): A controller profile that tracks input from a mouse.
- [GCExtendedGamepad](gcextendedgamepad.md): A controller profile that supports the extended set of gamepad controls.
- [GCDualShockGamepad](gcdualshockgamepad.md): A controller profile that supports the DualShock 4 controller.
- [GCXboxGamepad](gcxboxgamepad.md): A controller profile that supports the Xbox controller.
- [GCDualSenseGamepad](gcdualsensegamepad.md): A controller profile that supported the DualSense controller.
- [microGamepad](gccontroller/microgamepad.md): The micro gamepad profile.
- [GCMicroGamepad](gcmicrogamepad.md): A controller profile that supports the Siri Remote.
- [motion](gccontroller/motion.md): The motion input profile.
- [physicalInputProfile](gccontroller/physicalinputprofile.md): The physical input profile for the controller.
- [gamepad](gccontroller/gamepad.md): Deprecated. The gamepad profile.
