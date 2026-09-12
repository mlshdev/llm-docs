> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/adaptabletabbarplacement](https://developer.apple.com/documentation/swiftui/adaptabletabbarplacement)

# AdaptableTabBarPlacement

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A placement for tabs in a tab view using the adaptable sidebar style.

## Declaration

```swift
struct AdaptableTabBarPlacement
```

## Topics

### Type Properties

- [automatic](adaptabletabbarplacement/automatic.md): The automatic placement.
- [sidebar](adaptabletabbarplacement/sidebar.md): The sidebar of a tab view.
- [tabBar](adaptabletabbarplacement/tabbar.md): The tab bar of a tab view.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Configuring a tab bar

- [defaultAdaptableTabBarPlacement(\_:)](view/defaultadaptabletabbarplacement%28__%29.md): Specifies the default placement for the tabs in a tab view using the adaptable sidebar style.
- [defaultTabBarPlacement(\_:)](view/defaulttabbarplacement%28__%29.md): Specifies the preferred placement for the tabs of a [TabView](tabview.md) in the [sidebarAdaptable](tabviewstyle/sidebaradaptable.md) style on platforms where the tab bar cannot adapt between different representations, and only one representation can be shown.
- [tabViewSidebarHeader(content:)](view/tabviewsidebarheader%28content_%29.md): Adds a custom header to the sidebar of a tab view.
- [tabViewSidebarFooter(content:)](view/tabviewsidebarfooter%28content_%29.md): Adds a custom footer to the sidebar of a tab view.
- [tabViewSidebarBottomBar(content:)](view/tabviewsidebarbottombar%28content_%29.md): Adds a custom bottom bar to the sidebar of a tab view.
- [tabBarPlacement](environmentvalues/tabbarplacement.md): The current placement of the tab bar.
- [TabBarPlacement](tabbarplacement.md): A placement for tabs in a tab view.
- [isTabBarShowingSections](environmentvalues/istabbarshowingsections.md): A Boolean value that determines whether a tab view shows the expanded contents of a tab section.
- [tabBarMinimizeBehavior(\_:)](view/tabbarminimizebehavior%28__%29.md): Sets the behavior for tab bar minimization.
- [TabBarMinimizeBehavior](tabbarminimizebehavior.md)
- [TabViewBottomAccessoryPlacement](tabviewbottomaccessoryplacement.md): A placement of the bottom accessory in a tab view. You can use this to adjust the content of the accessory view based on the placement.
