> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uikeycommand/discoverabilitytitle](https://developer.apple.com/documentation/uikit/uikeycommand/discoverabilitytitle)

# discoverabilityTitle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

An elaborated title that explains the purpose of the key command.

## Declaration

```swift
var discoverabilityTitle: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The system uses this property to display information about the command. In iOS, the system displays this title in the discoverability heads-up display (HUD). If this property is `nil`, the HUD displays the [title](../uicommand/title.md) property.

In Mac apps built with Mac Catalyst, the system displays the discoverability title as a tooltip.

## See Also

### Getting information about the key command

- [title](title.md): The key command’s title.
- [image](image.md): The key command’s image.
- [input](input.md): The string of characters corresponding to the keys that must be pressed to match this key command.
- [action](action.md): The command’s action-method selector.
- [modifierFlags](modifierflags.md): The bit mask of modifier flags that must be pressed to match this key command.
- [UIKeyModifierFlags](../uikeymodifierflags.md): Constants that indicate which modifier keys are pressed.
- [attributes](attributes.md): The attributes indicating the style of the key command.
- [state](state.md): The state of the key command.

# discoverabilityTitle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

An elaborated title that explains the purpose of the key command.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * discoverabilityTitle;
```

<a id="Discussion"></a>

## Discussion

The system uses this property to display information about the command. In iOS, the system displays this title in the discoverability heads-up display (HUD). If this property is `nil`, the HUD displays the [title](../uicommand/title.md) property.

In Mac apps built with Mac Catalyst, the system displays the discoverability title as a tooltip.

## See Also

### Getting information about the key command

- [title](title.md): The key command’s title.
- [image](image.md): The key command’s image.
- [input](input.md): The string of characters corresponding to the keys that must be pressed to match this key command.
- [action](action.md): The command’s action-method selector.
- [modifierFlags](modifierflags.md): The bit mask of modifier flags that must be pressed to match this key command.
- [UIKeyModifierFlags](../uikeymodifierflags.md): Constants that indicate which modifier keys are pressed.
- [attributes](attributes.md): The attributes indicating the style of the key command.
- [state](state.md): The state of the key command.
