> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/toolbaroverflowmenu(content:)](https://developer.apple.com/documentation/swiftui/view/toolbaroverflowmenu(content:))

# toolbarOverflowMenu(content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Configures the overflow menu of a toolbar.

## Declaration

```swift
nonisolated func toolbarOverflowMenu<C>(@ContentBuilder content: () -> C) -> some View where C : View

```

## Parameters

- `content`: The content of the overflow menu.

<a id="discussion"></a>

## Discussion

An overflow menu represents actions that are always placed in the toolbar’s overflow menu, regardless of the toolbar mode, platform, or customizability.

```swift
ContentView()
    .toolbarOverflowMenu {
        Button("Action 1") { }
        Button("Action 2") { }
    }
```

In iOS and visionOS, this content is placed into the overflow menu in the navigation bar.

## See Also

### Populating a toolbar

- [toolbar(content:)](toolbar%28content_%29.md): Populates the toolbar or navigation bar with the specified items.
- [ToolbarItem](../toolbaritem.md): A model that represents an item which can be placed in the toolbar or navigation bar.
- [ToolbarItemGroup](../toolbaritemgroup.md): A model that represents a group of `ToolbarItem`s which can be placed in the toolbar or navigation bar.
- [ToolbarItemPlacement](../toolbaritemplacement.md): A structure that defines the placement of a toolbar item.
- [ToolbarOverflowMenu](../toolbaroverflowmenu.md): The overflow menu of a toolbar.
- [ToolbarContent](../toolbarcontent.md): Conforming types represent items that can be placed in various locations in a toolbar.
- [ToolbarContentBuilder](../toolbarcontentbuilder.md): Constructs a toolbar item set from multi-expression closures.
- [ToolbarSpacer](../toolbarspacer.md): A standard space item in toolbars.
- [DefaultToolbarItem](../defaulttoolbaritem.md): A toolbar item that represents a system component.
