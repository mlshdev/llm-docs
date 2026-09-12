> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/geometryproxy/concentriccornerradii](https://developer.apple.com/documentation/swiftui/geometryproxy/concentriccornerradii)

# concentricCornerRadii

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The concentric corner radii for this view’s bounds relative to the container shape.

## Declaration

```swift
var concentricCornerRadii: RectangleCornerRadii? { get }
```

<a id="return-value"></a>

## Return Value

The resolved corner radii, or `nil` if no container shape is set or the shape does not provide sufficient corner info.

<a id="discussion"></a>

## Discussion

Concentric corners share the same center point as the container’s corners, creating visually harmonious nested rounded rectangles. The radius for each corner is calculated as the container’s corner radius minus the distance from this view’s corner to the container’s corner.

Unlike [ConcentricRectangle](../concentricrectangle.md), which calculates and draws the shape, this property only returns the calculated radii. This allows you to use the values for custom drawing, animations, or other purposes:

```swift
GeometryReader { geometry in
    Canvas { context, size in
        if let radii = geometry.concentricCornerRadii {
            let path = Path(
                roundedRect: CGRect(origin: .zero, size: size),
                cornerRadii: radii
            )
            context.fill(path, with: .color(.blue))
        }
    }
}
.containerShape(.rect(cornerRadius: 48))
```

Each corner’s radius depends on its position relative to the container:

- Corners aligned with the container’s corners get concentric radii
- Corners far from the container’s corners get zero radii
- The radius is clamped to the view’s maximum possible radius

> **See Also**

> [ConcentricRectangle](../concentricrectangle.md)

## See Also

### Accessing geometry characteristics

- [bounds(of:)](bounds%28of_%29.md): Returns the given coordinate space’s bounds rectangle, converted to the local coordinate space.
- [concentricCornerRadii(in:)](concentriccornerradii%28in_%29.md): Returns the concentric corner radii for the specified frame relative to the container shape.
- [containerCornerInsets](containercornerinsets.md): Returns the corner insets of the container view. Use this value to adjust the geometry of a view based on the overlapping corner insets of the container view. Corner insets may include pieces of system UI as well as the corner radii for windows and presentations.
- [frame(in:)](frame%28in_%29.md): Returns the container view’s bounds rectangle, converted to a defined coordinate space.
- [size](size.md): The size of the container view.
- [safeAreaInsets](safeareainsets.md): The safe area inset of the container view.
- [subscript(\_:)](subscript%28__%29.md): Resolves the value of an anchor to the container view.
- [transform(in:)](transform%28in_%29.md): The container view’s 3D transform converted to a defined coordinate space.
