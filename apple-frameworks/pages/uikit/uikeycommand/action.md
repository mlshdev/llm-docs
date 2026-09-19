> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uikeycommand/action

# action (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The command’s action-method selector.

## Declaration

```swift
var action: Selector? { get }
```

## See Also

### Getting information about the key command

- [title](title.md): The key command’s title.
- [image](image.md): The key command’s image.
- [input](input.md): The string of characters corresponding to the keys that must be pressed to match this key command.
- [modifierFlags](modifierflags.md): The bit mask of modifier flags that must be pressed to match this key command.
- [UIKeyModifierFlags](../uikeymodifierflags.md): Constants that indicate which modifier keys are pressed.
- [discoverabilityTitle](discoverabilitytitle.md): An elaborated title that explains the purpose of the key command.
- [attributes](attributes.md): The attributes indicating the style of the key command.
- [state](state.md): The state of the key command.

# action (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The command’s action-method selector.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) SEL action;
```

## See Also

### Getting information about the key command

- [title](title.md): The key command’s title.
- [image](image.md): The key command’s image.
- [input](input.md): The string of characters corresponding to the keys that must be pressed to match this key command.
- [modifierFlags](modifierflags.md): The bit mask of modifier flags that must be pressed to match this key command.
- [UIKeyModifierFlags](../uikeymodifierflags.md): Constants that indicate which modifier keys are pressed.
- [discoverabilityTitle](discoverabilitytitle.md): An elaborated title that explains the purpose of the key command.
- [attributes](attributes.md): The attributes indicating the style of the key command.
- [state](state.md): The state of the key command.
