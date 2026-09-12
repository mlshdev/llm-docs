> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/drawlayer(content:)](https://developer.apple.com/documentation/swiftui/graphicscontext/drawlayer(content:))

# drawLayer(content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Draws a new layer, created by drawing code that you provide, into the context.

## Declaration

```swift
func drawLayer(content: (inout GraphicsContext) throws -> Void) rethrows
```

## Parameters

- `content`: A closure that receives a new [GraphicsContext](../graphicscontext.md) as input. This context represents a new transparency layer that you can draw into. When the closure returns, SwiftUI draws the new layer into the current context.
