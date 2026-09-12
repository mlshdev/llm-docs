> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dragdroppreviewsformation](https://developer.apple.com/documentation/swiftui/dragdroppreviewsformation)

# DragDropPreviewsFormation

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 26.0+

On macOS, describes the way the dragged previews are visually composed. Both drag sources and drop destination can specify their desired preview formation.

## Declaration

```swift
struct DragDropPreviewsFormation
```

## Topics

### Type Properties

- [default](dragdroppreviewsformation/default.md): System-determined composition.
- [list](dragdroppreviewsformation/list.md): Drag images are laid out vertically, non-overlapping, and the left edges are aligned.
- [none](dragdroppreviewsformation/none.md): Drag images maintain their set positions relative to each other.
- [pile](dragdroppreviewsformation/pile.md): Drag images are placed on top of each other with random rotations.
- [stack](dragdroppreviewsformation/stack.md): Drag images are laid out overlapping diagonally.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing preview formations

- [dragPreviewsFormation(\_:)](view/dragpreviewsformation%28__%29.md): Describes the way dragged previews are visually composed.
- [dropPreviewsFormation(\_:)](view/droppreviewsformation%28__%29.md): Describes the way previews for a drop are composed.
