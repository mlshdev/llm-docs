> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/zstack/init(alignment:spacing:content:)](https://developer.apple.com/documentation/swiftui/zstack/init(alignment:spacing:content:))

# init(alignment:spacing:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** visionOS 2.0+

Creates an instance with the given spacing and alignment.

## Declaration

```swift
nonisolated init<V>(alignment: Alignment = .center, spacing: CGFloat?, @ContentBuilder content: () -> V) where Content == ZStackContent3D<V>, V : View
```

## Parameters

- `alignment`: The guide for aligning the subviews in this stack on both the x- and y-axes.
- `spacing`: The distance between adjacent subviews, or `nil` if you want the stack to choose a default distance for each pair of subviews.
- `content`: A content builder that creates the content of this stack.
