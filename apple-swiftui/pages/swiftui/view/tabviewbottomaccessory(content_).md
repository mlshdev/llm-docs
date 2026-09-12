> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/tabviewbottomaccessory(content:)](https://developer.apple.com/documentation/swiftui/view/tabviewbottomaccessory(content:))

# tabViewBottomAccessory(content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Places a view as the bottom accessory of the tab view.

## Declaration

```swift
nonisolated func tabViewBottomAccessory<Content>(@ContentBuilder content: () -> Content) -> some View where Content : View

```

<a id="discussion"></a>

## Discussion

On iPhone, the placement of the bottom accessory depends on the tab bar size: when the tab bar is normal size, the accessory appears above it; when the tab bar is collapsed, the accessory displays inline. Use the [tabViewBottomAccessoryPlacement](../environmentvalues/tabviewbottomaccessoryplacement.md) environment value to adjust the accessory’s content based on its placement.

The following example sets a status view as the `TabView` bottom accessory.

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
.tabViewBottomAccessory {
    HomeStatusView()
}
```

## See Also

### Tab views

- [defaultAdaptableTabBarPlacement(\_:)](defaultadaptabletabbarplacement%28__%29.md): Specifies the default placement for the tabs in a tab view using the adaptable sidebar style.
- [defaultTabBarPlacement(\_:)](defaulttabbarplacement%28__%29.md): Specifies the preferred placement for the tabs of a [TabView](../tabview.md) in the [sidebarAdaptable](../tabviewstyle/sidebaradaptable.md) style on platforms where the tab bar cannot adapt between different representations, and only one representation can be shown.
- [sectionActions(content:)](sectionactions%28content_%29.md): Adds custom actions to a section.
- [tabBarMinimizeBehavior(\_:)](tabbarminimizebehavior%28__%29.md): Sets the behavior for tab bar minimization.
- [tabViewBottomAccessory(isEnabled:content:)](tabviewbottomaccessory%28isenabled_content_%29.md): Places a view as the bottom accessory of the tab view. Use this modifier to dynamically show and hide the accessory view.
- [tabViewCustomization(\_:)](tabviewcustomization%28__%29.md): Specifies the customizations to apply to the sidebar representation of the tab view.
- [tabViewSearchActivation(\_:)](tabviewsearchactivation%28__%29.md): Configures the activation and deactivation behavior of search in the search tab.
- [tabViewSidebarHeader(content:)](tabviewsidebarheader%28content_%29.md): Adds a custom header to the sidebar of a tab view.
- [tabViewSidebarFooter(content:)](tabviewsidebarfooter%28content_%29.md): Adds a custom footer to the sidebar of a tab view.
- [tabViewSidebarBottomBar(content:)](tabviewsidebarbottombar%28content_%29.md): Adds a custom bottom bar to the sidebar of a tab view.
