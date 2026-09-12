> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/group/init(content:)](https://developer.apple.com/documentation/swiftui/group/init(content:))

# init(content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a group of content.

## Declaration

```swift
@export(implementation) nonisolated init(@ContentBuilder content: () -> Content)
```

## Parameters

- `content`: A [ContentBuilder](../contentbuilder.md) that produces the content to group.

## See Also

### Creating a group

- [init(sections:transform:)](init%28sections_transform_%29.md): Constructs a group from the sections of the given view.
- [init(subviews:transform:)](init%28subviews_transform_%29.md): Constructs a group from the subviews of the given view.
