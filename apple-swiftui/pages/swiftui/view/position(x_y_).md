> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/position(x:y:)](https://developer.apple.com/documentation/swiftui/view/position(x:y:))

# position(x:y:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Positions the center of this view at the specified coordinates in its parent’s coordinate space.

## Declaration

```swift
nonisolated func position(x: CGFloat = 0, y: CGFloat = 0) -> some View

```

## Parameters

- `x`: The x-coordinate at which to place the center of this view.
- `y`: The y-coordinate at which to place the center of this view.

<a id="return-value"></a>

## Return Value

A view that fixes the center of this view at `x` and `y`.

## Mentioned In

- [Building layouts with stack views](../building-layouts-with-stack-views.md)
- [Making fine adjustments to a view’s position](../making-fine-adjustments-to-a-view-s-position.md)

<a id="discussion"></a>

## Discussion

Use the `position(x:y:)` modifier to place the center of a view at a specific coordinate in the parent view using an `x` and `y` offset.

```swift
Text("Position by passing the x and y coordinates")
    .position(x: 175, y: 100)
    .border(Color.gray)
```

## See Also

### Adjusting a view’s position

- [Making fine adjustments to a view’s position](../making-fine-adjustments-to-a-view-s-position.md): Shift the position of a view by applying the offset or position modifier.
- [position(\_:)](position%28__%29.md): Positions the center of this view at the specified point in its parent’s coordinate space.
- [offset(\_:)](offset%28__%29.md): Offset this view by the horizontal and vertical amount specified in the offset parameter.
- [offset(x:y:)](offset%28x_y_%29.md): Offset this view by the specified horizontal and vertical distances.
- [offset(z:)](offset%28z_%29.md): Brings a view forward in Z by the provided distance in points.
