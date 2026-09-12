> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/geometryproxy/containercornerinsets](https://developer.apple.com/documentation/swiftui/geometryproxy/containercornerinsets)

# containerCornerInsets

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the corner insets of the container view. Use this value to adjust the geometry of a view based on the overlapping corner insets of the container view. Corner insets may include pieces of system UI as well as the corner radii for windows and presentations.

## Declaration

```swift
var containerCornerInsets: RectangleCornerInsets { get }
```

<a id="discussion"></a>

## Discussion

```swift
GeometryReader { geometry in
    NavigationTitleView()
        .offset(x: geometry.containerCornerInsets.topLeading.width)
}
```

Container corner inset sizes may not be uniform. For example, on iPadOS and macOS, when the window fills the entire screen without displaying window controls, the inset sizes will always be zero. When that window does display window controls, and the view overlaps the window control area, the corner inset size for the top leading corner will be the size of the overlapping area.

## See Also

### Accessing geometry characteristics

- [bounds(of:)](bounds%28of_%29.md): Returns the given coordinate space’s bounds rectangle, converted to the local coordinate space.
- [concentricCornerRadii](concentriccornerradii.md): The concentric corner radii for this view’s bounds relative to the container shape.
- [concentricCornerRadii(in:)](concentriccornerradii%28in_%29.md): Returns the concentric corner radii for the specified frame relative to the container shape.
- [frame(in:)](frame%28in_%29.md): Returns the container view’s bounds rectangle, converted to a defined coordinate space.
- [size](size.md): The size of the container view.
- [safeAreaInsets](safeareainsets.md): The safe area inset of the container view.
- [subscript(\_:)](subscript%28__%29.md): Resolves the value of an anchor to the container view.
- [transform(in:)](transform%28in_%29.md): The container view’s 3D transform converted to a defined coordinate space.
