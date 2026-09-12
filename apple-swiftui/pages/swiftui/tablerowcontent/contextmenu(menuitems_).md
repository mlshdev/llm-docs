> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablerowcontent/contextmenu(menuitems:)](https://developer.apple.com/documentation/swiftui/tablerowcontent/contextmenu(menuitems:))

# contextMenu(menuItems:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Adds a context menu to a table row.

## Declaration

```swift
@MainActor @preconcurrency func contextMenu<M>(@ContentBuilder menuItems: () -> M) -> ModifiedContent<Self, _ContextMenuTableRowModifier<M>> where M : View
```

## Parameters

- `menuItems`: A closure that produces the menu’s contents. You can deactivate the context menu by returning nothing from the closure.

<a id="return-value"></a>

## Return Value

A row that can display a context menu.

<a id="discussion"></a>

## Discussion

Use this modifier to add a context menu to a table row. Compose the menu by returning controls like [Button](../button.md), [Toggle](../toggle.md), and [Picker](../picker.md) from the `menuItems` closure. You can also use [Menu](../menu.md) to define submenus, or [Section](../section.md) to group items.

The following example adds a context menu to each row in a table that people can use to send an email to the person represented by that row:

```swift
Table(of: Person.self) {
    TableColumn("Given Name", value: \.givenName)
    TableColumn("Family Name", value: \.familyName)
} rows: {
    ForEach(people) { person in
        TableRow(person)
            .contextMenu {
                Button("Send Email...") { }
            }
    }
}
```

If you want to display a preview beside the context menu, use [contextMenu(menuItems:preview:)](contextmenu%28menuitems_preview_%29.md). If you want to display a context menu that’s based on the current selection, use [contextMenu(forSelectionType:menu:primaryAction:)](../view/contextmenu%28forselectiontype_menu_primaryaction_%29.md). To add context menus to other kinds of views, use [contextMenu(menuItems:)](../view/contextmenu%28menuitems_%29.md).

## See Also

### Adding a context menu to a row

- [contextMenu(menuItems:preview:)](contextmenu%28menuitems_preview_%29.md): Adds a context menu with a preview to a table row.
