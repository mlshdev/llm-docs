> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitargeteddragpreview](https://developer.apple.com/documentation/uikit/uitargeteddragpreview)

# UITargetedDragPreview (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A drag item preview used by the system during lift, drop, or cancellation animation.

## Declaration

```swift
@MainActor class UITargetedDragPreview
```

## Topics

### Initializing a targeted drag item preview

- [init(forURL:target:)](uitargeteddragpreview/init%28forurl_target_%29.md): Initializes a new targeted drag item preview with a URL and a drag item preview.
- [init(forURL:title:target:)](uitargeteddragpreview/init%28forurl_title_target_%29.md): Initializes a new targeted drag item preview with a URL, a title, and a drag item preview.

### Replacing the preview

- [retargetedPreview(with:)](uitargeteddragpreview/retargetedpreview%28with_%29.md): Returns a new targeted drag item preview based on an existing one, but with a new geometric target.

### Initializers

- [init(for:target:)](uitargeteddragpreview/init%28for_target_%29.md)
- [init(for:title:target:)](uitargeteddragpreview/init%28for_title_target_%29.md)

### Default Implementations

- [UITargetedDragPreview Implementations](uitargeteddragpreview/uitargeteddragpreview-implementations.md)

## Relationships

### Inherits From

- [UITargetedPreview](uitargetedpreview.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Custom drag item previews

- [UIDragPreviewParameters](uidragpreviewparameters.md): A set of parameters for adjusting the appearance of a drag item preview or a targeted drag item preview.
- [UIDragPreview](uidragpreview.md): A graphical preview for a single drag item, used by the system after a drag has started and when no related animation is running.
- [UIDragPreviewTarget](uidragpreviewtarget.md): A geometric specification for the source or destination of a drag item preview, used by the system when a user drops items or cancels a drag activity.

# UITargetedDragPreview (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A drag item preview used by the system during lift, drop, or cancellation animation.

## Declaration

```objectivec
@interface UITargetedDragPreview : UITargetedPreview
```

## Topics

### Replacing the preview

- [retargetedPreviewWithTarget:](uitargeteddragpreview/retargetedpreview%28with_%29.md): Returns a new targeted drag item preview based on an existing one, but with a new geometric target.

### Type Methods

- [previewForURL:target:](uitargeteddragpreview/init%28for_target_%29.md)
- [previewForURL:title:target:](uitargeteddragpreview/init%28for_title_target_%29.md)

## Relationships

### Inherits From

- [UITargetedPreview](uitargetedpreview.md)

## See Also

### Custom drag item previews

- [UIDragPreviewParameters](uidragpreviewparameters.md): A set of parameters for adjusting the appearance of a drag item preview or a targeted drag item preview.
- [UIDragPreview](uidragpreview.md): A graphical preview for a single drag item, used by the system after a drag has started and when no related animation is running.
- [UIDragPreviewTarget](uidragpreviewtarget.md): A geometric specification for the source or destination of a drag item preview, used by the system when a user drops items or cancels a drag activity.
