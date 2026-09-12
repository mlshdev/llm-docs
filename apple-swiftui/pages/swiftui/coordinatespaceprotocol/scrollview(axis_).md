> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/coordinatespaceprotocol/scrollview(axis:)](https://developer.apple.com/documentation/swiftui/coordinatespaceprotocol/scrollview(axis:))

# scrollView(axis:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The named coordinate space that is added by the system for the innermost containing scroll view that allows scrolling along the provided axis.

## Declaration

```swift
static func scrollView(axis: Axis) -> Self
```

## See Also

### Getting built-in coordinate spaces

- [immersiveSpace](immersivespace.md): Conforms when `Self` is `NamedCoordinateSpace`. The named coordinate space that represents the currently opened [ImmersiveSpace](../immersivespace.md) scene. If no immersive space is currently opened, this CoordinateSpace provides the same behavior as the `.global` coordinate space.
- [global](global.md): Conforms when `Self` is `GlobalCoordinateSpace`. The global coordinate space at the root of the view hierarchy.
- [local](local.md): Conforms when `Self` is `LocalCoordinateSpace`. The local coordinate space of the current view.
- [named(\_:)](named%28__%29.md): Conforms when `Self` is `NamedCoordinateSpace`. Creates a named coordinate space using the given value.
- [scrollView](scrollview.md): Conforms when `Self` is `NamedCoordinateSpace`. The named coordinate space that is added by the system for the innermost containing scroll view.
