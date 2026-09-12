> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabbarminimizebehavior](https://developer.apple.com/documentation/swiftui/tabbarminimizebehavior)

# TabBarMinimizeBehavior

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
struct TabBarMinimizeBehavior
```

## Topics

### Type Properties

- [automatic](tabbarminimizebehavior/automatic.md): Determine the behavior automatically based on the surrounding context.
- [never](tabbarminimizebehavior/never.md): Never minimize the tab bar.
- [onScrollDown](tabbarminimizebehavior/onscrolldown.md): Minimize the tab bar when downwards scrolling starts. Minimizing is supported for tab bars on only iPhone.
- [onScrollUp](tabbarminimizebehavior/onscrollup.md): Minimize the tab bar when upwards scrolling starts. Minimizing is supported for tab bars on only iPhone.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a tab bar

- [defaultAdaptableTabBarPlacement(\_:)](view/defaultadaptabletabbarplacement%28__%29.md): Specifies the default placement for the tabs in a tab view using the adaptable sidebar style.
- [defaultTabBarPlacement(\_:)](view/defaulttabbarplacement%28__%29.md): Specifies the preferred placement for the tabs of a [TabView](tabview.md) in the [sidebarAdaptable](tabviewstyle/sidebaradaptable.md) style on platforms where the tab bar cannot adapt between different representations, and only one representation can be shown.
- [tabViewSidebarHeader(content:)](view/tabviewsidebarheader%28content_%29.md): Adds a custom header to the sidebar of a tab view.
- [tabViewSidebarFooter(content:)](view/tabviewsidebarfooter%28content_%29.md): Adds a custom footer to the sidebar of a tab view.
- [tabViewSidebarBottomBar(content:)](view/tabviewsidebarbottombar%28content_%29.md): Adds a custom bottom bar to the sidebar of a tab view.
- [AdaptableTabBarPlacement](adaptabletabbarplacement.md): A placement for tabs in a tab view using the adaptable sidebar style.
- [tabBarPlacement](environmentvalues/tabbarplacement.md): The current placement of the tab bar.
- [TabBarPlacement](tabbarplacement.md): A placement for tabs in a tab view.
- [isTabBarShowingSections](environmentvalues/istabbarshowingsections.md): A Boolean value that determines whether a tab view shows the expanded contents of a tab section.
- [tabBarMinimizeBehavior(\_:)](view/tabbarminimizebehavior%28__%29.md): Sets the behavior for tab bar minimization.
- [TabViewBottomAccessoryPlacement](tabviewbottomaccessoryplacement.md): A placement of the bottom accessory in a tab view. You can use this to adjust the content of the accessory view based on the placement.
