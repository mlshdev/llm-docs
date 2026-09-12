> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/resolvedtext](https://developer.apple.com/documentation/swiftui/graphicscontext/resolvedtext)

# GraphicsContext.ResolvedText

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A text view resolved to a particular environment.

## Declaration

```swift
struct ResolvedText
```

<a id="overview"></a>

## Overview

You resolve a [Text](../text.md) view in preparation for drawing it into a context, either manually by calling [resolve(\_:)](https://developer.apple.com/documentation/swiftui/graphicscontext/resolve%28_:%29-4dx65) or automatically when calling [draw(\_:in:)](https://developer.apple.com/documentation/swiftui/graphicscontext/draw%28_:in:%29-5opqf) or [draw(\_:at:anchor:)](https://developer.apple.com/documentation/swiftui/graphicscontext/draw%28_:at:anchor:%29-5dgmd). The resolved text view takes into account environment values like the display resolution and current color scheme.

## Topics

### Getting the text properties

- [firstBaseline(in:)](resolvedtext/firstbaseline%28in_%29.md): Gets the distance from the first line’s ascender to its baseline.
- [lastBaseline(in:)](resolvedtext/lastbaseline%28in_%29.md): Gets the distance from the first line’s ascender to the last line’s baseline.
- [measure(in:)](resolvedtext/measure%28in_%29.md): Measures the size of the resolved text for a given area into which the text should be placed.
- [shading](resolvedtext/shading.md): The shading to fill uncolored text regions with.

## See Also

### Resolving a drawn entity

- [resolve(\_:)](resolve%28__%29.md): Gets a version of an image that’s fixed with the current values of the graphics context’s environment.
- [resolveSymbol(id:)](resolvesymbol%28id_%29.md): Gets the identified child view as a resolved symbol, if the view exists.
- [GraphicsContext.ResolvedSymbol](resolvedsymbol.md): A static sequence of drawing operations that may be drawn multiple times, preserving their resolution independence.
- [GraphicsContext.ResolvedImage](resolvedimage.md): An image resolved to a particular environment.
