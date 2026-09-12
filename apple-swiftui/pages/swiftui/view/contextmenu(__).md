> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/contextmenu(_:)](https://developer.apple.com/documentation/swiftui/view/contextmenu(_:))

# contextMenu(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 7.0)

Adds a context menu to the view.

> Use [contextMenu(menuItems:)](contextmenu%28menuitems_%29.md) instead.

## Declaration

```swift
nonisolated func contextMenu<MenuItems>(_ contextMenu: ContextMenu<MenuItems>?) -> some View where MenuItems : View

```

## Parameters

- `contextMenu`: A context menu container for views that you present as menu items in a context menu.

<a id="return-value"></a>

## Return Value

A view that can show a context menu.

<a id="discussion"></a>

## Discussion

Use this method to attach a specified context menu to a view. You can make the context menu unavailable by conditionally passing `nil` as the value for the `contextMenu`.

The example below creates a [ContextMenu](../contextmenu.md) that contains two items and passes them into the modifier. The Boolean value `shouldShowMenu`, which defaults to `true`, controls the context menu availability:

```swift
private let menuItems = ContextMenu {
    Button {
        // Add this item to a list of favorites.
    } label: {
        Label("Add to Favorites", systemImage: "heart")
    }
    Button {
        // Open Maps and center it on this item.
    } label: {
        Label("Show in Maps", systemImage: "mappin")
    }
}

private struct ContextMenuMenuItems: View {
    @State private var shouldShowMenu = true

    var body: some View {
        Text("Turtle Rock")
            .contextMenu(shouldShowMenu ? menuItems : nil)
    }
}
```

![A screenshot of a context menu showing two menu items: Add to Favorites, and Show in Maps.](https://developer.apple.com/images/com.apple.SwiftUI/View-contextMenu-1-iOS@2x.png)

## See Also

### Auxiliary view modifiers

- [navigationBarTitle(\_:)](navigationbartitle%28__%29.md): Deprecated. Sets the title in the navigation bar for this view.
- [navigationBarTitle(\_:displayMode:)](navigationbartitle%28__displaymode_%29.md): Deprecated. Sets the title and display mode in the navigation bar for this view.
- [navigationBarItems(leading:)](navigationbaritems%28leading_%29.md): Deprecated. Sets the navigation bar items for this view.
- [navigationBarItems(leading:trailing:)](navigationbaritems%28leading_trailing_%29.md): Deprecated. Sets the navigation bar items for this view.
- [navigationBarItems(trailing:)](navigationbaritems%28trailing_%29.md): Deprecated. Configures the navigation bar items for this view.
- [navigationBarHidden(\_:)](navigationbarhidden%28__%29.md): Deprecated. Hides the navigation bar for this view.
- [statusBar(hidden:)](statusbar%28hidden_%29.md): Deprecated. Sets the visibility of the status bar.
