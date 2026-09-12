> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/position(_:)](https://developer.apple.com/documentation/swiftui/view/position(_:))

# position(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Positions the center of this view at the specified point in its parent’s coordinate space.

## Declaration

```swift
nonisolated func position(_ position: CGPoint) -> some View

```

## Parameters

- `position`: The point at which to place the center of this view.

<a id="return-value"></a>

## Return Value

A view that fixes the center of this view at `position`.

<a id="discussion"></a>

## Discussion

Use the `position(_:)` modifier to place the center of a view at a specific coordinate in the parent view using a [CGPoint](https://developer.apple.com/documentation/corefoundation/cgpoint) to specify the `x` and `y` offset.

```swift
Text("Position by passing a CGPoint()")
    .position(CGPoint(x: 175, y: 100))
    .border(Color.gray)
```

## See Also

### Adjusting a view’s position

- [Making fine adjustments to a view’s position](../making-fine-adjustments-to-a-view-s-position.md): Shift the position of a view by applying the offset or position modifier.
- [position(x:y:)](position%28x_y_%29.md): Positions the center of this view at the specified coordinates in its parent’s coordinate space.
- [offset(\_:)](offset%28__%29.md): Offset this view by the horizontal and vertical amount specified in the offset parameter.
- [offset(x:y:)](offset%28x_y_%29.md): Offset this view by the specified horizontal and vertical distances.
- [offset(z:)](offset%28z_%29.md): Brings a view forward in Z by the provided distance in points.
