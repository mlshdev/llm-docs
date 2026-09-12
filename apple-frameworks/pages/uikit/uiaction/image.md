> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaction/image](https://developer.apple.com/documentation/uikit/uiaction/image)

# image (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The action’s image.

## Declaration

```swift
@NSCopying var image: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

The image appears next to the action’s [title](title.md). Only the [context](../uimenusystem/context.md) menu system supports the display of an image, and only when the app is running in iOS.

## See Also

### Getting information about the action

- [title](title.md): The action’s title.
- [identifier](identifier-swift.property.md): The unique identifier for the action.
- [discoverabilityTitle](discoverabilitytitle.md): An elaborated title that explains the purpose of the action.
- [attributes](attributes.md): The attributes indicating the style of the action.
- [state](state.md): The state of the action.
- [sender](sender.md): The object responsible for the action handler.

# image (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The action’s image.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIImage * image;
```

<a id="Discussion"></a>

## Discussion

The image appears next to the action’s [title](title.md). Only the [contextSystem](../uimenusystem/context.md) menu system supports the display of an image, and only when the app is running in iOS.

## See Also

### Getting information about the action

- [title](title.md): The action’s title.
- [identifier](identifier-swift.property.md): The unique identifier for the action.
- [discoverabilityTitle](discoverabilitytitle.md): An elaborated title that explains the purpose of the action.
- [attributes](attributes.md): The attributes indicating the style of the action.
- [state](state.md): The state of the action.
- [sender](sender.md): The object responsible for the action handler.
