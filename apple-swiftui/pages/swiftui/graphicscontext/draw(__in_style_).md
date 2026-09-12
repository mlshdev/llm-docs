> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/draw(_:in:style:)](https://developer.apple.com/documentation/swiftui/graphicscontext/draw(_:in:style:))

# draw(\_:in:style:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Draws a resolved image into the context, using the specified rectangle as a layout frame.

## Declaration

```swift
func draw(_ image: GraphicsContext.ResolvedImage, in rect: CGRect, style: FillStyle = FillStyle())
```

## Parameters

- `image`: The [GraphicsContext.ResolvedImage](resolvedimage.md) to draw. Get a resolved image from an [Image](../image.md) by calling [resolve(\_:)](https://developer.apple.com/documentation/swiftui/graphicscontext/resolve%28_:%29-898z6). Alternatively, you can call [draw(\_:in:style:)](https://developer.apple.com/documentation/swiftui/graphicscontext/draw%28_:in:style:%29-blhz) with an [Image](../image.md), and that method performs the resolution automatically.
- `rect`: The rectangle in the current user space to draw the image in.
- `style`: A fill style to use when rasterizing the image.

<a id="discussion"></a>

## Discussion

The current context state defines the full drawing operation. For example, the current transformation and clip shapes affect how SwiftUI draws the image.

## See Also

### Drawing images, text, and views

- [draw(\_:in:)](draw%28__in_%29.md): Draws a resolved symbol into the context, using the specified rectangle as a layout frame.
- [draw(\_:at:anchor:)](draw%28__at_anchor_%29.md): Draws a resolved image into the context, aligning an anchor within the image to a point in the context.
