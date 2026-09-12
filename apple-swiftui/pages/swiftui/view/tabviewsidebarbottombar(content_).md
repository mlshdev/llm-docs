> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/tabviewsidebarbottombar(content:)](https://developer.apple.com/documentation/swiftui/view/tabviewsidebarbottombar(content:))

# tabViewSidebarBottomBar(content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Adds a custom bottom bar to the sidebar of a tab view.

## Declaration

```swift
nonisolated func tabViewSidebarBottomBar<Content>(@ContentBuilder content: () -> Content) -> some View where Content : View

```

<a id="discussion"></a>

## Discussion

The content is pinned at the bottom of the sidebar, so it’s always visible when the sidebar is visible and doesn’t scroll with the content.

The following example adds an account button to the bottom of the sidebar:

```swift
TabView {
    Tab("Home", systemImage: "house") {
        HomeView()
    }

    Tab("Alerts", systemImage: "bell") {
        AlertsView()
    }

    Tab("Browse", systemImage: "list.bullet") {
        MyBrowseView()
    }
}
.tabViewStyle(.sidebarAdaptable)
.tabViewSidebarBottomBar {
    AccountButton()
}
```

## See Also

### Configuring a tab bar

- [defaultAdaptableTabBarPlacement(\_:)](defaultadaptabletabbarplacement%28__%29.md): Specifies the default placement for the tabs in a tab view using the adaptable sidebar style.
- [defaultTabBarPlacement(\_:)](defaulttabbarplacement%28__%29.md): Specifies the preferred placement for the tabs of a [TabView](../tabview.md) in the [sidebarAdaptable](../tabviewstyle/sidebaradaptable.md) style on platforms where the tab bar cannot adapt between different representations, and only one representation can be shown.
- [tabViewSidebarHeader(content:)](tabviewsidebarheader%28content_%29.md): Adds a custom header to the sidebar of a tab view.
- [tabViewSidebarFooter(content:)](tabviewsidebarfooter%28content_%29.md): Adds a custom footer to the sidebar of a tab view.
- [AdaptableTabBarPlacement](../adaptabletabbarplacement.md): A placement for tabs in a tab view using the adaptable sidebar style.
- [tabBarPlacement](../environmentvalues/tabbarplacement.md): The current placement of the tab bar.
- [TabBarPlacement](../tabbarplacement.md): A placement for tabs in a tab view.
- [isTabBarShowingSections](../environmentvalues/istabbarshowingsections.md): A Boolean value that determines whether a tab view shows the expanded contents of a tab section.
- [tabBarMinimizeBehavior(\_:)](tabbarminimizebehavior%28__%29.md): Sets the behavior for tab bar minimization.
- [TabBarMinimizeBehavior](../tabbarminimizebehavior.md)
- [TabViewBottomAccessoryPlacement](../tabviewbottomaccessoryplacement.md): A placement of the bottom accessory in a tab view. You can use this to adjust the content of the accessory view based on the placement.
