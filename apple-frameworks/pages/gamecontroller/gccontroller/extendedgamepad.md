> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontroller/extendedgamepad](https://developer.apple.com/documentation/gamecontroller/gccontroller/extendedgamepad)

# extendedGamepad (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The extended gamepad profile.

## Declaration

```swift
var extendedGamepad: GCExtendedGamepad? { get }
```

<a id="Discussion"></a>

## Discussion

If the controller supports the extended gamepad profile, this property is a [GCExtendedGamepad](../gcextendedgamepad.md) object that you use to access the input elements of the controller. If the controller doesn’t support the extended gamepad profile, this property is `nil`.

## See Also

### Accessing controller profiles

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
- [physicalInputProfile](physicalinputprofile.md): The physical input profile for the controller.
- [gamepad](gamepad.md): Deprecated. The gamepad profile.

# extendedGamepad (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The extended gamepad profile.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) GCExtendedGamepad * extendedGamepad;
```

<a id="Discussion"></a>

## Discussion

If the controller supports the extended gamepad profile, this property is a [GCExtendedGamepad](../gcextendedgamepad.md) object that you use to access the input elements of the controller. If the controller doesn’t support the extended gamepad profile, this property is `nil`.

## See Also

### Accessing controller profiles

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
- [physicalInputProfile](physicalinputprofile.md): The physical input profile for the controller.
- [gamepad](gamepad.md): Deprecated. The gamepad profile.
