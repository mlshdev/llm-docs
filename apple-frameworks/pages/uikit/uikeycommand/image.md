> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uikeycommand/image](https://developer.apple.com/documentation/uikit/uikeycommand/image)

# image (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The key command’s image.

## Declaration

```swift
@NSCopying var image: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

Only the [context](../uimenusystem/context.md) command system supports the display of an image, and only when the app is running in iOS.

## See Also

### Getting information about the key command

- [title](title.md): The key command’s title.
- [input](input.md): The string of characters corresponding to the keys that must be pressed to match this key command.
- [action](action.md): The command’s action-method selector.
- [modifierFlags](modifierflags.md): The bit mask of modifier flags that must be pressed to match this key command.
- [UIKeyModifierFlags](../uikeymodifierflags.md): Constants that indicate which modifier keys are pressed.
- [discoverabilityTitle](discoverabilitytitle.md): An elaborated title that explains the purpose of the key command.
- [attributes](attributes.md): The attributes indicating the style of the key command.
- [state](state.md): The state of the key command.

# image (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The key command’s image.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIImage * image;
```

<a id="Discussion"></a>

## Discussion

Only the [contextSystem](../uimenusystem/context.md) command system supports the display of an image, and only when the app is running in iOS.

## See Also

### Getting information about the key command

- [title](title.md): The key command’s title.
- [input](input.md): The string of characters corresponding to the keys that must be pressed to match this key command.
- [action](action.md): The command’s action-method selector.
- [modifierFlags](modifierflags.md): The bit mask of modifier flags that must be pressed to match this key command.
- [UIKeyModifierFlags](../uikeymodifierflags.md): Constants that indicate which modifier keys are pressed.
- [discoverabilityTitle](discoverabilitytitle.md): An elaborated title that explains the purpose of the key command.
- [attributes](attributes.md): The attributes indicating the style of the key command.
- [state](state.md): The state of the key command.
