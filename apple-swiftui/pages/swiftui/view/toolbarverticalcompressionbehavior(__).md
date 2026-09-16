> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/view/toolbarverticalcompressionbehavior(_:)

# toolbarVerticalCompressionBehavior(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Sets how bars should compress when different types of toolbars are hosted together and space is constrained.

## Declaration

```swift
nonisolated func toolbarVerticalCompressionBehavior(_ behavior: ToolbarVerticalCompressionBehavior) -> some View

```

<a id="discussion"></a>

## Discussion

For example, a productivity-focused app like Files could ensure its toolbar items are preferred over the tab bar:

```swift
struct ContentView: View {
    var body: some View {
        TabView {
            Tab("Recents") {
                NavigationStack {
                    RootView()
                        .toolbar {
                            Button("Up", systemImage: "chevron.up") {
                            }
                            Button("Down", systemImage: "chevron.down") {
                            }
                        }
                        .toolbarVerticalCompressionBehavior(.prefersToolbarItems)
                }
            }
        }
    }
}
```

## See Also

### Configuring vertical toolbar behavior

- [toolbarVerticalBehavior(\_:)](toolbarverticalbehavior%28__%29.md): Beta. Sets the behavior for the vertical bar.
- [ToolbarVerticalBehavior](../toolbarverticalbehavior.md): Beta. A behavior that determines whether the vertical bar is used.
- [ToolbarVerticalCompressionBehavior](../toolbarverticalcompressionbehavior.md): Beta. A behavior that determines how bars compress when the system places different types of bars together and space is constrained.
