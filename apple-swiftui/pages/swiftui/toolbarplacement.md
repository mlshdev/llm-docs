> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbarplacement](https://developer.apple.com/documentation/swiftui/toolbarplacement)

# ToolbarPlacement

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The placement of a toolbar.

## Declaration

```swift
struct ToolbarPlacement
```

<a id="overview"></a>

## Overview

Use this type in conjunction with modifiers like [toolbarBackground(\_:for:)](view/toolbarbackground%28__for_%29.md) and [toolbarVisibility(\_:for:)](view/toolbarvisibility%28__for_%29.md) to customize the appearance of different bars managed by SwiftUI. Not all bars support all types of customizations.

See [ToolbarItemPlacement](toolbaritemplacement.md) to learn about the different regions of these toolbars that you can place your own controls into.

## Topics

### Getting placements

- [automatic](toolbarplacement/automatic.md): The primary toolbar.
- [accessoryBar(id:)](toolbarplacement/accessorybar%28id_%29.md): Creates a unique accessory bar placement.
- [bottomBar](toolbarplacement/bottombar.md): The bottom toolbar of an app.
- [bottomOrnament](toolbarplacement/bottomornament.md): The bottom ornament of an app.
- [navigationBar](toolbarplacement/navigationbar.md): The navigation bar of an app.
- [tabBar](toolbarplacement/tabbar.md): The tab bar of an app.
- [windowToolbar](toolbarplacement/windowtoolbar.md): The placement for the containing window’s toolbar, sometimes referred to as the titlebar.

### Deprecated symbols

- [init(id:)](toolbarplacement/init%28id_%29.md): Deprecated. Creates a custom accessory bar placement.

### Type Properties

- [statusBar](toolbarplacement/statusbar.md): The system status bar.

## See Also

### Setting toolbar visibility

- [toolbar(\_:for:)](view/toolbar%28__for_%29.md): Deprecated. Specifies the visibility of a bar managed by SwiftUI.
- [toolbarVisibility(\_:for:)](view/toolbarvisibility%28__for_%29.md): Specifies the visibility of a bar managed by SwiftUI.
- [toolbarBackgroundVisibility(\_:for:)](view/toolbarbackgroundvisibility%28__for_%29.md): Specifies the preferred visibility of backgrounds on a bar managed by SwiftUI.
- [ContentToolbarPlacement](contenttoolbarplacement.md)
