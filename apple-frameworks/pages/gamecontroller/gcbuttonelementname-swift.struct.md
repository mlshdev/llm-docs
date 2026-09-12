> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcbuttonelementname-swift.struct](https://developer.apple.com/documentation/gamecontroller/gcbuttonelementname-swift.struct)

# GCButtonElementName

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS

The names of the button elements.

## Declaration

```swift
struct GCButtonElementName
```

## Topics

### Getting extended gamepad shoulder button names

- [leftShoulder](gcbuttonelementname-swift.struct/leftshoulder.md): The name of the left shoulder button.
- [rightShoulder](gcbuttonelementname-swift.struct/rightshoulder.md): The name of the right shoulder button.
- [leftBumper](gcbuttonelementname-swift.struct/leftbumper.md): The name of the additional left shoulder button.
- [rightBumper](gcbuttonelementname-swift.struct/rightbumper.md): The name of the additional right shoulder button.

### Getting extended gamepad trigger names

- [leftTrigger](gcbuttonelementname-swift.struct/lefttrigger.md): The name of the left trigger.
- [rightTrigger](gcbuttonelementname-swift.struct/righttrigger.md): The name of the right trigger.

### Getting extended gamepad face button names

- [menu](gcbuttonelementname-swift.struct/menu.md): The name of the primary menu button element.
- [options](gcbuttonelementname-swift.struct/options.md): The name of the main options button element.
- [home](gcbuttonelementname-swift.struct/home.md): The name of the main menu button element.
- [a](gcbuttonelementname-swift.struct/a.md): The name for the controller’s A button.
- [b](gcbuttonelementname-swift.struct/b.md): The name for the controller’s B button.
- [x](gcbuttonelementname-swift.struct/x.md): The name for the controller’s X button.
- [y](gcbuttonelementname-swift.struct/y.md): The name for the controller’s Y button.

### Getting extended gamepad thumbstick names

- [leftThumbstickButton](gcbuttonelementname-swift.struct/leftthumbstickbutton.md): The name of the left thumbstick element.
- [rightThumbstickButton](gcbuttonelementname-swift.struct/rightthumbstickbutton.md): The name of the right thumbstick element.

### Getting extended gamepad back button names

Some gamepads include additional buttons or triggers on their underside. Because the number and layout of bottom buttons vary by controller, the Game Controller framework identifies them by their easy of use or position to the person’s fingers.

- [backLeftButton(position:)](gcbuttonelementname-swift.struct/backleftbutton%28position_%29.md): Returns the name of the back left button at the specified location.
- [backRightButton(position:)](gcbuttonelementname-swift.struct/backrightbutton%28position_%29.md): Returns the name of the back right button at the specified location.

### Getting steering wheel controller names

- [pedalClutch](gcbuttonelementname-swift.struct/pedalclutch.md): The name of the controller’s clutch.
- [pedalBrake](gcbuttonelementname-swift.struct/pedalbrake.md): The name of the controller’s brake pedal.
- [pedalAccelerator](gcbuttonelementname-swift.struct/pedalaccelerator.md): The name of the controller’s accelerator pedal.
- [leftPaddle](gcbuttonelementname-swift.struct/leftpaddle.md): The name of the controller’s left paddle.
- [rightPaddle](gcbuttonelementname-swift.struct/rightpaddle.md): The name of the controller’s right paddle.

### Getting Xbox button names

- [share](gcbuttonelementname-swift.struct/share.md): The name of the Xbox share button.

### Getting arcade stick button names

- [arcadeButton(row:column:)](gcbuttonelementname-swift.struct/arcadebutton%28row_column_%29.md): Returns the name of the arcade stick button at the specified location.

### Type Properties

- [grip](gcbuttonelementname-swift.struct/grip.md)
- [leftSideButton](gcbuttonelementname-swift.struct/leftsidebutton.md)
- [rightSideButton](gcbuttonelementname-swift.struct/rightsidebutton.md)
- [stylusPrimaryButton](gcbuttonelementname-swift.struct/stylusprimarybutton.md)
- [stylusSecondaryButton](gcbuttonelementname-swift.struct/stylussecondarybutton.md)
- [stylusTip](gcbuttonelementname-swift.struct/stylustip.md)
- [thumbstickButton](gcbuttonelementname-swift.struct/thumbstickbutton.md)
- [trigger](gcbuttonelementname-swift.struct/trigger.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [GCPhysicalInputElementTypedName](gcphysicalinputelementtypedname.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Element names

- [GCPhysicalInputElementName](gcphysicalinputelementname-swift.struct.md): The name of a physical input element.
- [GCPhysicalInputElementTypedName](gcphysicalinputelementtypedname.md): A type-safe name for accessing elements of a physical input element collection.
- [GCAxisElementName](gcaxiselementname-swift.struct.md): The names for the elements that provide values along an axis.
- [GCSwitchElementName](gcswitchelementname-swift.struct.md): The name for an element that represents a switch.
- [GCDirectionPadElementName](gcdirectionpadelementname-swift.struct.md): The names for directional pad elements.
- [Extended gamepad input names](extended-gamepad-input-names.md): Constants for names of extended gamepad elements.
- [DualShock controller input names](dualshock-controller-input-names.md): Constants for names of DualShock 4 elements.
- [Xbox controller input names](xbox-controller-input-names.md): Constants for names of Xbox elements.
- [Micro gamepad input names](micro-gamepad-input-names.md): Constants for names of micro gamepad elements.
- [Directional Gamepad Input Names](directional-gamepad-input-names.md): Constants for names of directional pad elements.
