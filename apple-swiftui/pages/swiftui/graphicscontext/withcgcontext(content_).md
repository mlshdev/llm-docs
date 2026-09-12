> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/withcgcontext(content:)](https://developer.apple.com/documentation/swiftui/graphicscontext/withcgcontext(content:))

# withCGContext(content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Provides a Core Graphics context that you can use as a proxy to draw into this context.

## Declaration

```swift
func withCGContext(content: (CGContext) throws -> Void) rethrows
```

## Parameters

- `content`: A closure that receives a [CGContext](https://developer.apple.com/documentation/coregraphics/cgcontext) that you use to perform drawing operations, just like you draw into a [GraphicsContext](../graphicscontext.md) instance. Any filters, blend mode settings, clip masks, and other state set before calling `withCGContext(content:)` apply to drawing operations in the Core Graphics context as well. Any state you set on the Core Graphics context is lost when the closure returns. Accessing the Core Graphics context after the closure returns produces undefined behavior.

<a id="discussion"></a>

## Discussion

Use this method to use existing drawing code that relies on Core Graphics primitives.
