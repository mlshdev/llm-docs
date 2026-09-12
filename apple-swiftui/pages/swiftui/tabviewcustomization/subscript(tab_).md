> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabviewcustomization/subscript(tab:)](https://developer.apple.com/documentation/swiftui/tabviewcustomization/subscript(tab:))

# subscript(tab:)

**Framework:** SwiftUI  
**Kind:** Instance Subscript  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The customization of the tab, identified by its customization identifier.

## Declaration

```swift
subscript(tab id: String) -> TabViewCustomization.TabCustomization { get set }
```

<a id="overview"></a>

## Overview

You can imperatively set properties by subscripting with the tab ID. The following example sets the tab’s sidebar visibility:

```swift
customization[tab: "com.myApp.alerts"].sidebarVisibility = .hidden
```
