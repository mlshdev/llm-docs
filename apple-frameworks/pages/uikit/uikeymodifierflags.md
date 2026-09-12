> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uikeymodifierflags](https://developer.apple.com/documentation/uikit/uikeymodifierflags)

# UIKeyModifierFlags (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Constants that indicate which modifier keys are pressed.

## Declaration

```swift
struct UIKeyModifierFlags
```

## Topics

### Modifier flags

- [alphaShift](uikeymodifierflags/alphashift.md): A modifier flag that indicates the user pressed the Caps Lock key.
- [shift](uikeymodifierflags/shift.md): A modifier flag that indicates the user pressed the Shift key.
- [control](uikeymodifierflags/control.md): A modifier flag that indicates the user pressed the Control key.
- [alternate](uikeymodifierflags/alternate.md): A modifier flag that indicates the user pressed the Option key.
- [command](uikeymodifierflags/command.md): A modifier flag that indicates the user pressed the Command key.
- [numericPad](uikeymodifierflags/numericpad.md): A modifier flag that indicates the user pressed a key located on the numeric keypad.

### Initializers

- [init(rawValue:)](uikeymodifierflags/init%28rawvalue_%29.md): Creates a modifier-flags structure from data in an unarchiver.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Getting information about the key command

- [title](uikeycommand/title.md): The key command’s title.
- [image](uikeycommand/image.md): The key command’s image.
- [input](uikeycommand/input.md): The string of characters corresponding to the keys that must be pressed to match this key command.
- [action](uikeycommand/action.md): The command’s action-method selector.
- [modifierFlags](uikeycommand/modifierflags.md): The bit mask of modifier flags that must be pressed to match this key command.
- [discoverabilityTitle](uikeycommand/discoverabilitytitle.md): An elaborated title that explains the purpose of the key command.
- [attributes](uikeycommand/attributes.md): The attributes indicating the style of the key command.
- [state](uikeycommand/state.md): The state of the key command.

# UIKeyModifierFlags (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Constants that indicate which modifier keys are pressed.

## Declaration

```objectivec
enum UIKeyModifierFlags : NSInteger;
```

## Topics

### Modifier flags

- [UIKeyModifierAlphaShift](uikeymodifierflags/alphashift.md): A modifier flag that indicates the user pressed the Caps Lock key.
- [UIKeyModifierShift](uikeymodifierflags/shift.md): A modifier flag that indicates the user pressed the Shift key.
- [UIKeyModifierControl](uikeymodifierflags/control.md): A modifier flag that indicates the user pressed the Control key.
- [UIKeyModifierAlternate](uikeymodifierflags/alternate.md): A modifier flag that indicates the user pressed the Option key.
- [UIKeyModifierCommand](uikeymodifierflags/command.md): A modifier flag that indicates the user pressed the Command key.
- [UIKeyModifierNumericPad](uikeymodifierflags/numericpad.md): A modifier flag that indicates the user pressed a key located on the numeric keypad.

## See Also

### Getting information about the key command

- [title](uikeycommand/title.md): The key command’s title.
- [image](uikeycommand/image.md): The key command’s image.
- [input](uikeycommand/input.md): The string of characters corresponding to the keys that must be pressed to match this key command.
- [action](uikeycommand/action.md): The command’s action-method selector.
- [modifierFlags](uikeycommand/modifierflags.md): The bit mask of modifier flags that must be pressed to match this key command.
- [discoverabilityTitle](uikeycommand/discoverabilitytitle.md): An elaborated title that explains the purpose of the key command.
- [attributes](uikeycommand/attributes.md): The attributes indicating the style of the key command.
- [state](uikeycommand/state.md): The state of the key command.
