> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/mask(alignment:_:)](https://developer.apple.com/documentation/swiftui/view/mask(alignment:_:))

# mask(alignment:\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Masks this view using the alpha channel of the given view.

## Declaration

```swift
nonisolated func mask<Mask>(alignment: Alignment = .center, @ContentBuilder _ mask: () -> Mask) -> some View where Mask : View

```

## Parameters

- `alignment`: The alignment for `mask` in relation to this view.
- `mask`: The view whose alpha the rendering system applies to the specified view.

<a id="discussion"></a>

## Discussion

Use `mask(_:)` when you want to apply the alpha (opacity) value of another view to the current view.

This example shows an image masked by rectangle with a 10% opacity:

```swift
Image(systemName: "envelope.badge.fill")
    .foregroundColor(Color.blue)
    .font(.system(size: 128, weight: .regular))
    .mask {
        Rectangle().opacity(0.1)
    }
```

![A screenshot of a view masked by a rectangle with 10%](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-mask@2x.png)

## See Also

### Masking and clipping

- [clipped(antialiased:)](clipped%28antialiased_%29.md): Clips this view to its bounding rectangular frame.
- [clipShape(\_:style:)](clipshape%28__style_%29.md): Sets a clipping shape for this view.
