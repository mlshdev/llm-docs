> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/graphicscontext/clipoptions/inverse

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
