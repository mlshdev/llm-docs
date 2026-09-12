> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcphysicalinputprofile](https://developer.apple.com/documentation/gamecontroller/gcphysicalinputprofile)

# GCPhysicalInputProfile (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The base class for controller profiles that support physical buttons, thumbsticks, and directional pads.

## Declaration

```swift
class GCPhysicalInputProfile
```

<a id="overview"></a>

## Overview

This class provides properties and methods for accessing common elements of controllers, and for creating snapshots of profiles.

## Topics

### Getting the device

- [device](gcphysicalinputprofile/device.md): The physical device that the profile represents.

### Getting change information

- [lastEventTimestamp](gcphysicalinputprofile/lasteventtimestamp.md): The time of the most recent change to an element’s value.
- [valueDidChangeHandler](gcphysicalinputprofile/valuedidchangehandler.md): The block that the profile calls when an element’s value changes.

### Accessing elements by name or key

- [elements](gcphysicalinputprofile/elements.md): The elements in the profile as key-value pairs for lookup by name.
- [buttons](gcphysicalinputprofile/buttons.md): The buttons in the profile as key-value pairs for lookup by name.
- [axes](gcphysicalinputprofile/axes.md): The axes in the profile as key-value pairs for lookup by name.
- [dpads](gcphysicalinputprofile/dpads.md): The directional pads in the profile as key-value pairs for lookup by name.
- [touchpads](gcphysicalinputprofile/touchpads.md): The touchpads in the profile as key-value pairs for lookup by name.
- [subscript(\_:)](gcphysicalinputprofile/subscript%28__%29.md): Returns the element that the key specifies.

### Getting elements by type

- [allElements](gcphysicalinputprofile/allelements.md): The elements in the profile.
- [allButtons](gcphysicalinputprofile/allbuttons.md): The buttons in the profile.
- [allAxes](gcphysicalinputprofile/allaxes.md): The axes in the profile.
- [allDpads](gcphysicalinputprofile/alldpads.md): The directional pads in the profile.
- [allTouchpads](gcphysicalinputprofile/alltouchpads.md): The touchpads in the profile.

### Setting snapshot values

- [capture()](gcphysicalinputprofile/capture%28%29.md): Returns a snapshot of the profile with its current element values.
- [setStateFromPhysicalInput(\_:)](gcphysicalinputprofile/setstatefromphysicalinput%28__%29.md): Copies the input values from a specified physical input profile to a snapshot of the profile.

### Remapping input elements

- [hasRemappedElements](gcphysicalinputprofile/hasremappedelements.md): A Boolean value that indicates whether the user remaps elements in this profile.
- [mappedElementAlias(forPhysicalInputName:)](gcphysicalinputprofile/mappedelementalias%28forphysicalinputname_%29.md): Returns the name of the input element to which the user remaps the given physical element.
- [mappedPhysicalInputNames(forElementAlias:)](gcphysicalinputprofile/mappedphysicalinputnames%28forelementalias_%29.md): Returns the physical input elements to which the user remaps the given input element.
- [GCControllerUserCustomizationsDidChange](../foundation/nsnotification/name-swift.struct/gccontrollerusercustomizationsdidchange.md): A notification that posts when the user customizes the button mappings or other settings of a controller.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [GCExtendedGamepad](gcextendedgamepad.md)
- [GCGamepad](gcgamepad.md)
- [GCKeyboardInput](gckeyboardinput.md)
- [GCMicroGamepad](gcmicrogamepad.md)
- [GCMouseInput](gcmouseinput.md)

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
- [GCKeyboardInput](gckeyboardinput.md): A controller profile that uses the keyboard as the input device.
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

# GCPhysicalInputProfile (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The base class for controller profiles that support physical buttons, thumbsticks, and directional pads.

## Declaration

```objectivec
@interface GCPhysicalInputProfile : NSObject
```

<a id="overview"></a>

## Overview

This class provides properties and methods for accessing common elements of controllers, and for creating snapshots of profiles.

## Topics

### Getting the device

- [device](gcphysicalinputprofile/device.md): The physical device that the profile represents.

### Getting change information

- [lastEventTimestamp](gcphysicalinputprofile/lasteventtimestamp.md): The time of the most recent change to an element’s value.
- [valueDidChangeHandler](gcphysicalinputprofile/valuedidchangehandler.md): The block that the profile calls when an element’s value changes.

### Accessing elements by name or key

- [elements](gcphysicalinputprofile/elements.md): The elements in the profile as key-value pairs for lookup by name.
- [buttons](gcphysicalinputprofile/buttons.md): The buttons in the profile as key-value pairs for lookup by name.
- [axes](gcphysicalinputprofile/axes.md): The axes in the profile as key-value pairs for lookup by name.
- [dpads](gcphysicalinputprofile/dpads.md): The directional pads in the profile as key-value pairs for lookup by name.
- [touchpads](gcphysicalinputprofile/touchpads.md): The touchpads in the profile as key-value pairs for lookup by name.
- [objectForKeyedSubscript:](gcphysicalinputprofile/subscript%28__%29.md): Returns the element that the key specifies.

### Getting elements by type

- [allElements](gcphysicalinputprofile/allelements.md): The elements in the profile.
- [allButtons](gcphysicalinputprofile/allbuttons.md): The buttons in the profile.
- [allAxes](gcphysicalinputprofile/allaxes.md): The axes in the profile.
- [allDpads](gcphysicalinputprofile/alldpads.md): The directional pads in the profile.
- [allTouchpads](gcphysicalinputprofile/alltouchpads.md): The touchpads in the profile.

### Setting snapshot values

- [capture](gcphysicalinputprofile/capture%28%29.md): Returns a snapshot of the profile with its current element values.
- [setStateFromPhysicalInput:](gcphysicalinputprofile/setstatefromphysicalinput%28__%29.md): Copies the input values from a specified physical input profile to a snapshot of the profile.

### Remapping input elements

- [hasRemappedElements](gcphysicalinputprofile/hasremappedelements.md): A Boolean value that indicates whether the user remaps elements in this profile.
- [mappedElementAliasForPhysicalInputName:](gcphysicalinputprofile/mappedelementalias%28forphysicalinputname_%29.md): Returns the name of the input element to which the user remaps the given physical element.
- [mappedPhysicalInputNamesForElementAlias:](gcphysicalinputprofile/mappedphysicalinputnames%28forelementalias_%29.md): Returns the physical input elements to which the user remaps the given input element.
- [GCControllerUserCustomizationsDidChangeNotification](gccontrollerusercustomizationsdidchangenotification.md): A notification that posts when the user customizes the button mappings or other settings of a controller.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [GCExtendedGamepad](gcextendedgamepad.md)
- [GCGamepad](gcgamepad.md)
- [GCKeyboardInput](gckeyboardinput.md)
- [GCMicroGamepad](gcmicrogamepad.md)
- [GCMouseInput](gcmouseinput.md)

## See Also

### Accessing controller profiles

- [extendedGamepad](gccontroller/extendedgamepad.md): The extended gamepad profile.
- [GCKeyboardInput](gckeyboardinput.md): A controller profile that uses the keyboard as the input device.
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
