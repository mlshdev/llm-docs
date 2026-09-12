> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationsplitview/init(columnvisibility:sidebar:detail:)](https://developer.apple.com/documentation/swiftui/navigationsplitview/init(columnvisibility:sidebar:detail:))

# init(columnVisibility:sidebar:detail:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a two-column navigation split view that enables programmatic control of the sidebar’s visibility.

## Declaration

```swift
nonisolated init(columnVisibility: Binding<NavigationSplitViewVisibility>, @ContentBuilder sidebar: () -> Sidebar, @ContentBuilder detail: () -> Detail) where Content == EmptyView
```

## Parameters

- `columnVisibility`: A [Binding](../binding.md) to state that controls the visibility of the leading column.
- `sidebar`: The view to show in the leading column.
- `detail`: The view to show in the detail area.

## See Also

### Hiding columns in a navigation split view

- [init(columnVisibility:sidebar:content:detail:)](init%28columnvisibility_sidebar_content_detail_%29.md): Creates a three-column navigation split view that enables programmatic control of leading columns’ visibility.
