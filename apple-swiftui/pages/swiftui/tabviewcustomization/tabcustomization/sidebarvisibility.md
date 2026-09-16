> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/tabviewcustomization/tabcustomization/sidebarvisibility

# sidebarVisibility

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The visibility of the tab in the sidebar.

## Declaration

```swift
var sidebarVisibility: Visibility { get set }
```

<a id="discussion"></a>

## Discussion

Visibility can be set imperatively by subscripting with the tab’s id:

```swift
customization[tab: "com.myApp.alerts"].sidebarVisibility = .hidden
```

You can change the default visibility by using `TabContent/defaultVisibility(_:for)` with a `AdaptableTabBarPlacement.sidebar` placement.

```swift
Tab("Alerts", systemImage: "bell", value: .alerts) {
    AlertsView()
}
.customizationID("com.myApp.alerts")
.defaultVisibility(.hidden, for: .sidebar)
```

If the ID isn’t associated with a tab or the tab has not been customized, a default value of `.automatic` is returned.
