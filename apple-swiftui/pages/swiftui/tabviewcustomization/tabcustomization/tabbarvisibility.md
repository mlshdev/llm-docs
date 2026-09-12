> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabviewcustomization/tabcustomization/tabbarvisibility](https://developer.apple.com/documentation/swiftui/tabviewcustomization/tabcustomization/tabbarvisibility)

# tabBarVisibility

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The visibility of the tab in the tab bar.

## Declaration

```swift
var tabBarVisibility: Visibility { get }
```

<a id="discussion"></a>

## Discussion

You can change the default visibility by using the `TabContent/defaultVisibility(_:for)` with a `AdaptableTabBarPlacement.tabBar` placement.

If the ID isn’t associated with a tab or the tab has not been customized, a default value of `.automatic` is returned.
