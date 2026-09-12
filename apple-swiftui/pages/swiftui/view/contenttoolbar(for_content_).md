> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/contenttoolbar(for:content:)](https://developer.apple.com/documentation/swiftui/view/contenttoolbar(for:content:))

# contentToolbar(for:content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Populates the toolbar of the specified content view type with the views you provide.

## Declaration

```swift
nonisolated func contentToolbar<Content>(for placement: ContentToolbarPlacement, @ContentBuilder content: () -> Content) -> some View where Content : View

```

## Parameters

- `content`: The views representing the content of the toolbar.

<a id="discussion"></a>

## Discussion

Use this modifier to add toolbar content that remains consistent regardless of the content view.

Unlike the toolbar modifier, which configures the toolbar of the modified view’s container, the `contentToolbar` modifier configures the toolbar within the modified view’s content instead. This means that the `contentToolbar` modifier should generally be applied directly to a container view, instead of to the content within a container view. For example, to configure the toolbar of tab view’s sidebar, apply the `contentToolbar` modifier to the `TabView` itself, not to any of the tabs within the `TabView`.

The example below adds a button to the tab view sidebar.

```swift
TabView {
    Tab("Home", systemImage: "house") {
        HomeView()
    }

    Tab("Alerts", systemImage: "bell") {
        AlertsView()
    }

    TabSection("Categories") {
        Tab("Climate", systemImage: "fan") {
            ClimateView()
        }

        Tab("Lights", systemImage: "lightbulb") {
            LightsView()
        }
    }
}
.tabViewStyle(.sidebarAdaptable)
.contentToolbar(for: .tabViewSidebar) {
    DisconnectDevicesButton()
}
```

## See Also

### Toolbars

- [toolbar(content:)](toolbar%28content_%29.md): Populates the toolbar or navigation bar with the specified items.
- [toolbar(id:content:)](toolbar%28id_content_%29.md): Populates the toolbar or navigation bar with the specified items, allowing for user customization.
- [toolbar(\_:for:)](toolbar%28__for_%29.md): Deprecated. Specifies the visibility of a bar managed by SwiftUI.
- [toolbar(removing:)](toolbar%28removing_%29.md): Remove a toolbar item present by default
- [toolbarVisibility(\_:for:)](toolbarvisibility%28__for_%29.md): Specifies the visibility of a bar managed by SwiftUI.
- [toolbarBackground(\_:for:)](toolbarbackground%28__for_%29.md): Specifies the preferred shape style of the background of a bar managed by SwiftUI.
- [toolbarBackgroundVisibility(\_:for:)](toolbarbackgroundvisibility%28__for_%29.md): Specifies the preferred visibility of backgrounds on a bar managed by SwiftUI.
- [toolbarItemHidden(\_:)](toolbaritemhidden%28__%29.md): Hides an individual view within a control group toolbar item.
- [toolbarForegroundStyle(\_:for:)](toolbarforegroundstyle%28__for_%29.md): Specifies the preferred foreground style of bars managed by SwiftUI.
- [toolbarColorScheme(\_:for:)](toolbarcolorscheme%28__for_%29.md): Specifies the preferred color scheme of a bar managed by SwiftUI.
- [toolbarOverflowMenu(content:)](toolbaroverflowmenu%28content_%29.md): Configures the overflow menu of a toolbar.
- [toolbarRole(\_:)](toolbarrole%28__%29.md): Configures the semantic role for the content populating the toolbar.
- [toolbarMinimizationBehavior(\_:for:)](toolbarminimizationbehavior%28__for_%29.md): Sets the minimize behavior for the specified bars.
- [toolbarMinimizationRestoration(\_:for:)](toolbarminimizationrestoration%28__for_%29.md): Sets the restoration behavior for the specified bars during minimization.
- [toolbarMinimizationSafeAreaAdjustment(\_:for:)](toolbarminimizationsafeareaadjustment%28__for_%29.md): Sets the safe area adjustment for the specified bars during minimization.
