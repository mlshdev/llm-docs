> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabcontent/contextmenu(menuitems:)](https://developer.apple.com/documentation/swiftui/tabcontent/contextmenu(menuitems:))

# contextMenu(menuItems:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Adds a context menu to a tab.

## Declaration

```swift
nonisolated func contextMenu<M>(@ContentBuilder menuItems: () -> M) -> some TabContent<Self.TabValue> where M : View

```

## Parameters

- `menuItems`: A closure that produces the menu’s contents. You can deactivate the context menu by returning nothing from the closure.

<a id="return-value"></a>

## Return Value

A row that can display a context menu.

<a id="discussion"></a>

## Discussion

Use this modifier to add a context menu to a tab’s sidebar representation. Compose the menu by returning controls like [Button](../button.md), [Toggle](../toggle.md) and [Picker](../picker.md) from the `menuItems` closure. You can also use [Menu](../menu.md) to define submenus, or [Section](../section.md) to group items.

The following example adds the ability to pin the tab or share the tab’s books with a friend.

```swift
Tab("Currently Reading", systemImage: "book") {
    CurrentBooksList()
}
.contextMenu {
    Button {
        // Pin this tab.
    } label: {
        Label("Pin", systemImage: "pin")
    }
    Button {
        // Open a share sheet to share
    } label: {
        Label("Share", systemImage: "square.and.arrow.up")
    }
}
```

## See Also

### Configuring tab content

- [badge(\_:)](badge%28__%29.md): Generates a badge for the tab from a localized string resource.
- [customizationBehavior(\_:for:)](customizationbehavior%28__for_%29.md): Configures the customization behavior of customizable tab view content.
- [customizationID(\_:)](customizationid%28__%29.md): Sets the identifier for a tab to persist its state.
- [defaultSectionExpansion(\_:)](defaultsectionexpansion%28__%29.md): Sets the default expansion state for the section containing this tab when displayed in the sidebar.
- [TabSectionExpansion](../tabsectionexpansion.md): The default expansion state for a tab section in the sidebar.
- [defaultVisibility(\_:for:)](defaultvisibility%28__for_%29.md): Configures the default visibility of a tab in customizable contexts.
- [disabled(\_:)](disabled%28__%29.md): Controls whether users can interact with this tab.
- [draggable(\_:)](draggable%28__%29.md): Activates this tab as the source of a drag and drop operation. This tab can only be dragged when in the sidebar.
- [dropDestination(for:action:)](dropdestination%28for_action_%29.md): Defines the destination of a drag and drop operation that handles the dropped content with a closure that you specify.
- [help(\_:)](help%28__%29.md): Adds help text to a tab using a text view that you provide.
- [hidden(\_:)](hidden%28__%29.md): Hides the tab from the user.
- [popover(isPresented:attachmentAnchor:arrowEdge:content:)](popover%28ispresented_attachmentanchor_arrowedge_content_%29.md): Presents a popover when a given condition is true.
- [popover(item:attachmentAnchor:arrowEdge:content:)](popover%28item_attachmentanchor_arrowedge_content_%29.md): Presents a popover using the given item as a data source for the popover’s content.
- [sectionActions(content:)](sectionactions%28content_%29.md): Adds custom actions to a tab section.
- [springLoadingBehavior(\_:)](springloadingbehavior%28__%29.md): Sets the spring loading behavior for the tab.
