> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spacersizing](https://developer.apple.com/documentation/swiftui/spacersizing)

# SpacerSizing

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A type which defines how spacers should size themselves.

## Declaration

```swift
struct SpacerSizing
```

<a id="overview"></a>

## Overview

Use this type in coordination with the [ToolbarSpacer](toolbarspacer.md) type to define if the spacer should be a flexible size, or a fixed size using system-defined sizing rules.

For example, the following adds a fixed-size toolbar spacer between the share and more buttons in the toolbar:

```swift
ContentView()
    .toolbar(id: "main-toolbar") {
        ToolbarItem(id: "tag") {
           TagButton()
        }
        ToolbarItem(id: "share") {
           ShareButton()
        }
        ToolbarSpacer(.fixed)
        ToolbarItem(id: "more") {
           MoreButton()
        }
    }
```

## Topics

### Type Properties

- [fixed](spacersizing/fixed.md): The fixed spacer sizing behavior. The spacer will use a pre-defined size determined by the system and the context in which the spacer is used.
- [flexible](spacersizing/flexible.md): The flexible spacer sizing behavior. The spacer will expand to accommodate as much space as it is given in the current context.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Styling a toolbar

- [toolbarBackground(\_:for:)](view/toolbarbackground%28__for_%29.md): Specifies the preferred shape style of the background of a bar managed by SwiftUI.
- [toolbarColorScheme(\_:for:)](view/toolbarcolorscheme%28__for_%29.md): Specifies the preferred color scheme of a bar managed by SwiftUI.
- [toolbarForegroundStyle(\_:for:)](view/toolbarforegroundstyle%28__for_%29.md): Specifies the preferred foreground style of bars managed by SwiftUI.
- [windowToolbarStyle(\_:)](scene/windowtoolbarstyle%28__%29.md): Sets the style for the toolbar defined within this scene.
- [WindowToolbarStyle](windowtoolbarstyle.md): A specification for the appearance and behavior of a window’s toolbar.
- [toolbarLabelStyle](environmentvalues/toolbarlabelstyle.md): The label style to apply to controls within a toolbar.
- [ToolbarLabelStyle](toolbarlabelstyle.md): The label style of a toolbar.
