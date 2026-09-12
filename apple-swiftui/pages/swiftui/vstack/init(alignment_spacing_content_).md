> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/vstack/init(alignment:spacing:content:)](https://developer.apple.com/documentation/swiftui/vstack/init(alignment:spacing:content:))

# init(alignment:spacing:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an instance with the given spacing and horizontal alignment.

## Declaration

```swift
nonisolated init(alignment: HorizontalAlignment = .center, spacing: CGFloat? = nil, @ContentBuilder content: () -> Content)
```

## Parameters

- `alignment`: The guide for aligning the subviews in this stack. This guide has the same vertical screen coordinate for every subview.
- `spacing`: The distance between adjacent subviews, or `nil` if you want the stack to choose a default distance for each pair of subviews.
- `content`: A content builder that creates the content of this stack.
