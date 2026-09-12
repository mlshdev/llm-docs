> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidragpreviewparameters](https://developer.apple.com/documentation/uikit/uidragpreviewparameters)

# UIDragPreviewParameters (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A set of parameters for adjusting the appearance of a drag item preview or a targeted drag item preview.

## Declaration

```swift
@MainActor class UIDragPreviewParameters
```

<a id="overview"></a>

## Overview

You can refine the appearance of a preview by providing additional parameters when creating a [UIDragPreview](uidragpreview.md) or [UITargetedDragPreview](uitargeteddragpreview.md) object. The parameters specify different visual aspects of the preview, including the background color and the visible area of the view associated with the preview.

## Relationships

### Inherits From

- [UIPreviewParameters](uipreviewparameters.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Custom drag item previews

- [UIDragPreview](uidragpreview.md): A graphical preview for a single drag item, used by the system after a drag has started and when no related animation is running.
- [UIDragPreviewTarget](uidragpreviewtarget.md): A geometric specification for the source or destination of a drag item preview, used by the system when a user drops items or cancels a drag activity.
- [UITargetedDragPreview](uitargeteddragpreview.md): A drag item preview used by the system during lift, drop, or cancellation animation.

# UIDragPreviewParameters (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A set of parameters for adjusting the appearance of a drag item preview or a targeted drag item preview.

## Declaration

```objectivec
@interface UIDragPreviewParameters : UIPreviewParameters
```

<a id="overview"></a>

## Overview

You can refine the appearance of a preview by providing additional parameters when creating a [UIDragPreview](uidragpreview.md) or [UITargetedDragPreview](uitargeteddragpreview.md) object. The parameters specify different visual aspects of the preview, including the background color and the visible area of the view associated with the preview.

## Relationships

### Inherits From

- [UIPreviewParameters](uipreviewparameters.md)

## See Also

### Custom drag item previews

- [UIDragPreview](uidragpreview.md): A graphical preview for a single drag item, used by the system after a drag has started and when no related animation is running.
- [UIDragPreviewTarget](uidragpreviewtarget.md): A geometric specification for the source or destination of a drag item preview, used by the system when a user drops items or cancels a drag activity.
- [UITargetedDragPreview](uitargeteddragpreview.md): A drag item preview used by the system during lift, drop, or cancellation animation.
