> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationsplitview/init(sidebar:detail:)](https://developer.apple.com/documentation/swiftui/navigationsplitview/init(sidebar:detail:))

# init(sidebar:detail:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a two-column navigation split view.

## Declaration

```swift
nonisolated init(@ContentBuilder sidebar: () -> Sidebar, @ContentBuilder detail: () -> Detail) where Content == EmptyView
```

## Parameters

- `sidebar`: The view to show in the leading column.
- `detail`: The view to show in the detail area.

## Mentioned In

- [Migrating to new navigation types](../migrating-to-new-navigation-types.md)

## See Also

### Creating a navigation split view

- [init(sidebar:content:detail:)](init%28sidebar_content_detail_%29.md): Creates a three-column navigation split view.
