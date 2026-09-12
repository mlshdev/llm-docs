> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/clipoptions/inverse](https://developer.apple.com/documentation/swiftui/graphicscontext/clipoptions/inverse)

# inverse

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An option to invert the shape or layer alpha as the clip mask.

## Declaration

```swift
static var inverse: GraphicsContext.ClipOptions { get }
```

<a id="discussion"></a>

## Discussion

When you use this option, SwiftUI uses `1 - alpha` instead of `alpha` for the given clip shape.
