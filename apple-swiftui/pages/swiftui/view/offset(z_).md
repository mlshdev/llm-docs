> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/offset(z:)](https://developer.apple.com/documentation/swiftui/view/offset(z:))

# offset(z:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Brings a view forward in Z by the provided distance in points.

## Declaration

```swift
@export(implementation) nonisolated func offset(z: CGFloat) -> some View

```

<a id="return-value"></a>

## Return Value

A view that is extruded forward in Z by `distance`.

## See Also

### Adjusting a view’s position

- [Making fine adjustments to a view’s position](../making-fine-adjustments-to-a-view-s-position.md): Shift the position of a view by applying the offset or position modifier.
- [position(\_:)](position%28__%29.md): Positions the center of this view at the specified point in its parent’s coordinate space.
- [position(x:y:)](position%28x_y_%29.md): Positions the center of this view at the specified coordinates in its parent’s coordinate space.
- [offset(\_:)](offset%28__%29.md): Offset this view by the horizontal and vertical amount specified in the offset parameter.
- [offset(x:y:)](offset%28x_y_%29.md): Offset this view by the specified horizontal and vertical distances.
