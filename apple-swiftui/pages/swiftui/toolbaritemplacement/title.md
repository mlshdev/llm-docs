> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbaritemplacement/title](https://developer.apple.com/documentation/swiftui/toolbaritemplacement/title)

# title

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A placement for items in the title area of the navigation bar.

## Declaration

```swift
@export(implementation) static var title: ToolbarItemPlacement { get }
```

<a id="discussion"></a>

## Discussion

The view appears when the navigation bar renders its title inline, and takes precedence over the value provided to the `View.navigationTitle(_:)` modifier.

```swift
struct ContentView: View {
    var body: some View {
        NavigationStack {
            DetailView()
                .navigationTitle("Title")
                .navigationSubtitle("Subtitle")
                .toolbar {
                    ToolbarItem(placement: .title) {
                        CustomNavigationTitle()
                    }
                }
        }
    }
}
```
