> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipencilpreferredaction](https://developer.apple.com/documentation/uikit/uipencilpreferredaction)

# UIPencilPreferredAction (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 12.1+ · iPadOS 12.1+ · Mac Catalyst 13.1+ · visionOS 26.2+

The actions Apple Pencil can perform after a person performs a double tap or squeeze.

## Declaration

```swift
enum UIPencilPreferredAction
```

## Topics

### Preferred actions

- [UIPencilPreferredAction.ignore](uipencilpreferredaction/ignore.md): An action that does nothing.
- [UIPencilPreferredAction.switchEraser](uipencilpreferredaction/switcheraser.md): An action that switches between the current tool and the eraser.
- [UIPencilPreferredAction.switchPrevious](uipencilpreferredaction/switchprevious.md): An action that switches between the current tool and the last used tool.
- [UIPencilPreferredAction.showColorPalette](uipencilpreferredaction/showcolorpalette.md): An action that toggles the display of the color palette.
- [UIPencilPreferredAction.showInkAttributes](uipencilpreferredaction/showinkattributes.md): An action that toggles the display of the selected tool’s ink attributes.
- [UIPencilPreferredAction.showContextualPalette](uipencilpreferredaction/showcontextualpalette.md): An action that toggles shows a contextual palette of markup tools, or undo and redo options if tools aren’t available.
- [UIPencilPreferredAction.runSystemShortcut](uipencilpreferredaction/runsystemshortcut.md): An action that runs a system shortcut.

### Initializers

- [init(rawValue:)](uipencilpreferredaction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining preferences for actions

- [preferredTapAction](uipencilinteraction/preferredtapaction.md): A person’s preferred double-tap action for Apple Pencil, as specified in the Settings app.
- [preferredSqueezeAction](uipencilinteraction/preferredsqueezeaction.md): A person’s preferred squeeze action for Apple Pencil, as specified in the Settings app.

# UIPencilPreferredAction (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 12.1+ · iPadOS 12.1+ · Mac Catalyst 13.1+ · visionOS 26.2+

The actions Apple Pencil can perform after a person performs a double tap or squeeze.

## Declaration

```objectivec
enum UIPencilPreferredAction : NSInteger;
```

## Topics

### Preferred actions

- [UIPencilPreferredActionIgnore](uipencilpreferredaction/ignore.md): An action that does nothing.
- [UIPencilPreferredActionSwitchEraser](uipencilpreferredaction/switcheraser.md): An action that switches between the current tool and the eraser.
- [UIPencilPreferredActionSwitchPrevious](uipencilpreferredaction/switchprevious.md): An action that switches between the current tool and the last used tool.
- [UIPencilPreferredActionShowColorPalette](uipencilpreferredaction/showcolorpalette.md): An action that toggles the display of the color palette.
- [UIPencilPreferredActionShowInkAttributes](uipencilpreferredaction/showinkattributes.md): An action that toggles the display of the selected tool’s ink attributes.
- [UIPencilPreferredActionShowContextualPalette](uipencilpreferredaction/showcontextualpalette.md): An action that toggles shows a contextual palette of markup tools, or undo and redo options if tools aren’t available.
- [UIPencilPreferredActionRunSystemShortcut](uipencilpreferredaction/runsystemshortcut.md): An action that runs a system shortcut.

## See Also

### Determining preferences for actions

- [preferredTapAction](uipencilinteraction/preferredtapaction.md): A person’s preferred double-tap action for Apple Pencil, as specified in the Settings app.
- [preferredSqueezeAction](uipencilinteraction/preferredsqueezeaction.md): A person’s preferred squeeze action for Apple Pencil, as specified in the Settings app.
