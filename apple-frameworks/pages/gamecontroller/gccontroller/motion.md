> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontroller/motion](https://developer.apple.com/documentation/gamecontroller/gccontroller/motion)

# motion (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The motion input profile.

## Declaration

```swift
var motion: GCMotion? { get }
```

<a id="Discussion"></a>

## Discussion

If the controller supports the motion profile, this property is a [GCMotion](../gcmotion.md) object that you use to access the controller’s motion data. If the controller doesn’t support the motion input profile, this property is `nil`.

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
- [physicalInputProfile](physicalinputprofile.md): The physical input profile for the controller.
- [gamepad](gamepad.md): Deprecated. The gamepad profile.

# motion (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The motion input profile.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) GCMotion * motion;
```

<a id="Discussion"></a>

## Discussion

If the controller supports the motion profile, this property is a [GCMotion](../gcmotion.md) object that you use to access the controller’s motion data. If the controller doesn’t support the motion input profile, this property is `nil`.

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
- [physicalInputProfile](physicalinputprofile.md): The physical input profile for the controller.
- [gamepad](gamepad.md): Deprecated. The gamepad profile.
