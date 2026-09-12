> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pencilpreferredaction/runsystemshortcut](https://developer.apple.com/documentation/swiftui/pencilpreferredaction/runsystemshortcut)

# runSystemShortcut

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · macOS 14.5+ · visionOS 26.2+

An action that runs a system shortcut.

## Declaration

```swift
static let runSystemShortcut: PencilPreferredAction
```

<a id="discussion"></a>

## Discussion

If the user selects this as their preferred action to perform after double-tapping or squeezing their Apple Pencil, your app will never be notified when they do. Instead, you should only use this information to remind the user about their preference in your app’s UI.

## See Also

### Getting the preferred actions

- [ignore](ignore.md): An action that does nothing.
- [showColorPalette](showcolorpalette.md): An action that toggles the display of the color palette.
- [showContextualPalette](showcontextualpalette.md): An action that toggles the display of the contextual palette, or the undo/redo panel if contextual palette is not available.
- [showInkAttributes](showinkattributes.md): An action that toggles the display of the current tool’s ink attributes.
- [switchEraser](switcheraser.md): An action that switches between the current tool and the eraser.
- [switchPrevious](switchprevious.md): An action that switches between the current tool and the last used tool.
