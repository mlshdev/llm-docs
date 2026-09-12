> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/tabitem(_:)](https://developer.apple.com/documentation/swiftui/view/tabitem(_:))

# tabItem(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ · watchOS 7.0+ (deprecated in 27.0)

Sets the tab bar item associated with this view.

> Use \`Tab(title:image:value:content:)\` and related initializers instead

## Declaration

```swift
nonisolated func tabItem<V>(@ContentBuilder _ label: () -> V) -> some View where V : View

```

## Parameters

- `label`: The tab bar item to associate with this view.

<a id="discussion"></a>

## Discussion

Use `tabItem(_:)` to configure a view as a tab bar item in a [TabView](../tabview.md). The example below adds two views as tabs in a [TabView](../tabview.md):

```swift
struct View1: View {
    var body: some View {
        Text("View 1")
    }
}

struct View2: View {
    var body: some View {
        Text("View 2")
    }
}

struct TabItem: View {
    var body: some View {
        TabView {
            View1()
                .tabItem {
                    Label("Menu", systemImage: "list.dash")
                }

            View2()
                .tabItem {
                    Label("Order", systemImage: "square.and.pencil")
                }
        }
    }
}
```

![A screenshot of a two views configured as tab items in a tab](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-tabItem@2x.png)

## See Also

### Deprecated Types

- [NavigationView](../navigationview.md): Deprecated. A view for presenting a stack of views that represents a visible path in a navigation hierarchy.
