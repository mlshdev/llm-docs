> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmicrogamepad](https://developer.apple.com/documentation/gamecontroller/gcmicrogamepad)

# GCMicroGamepad (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A controller profile that supports the Siri Remote.

## Declaration

```swift
class GCMicroGamepad
```

<a id="overview"></a>

## Overview

The micro gamepad controller profile supports the following input elements:

- Two digital face buttons (A and X).
- One analog directional pad (D-pad) that functions as a touchpad.

Users can rotate game controllers that support the micro gamepad profile, switching them between landscape and portrait orientation. If you want to get directional values according to the orientation, set the [allowsRotation](gcmicrogamepad/allowsrotation.md) property to [true](https://developer.apple.com/documentation/swift/true).

![An illustration of a Siri Remote with callouts for the digital face buttons, the Button menu, and the analog directional pad.](https://developer.apple.com/images/com.apple.gamecontroller/media-3830807@2x.png)

## Topics

### Getting the controller

- [controller](gcmicrogamepad/controller.md): The controller associated with this profile.

### Receiving a callback when input values change

- [valueChangedHandler](gcmicrogamepad/valuechangedhandler.md): The block that this profile calls when an element’s value changes.
- [GCMicroGamepadValueChangedHandler](gcmicrogamepadvaluechangedhandler.md): Signature for the block that this profile calls when an element’s value changes.

### Getting face button inputs

- [buttonMenu](gcmicrogamepad/buttonmenu.md): The menu face button that players use to enter the main menu and pause the game.
- [buttonA](gcmicrogamepad/buttona.md): The button that the user activates by pressing harder on the touchpad.
- [buttonX](gcmicrogamepad/buttonx.md): The second face button element.

### Getting directional pad inputs

- [dpad](gcmicrogamepad/dpad.md): The controller’s directional pad element.
- [reportsAbsoluteDpadValues](gcmicrogamepad/reportsabsolutedpadvalues.md): A Boolean value that indicates whether the directional pad reports absolute or relative values.
- [allowsRotation](gcmicrogamepad/allowsrotation.md): A Boolean value that indicates whether the profile reports the directional pad values relative to its current orientation.

### Accessing elements by name

- [Micro gamepad input names](micro-gamepad-input-names.md): Constants for names of micro gamepad elements.

### Setting snapshot avlues

- [setStateFrom(\_:)](gcmicrogamepad/setstatefrom%28__%29.md): Copies the input values from a specified micro gamepad to a snapshot of a micro gamepad.
- [saveSnapshot()](gcmicrogamepad/savesnapshot%28%29.md): Deprecated. Saves a snapshot of all of the profile’s elements.

## Relationships

### Inherits From

- [GCPhysicalInputProfile](gcphysicalinputprofile.md)

### Inherited By

- [GCDirectionalGamepad](gcdirectionalgamepad.md)
- [GCMicroGamepadSnapshot](gcmicrogamepadsnapshot.md)

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
- [GCDirectionalGamepad](gcdirectionalgamepad.md): A profile that supports only the directional pad, without motion or rotation.
- [motion](gccontroller/motion.md): The motion input profile.
- [physicalInputProfile](gccontroller/physicalinputprofile.md): The physical input profile for the controller.
- [gamepad](gccontroller/gamepad.md): Deprecated. The gamepad profile.

# GCMicroGamepad (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A controller profile that supports the Siri Remote.

## Declaration

```objectivec
@interface GCMicroGamepad : GCPhysicalInputProfile
```

<a id="overview"></a>

## Overview

The micro gamepad controller profile supports the following input elements:

- Two digital face buttons (A and X).
- One analog directional pad (D-pad) that functions as a touchpad.

Users can rotate game controllers that support the micro gamepad profile, switching them between landscape and portrait orientation. If you want to get directional values according to the orientation, set the [allowsRotation](gcmicrogamepad/allowsrotation.md) property to [true](https://developer.apple.com/documentation/swift/true).

![An illustration of a Siri Remote with callouts for the digital face buttons, the Button menu, and the analog directional pad.](https://developer.apple.com/images/com.apple.gamecontroller/media-3830807@2x.png)

## Topics

### Getting the controller

- [controller](gcmicrogamepad/controller.md): The controller associated with this profile.

### Receiving a callback when input values change

- [valueChangedHandler](gcmicrogamepad/valuechangedhandler.md): The block that this profile calls when an element’s value changes.
- [GCMicroGamepadValueChangedHandler](gcmicrogamepadvaluechangedhandler.md): Signature for the block that this profile calls when an element’s value changes.

### Getting face button inputs

- [buttonMenu](gcmicrogamepad/buttonmenu.md): The menu face button that players use to enter the main menu and pause the game.
- [buttonA](gcmicrogamepad/buttona.md): The button that the user activates by pressing harder on the touchpad.
- [buttonX](gcmicrogamepad/buttonx.md): The second face button element.

### Getting directional pad inputs

- [dpad](gcmicrogamepad/dpad.md): The controller’s directional pad element.
- [reportsAbsoluteDpadValues](gcmicrogamepad/reportsabsolutedpadvalues.md): A Boolean value that indicates whether the directional pad reports absolute or relative values.
- [allowsRotation](gcmicrogamepad/allowsrotation.md): A Boolean value that indicates whether the profile reports the directional pad values relative to its current orientation.

### Accessing elements by name

- [Micro gamepad input names](micro-gamepad-input-names.md): Constants for names of micro gamepad elements.

### Setting snapshot avlues

- [setStateFromMicroGamepad:](gcmicrogamepad/setstatefrom%28__%29.md): Copies the input values from a specified micro gamepad to a snapshot of a micro gamepad.
- [saveSnapshot](gcmicrogamepad/savesnapshot%28%29.md): Deprecated. Saves a snapshot of all of the profile’s elements.

## Relationships

### Inherits From

- [GCPhysicalInputProfile](gcphysicalinputprofile.md)

### Inherited By

- [GCDirectionalGamepad](gcdirectionalgamepad.md)
- [GCMicroGamepadSnapshot](gcmicrogamepadsnapshot.md)

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
- [GCDirectionalGamepad](gcdirectionalgamepad.md): A profile that supports only the directional pad, without motion or rotation.
- [motion](gccontroller/motion.md): The motion input profile.
- [physicalInputProfile](gccontroller/physicalinputprofile.md): The physical input profile for the controller.
- [gamepad](gccontroller/gamepad.md): Deprecated. The gamepad profile.
