> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/clipshape(_:style:)](https://developer.apple.com/documentation/swiftui/view/clipshape(_:style:))

# clipShape(\_:style:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets a clipping shape for this view.

## Declaration

```swift
nonisolated func clipShape<S>(_ shape: S, style: FillStyle = FillStyle()) -> some View where S : Shape

```

## Parameters

- `shape`: The clipping shape to use for this view. The `shape` fills the view’s frame, while maintaining its aspect ratio.
- `style`: The fill style to use when rasterizing `shape`.

<a id="return-value"></a>

## Return Value

A view that clips this view to `shape`, using `style` to define the shape’s rasterization.

<a id="discussion"></a>

## Discussion

Use `clipShape(_:style:)` to clip the view to the provided shape. By applying a clipping shape to a view, you preserve the parts of the view covered by the shape, while eliminating other parts of the view. The clipping shape itself isn’t visible.

For example, this code applies a circular clipping shape to a `Text` view:

```swift
Text("Clipped text in a circle")
    .frame(width: 175, height: 100)
    .foregroundColor(Color.white)
    .background(Color.black)
    .clipShape(Circle())
```

The resulting view shows only the portion of the text that lies within the bounds of the circle.

![A screenshot of text clipped to the shape of a](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-clipShape@2x.png)

## See Also

### Masking and clipping

- [mask(alignment:\_:)](mask%28alignment___%29.md): Masks this view using the alpha channel of the given view.
- [clipped(antialiased:)](clipped%28antialiased_%29.md): Clips this view to its bounding rectangular frame.
