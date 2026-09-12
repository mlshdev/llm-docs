> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabcontent/disabled(_:)](https://developer.apple.com/documentation/swiftui/tabcontent/disabled(_:))

# disabled(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+

Controls whether users can interact with this tab.

## Declaration

```swift
nonisolated func disabled(_ disabled: Bool) -> some TabContent<Self.TabValue>

```

## Parameters

- `disabled`: A Boolean value that determines whether users can interact with this tab.

<a id="discussion"></a>

## Discussion

The following example shows a [TabView](../tabview.md) with one tab that is not selectable.

```swift
TabView {
    Tab("Home", systemImage: "house") {
        HomeView()
    }
    Tab("Alerts", systemImage: "bell") {
        AlertsView()
    }
    .disabled(alertsDisabled)
}
```

## See Also

### Configuring tab content

- [badge(\_:)](badge%28__%29.md): Generates a badge for the tab from a localized string resource.
- [contextMenu(menuItems:)](contextmenu%28menuitems_%29.md): Adds a context menu to a tab.
- [customizationBehavior(\_:for:)](customizationbehavior%28__for_%29.md): Configures the customization behavior of customizable tab view content.
- [customizationID(\_:)](customizationid%28__%29.md): Sets the identifier for a tab to persist its state.
- [defaultSectionExpansion(\_:)](defaultsectionexpansion%28__%29.md): Sets the default expansion state for the section containing this tab when displayed in the sidebar.
- [TabSectionExpansion](../tabsectionexpansion.md): The default expansion state for a tab section in the sidebar.
- [defaultVisibility(\_:for:)](defaultvisibility%28__for_%29.md): Configures the default visibility of a tab in customizable contexts.
- [draggable(\_:)](draggable%28__%29.md): Activates this tab as the source of a drag and drop operation. This tab can only be dragged when in the sidebar.
- [dropDestination(for:action:)](dropdestination%28for_action_%29.md): Defines the destination of a drag and drop operation that handles the dropped content with a closure that you specify.
- [help(\_:)](help%28__%29.md): Adds help text to a tab using a text view that you provide.
- [hidden(\_:)](hidden%28__%29.md): Hides the tab from the user.
- [popover(isPresented:attachmentAnchor:arrowEdge:content:)](popover%28ispresented_attachmentanchor_arrowedge_content_%29.md): Presents a popover when a given condition is true.
- [popover(item:attachmentAnchor:arrowEdge:content:)](popover%28item_attachmentanchor_arrowedge_content_%29.md): Presents a popover using the given item as a data source for the popover’s content.
- [sectionActions(content:)](sectionactions%28content_%29.md): Adds custom actions to a tab section.
- [springLoadingBehavior(\_:)](springloadingbehavior%28__%29.md): Sets the spring loading behavior for the tab.
