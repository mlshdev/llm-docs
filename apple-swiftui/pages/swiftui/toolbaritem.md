> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbaritem](https://developer.apple.com/documentation/swiftui/toolbaritem)

# ToolbarItem

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A model that represents an item which can be placed in the toolbar or navigation bar.

## Declaration

```swift
nonisolated struct ToolbarItem<ID, Content> where Content : View
```

## Topics

### Creating a toolbar item

- [init(placement:content:)](toolbaritem/init%28placement_content_%29.md): Conforms when `ID` is `()` and `Content` conforms to `View`. Creates a toolbar item with the specified placement and content.
- [init(id:placement:content:)](toolbaritem/init%28id_placement_content_%29.md): Conforms when `ID` is `String` and `Content` conforms to `View`. Creates a toolbar item with the specified placement and content, which allows for user customization.
- [init(id:placement:showsByDefault:content:)](toolbaritem/init%28id_placement_showsbydefault_content_%29.md): Deprecated. Conforms when `ID` is `String` and `Content` conforms to `View`. Creates a toolbar item with the specified placement and content, which allows for user customization.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomizableToolbarContent](customizabletoolbarcontent.md)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [ToolbarContent](toolbarcontent.md)

## See Also

### Populating a toolbar

- [toolbar(content:)](view/toolbar%28content_%29.md): Populates the toolbar or navigation bar with the specified items.
- [ToolbarItemGroup](toolbaritemgroup.md): A model that represents a group of `ToolbarItem`s which can be placed in the toolbar or navigation bar.
- [ToolbarItemPlacement](toolbaritemplacement.md): A structure that defines the placement of a toolbar item.
- [toolbarOverflowMenu(content:)](view/toolbaroverflowmenu%28content_%29.md): Configures the overflow menu of a toolbar.
- [ToolbarOverflowMenu](toolbaroverflowmenu.md): The overflow menu of a toolbar.
- [ToolbarContent](toolbarcontent.md): Conforming types represent items that can be placed in various locations in a toolbar.
- [ToolbarContentBuilder](toolbarcontentbuilder.md): Constructs a toolbar item set from multi-expression closures.
- [ToolbarSpacer](toolbarspacer.md): A standard space item in toolbars.
- [DefaultToolbarItem](defaulttoolbaritem.md): A toolbar item that represents a system component.
