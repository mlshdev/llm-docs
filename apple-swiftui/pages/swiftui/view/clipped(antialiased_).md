> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/clipped(antialiased:)](https://developer.apple.com/documentation/swiftui/view/clipped(antialiased:))

# clipped(antialiased:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Clips this view to its bounding rectangular frame.

## Declaration

```swift
nonisolated func clipped(antialiased: Bool = false) -> some View

```

## Parameters

- `antialiased`: A Boolean value that indicates whether the rendering system applies smoothing to the edges of the clipping rectangle.

<a id="return-value"></a>

## Return Value

A view that clips this view to its bounding frame.

## Mentioned In

- [Fitting images into available space](../fitting-images-into-available-space.md)

<a id="discussion"></a>

## Discussion

Use the `clipped(antialiased:)` modifier to hide any content that extends beyond the layout bounds of the shape.

By default, a view’s bounding frame is used only for layout, so any content that extends beyond the edges of the frame is still visible.

```swift
Text("This long text string is clipped")
    .fixedSize()
    .frame(width: 175, height: 100)
    .clipped()
    .border(Color.gray)
```

![Screenshot showing text clipped to its](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-clipped@2x.png)

## See Also

### Masking and clipping

- [mask(alignment:\_:)](mask%28alignment___%29.md): Masks this view using the alpha channel of the given view.
- [clipShape(\_:style:)](clipshape%28__style_%29.md): Sets a clipping shape for this view.
