> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pencilpreferredaction](https://developer.apple.com/documentation/swiftui/pencilpreferredaction)

# PencilPreferredAction

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · macOS 14.5+ · visionOS 26.2+

An action that the user prefers to perform after double-tapping their Apple Pencil.

## Declaration

```swift
struct PencilPreferredAction
```

## Topics

### Getting the preferred actions

- [ignore](pencilpreferredaction/ignore.md): An action that does nothing.
- [runSystemShortcut](pencilpreferredaction/runsystemshortcut.md): An action that runs a system shortcut.
- [showColorPalette](pencilpreferredaction/showcolorpalette.md): An action that toggles the display of the color palette.
- [showContextualPalette](pencilpreferredaction/showcontextualpalette.md): An action that toggles the display of the contextual palette, or the undo/redo panel if contextual palette is not available.
- [showInkAttributes](pencilpreferredaction/showinkattributes.md): An action that toggles the display of the current tool’s ink attributes.
- [switchEraser](pencilpreferredaction/switcheraser.md): An action that switches between the current tool and the eraser.
- [switchPrevious](pencilpreferredaction/switchprevious.md): An action that switches between the current tool and the last used tool.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Recognizing Apple Pencil gestures

- [onPencilDoubleTap(perform:)](view/onpencildoubletap%28perform_%29.md): Adds an action to perform after the user double-taps their Apple Pencil.
- [onPencilSqueeze(perform:)](view/onpencilsqueeze%28perform_%29.md): Adds an action to perform when the user squeezes their Apple Pencil.
- [preferredPencilDoubleTapAction](environmentvalues/preferredpencildoubletapaction.md): The action that the user prefers to perform after double-tapping their Apple Pencil, as selected in the Settings app.
- [preferredPencilSqueezeAction](environmentvalues/preferredpencilsqueezeaction.md): The action that the user prefers to perform when squeezing their Apple Pencil, as selected in the Settings app.
- [PencilDoubleTapGestureValue](pencildoubletapgesturevalue.md): Describes the value of an Apple Pencil double-tap gesture.
- [PencilSqueezeGestureValue](pencilsqueezegesturevalue.md): Describes the value of an Apple Pencil squeeze gesture.
- [PencilSqueezeGesturePhase](pencilsqueezegesturephase.md): Describes the phase and value of an Apple Pencil squeeze gesture.
- [PencilHoverPose](pencilhoverpose.md): A value describing the location and distance of an Apple Pencil hovering in the area above a view’s bounds.
