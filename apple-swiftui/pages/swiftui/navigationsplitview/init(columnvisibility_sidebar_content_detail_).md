> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/navigationsplitview/init(columnvisibility:sidebar:content:detail:)

# init(columnVisibility:sidebar:content:detail:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a three-column navigation split view that enables programmatic control of leading columns’ visibility.

## Declaration

```swift
nonisolated init(columnVisibility: Binding<NavigationSplitViewVisibility>, @ContentBuilder sidebar: () -> Sidebar, @ContentBuilder content: () -> Content, @ContentBuilder detail: () -> Detail)
```

## Parameters

- `columnVisibility`: A [Binding](../binding.md) to state that controls the visibility of the leading columns.
- `sidebar`: The view to show in the leading column.
- `content`: The view to show in the middle column.
- `detail`: The view to show in the detail area.

## See Also

### Hiding columns in a navigation split view

- [init(columnVisibility:sidebar:detail:)](init%28columnvisibility_sidebar_detail_%29.md): Creates a two-column navigation split view that enables programmatic control of the sidebar’s visibility.
