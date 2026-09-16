> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/canvas/symbols

# symbols

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A view that provides child views that you can use in the drawing callback.

## Declaration

```swift
var symbols: Symbols
```

<a id="discussion"></a>

## Discussion

Uniquely tag each child view using the `View/tag(_:)` modifier, so that you can find them from within your renderer using the [resolveSymbol(id:)](../graphicscontext/resolvesymbol%28id_%29.md) method.
