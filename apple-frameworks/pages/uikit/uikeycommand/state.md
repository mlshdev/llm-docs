> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uikeycommand/state](https://developer.apple.com/documentation/uikit/uikeycommand/state)

# state (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The state of the key command.

## Declaration

```swift
var state: UIMenuElement.State { get set }
```

## See Also

### Getting information about the key command

- [title](title.md): The key command’s title.
- [image](image.md): The key command’s image.
- [input](input.md): The string of characters corresponding to the keys that must be pressed to match this key command.
- [action](action.md): The command’s action-method selector.
- [modifierFlags](modifierflags.md): The bit mask of modifier flags that must be pressed to match this key command.
- [UIKeyModifierFlags](../uikeymodifierflags.md): Constants that indicate which modifier keys are pressed.
- [discoverabilityTitle](discoverabilitytitle.md): An elaborated title that explains the purpose of the key command.
- [attributes](attributes.md): The attributes indicating the style of the key command.

# state (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The state of the key command.

## Declaration

```objectivec
@property (nonatomic) UIMenuElementState state;
```

## See Also

### Getting information about the key command

- [title](title.md): The key command’s title.
- [image](image.md): The key command’s image.
- [input](input.md): The string of characters corresponding to the keys that must be pressed to match this key command.
- [action](action.md): The command’s action-method selector.
- [modifierFlags](modifierflags.md): The bit mask of modifier flags that must be pressed to match this key command.
- [UIKeyModifierFlags](../uikeymodifierflags.md): Constants that indicate which modifier keys are pressed.
- [discoverabilityTitle](discoverabilitytitle.md): An elaborated title that explains the purpose of the key command.
- [attributes](attributes.md): The attributes indicating the style of the key command.
