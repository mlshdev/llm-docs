> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidragpreview](https://developer.apple.com/documentation/uikit/uidragpreview)

# UIDragPreview (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A graphical preview for a single drag item, used by the system after a drag has started and when no related animation is running.

## Declaration

```swift
@MainActor class UIDragPreview
```

<a id="overview"></a>

## Overview

A [UIDragPreview](uidragpreview.md) object is a visual representation of the drag item. The preview is displayed while the user moves the item across the screen with their finger (after the lift animation completes). The preview disappears when the user lifts their finger, triggering the start of the drop or cancellation animation.

## Topics

### Initializing a drag item preview

- [init(view:)](uidragpreview/init%28view_%29.md): Initializes a new drag item preview with a view, using the default appearance parameters.
- [init(view:parameters:)](uidragpreview/init%28view_parameters_%29.md): Initializes a new drag item preview with a view and with a set of appearance parameters.
- [init(forURL:)](uidragpreview/init%28forurl_%29.md): Initializes a new drag item preview with a URL.
- [init(forURL:title:)](uidragpreview/init%28forurl_title_%29.md): Initializes a drag item preview with a URL and title.

### Getting the visual appearance parameters

- [parameters](uidragpreview/parameters.md): The appearance parameters associated with the drag item preview.

### Accessing the view

- [view](uidragpreview/view.md): The view associated with the drag item preview.

### Initializers

- [init(for:)](uidragpreview/init%28for_%29.md)
- [init(for:title:)](uidragpreview/init%28for_title_%29.md)

### Default Implementations

- [UIDragPreview Implementations](uidragpreview/uidragpreview-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

### Custom drag item previews

- [UIDragPreviewParameters](uidragpreviewparameters.md): A set of parameters for adjusting the appearance of a drag item preview or a targeted drag item preview.
- [UIDragPreviewTarget](uidragpreviewtarget.md): A geometric specification for the source or destination of a drag item preview, used by the system when a user drops items or cancels a drag activity.
- [UITargetedDragPreview](uitargeteddragpreview.md): A drag item preview used by the system during lift, drop, or cancellation animation.

# UIDragPreview (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A graphical preview for a single drag item, used by the system after a drag has started and when no related animation is running.

## Declaration

```objectivec
@interface UIDragPreview : NSObject
```

<a id="overview"></a>

## Overview

A [UIDragPreview](uidragpreview.md) object is a visual representation of the drag item. The preview is displayed while the user moves the item across the screen with their finger (after the lift animation completes). The preview disappears when the user lifts their finger, triggering the start of the drop or cancellation animation.

## Topics

### Initializing a drag item preview

- [initWithView:](uidragpreview/init%28view_%29.md): Initializes a new drag item preview with a view, using the default appearance parameters.
- [initWithView:parameters:](uidragpreview/init%28view_parameters_%29.md): Initializes a new drag item preview with a view and with a set of appearance parameters.

### Getting the visual appearance parameters

- [parameters](uidragpreview/parameters.md): The appearance parameters associated with the drag item preview.

### Accessing the view

- [view](uidragpreview/view.md): The view associated with the drag item preview.

### Type Methods

- [previewForURL:](uidragpreview/init%28for_%29.md)
- [previewForURL:title:](uidragpreview/init%28for_title_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Custom drag item previews

- [UIDragPreviewParameters](uidragpreviewparameters.md): A set of parameters for adjusting the appearance of a drag item preview or a targeted drag item preview.
- [UIDragPreviewTarget](uidragpreviewtarget.md): A geometric specification for the source or destination of a drag item preview, used by the system when a user drops items or cancels a drag activity.
- [UITargetedDragPreview](uitargeteddragpreview.md): A drag item preview used by the system during lift, drop, or cancellation animation.
