> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabcontent/defaultsectionexpansion(_:)](https://developer.apple.com/documentation/swiftui/tabcontent/defaultsectionexpansion(_:))

# defaultSectionExpansion(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Sets the default expansion state for the section containing this tab when displayed in the sidebar.

## Declaration

```swift
nonisolated func defaultSectionExpansion(_ expansion: TabSectionExpansion) -> some TabContent<Self.TabValue>

```

## Parameters

- `expansion`: The default expansion behavior for the containing section. The default is [automatic](../tabsectionexpansion/automatic.md).

<a id="discussion"></a>

## Discussion

Use this modifier to control whether a tab section starts expanded or collapsed in the sidebar. The user can manually change the expansion state, and subsequent user interactions take precedence over this default.

This modifier has no effect in contexts where sections are not collapsible — for example, on platforms that do not present a collapsible sidebar, or when [automatic](../tabsectionexpansion/automatic.md) is supplied.

```swift
TabView {
    TabSection("Library") {
        Tab("Songs", systemImage: "music.note") {
            SongsView()
        }
        Tab("Albums", systemImage: "square.stack") {
            AlbumsView()
        }
    }

    TabSection("Archive") {
        Tab("Old Playlists", systemImage: "archivebox") {
            ArchiveView()
        }
        Tab("Deleted", systemImage: "trash") {
            DeletedView()
        }
    }
    .defaultSectionExpansion(.collapsed)
}
.tabViewStyle(.sidebarAdaptable)
```

## See Also

### Configuring tab content

- [badge(\_:)](badge%28__%29.md): Generates a badge for the tab from a localized string resource.
- [contextMenu(menuItems:)](contextmenu%28menuitems_%29.md): Adds a context menu to a tab.
- [customizationBehavior(\_:for:)](customizationbehavior%28__for_%29.md): Configures the customization behavior of customizable tab view content.
- [customizationID(\_:)](customizationid%28__%29.md): Sets the identifier for a tab to persist its state.
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
