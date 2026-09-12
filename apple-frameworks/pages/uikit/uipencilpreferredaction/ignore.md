> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipencilpreferredaction/ignore](https://developer.apple.com/documentation/uikit/uipencilpreferredaction/ignore)

# UIPencilPreferredAction.ignore (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 12.1+ · iPadOS 12.1+ · Mac Catalyst 13.1+ · visionOS 26.2+

An action that does nothing.

## Declaration

```swift
case ignore
```

<a id="Discussion"></a>

## Discussion

The system returns this action if any of the following conditions are true:

- The Apple Pencil doesn’t have a configured preferred action.
- The iPad’s accessibility settings disable Apple Pencil interactions.

## See Also

### Preferred actions

- [UIPencilPreferredAction.switchEraser](switcheraser.md): An action that switches between the current tool and the eraser.
- [UIPencilPreferredAction.switchPrevious](switchprevious.md): An action that switches between the current tool and the last used tool.
- [UIPencilPreferredAction.showColorPalette](showcolorpalette.md): An action that toggles the display of the color palette.
- [UIPencilPreferredAction.showInkAttributes](showinkattributes.md): An action that toggles the display of the selected tool’s ink attributes.
- [UIPencilPreferredAction.showContextualPalette](showcontextualpalette.md): An action that toggles shows a contextual palette of markup tools, or undo and redo options if tools aren’t available.
- [UIPencilPreferredAction.runSystemShortcut](runsystemshortcut.md): An action that runs a system shortcut.

# UIPencilPreferredActionIgnore (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 12.1+ · iPadOS 12.1+ · Mac Catalyst 13.1+ · visionOS 26.2+

An action that does nothing.

## Declaration

```objectivec
UIPencilPreferredActionIgnore
```

<a id="Discussion"></a>

## Discussion

The system returns this action if any of the following conditions are true:

- The Apple Pencil doesn’t have a configured preferred action.
- The iPad’s accessibility settings disable Apple Pencil interactions.

## See Also

### Preferred actions

- [UIPencilPreferredActionSwitchEraser](switcheraser.md): An action that switches between the current tool and the eraser.
- [UIPencilPreferredActionSwitchPrevious](switchprevious.md): An action that switches between the current tool and the last used tool.
- [UIPencilPreferredActionShowColorPalette](showcolorpalette.md): An action that toggles the display of the color palette.
- [UIPencilPreferredActionShowInkAttributes](showinkattributes.md): An action that toggles the display of the selected tool’s ink attributes.
- [UIPencilPreferredActionShowContextualPalette](showcontextualpalette.md): An action that toggles shows a contextual palette of markup tools, or undo and redo options if tools aren’t available.
- [UIPencilPreferredActionRunSystemShortcut](runsystemshortcut.md): An action that runs a system shortcut.
