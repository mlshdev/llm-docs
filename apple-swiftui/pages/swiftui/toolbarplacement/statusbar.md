> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbarplacement/statusbar](https://developer.apple.com/documentation/swiftui/toolbarplacement/statusbar)

# statusBar

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The system status bar.

## Declaration

```swift
static var statusBar: ToolbarPlacement { get }
```

<a id="discussion"></a>

## Discussion

Use with [toolbarVisibility(\_:for:)](../view/toolbarvisibility%28__for_%29.md) to hide the status bar, or with [toolbarColorScheme(\_:for:)](../view/toolbarcolorscheme%28__for_%29.md) to specify the preferred status bar style.

```swift
content
    .toolbarVisibility(
        hideStatusBar ? .hidden : .automatic,
        for: .statusBar)
    // use light status bar on a dark background
    .toolbarColorScheme(.dark, for: .statusBar)
```

Using this placement with other toolbar customization APIs has no effect.
