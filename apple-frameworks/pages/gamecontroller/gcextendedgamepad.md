> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcextendedgamepad](https://developer.apple.com/documentation/gamecontroller/gcextendedgamepad)

# GCExtendedGamepad (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A controller profile that supports the extended set of gamepad controls.

## Declaration

```swift
class GCExtendedGamepad
```

## Mentioned In

- [Discovering game controllers](discovering-game-controllers.md)

<a id="overview"></a>

## Overview

The extended gamepad controller profile represents a physical or virtual controller with the following input elements:

- Two shoulder buttons
- Two trigger buttons
- Four face buttons in a diamond pattern
- One directional pad
- Two thumbsticks with optional thumbstick buttons
- Optional Home and Options buttons
- A Menu button

![An illustration of an extended gamepad controller with callouts for the buttons and controls.](https://developer.apple.com/images/com.apple.gamecontroller/media-3850406@2x.png)

If a [GCController](gccontroller.md) object supports this type of profile, get the input values of the elements from the controller’s [extendedGamepad](gccontroller/extendedgamepad.md) property or use the profile’s [valueChangedHandler](gcextendedgamepad/valuechangedhandler.md) method to receive a callback when the input values change. Alternatively, use the [saveSnapshot()](gcextendedgamepad/savesnapshot%28%29.md) method to capture the input values at a moment in time.

If the controller’s [extendedGamepad](gccontroller/extendedgamepad.md) property is `nil`, the controller doesn’t support this type of profile. See [GCController](gccontroller.md) for other profiles you can use.

## Topics

### Getting the controller

- [controller](gcextendedgamepad/controller.md): The controller for the profile.

### Getting change information

- [valueChangedHandler](gcextendedgamepad/valuechangedhandler.md): The block that the profile calls when an element’s value changes.
- [GCExtendedGamepadValueChangedHandler](gcextendedgamepadvaluechangedhandler.md): The signature for the block that the profile calls when an element’s value changes.

### Getting shoulder button inputs

- [leftShoulder](gcextendedgamepad/leftshoulder.md): The controller’s left shoulder button element.
- [rightShoulder](gcextendedgamepad/rightshoulder.md): The controller’s right shoulder button element.

### Getting trigger inputs

- [leftTrigger](gcextendedgamepad/lefttrigger.md): The controller’s left trigger element.
- [rightTrigger](gcextendedgamepad/righttrigger.md): The controller’s right trigger element.

### Getting face button inputs

- [buttonMenu](gcextendedgamepad/buttonmenu.md): The primary menu button element that players use to enter the main menu and pause the game.
- [buttonOptions](gcextendedgamepad/buttonoptions.md): The controller’s secondary menu button element.
- [buttonHome](gcextendedgamepad/buttonhome.md): The main menu button element that players use to enter the secondary menu and pause the game.
- [buttonA](gcextendedgamepad/buttona.md): The bottom face button that uses *A* or another indicator as its label.
- [buttonB](gcextendedgamepad/buttonb.md): The right face button that uses *B* or another indicator as its label.
- [buttonX](gcextendedgamepad/buttonx.md): The left face button that uses *X* or another indicator as its label.
- [buttonY](gcextendedgamepad/buttony.md): The top face button that uses *Y* or another indicator as its label.

### Getting directional pad inputs

- [dpad](gcextendedgamepad/dpad.md): The controller’s directional pad element.

### Getting thumbstick and thumbstick button inputs

- [leftThumbstick](gcextendedgamepad/leftthumbstick.md): The controller’s left thumbstick element.
- [rightThumbstick](gcextendedgamepad/rightthumbstick.md): The controller’s right thumbstick element.
- [leftThumbstickButton](gcextendedgamepad/leftthumbstickbutton.md): The button on the left thumbstick of the controller.
- [rightThumbstickButton](gcextendedgamepad/rightthumbstickbutton.md): The button on the right thumbstick of the controller.

### Accessing elements by name

- [Extended gamepad input names](extended-gamepad-input-names.md): Constants for names of extended gamepad elements.

### Setting snapshot values

- [setStateFrom(\_:)](gcextendedgamepad/setstatefrom%28__%29.md): Copies the input values from a specified extended gamepad to a snapshot of an extended gamepad.
- [saveSnapshot()](gcextendedgamepad/savesnapshot%28%29.md): Deprecated. Saves a snapshot of all of the profile’s elements.

## Relationships

### Inherits From

- [GCPhysicalInputProfile](gcphysicalinputprofile.md)

### Inherited By

- [GCDualSenseGamepad](gcdualsensegamepad.md)
- [GCDualShockGamepad](gcdualshockgamepad.md)
- [GCExtendedGamepadSnapshot](gcextendedgamepadsnapshot.md)
- [GCXboxGamepad](gcxboxgamepad.md)

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
- [GCDualShockGamepad](gcdualshockgamepad.md): A controller profile that supports the DualShock 4 controller.
- [GCXboxGamepad](gcxboxgamepad.md): A controller profile that supports the Xbox controller.
- [GCDualSenseGamepad](gcdualsensegamepad.md): A controller profile that supported the DualSense controller.
- [microGamepad](gccontroller/microgamepad.md): The micro gamepad profile.
- [GCMicroGamepad](gcmicrogamepad.md): A controller profile that supports the Siri Remote.
- [GCDirectionalGamepad](gcdirectionalgamepad.md): A profile that supports only the directional pad, without motion or rotation.
- [motion](gccontroller/motion.md): The motion input profile.
- [physicalInputProfile](gccontroller/physicalinputprofile.md): The physical input profile for the controller.
- [gamepad](gccontroller/gamepad.md): Deprecated. The gamepad profile.

# GCExtendedGamepad (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A controller profile that supports the extended set of gamepad controls.

## Declaration

```objectivec
@interface GCExtendedGamepad : GCPhysicalInputProfile
```

## Mentioned In

- [Discovering game controllers](discovering-game-controllers.md)

<a id="overview"></a>

## Overview

The extended gamepad controller profile represents a physical or virtual controller with the following input elements:

- Two shoulder buttons
- Two trigger buttons
- Four face buttons in a diamond pattern
- One directional pad
- Two thumbsticks with optional thumbstick buttons
- Optional Home and Options buttons
- A Menu button

![An illustration of an extended gamepad controller with callouts for the buttons and controls.](https://developer.apple.com/images/com.apple.gamecontroller/media-3850406@2x.png)

If a [GCController](gccontroller.md) object supports this type of profile, get the input values of the elements from the controller’s [extendedGamepad](gccontroller/extendedgamepad.md) property or use the profile’s [valueChangedHandler](gcextendedgamepad/valuechangedhandler.md) method to receive a callback when the input values change. Alternatively, use the [saveSnapshot](gcextendedgamepad/savesnapshot%28%29.md) method to capture the input values at a moment in time.

If the controller’s [extendedGamepad](gccontroller/extendedgamepad.md) property is `nil`, the controller doesn’t support this type of profile. See [GCController](gccontroller.md) for other profiles you can use.

## Topics

### Getting the controller

- [controller](gcextendedgamepad/controller.md): The controller for the profile.

### Getting change information

- [valueChangedHandler](gcextendedgamepad/valuechangedhandler.md): The block that the profile calls when an element’s value changes.
- [GCExtendedGamepadValueChangedHandler](gcextendedgamepadvaluechangedhandler.md): The signature for the block that the profile calls when an element’s value changes.

### Getting shoulder button inputs

- [leftShoulder](gcextendedgamepad/leftshoulder.md): The controller’s left shoulder button element.
- [rightShoulder](gcextendedgamepad/rightshoulder.md): The controller’s right shoulder button element.

### Getting trigger inputs

- [leftTrigger](gcextendedgamepad/lefttrigger.md): The controller’s left trigger element.
- [rightTrigger](gcextendedgamepad/righttrigger.md): The controller’s right trigger element.

### Getting face button inputs

- [buttonMenu](gcextendedgamepad/buttonmenu.md): The primary menu button element that players use to enter the main menu and pause the game.
- [buttonOptions](gcextendedgamepad/buttonoptions.md): The controller’s secondary menu button element.
- [buttonHome](gcextendedgamepad/buttonhome.md): The main menu button element that players use to enter the secondary menu and pause the game.
- [buttonA](gcextendedgamepad/buttona.md): The bottom face button that uses *A* or another indicator as its label.
- [buttonB](gcextendedgamepad/buttonb.md): The right face button that uses *B* or another indicator as its label.
- [buttonX](gcextendedgamepad/buttonx.md): The left face button that uses *X* or another indicator as its label.
- [buttonY](gcextendedgamepad/buttony.md): The top face button that uses *Y* or another indicator as its label.

### Getting directional pad inputs

- [dpad](gcextendedgamepad/dpad.md): The controller’s directional pad element.

### Getting thumbstick and thumbstick button inputs

- [leftThumbstick](gcextendedgamepad/leftthumbstick.md): The controller’s left thumbstick element.
- [rightThumbstick](gcextendedgamepad/rightthumbstick.md): The controller’s right thumbstick element.
- [leftThumbstickButton](gcextendedgamepad/leftthumbstickbutton.md): The button on the left thumbstick of the controller.
- [rightThumbstickButton](gcextendedgamepad/rightthumbstickbutton.md): The button on the right thumbstick of the controller.

### Accessing elements by name

- [Extended gamepad input names](extended-gamepad-input-names.md): Constants for names of extended gamepad elements.

### Setting snapshot values

- [setStateFromExtendedGamepad:](gcextendedgamepad/setstatefrom%28__%29.md): Copies the input values from a specified extended gamepad to a snapshot of an extended gamepad.
- [saveSnapshot](gcextendedgamepad/savesnapshot%28%29.md): Deprecated. Saves a snapshot of all of the profile’s elements.

## Relationships

### Inherits From

- [GCPhysicalInputProfile](gcphysicalinputprofile.md)

### Inherited By

- [GCDualSenseGamepad](gcdualsensegamepad.md)
- [GCDualShockGamepad](gcdualshockgamepad.md)
- [GCExtendedGamepadSnapshot](gcextendedgamepadsnapshot.md)
- [GCXboxGamepad](gcxboxgamepad.md)

## See Also

### Accessing controller profiles

- [extendedGamepad](gccontroller/extendedgamepad.md): The extended gamepad profile.
- [GCPhysicalInputProfile](gcphysicalinputprofile.md): The base class for controller profiles that support physical buttons, thumbsticks, and directional pads.
- [GCKeyboardInput](gckeyboardinput.md): A controller profile that uses the keyboard as the input device.
- [GCMouseInput](gcmouseinput.md): A controller profile that tracks input from a mouse.
- [GCDualShockGamepad](gcdualshockgamepad.md): A controller profile that supports the DualShock 4 controller.
- [GCXboxGamepad](gcxboxgamepad.md): A controller profile that supports the Xbox controller.
- [GCDualSenseGamepad](gcdualsensegamepad.md): A controller profile that supported the DualSense controller.
- [microGamepad](gccontroller/microgamepad.md): The micro gamepad profile.
- [GCMicroGamepad](gcmicrogamepad.md): A controller profile that supports the Siri Remote.
- [GCDirectionalGamepad](gcdirectionalgamepad.md): A profile that supports only the directional pad, without motion or rotation.
- [motion](gccontroller/motion.md): The motion input profile.
- [physicalInputProfile](gccontroller/physicalinputprofile.md): The physical input profile for the controller.
- [gamepad](gccontroller/gamepad.md): Deprecated. The gamepad profile.
