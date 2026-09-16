> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/contenttoolbarplacement

# ContentToolbarPlacement

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

A region of the interface that hosts its own toolbar content.

## Declaration

```swift
struct ContentToolbarPlacement
```

<a id="overview"></a>

## Overview

Some containers draw a bar that belongs to the container as a whole rather than to the view currently on screen, such as the sidebar of a [TabView](tabview.md) that uses the [sidebarAdaptable](tabviewstyle/sidebaradaptable.md) style. Pass a value of this type to [contentToolbar(for:content:)](view/contenttoolbar%28for_content_%29.md) to put items in one of those bars.

The following example adds a button to the sidebar of a tab view, where it stays put as someone moves between tabs:

```swift
TabView {
    Tab("Lights", systemImage: "lightbulb") {
        LightsView()
    }

    Tab("Locks", systemImage: "lock") {
        LocksView()
    }
}
.tabViewStyle(.sidebarAdaptable)
.contentToolbar(for: .tabViewSidebar) {
    ToolbarItem {
        DisconnectDevicesButton()
    }
}
```

Each placement accepts only some [ToolbarItemPlacement](toolbaritemplacement.md) values. Check the documentation of the placement you use before you rely on a position.

## Topics

### Type Properties

- [tabViewSidebar](contenttoolbarplacement/tabviewsidebar.md): The tab view sidebar. This is present on certain platforms when using the `.sidebarAdaptable` tab view style.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting toolbar visibility

- [toolbar(\_:for:)](view/toolbar%28__for_%29.md): Deprecated. Specifies the visibility of a bar managed by SwiftUI.
- [toolbarVisibility(\_:for:)](view/toolbarvisibility%28__for_%29.md): Specifies the visibility of a bar managed by SwiftUI.
- [toolbarBackgroundVisibility(\_:for:)](view/toolbarbackgroundvisibility%28__for_%29.md): Specifies the preferred visibility of backgrounds on a bar managed by SwiftUI.
- [ToolbarPlacement](toolbarplacement.md): The placement of a toolbar.
