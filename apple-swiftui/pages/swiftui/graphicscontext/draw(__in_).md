> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/draw(_:in:)](https://developer.apple.com/documentation/swiftui/graphicscontext/draw(_:in:))

# draw(\_:in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Draws a resolved symbol into the context, using the specified rectangle as a layout frame.

## Declaration

```swift
func draw(_ symbol: GraphicsContext.ResolvedSymbol, in rect: CGRect)
```

## Parameters

- `symbol`: The [GraphicsContext.ResolvedSymbol](resolvedsymbol.md) to draw. Get a resolved symbol by calling [resolveSymbol(id:)](resolvesymbol%28id_%29.md) with the identifier that you use to tag the corresponding child view during [Canvas](../canvas.md) initialization.
- `rect`: The rectangle in the current user space to draw the symbol in.

<a id="discussion"></a>

## Discussion

The current context state defines the full drawing operation. For example, the current transformation and clip shapes affect how SwiftUI draws the symbol.

## See Also

### Drawing images, text, and views

- [draw(\_:in:style:)](draw%28__in_style_%29.md): Draws a resolved image into the context, using the specified rectangle as a layout frame.
- [draw(\_:at:anchor:)](draw%28__at_anchor_%29.md): Draws a resolved image into the context, aligning an anchor within the image to a point in the context.
