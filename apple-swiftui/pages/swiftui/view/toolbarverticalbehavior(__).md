> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/view/toolbarverticalbehavior(_:)

# toolbarVerticalBehavior(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Sets the behavior for the vertical bar.

## Declaration

```swift
nonisolated func toolbarVerticalBehavior(_ behavior: ToolbarVerticalBehavior) -> some View

```

## Parameters

- `behavior`: The desired behavior for the vertical bar.

<a id="discussion"></a>

## Discussion

By default, the system determines whether a vertical bar is rendered based on the device and application state. Use [disabled](../toolbarverticalbehavior/disabled.md) to opt out of the vertical bar, causing bar content to fall back to the standard horizontal top and bottom toolbars.

Disable the vertical bar only for UIs that are better served by horizontal bars — such as a fullscreen video player with toolbar controls, or a non-scrolling layout like a calculator where horizontal space is at a premium. Treat it as a stable choice: avoid changing it frequently as the user navigates, and don’t toggle it for a single view as a function of that view’s state. To hide the bars on a given screen rather than change the layout, use [toolbarVisibility(\_:for:)](toolbarvisibility%28__for_%29.md) instead.

The behavior is resolved by the window or presentation if placed within a sheet or form. Different containers resolve their overall preferred behavior in different ways:

- A [NavigationStack](../navigationstack.md) uses the top most view of its stack of views.
- A [TabView](../tabview.md) uses the selected view.
- A [NavigationSplitView](../navigationsplitview.md) uses the view in the trailing-most column.

When the value changes, the system animates the transition: content reflows to or from the horizontal bars while the status bar changes axis and the leading or trailing safe area inset for the vertical bar is added or removed.

```swift
TabView {
    Tab("Home", systemImage: "house") {
        HomeView()
    }
}
.toolbarVerticalBehavior(.disabled)
```

## See Also

### Configuring vertical toolbar behavior

- [ToolbarVerticalBehavior](../toolbarverticalbehavior.md): Beta. A behavior that determines whether the vertical bar is used.
- [toolbarVerticalCompressionBehavior(\_:)](toolbarverticalcompressionbehavior%28__%29.md): Beta. Sets how bars should compress when different types of toolbars are hosted together and space is constrained.
- [ToolbarVerticalCompressionBehavior](../toolbarverticalcompressionbehavior.md): Beta. A behavior that determines how bars compress when the system places different types of bars together and space is constrained.
