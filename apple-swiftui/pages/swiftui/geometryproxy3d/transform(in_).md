> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/geometryproxy3d/transform(in:)](https://developer.apple.com/documentation/swiftui/geometryproxy3d/transform(in:))

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

If the view doesn’t have a well-defined transform, such as if it’s affected by a projection transform, this function may return `nil`.

## See Also

### Accessing geometry characteristics

- [frame(in:)](frame%28in_%29.md): The container view’s bounds rectangle converted to a defined coordinate space.
- [size](size.md): The size of the container view.
- [safeAreaInsets](safeareainsets.md): The safe area inset of the container view.
- [subscript(\_:)](subscript%28__%29.md): Resolves the value of an anchor to the container view.
