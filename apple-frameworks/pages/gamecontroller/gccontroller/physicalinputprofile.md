> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontroller/physicalinputprofile](https://developer.apple.com/documentation/gamecontroller/gccontroller/physicalinputprofile)

# physicalInputProfile (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The physical input profile for the controller.

## Declaration

```swift
var physicalInputProfile: GCPhysicalInputProfile { get }
```

<a id="Discussion"></a>

## Discussion

This is a convenience property that returns the [extendedGamepad](extendedgamepad.md) or [microGamepad](microgamepad.md) properties.

## See Also

### Accessing controller profiles

- [extendedGamepad](extendedgamepad.md): The extended gamepad profile.
- [GCPhysicalInputProfile](../gcphysicalinputprofile.md): The base class for controller profiles that support physical buttons, thumbsticks, and directional pads.
- [GCKeyboardInput](../gckeyboardinput.md): A controller profile that uses the keyboard as the input device.
- [GCMouseInput](../gcmouseinput.md): A controller profile that tracks input from a mouse.
- [GCExtendedGamepad](../gcextendedgamepad.md): A controller profile that supports the extended set of gamepad controls.
- [GCDualShockGamepad](../gcdualshockgamepad.md): A controller profile that supports the DualShock 4 controller.
- [GCXboxGamepad](../gcxboxgamepad.md): A controller profile that supports the Xbox controller.
- [GCDualSenseGamepad](../gcdualsensegamepad.md): A controller profile that supported the DualSense controller.
- [microGamepad](microgamepad.md): The micro gamepad profile.
- [GCMicroGamepad](../gcmicrogamepad.md): A controller profile that supports the Siri Remote.
- [GCDirectionalGamepad](../gcdirectionalgamepad.md): A profile that supports only the directional pad, without motion or rotation.
- [motion](motion.md): The motion input profile.
- [gamepad](gamepad.md): Deprecated. The gamepad profile.

# physicalInputProfile (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The physical input profile for the controller.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) GCPhysicalInputProfile * physicalInputProfile;
```

<a id="Discussion"></a>

## Discussion

This is a convenience property that returns the [extendedGamepad](extendedgamepad.md) or [microGamepad](microgamepad.md) properties.

## See Also

### Accessing controller profiles

- [extendedGamepad](extendedgamepad.md): The extended gamepad profile.
- [GCPhysicalInputProfile](../gcphysicalinputprofile.md): The base class for controller profiles that support physical buttons, thumbsticks, and directional pads.
- [GCKeyboardInput](../gckeyboardinput.md): A controller profile that uses the keyboard as the input device.
- [GCMouseInput](../gcmouseinput.md): A controller profile that tracks input from a mouse.
- [GCExtendedGamepad](../gcextendedgamepad.md): A controller profile that supports the extended set of gamepad controls.
- [GCDualShockGamepad](../gcdualshockgamepad.md): A controller profile that supports the DualShock 4 controller.
- [GCXboxGamepad](../gcxboxgamepad.md): A controller profile that supports the Xbox controller.
- [GCDualSenseGamepad](../gcdualsensegamepad.md): A controller profile that supported the DualSense controller.
- [microGamepad](microgamepad.md): The micro gamepad profile.
- [GCMicroGamepad](../gcmicrogamepad.md): A controller profile that supports the Siri Remote.
- [GCDirectionalGamepad](../gcdirectionalgamepad.md): A profile that supports only the directional pad, without motion or rotation.
- [motion](motion.md): The motion input profile.
- [gamepad](gamepad.md): Deprecated. The gamepad profile.
