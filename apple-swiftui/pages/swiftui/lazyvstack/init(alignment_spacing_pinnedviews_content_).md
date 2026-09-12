> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/lazyvstack/init(alignment:spacing:pinnedviews:content:)](https://developer.apple.com/documentation/swiftui/lazyvstack/init(alignment:spacing:pinnedviews:content:))

# init(alignment:spacing:pinnedViews:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a lazy vertical stack view with the given spacing, vertical alignment, pinning behavior, and content.

## Declaration

```swift
nonisolated init(alignment: HorizontalAlignment = .center, spacing: CGFloat? = nil, pinnedViews: PinnedScrollableViews = .init(), @ContentBuilder content: () -> Content)
```

## Parameters

- `alignment`: The guide for aligning the subviews in this stack. All child views have the same horizontal screen coordinate.
- `spacing`: The distance between adjacent subviews, or `nil` if you want the stack to choose a default distance for each pair of subviews.
- `pinnedViews`: The kinds of child views that will be pinned.
- `content`: A content builder that creates the content of this stack.
