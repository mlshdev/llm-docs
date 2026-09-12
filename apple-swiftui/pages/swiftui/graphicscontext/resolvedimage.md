> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/resolvedimage](https://developer.apple.com/documentation/swiftui/graphicscontext/resolvedimage)

# GraphicsContext.ResolvedImage

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An image resolved to a particular environment.

## Declaration

```swift
struct ResolvedImage
```

<a id="overview"></a>

## Overview

You resolve an [Image](../image.md) in preparation for drawing it into a context, either manually by calling [resolve(\_:)](https://developer.apple.com/documentation/swiftui/graphicscontext/resolve%28_:%29-898z6), or automatically when calling [draw(\_:in:style:)](https://developer.apple.com/documentation/swiftui/graphicscontext/draw%28_:in:style:%29-blhz) or [draw(\_:at:anchor:)](https://developer.apple.com/documentation/swiftui/graphicscontext/draw%28_:at:anchor:%29-1z5wt). The resolved image takes into account environment values like the display resolution and current color scheme.

## Topics

### Getting the image properties

- [size](resolvedimage/size.md): The size of the image.
- [baseline](resolvedimage/baseline.md): The distance from the top of the image to its baseline.
- [shading](resolvedimage/shading.md): An optional shading to fill the image with.

## See Also

### Resolving a drawn entity

- [resolve(\_:)](resolve%28__%29.md): Gets a version of an image that’s fixed with the current values of the graphics context’s environment.
- [resolveSymbol(id:)](resolvesymbol%28id_%29.md): Gets the identified child view as a resolved symbol, if the view exists.
- [GraphicsContext.ResolvedSymbol](resolvedsymbol.md): A static sequence of drawing operations that may be drawn multiple times, preserving their resolution independence.
- [GraphicsContext.ResolvedText](resolvedtext.md): A text view resolved to a particular environment.
