> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/defaulttabbarplacement(_:)](https://developer.apple.com/documentation/swiftui/view/defaulttabbarplacement(_:))

# defaultTabBarPlacement(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Specifies the preferred placement for the tabs of a [TabView](../tabview.md) in the [sidebarAdaptable](../tabviewstyle/sidebaradaptable.md) style on platforms where the tab bar cannot adapt between different representations, and only one representation can be shown.

## Declaration

```swift
nonisolated func defaultTabBarPlacement(_ defaultPlacement: AdaptableTabBarPlacement) -> some View

```

<a id="discussion"></a>

## Discussion

On platforms that support adapting between a sidebar and tab bar (currently iPadOS), use [defaultAdaptableTabBarPlacement(\_:)](defaultadaptabletabbarplacement%28__%29.md) to configure the adaptable tab bar.

This modifier is effective on platforms where the [sidebarAdaptable](../tabviewstyle/sidebaradaptable.md) style statically resolves to either a sidebar or tab bar, such as iPhone, macOS, tvOS, and visionOS. On iPadOS (where the bar is adaptable), this modifier has no effect.

The following example shows a `TabView` that prefers to display a sidebar on platforms where the bar cannot morph:

```swift
TabView {
    Tab("Home", systemImage: "house") {
        HomeView()
    }

    Tab("Favorites", systemImage: "star") {
        FavoritesView()
    }
}
.tabViewStyle(.sidebarAdaptable)
.defaultTabBarPlacement(.sidebar)
```

## See Also

### Configuring a tab bar

- [defaultAdaptableTabBarPlacement(\_:)](defaultadaptabletabbarplacement%28__%29.md): Specifies the default placement for the tabs in a tab view using the adaptable sidebar style.
- [tabViewSidebarHeader(content:)](tabviewsidebarheader%28content_%29.md): Adds a custom header to the sidebar of a tab view.
- [tabViewSidebarFooter(content:)](tabviewsidebarfooter%28content_%29.md): Adds a custom footer to the sidebar of a tab view.
- [tabViewSidebarBottomBar(content:)](tabviewsidebarbottombar%28content_%29.md): Adds a custom bottom bar to the sidebar of a tab view.
- [AdaptableTabBarPlacement](../adaptabletabbarplacement.md): A placement for tabs in a tab view using the adaptable sidebar style.
- [tabBarPlacement](../environmentvalues/tabbarplacement.md): The current placement of the tab bar.
- [TabBarPlacement](../tabbarplacement.md): A placement for tabs in a tab view.
- [isTabBarShowingSections](../environmentvalues/istabbarshowingsections.md): A Boolean value that determines whether a tab view shows the expanded contents of a tab section.
- [tabBarMinimizeBehavior(\_:)](tabbarminimizebehavior%28__%29.md): Sets the behavior for tab bar minimization.
- [TabBarMinimizeBehavior](../tabbarminimizebehavior.md)
- [TabViewBottomAccessoryPlacement](../tabviewbottomaccessoryplacement.md): A placement of the bottom accessory in a tab view. You can use this to adjust the content of the accessory view based on the placement.
