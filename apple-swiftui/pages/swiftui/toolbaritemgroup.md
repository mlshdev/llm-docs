> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbaritemgroup](https://developer.apple.com/documentation/swiftui/toolbaritemgroup)

# ToolbarItemGroup

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A model that represents a group of `ToolbarItem`s which can be placed in the toolbar or navigation bar.

## Declaration

```swift
nonisolated struct ToolbarItemGroup<Content> where Content : View
```

## Topics

### Creating a toolbar item group

- [init(placement:content:)](toolbaritemgroup/init%28placement_content_%29.md): Creates a toolbar item group with a specified placement and content.
- [init(placement:content:label:)](toolbaritemgroup/init%28placement_content_label_%29.md): Conforms when `Content` conforms to `View`. Creates a toolbar item group with the specified placement, content, and a label describing that content.

### Supporting types

- [LabeledToolbarItemGroupContent](labeledtoolbaritemgroupcontent.md): A view that represents the view of a toolbar item group with a specified label.

## Relationships

### Conforms To

- [ToolbarContent](toolbarcontent.md)

## See Also

### Populating a toolbar

- [toolbar(content:)](view/toolbar%28content_%29.md): Populates the toolbar or navigation bar with the specified items.
- [ToolbarItem](toolbaritem.md): A model that represents an item which can be placed in the toolbar or navigation bar.
- [ToolbarItemPlacement](toolbaritemplacement.md): A structure that defines the placement of a toolbar item.
- [toolbarOverflowMenu(content:)](view/toolbaroverflowmenu%28content_%29.md): Configures the overflow menu of a toolbar.
- [ToolbarOverflowMenu](toolbaroverflowmenu.md): The overflow menu of a toolbar.
- [ToolbarContent](toolbarcontent.md): Conforming types represent items that can be placed in various locations in a toolbar.
- [ToolbarContentBuilder](toolbarcontentbuilder.md): Constructs a toolbar item set from multi-expression closures.
- [ToolbarSpacer](toolbarspacer.md): A standard space item in toolbars.
- [DefaultToolbarItem](defaulttoolbaritem.md): A toolbar item that represents a system component.
