> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidragpreviewtarget](https://developer.apple.com/documentation/uikit/uidragpreviewtarget)

# UIDragPreviewTarget (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A geometric specification for the source or destination of a drag item preview, used by the system when a user drops items or cancels a drag activity.

## Declaration

```swift
@MainActor class UIDragPreviewTarget
```

## Relationships

### Inherits From

- [UIPreviewTarget](uipreviewtarget.md)

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
- [UITargetedDragPreview](uitargeteddragpreview.md): A drag item preview used by the system during lift, drop, or cancellation animation.

# UIDragPreviewTarget (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A geometric specification for the source or destination of a drag item preview, used by the system when a user drops items or cancels a drag activity.

## Declaration

```objectivec
@interface UIDragPreviewTarget : UIPreviewTarget
```

## Relationships

### Inherits From

- [UIPreviewTarget](uipreviewtarget.md)

## See Also

### Custom drag item previews

- [UIDragPreviewParameters](uidragpreviewparameters.md): A set of parameters for adjusting the appearance of a drag item preview or a targeted drag item preview.
- [UIDragPreview](uidragpreview.md): A graphical preview for a single drag item, used by the system after a drag has started and when no related animation is running.
- [UITargetedDragPreview](uitargeteddragpreview.md): A drag item preview used by the system during lift, drop, or cancellation animation.
