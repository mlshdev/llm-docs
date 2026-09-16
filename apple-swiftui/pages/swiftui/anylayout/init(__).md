> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/anylayout/init(_:)

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a type-erased value that wraps the specified layout.

## Declaration

```swift
init<L>(_ layout: L) where L : Layout
```

<a id="discussion"></a>

## Discussion

You can switch between type-erased layouts without losing the state of the subviews.
