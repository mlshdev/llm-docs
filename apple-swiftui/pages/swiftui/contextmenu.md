> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/contextmenu](https://developer.apple.com/documentation/swiftui/contextmenu)

# ContextMenu

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 7.0)

A container for views that you present as menu items in a context menu.

> Use [contextMenu(menuItems:)](view/contextmenu%28menuitems_%29.md) instead.

## Declaration

```swift
struct ContextMenu<MenuItems> where MenuItems : View
```

<a id="overview"></a>

## Overview

A context menu view allows you to present a situationally specific menu that enables taking actions relevant to the current task.

You can create a context menu by first defining a `ContextMenu` container with the controls that represent the actions people can take, and then using the [contextMenu(\_:)](view/contextmenu%28__%29.md) view modifier to apply the menu to a view.

The example below creates and applies a two item context menu container to a [Text](text.md) view. The Boolean value `shouldShowMenu`, which defaults to true, controls the availability of context menu:

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

## Topics

### Creating a context menu

- [init(menuItems:)](contextmenu/init%28menuitems_%29.md): Deprecated. Creates a context menu.

## See Also

### Deprecated types

- [MenuButton](menubutton.md): Deprecated. A button that displays a menu containing a list of choices when pressed.
- [PullDownButton](pulldownbutton.md): Deprecated.
