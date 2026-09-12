> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabviewcustomization/subscript(sidebarvisibility:)](https://developer.apple.com/documentation/swiftui/tabviewcustomization/subscript(sidebarvisibility:))

# subscript(sidebarVisibility:)

**Framework:** SwiftUI  
**Kind:** Instance Subscript  
**Availability:** iOS 18.0+ (deprecated in 27.0) · iPadOS 18.0+ (deprecated in 27.0) · Mac Catalyst 18.0+ (deprecated in 27.0) · macOS 15.0+ (deprecated in 27.0) · visionOS 2.0+ (deprecated in 27.0)

The visibility of the tab identified by its customization identifier.

> Use the \`tab\` subscript and read \`sidebarVisibility\` instead.

## Declaration

```swift
subscript(sidebarVisibility id: String) -> Visibility { get set }
```

<a id="overview"></a>

## Overview

Visibility can be set imperatively by subscripting with the tab’s id:

```swift
customization[sidebarVisibility: "com.myApp.alerts"] = .hidden
```

You can change the default visibility by using the [defaultVisibility(\_:for:)](../tabcontent/defaultvisibility%28__for_%29.md) with a [sidebar](../adaptabletabbarplacement/sidebar.md) placement.

```swift
Tab("Alerts", systemImage: "bell", value: .alerts) {
    AlertsView()
}
.customizationID("com.myApp.alerts")
.defaultVisibility(.hidden, for: .sidebar)
```

If the ID isn’t associated with a tab or the tab has not been customized, a default value of `.automatic` is returned.
