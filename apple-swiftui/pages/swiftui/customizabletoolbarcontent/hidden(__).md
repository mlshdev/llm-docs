> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/customizabletoolbarcontent/hidden(_:)

# hidden(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 15.0+ · tvOS 27.2+ beta · visionOS 26.4+ · watchOS 27.2+ beta

Hides a toolbar item within its toolbar.

## Declaration

```swift
nonisolated func hidden(_ hidden: Bool = true) -> some CustomizableToolbarContent

```

## Parameters

- `hidden`: Whether the toolbar item is hidden.

<a id="discussion"></a>

## Discussion

Use this modifier to conditionally display a toolbar item in the toolbar. On macOS, hidden items will be displayed during user customization.

The following example hides a downloads button when there are no downloads, but it is displayed during customization.

```swift
struct ContentView {
    @State private var showDownloads = false

    var body: some View {
        BrowserView()
            .toolbar(id: "browserToolbar") {
                ToolbarItem(id: "downloads") {
                    DownloadsButton()
                }
                .hidden(!showDownloads)
            }
    }
}
```

## See Also

### Setting visibility

- [sharedBackgroundVisibility(\_:)](sharedbackgroundvisibility%28__%29.md): Controls the visibility of the glass background effect on items in the toolbar. In certain contexts, such as the navigation bar on iOS and the window toolbar on macOS, toolbar items will be given a glass background effect that is shared with other items in the same logical grouping.
- [visibilityPriority(\_:)](visibilitypriority%28__%29.md): Defines the visibility priority for a toolbar item.
