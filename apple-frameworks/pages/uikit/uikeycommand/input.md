> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uikeycommand/input](https://developer.apple.com/documentation/uikit/uikeycommand/input)

# input (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The string of characters corresponding to the keys that must be pressed to match this key command.

## Declaration

```swift
var input: String? { get }
```

## See Also

### Getting information about the key command

- [title](title.md): The key command’s title.
- [image](image.md): The key command’s image.
- [action](action.md): The command’s action-method selector.
- [modifierFlags](modifierflags.md): The bit mask of modifier flags that must be pressed to match this key command.
- [UIKeyModifierFlags](../uikeymodifierflags.md): Constants that indicate which modifier keys are pressed.
- [discoverabilityTitle](discoverabilitytitle.md): An elaborated title that explains the purpose of the key command.
- [attributes](attributes.md): The attributes indicating the style of the key command.
- [state](state.md): The state of the key command.

# input (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The string of characters corresponding to the keys that must be pressed to match this key command.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * input;
```

## See Also

### Getting information about the key command

- [title](title.md): The key command’s title.
- [image](image.md): The key command’s image.
- [action](action.md): The command’s action-method selector.
- [modifierFlags](modifierflags.md): The bit mask of modifier flags that must be pressed to match this key command.
- [UIKeyModifierFlags](../uikeymodifierflags.md): Constants that indicate which modifier keys are pressed.
- [discoverabilityTitle](discoverabilitytitle.md): An elaborated title that explains the purpose of the key command.
- [attributes](attributes.md): The attributes indicating the style of the key command.
- [state](state.md): The state of the key command.
