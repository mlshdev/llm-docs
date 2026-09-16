> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/canvas/renderer

# renderer

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The drawing callback that you use to draw into the canvas.

## Declaration

```swift
var renderer: (inout GraphicsContext, CGSize) -> Void
```

## Parameters

- `context`: The graphics context to draw into.
- `size`: The current size of the view.

## See Also

### Rendering

- [rendersAsynchronously](rendersasynchronously.md): A Boolean that indicates whether the canvas can present its contents to its parent view asynchronously.
