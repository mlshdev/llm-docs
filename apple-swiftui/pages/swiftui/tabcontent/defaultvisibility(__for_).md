> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabcontent/defaultvisibility(_:for:)](https://developer.apple.com/documentation/swiftui/tabcontent/defaultvisibility(_:for:))

# defaultVisibility(\_:for:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Configures the default visibility of a tab in customizable contexts.

## Declaration

```swift
nonisolated func defaultVisibility(_ visibility: Visibility, for placements: AdaptableTabBarPlacement...) -> some TabContent<Self.TabValue>

```

## Parameters

- `visibility`: The tab’s visibility.
- `placements`: The locations to apply the visibility.

<a id="discussion"></a>

## Discussion

The [sidebarAdaptable](../tabviewstyle/sidebaradaptable.md) style supports customization of the tab bar and sidebar on iPad. To enable customization, attach a [TabViewCustomization](../tabviewcustomization.md) to the [TabView](../tabview.md) using [tabViewCustomization(\_:)](../view/tabviewcustomization%28__%29.md).

This modifier has no effect on other platforms or on a [TabViewStyle](../tabviewstyle.md) that doesn’t support customization.

> **Note**

> Tabs in the sidebar represent all of the of tabs in [TabView](../tabview.md). A tab that’s hidden from the sidebar is also hidden from the top bar.

The following example shows a `TabView` with three tabs, one of which is hidden by default in the sidebar.

```swift
@AppStorage("MyAppTabViewCustomization")
private var customization: TabViewCustomization

TabView(selection: $selection) {
    Tab("Home", systemImage: "house", value: MyTab.home) {
        MyHomeView()
    }
    .customizationID("com.myApp.home")

    Tab("Reports", systemImage: "chart.bar", value: MyTab.reports) {
        MyReportsView()
    }
    .customizationID("com.myApp.reports")

    Tab("Browse", systemImage: "list.bullet", value: MyTab.browse) {
        MyBrowseView()
    }
    .customizationID("com.myApp.browse")
    .defaultVisibility(.hidden, for: .sidebar)
}
.tabViewStyle(.sidebarAdaptable)
.tabViewCustomization($customization)
```

## See Also

### Configuring tab content

- [badge(\_:)](badge%28__%29.md): Generates a badge for the tab from a localized string resource.
- [contextMenu(menuItems:)](contextmenu%28menuitems_%29.md): Adds a context menu to a tab.
- [customizationBehavior(\_:for:)](customizationbehavior%28__for_%29.md): Configures the customization behavior of customizable tab view content.
- [customizationID(\_:)](customizationid%28__%29.md): Sets the identifier for a tab to persist its state.
- [defaultSectionExpansion(\_:)](defaultsectionexpansion%28__%29.md): Sets the default expansion state for the section containing this tab when displayed in the sidebar.
- [TabSectionExpansion](../tabsectionexpansion.md): The default expansion state for a tab section in the sidebar.
- [disabled(\_:)](disabled%28__%29.md): Controls whether users can interact with this tab.
- [draggable(\_:)](draggable%28__%29.md): Activates this tab as the source of a drag and drop operation. This tab can only be dragged when in the sidebar.
- [dropDestination(for:action:)](dropdestination%28for_action_%29.md): Defines the destination of a drag and drop operation that handles the dropped content with a closure that you specify.
- [help(\_:)](help%28__%29.md): Adds help text to a tab using a text view that you provide.
- [hidden(\_:)](hidden%28__%29.md): Hides the tab from the user.
- [popover(isPresented:attachmentAnchor:arrowEdge:content:)](popover%28ispresented_attachmentanchor_arrowedge_content_%29.md): Presents a popover when a given condition is true.
- [popover(item:attachmentAnchor:arrowEdge:content:)](popover%28item_attachmentanchor_arrowedge_content_%29.md): Presents a popover using the given item as a data source for the popover’s content.
- [sectionActions(content:)](sectionactions%28content_%29.md): Adds custom actions to a tab section.
- [springLoadingBehavior(\_:)](springloadingbehavior%28__%29.md): Sets the spring loading behavior for the tab.
