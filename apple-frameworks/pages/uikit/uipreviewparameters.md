> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipreviewparameters](https://developer.apple.com/documentation/uikit/uipreviewparameters)

# UIPreviewParameters (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Additional parameters to use when animating a preview interface.

## Declaration

```swift
@MainActor class UIPreviewParameters
```

## Topics

### Creating preview parameters

- [init()](uipreviewparameters/init%28%29.md): Creates a default set of preview parameters.
- [init(textLineRects:)](uipreviewparameters/init%28textlinerects_%29.md): Creates a preview parameters object with information about the text you want to preview.

### Configuring the preview attributes

- [backgroundColor](uipreviewparameters/backgroundcolor.md): The background color to display behind the preview.
- [visiblePath](uipreviewparameters/visiblepath.md): The portion of the view to show in the preview.
- [shadowPath](uipreviewparameters/shadowpath.md): The path to use for drawing the preview’s shadow.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIDragPreviewParameters](uidragpreviewparameters.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Contextual menus

- [UIContextMenuSystem](uicontextmenusystem.md): The context menu system.
- [UIContextMenuInteraction](uicontextmenuinteraction.md): An interaction object that you use to display relevant actions for your content.
- [UIContextMenuInteractionDelegate](uicontextmenuinteractiondelegate.md): The methods for providing the set of actions to perform on your content, and for customizing the preview of that content.
- [UITargetedPreview](uitargetedpreview.md): An object describing the view to use during preview-related animations.
- [UIPreviewTarget](uipreviewtarget.md): An object that specifies the container view to use for animations.

# UIPreviewParameters (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Additional parameters to use when animating a preview interface.

## Declaration

```objectivec
@interface UIPreviewParameters : NSObject
```

## Topics

### Creating preview parameters

- [init](uipreviewparameters/init%28%29.md): Creates a default set of preview parameters.
- [initWithTextLineRects:](uipreviewparameters/init%28textlinerects_%29.md): Creates a preview parameters object with information about the text you want to preview.

### Configuring the preview attributes

- [backgroundColor](uipreviewparameters/backgroundcolor.md): The background color to display behind the preview.
- [visiblePath](uipreviewparameters/visiblepath.md): The portion of the view to show in the preview.
- [shadowPath](uipreviewparameters/shadowpath.md): The path to use for drawing the preview’s shadow.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIDragPreviewParameters](uidragpreviewparameters.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Contextual menus

- [UIContextMenuSystem](uicontextmenusystem.md): The context menu system.
- [UIContextMenuInteraction](uicontextmenuinteraction.md): An interaction object that you use to display relevant actions for your content.
- [UIContextMenuInteractionDelegate](uicontextmenuinteractiondelegate.md): The methods for providing the set of actions to perform on your content, and for customizing the preview of that content.
- [UITargetedPreview](uitargetedpreview.md): An object describing the view to use during preview-related animations.
- [UIPreviewTarget](uipreviewtarget.md): An object that specifies the container view to use for animations.
