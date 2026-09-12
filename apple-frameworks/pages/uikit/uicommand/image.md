> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicommand/image](https://developer.apple.com/documentation/uikit/uicommand/image)

# image (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The command’s image.

## Declaration

```swift
@NSCopying var image: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

Only the [context](../uimenusystem/context.md) menu system supports the display of an image, and only when the app is running in iOS.

## See Also

### Getting information about the command

- [title](title.md): The command’s title.
- [action](action.md): The selector identifying the action method called after the user selects the command.
- [discoverabilityTitle](discoverabilitytitle.md): An elaborated title that explains the purpose of the command.
- [attributes](attributes.md): The attributes indicating the style of the command.
- [state](state.md): The state of the command.

# image (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The command’s image.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIImage * image;
```

<a id="Discussion"></a>

## Discussion

Only the [contextSystem](../uimenusystem/context.md) menu system supports the display of an image, and only when the app is running in iOS.

## See Also

### Getting information about the command

- [title](title.md): The command’s title.
- [action](action.md): The selector identifying the action method called after the user selects the command.
- [discoverabilityTitle](discoverabilitytitle.md): An elaborated title that explains the purpose of the command.
- [attributes](attributes.md): The attributes indicating the style of the command.
- [state](state.md): The state of the command.
