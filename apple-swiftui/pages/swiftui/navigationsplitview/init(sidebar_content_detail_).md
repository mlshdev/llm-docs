> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationsplitview/init(sidebar:content:detail:)](https://developer.apple.com/documentation/swiftui/navigationsplitview/init(sidebar:content:detail:))

# init(sidebar:content:detail:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a three-column navigation split view.

## Declaration

```swift
nonisolated init(@ContentBuilder sidebar: () -> Sidebar, @ContentBuilder content: () -> Content, @ContentBuilder detail: () -> Detail)
```

## Parameters

- `sidebar`: The view to show in the leading column.
- `content`: The view to show in the middle column.
- `detail`: The view to show in the detail area.

## Mentioned In

- [Migrating to new navigation types](../migrating-to-new-navigation-types.md)

## See Also

### Creating a navigation split view

- [init(sidebar:detail:)](init%28sidebar_detail_%29.md): Creates a two-column navigation split view.
