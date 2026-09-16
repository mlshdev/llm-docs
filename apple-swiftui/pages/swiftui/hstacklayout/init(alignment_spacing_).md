> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/hstacklayout/init(alignment:spacing:)

# init(alignment:spacing:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a horizontal stack with the specified spacing and vertical alignment.

## Declaration

```swift
init(alignment: VerticalAlignment = .center, spacing: CGFloat? = nil)
```

## Parameters

- `alignment`: The guide for aligning the subviews in this stack. It has the same vertical screen coordinate for all subviews.
- `spacing`: The distance between adjacent subviews. Set this value to `nil` to use default distances between subviews.
