> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/toolbar(removing:)](https://developer.apple.com/documentation/swiftui/view/toolbar(removing:))

# toolbar(removing:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Remove a toolbar item present by default

## Declaration

```swift
nonisolated func toolbar(removing defaultItemKind: ToolbarDefaultItemKind?) -> some View

```

## Parameters

- `defaultItemKind`: The kind of default item to remove

<a id="discussion"></a>

## Discussion

Use this modifier to remove toolbar items other `View`s add by default. For example, to remove the sidebar toggle toolbar item provided by `NavigationSplitView`:

```swift
NavigationSplitView {
    SidebarView()
        .toolbar(removing: .sidebarToggle)
} detail: {
    DetailView()
}
```

## See Also

### Removing default items

- [ToolbarDefaultItemKind](../toolbardefaultitemkind.md): A kind of toolbar item a `View` adds by default.
