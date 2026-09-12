> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/resolve(_:)](https://developer.apple.com/documentation/swiftui/graphicscontext/resolve(_:))

# resolve(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Gets a version of an image that’s fixed with the current values of the graphics context’s environment.

## Declaration

```swift
func resolve(_ image: Image) -> GraphicsContext.ResolvedImage
```

## Parameters

- `image`: The [Image](../image.md) to resolve.

<a id="return-value"></a>

## Return Value

An image that’s resolved into the current context’s environment, taking into account environment values like the display resolution and current color scheme.

<a id="discussion"></a>

## Discussion

You can measure the resolved image by looking at its [size](resolvedimage/size.md) and [baseline](resolvedimage/baseline.md) properties. You can draw the resolved image with the context’s [draw(\_:in:style:)](https://developer.apple.com/documentation/swiftui/graphicscontext/draw%28_:in:style:%29-7rvee) or [draw(\_:at:anchor:)](https://developer.apple.com/documentation/swiftui/graphicscontext/draw%28_:at:anchor:%29-1z5wt) method.

## See Also

### Resolving a drawn entity

- [resolveSymbol(id:)](resolvesymbol%28id_%29.md): Gets the identified child view as a resolved symbol, if the view exists.
- [GraphicsContext.ResolvedSymbol](resolvedsymbol.md): A static sequence of drawing operations that may be drawn multiple times, preserving their resolution independence.
- [GraphicsContext.ResolvedImage](resolvedimage.md): An image resolved to a particular environment.
- [GraphicsContext.ResolvedText](resolvedtext.md): A text view resolved to a particular environment.
