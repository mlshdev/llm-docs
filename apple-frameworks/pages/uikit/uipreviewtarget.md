> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipreviewtarget](https://developer.apple.com/documentation/uikit/uipreviewtarget)

# UIPreviewTarget (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

An object that specifies the container view to use for animations.

## Declaration

```swift
@MainActor class UIPreviewTarget
```

<a id="overview"></a>

## Overview

Create a [UIPreviewTarget](uipreviewtarget.md) object when animating views to or from a separate container view. For example, use this method to animate views to or from a different part of your app’s interface.

## Topics

### Creating a preview target object

- [init(container:center:transform:)](uipreviewtarget/init%28container_center_transform_%29.md): Creates a preview target object using the specified container view and configuration details.
- [init(container:center:)](uipreviewtarget/init%28container_center_%29.md): Creates a preview target object using the specified container view and center point.

### Getting the target attributes

- [container](uipreviewtarget/container.md): The container for the view being animated.
- [center](uipreviewtarget/center.md): The point in the containing view at which to place the center of the view being animated.
- [transform](uipreviewtarget/transform.md): An affine transform to apply to the view being animated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIDragPreviewTarget](uidragpreviewtarget.md)

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
- [UIPreviewParameters](uipreviewparameters.md): Additional parameters to use when animating a preview interface.

# UIPreviewTarget (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

An object that specifies the container view to use for animations.

## Declaration

```objectivec
@interface UIPreviewTarget : NSObject
```

<a id="overview"></a>

## Overview

Create a [UIPreviewTarget](uipreviewtarget.md) object when animating views to or from a separate container view. For example, use this method to animate views to or from a different part of your app’s interface.

## Topics

### Creating a preview target object

- [initWithContainer:center:transform:](uipreviewtarget/init%28container_center_transform_%29.md): Creates a preview target object using the specified container view and configuration details.
- [initWithContainer:center:](uipreviewtarget/init%28container_center_%29.md): Creates a preview target object using the specified container view and center point.

### Getting the target attributes

- [container](uipreviewtarget/container.md): The container for the view being animated.
- [center](uipreviewtarget/center.md): The point in the containing view at which to place the center of the view being animated.
- [transform](uipreviewtarget/transform.md): An affine transform to apply to the view being animated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIDragPreviewTarget](uidragpreviewtarget.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Contextual menus

- [UIContextMenuSystem](uicontextmenusystem.md): The context menu system.
- [UIContextMenuInteraction](uicontextmenuinteraction.md): An interaction object that you use to display relevant actions for your content.
- [UIContextMenuInteractionDelegate](uicontextmenuinteractiondelegate.md): The methods for providing the set of actions to perform on your content, and for customizing the preview of that content.
- [UITargetedPreview](uitargetedpreview.md): An object describing the view to use during preview-related animations.
- [UIPreviewParameters](uipreviewparameters.md): Additional parameters to use when animating a preview interface.
