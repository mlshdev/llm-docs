> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/toolbaritemplacement/subtitle

# subtitle

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A placement for items in the navigation bar’s inline subtitle area.

## Declaration

```swift
static let subtitle: ToolbarItemPlacement
```

<a id="discussion"></a>

## Discussion

The view appears when the navigation bar renders its title inline, and takes precedence over the value provided to the `View.navigationSubtitle(_:)` modifier.

```swift
struct ContentView: View {
    var body: some View {
        NavigationStack {
            DetailView()
                .navigationTitle("Title")
                .navigationSubtitle("Subtitle")
                .toolbar {
                    ToolbarItem(placement: .subtitle) {
                        CustomNavigationSubtitle()
                    }
                }
        }
    }
}
```
