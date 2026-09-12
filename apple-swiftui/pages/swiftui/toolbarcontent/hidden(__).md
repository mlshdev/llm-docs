> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbarcontent/hidden(_:)](https://developer.apple.com/documentation/swiftui/toolbarcontent/hidden(_:))

# hidden(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Hides a toolbar item within its toolbar.

## Declaration

```swift
nonisolated func hidden(_ hidden: Bool = true) -> some ToolbarContent

```

## Parameters

- `hidden`: Whether the toolbar item is hidden.

<a id="discussion"></a>

## Discussion

Use this modifier to conditionally display a toolbar item in the toolbar.

```swift
struct ContentView {
    @State private var showDownloads = false

    var body: some View {
        BrowserView()
            .toolbar {
                ToolbarItem {
                    DownloadsButton()
                }
                .hidden(!showDownloads)
            }
    }
}
```
