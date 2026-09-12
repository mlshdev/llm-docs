> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/offset(_:)](https://developer.apple.com/documentation/swiftui/view/offset(_:))

# offset(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Offset this view by the horizontal and vertical amount specified in the offset parameter.

## Declaration

```swift
nonisolated func offset(_ offset: CGSize) -> some View

```

## Parameters

- `offset`: The distance to offset this view.

<a id="return-value"></a>

## Return Value

A view that offsets this view by `offset`.

<a id="discussion"></a>

## Discussion

Use `offset(_:)` to shift the displayed contents by the amount specified in the `offset` parameter.

The original dimensions of the view aren’t changed by offsetting the contents; in the example below the gray border drawn by this view surrounds the original position of the text:

```swift
Text("Offset by passing CGSize()")
    .border(Color.green)
    .offset(CGSize(width: 20, height: 25))
    .border(Color.gray)
```

![A screenshot showing a view that offset from its original position a](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-offset@2x.png)

## See Also

### Adjusting a view’s position

- [Making fine adjustments to a view’s position](../making-fine-adjustments-to-a-view-s-position.md): Shift the position of a view by applying the offset or position modifier.
- [position(\_:)](position%28__%29.md): Positions the center of this view at the specified point in its parent’s coordinate space.
- [position(x:y:)](position%28x_y_%29.md): Positions the center of this view at the specified coordinates in its parent’s coordinate space.
- [offset(x:y:)](offset%28x_y_%29.md): Offset this view by the specified horizontal and vertical distances.
- [offset(z:)](offset%28z_%29.md): Brings a view forward in Z by the provided distance in points.
