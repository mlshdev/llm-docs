> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationsplitview/init(preferredcompactcolumn:sidebar:detail:)](https://developer.apple.com/documentation/swiftui/navigationsplitview/init(preferredcompactcolumn:sidebar:detail:))

# init(preferredCompactColumn:sidebar:detail:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a two-column navigation split view that enables programmatic control over which column appears on top when the view collapses into a single column in narrow sizes.

## Declaration

```swift
nonisolated init(preferredCompactColumn: Binding<NavigationSplitViewColumn>, @ContentBuilder sidebar: () -> Sidebar, @ContentBuilder detail: () -> Detail) where Content == EmptyView
```

## Parameters

- `preferredCompactColumn`: A [Binding](../binding.md) to state that controls which column appears on top when the view collapses.
- `sidebar`: The view to show in the leading column.
- `detail`: The view to show in the detail area.

## See Also

### Specifying a preferred compact column

- [init(preferredCompactColumn:sidebar:content:detail:)](init%28preferredcompactcolumn_sidebar_content_detail_%29.md): Conforms when `Sidebar` conforms to `View`, `Content` conforms to `View`, and `Detail` conforms to `View`. Creates a three-column navigation split view that enables programmatic control over which column appears on top when the view collapses into a single column in narrow sizes.
