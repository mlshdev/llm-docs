> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/geometryproxy/transform(in:)](https://developer.apple.com/documentation/swiftui/geometryproxy/transform(in:))

# transform(in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

The container view’s 3D transform converted to a defined coordinate space.

## Declaration

```swift
func transform(in coordinateSpace: some CoordinateSpaceProtocol) -> AffineTransform3D?
```

<a id="discussion"></a>

## Discussion

If the view doesn’t have a well defined transform, such as if it is affected by a projection transform, this function may return `nil`.

## See Also

### Accessing geometry characteristics

- [bounds(of:)](bounds%28of_%29.md): Returns the given coordinate space’s bounds rectangle, converted to the local coordinate space.
- [concentricCornerRadii](concentriccornerradii.md): The concentric corner radii for this view’s bounds relative to the container shape.
- [concentricCornerRadii(in:)](concentriccornerradii%28in_%29.md): Returns the concentric corner radii for the specified frame relative to the container shape.
- [containerCornerInsets](containercornerinsets.md): Returns the corner insets of the container view. Use this value to adjust the geometry of a view based on the overlapping corner insets of the container view. Corner insets may include pieces of system UI as well as the corner radii for windows and presentations.
- [frame(in:)](frame%28in_%29.md): Returns the container view’s bounds rectangle, converted to a defined coordinate space.
- [size](size.md): The size of the container view.
- [safeAreaInsets](safeareainsets.md): The safe area inset of the container view.
- [subscript(\_:)](subscript%28__%29.md): Resolves the value of an anchor to the container view.
