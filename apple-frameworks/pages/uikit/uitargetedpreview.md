> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitargetedpreview](https://developer.apple.com/documentation/uikit/uitargetedpreview)

# UITargetedPreview (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

An object describing the view to use during preview-related animations.

## Declaration

```swift
@MainActor class UITargetedPreview
```

## Mentioned In

- [Adding Writing Tools support to a custom UIKit view](adding-writing-tools-support-to-a-custom-uiview.md)

<a id="overview"></a>

## Overview

Use a [UITargetedPreview](uitargetedpreview.md) to specify the view to use during an animated transition.

## Topics

### Creating a targeted preview object

- [Adding context menus in your app](adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [init(view:parameters:target:)](uitargetedpreview/init%28view_parameters_target_%29.md): Creates a targeted preview with the specified view, parameters, and target container.
- [init(view:parameters:)](uitargetedpreview/init%28view_parameters_%29.md): Creates a targeted preview for a view in the current window and including the specified parameters.
- [init(view:)](uitargetedpreview/init%28view_%29.md): Creates a targeted preview for a view in the current window.

### Getting the preview attributes

- [view](uitargetedpreview/view.md): The view that’s the target of the animation.
- [target](uitargetedpreview/target.md): The container for the target view.
- [size](uitargetedpreview/size.md): The size of the view.
- [parameters](uitargetedpreview/parameters.md): Additional parameters to use when configuring the animations.

### Changing the target’s container

- [retargetedPreview(with:)](uitargetedpreview/retargetedpreview%28with_%29.md): Returns a targeted preview object with the same view and parameters, but with a different target container.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UITargetedDragPreview](uitargeteddragpreview.md)

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
- [UIPreviewTarget](uipreviewtarget.md): An object that specifies the container view to use for animations.
- [UIPreviewParameters](uipreviewparameters.md): Additional parameters to use when animating a preview interface.

# UITargetedPreview (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

An object describing the view to use during preview-related animations.

## Declaration

```objectivec
@interface UITargetedPreview : NSObject
```

## Mentioned In

- [Adding Writing Tools support to a custom UIKit view](adding-writing-tools-support-to-a-custom-uiview.md)

<a id="overview"></a>

## Overview

Use a [UITargetedPreview](uitargetedpreview.md) to specify the view to use during an animated transition.

## Topics

### Creating a targeted preview object

- [Adding context menus in your app](adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [initWithView:parameters:target:](uitargetedpreview/init%28view_parameters_target_%29.md): Creates a targeted preview with the specified view, parameters, and target container.
- [initWithView:parameters:](uitargetedpreview/init%28view_parameters_%29.md): Creates a targeted preview for a view in the current window and including the specified parameters.
- [initWithView:](uitargetedpreview/init%28view_%29.md): Creates a targeted preview for a view in the current window.

### Getting the preview attributes

- [view](uitargetedpreview/view.md): The view that’s the target of the animation.
- [target](uitargetedpreview/target.md): The container for the target view.
- [size](uitargetedpreview/size.md): The size of the view.
- [parameters](uitargetedpreview/parameters.md): Additional parameters to use when configuring the animations.

### Changing the target’s container

- [retargetedPreviewWithTarget:](uitargetedpreview/retargetedpreview%28with_%29.md): Returns a targeted preview object with the same view and parameters, but with a different target container.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UITargetedDragPreview](uitargeteddragpreview.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Contextual menus

- [UIContextMenuSystem](uicontextmenusystem.md): The context menu system.
- [UIContextMenuInteraction](uicontextmenuinteraction.md): An interaction object that you use to display relevant actions for your content.
- [UIContextMenuInteractionDelegate](uicontextmenuinteractiondelegate.md): The methods for providing the set of actions to perform on your content, and for customizing the preview of that content.
- [UIPreviewTarget](uipreviewtarget.md): An object that specifies the container view to use for animations.
- [UIPreviewParameters](uipreviewparameters.md): Additional parameters to use when animating a preview interface.
