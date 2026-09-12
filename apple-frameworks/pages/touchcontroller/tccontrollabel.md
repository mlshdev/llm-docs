> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrollabel](https://developer.apple.com/documentation/touchcontroller/tccontrollabel)

# TCControlLabel (Swift)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A label you associate with a touch control and provides a semantic description.

## Declaration

```swift
class TCControlLabel
```

## Topics

### Creating a control label

- [init(name:role:)](tccontrollabel/init%28name_role_%29.md): Creates a new instance with the provided name and type.

### Inspecting the control

- [role](tccontrollabel/role-swift.property.md): The type of the control label.
- [TCControlLabel.Role](tccontrollabel/role-swift.enum.md): Defines the role for a control label. This determines the type of control on the touch controller’s associated GCController.
- [TCControlLabel.Role](tccontrollabel/role-swift.enum.md): Defines the role for a control label. This determines the type of control on the touch controller’s associated GCController.

### Accessing the controls

- [buttonA](tccontrollabel/buttona.md): Creates a pre-configured label for the “A” button.
- [buttonB](tccontrollabel/buttonb.md): Creates a pre-configured label for the “B” button.
- [buttonLeftShoulder](tccontrollabel/buttonleftshoulder.md): Creates a pre-configured label for the left shoulder button.
- [buttonLeftTrigger](tccontrollabel/buttonlefttrigger.md): Creates a pre-configured label for the left trigger button.
- [buttonMenu](tccontrollabel/buttonmenu.md): Creates a pre-configured label for the “Menu” button.
- [buttonOptions](tccontrollabel/buttonoptions.md): Creates a pre-configured label for the “Options” button.
- [buttonRightShoulder](tccontrollabel/buttonrightshoulder.md): Creates a pre-configured label for the right shoulder button.
- [buttonRightTrigger](tccontrollabel/buttonrighttrigger.md): Creates a pre-configured label for the right trigger button.
- [buttonX](tccontrollabel/buttonx.md): Creates a pre-configured label for the “X” button.
- [buttonY](tccontrollabel/buttony.md): Creates a pre-configured label for the “Y” button.
- [directionPad](tccontrollabel/directionpad.md): Creates a pre-configured label for the direction pad.
- [leftThumbstick](tccontrollabel/leftthumbstick.md): Creates a pre-configured label for the left thumbstick.
- [leftThumbstickButton](tccontrollabel/leftthumbstickbutton.md): Creates a pre-configured label for the left thumbstick button.
- [rightThumbstick](tccontrollabel/rightthumbstick.md): Creates a pre-configured label for the right thumbstick.
- [rightThumbstickButton](tccontrollabel/rightthumbstickbutton.md): Creates a pre-configured label for the right thumbstick button.

### Instance Properties

- [name](tccontrollabel/name.md): The name of the control label that you use for lookup on a game controller instance.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Inspecting a control

- [isEnabled](tccontrol/isenabled.md): A Boolean value that indicates whether the control is enabled.
- [highlightDuration](tccontrol/highlightduration.md): The duration of the highlight animation.
- [label](tccontrol/label.md): The label associated with the control.
- [isPressed](tccontrol/ispressed.md): Indicates whether the control is currently pressed.

# TCControlLabel (Objective-C)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A label you associate with a touch control and provides a semantic description.

## Declaration

```objectivec
@interface TCControlLabel : NSObject
```

## Topics

### Creating a control label

- [initWithName:role:](tccontrollabel/init%28name_role_%29.md): Creates a new instance with the provided name and type.

### Inspecting the control

- [role](tccontrollabel/role-swift.property.md): The type of the control label.
- [TCControlLabelRole](tccontrollabel/role-swift.enum.md): Defines the role for a control label. This determines the type of control on the touch controller’s associated GCController.
- [TCControlLabelRole](tccontrollabel/role-swift.enum.md): Defines the role for a control label. This determines the type of control on the touch controller’s associated GCController.

### Accessing the controls

- [buttonA](tccontrollabel/buttona.md): Creates a pre-configured label for the “A” button.
- [buttonB](tccontrollabel/buttonb.md): Creates a pre-configured label for the “B” button.
- [buttonLeftShoulder](tccontrollabel/buttonleftshoulder.md): Creates a pre-configured label for the left shoulder button.
- [buttonLeftTrigger](tccontrollabel/buttonlefttrigger.md): Creates a pre-configured label for the left trigger button.
- [buttonMenu](tccontrollabel/buttonmenu.md): Creates a pre-configured label for the “Menu” button.
- [buttonOptions](tccontrollabel/buttonoptions.md): Creates a pre-configured label for the “Options” button.
- [buttonRightShoulder](tccontrollabel/buttonrightshoulder.md): Creates a pre-configured label for the right shoulder button.
- [buttonRightTrigger](tccontrollabel/buttonrighttrigger.md): Creates a pre-configured label for the right trigger button.
- [buttonX](tccontrollabel/buttonx.md): Creates a pre-configured label for the “X” button.
- [buttonY](tccontrollabel/buttony.md): Creates a pre-configured label for the “Y” button.
- [directionPad](tccontrollabel/directionpad.md): Creates a pre-configured label for the direction pad.
- [leftThumbstick](tccontrollabel/leftthumbstick.md): Creates a pre-configured label for the left thumbstick.
- [leftThumbstickButton](tccontrollabel/leftthumbstickbutton.md): Creates a pre-configured label for the left thumbstick button.
- [rightThumbstick](tccontrollabel/rightthumbstick.md): Creates a pre-configured label for the right thumbstick.
- [rightThumbstickButton](tccontrollabel/rightthumbstickbutton.md): Creates a pre-configured label for the right thumbstick button.

### Instance Properties

- [name](tccontrollabel/name.md): The name of the control label that you use for lookup on a game controller instance.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Inspecting a control

- [enabled](tccontrol/isenabled.md): A Boolean value that indicates whether the control is enabled.
- [highlightDuration](tccontrol/highlightduration.md): The duration of the highlight animation.
- [label](tccontrol/label.md): The label associated with the control.
- [pressed](tccontrol/ispressed.md): Indicates whether the control is currently pressed.
