> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/coordinatespaceprotocol/named(_:)](https://developer.apple.com/documentation/swiftui/coordinatespaceprotocol/named(_:))

# named(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a named coordinate space using the given value.

## Declaration

```swift
static func named(_ name: some Hashable) -> NamedCoordinateSpace
```

## Parameters

- `name`: A unique value that identifies the coordinate space.

<a id="return-value"></a>

## Return Value

A named coordinate space identified by the given value.

<a id="discussion"></a>

## Discussion

Use the `coordinateSpace(_:)` modifier to assign a name to the local coordinate space of a  parent view. Child views can then refer to that coordinate space using `.named(_:)`.

## See Also

### Getting built-in coordinate spaces

- [immersiveSpace](immersivespace.md): Conforms when `Self` is `NamedCoordinateSpace`. The named coordinate space that represents the currently opened [ImmersiveSpace](../immersivespace.md) scene. If no immersive space is currently opened, this CoordinateSpace provides the same behavior as the `.global` coordinate space.
- [global](global.md): Conforms when `Self` is `GlobalCoordinateSpace`. The global coordinate space at the root of the view hierarchy.
- [local](local.md): Conforms when `Self` is `LocalCoordinateSpace`. The local coordinate space of the current view.
- [scrollView](scrollview.md): Conforms when `Self` is `NamedCoordinateSpace`. The named coordinate space that is added by the system for the innermost containing scroll view.
- [scrollView(axis:)](scrollview%28axis_%29.md): Conforms when `Self` is `NamedCoordinateSpace`. The named coordinate space that is added by the system for the innermost containing scroll view that allows scrolling along the provided axis.
