> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/presentationoptions-swift.struct](https://developer.apple.com/documentation/appkit/nsapplication/presentationoptions-swift.struct)

# NSApplication.PresentationOptions (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.6+

Constants that control the presentation of the app, typically for fullscreen apps such as games or kiosks.

## Declaration

```swift
struct PresentationOptions
```

<a id="overview"></a>

## Overview

There are restrictions on the combination of presentation options that can be set simultaneously:

- [autoHideDock](presentationoptions-swift.struct/autohidedock.md) and [hideDock](presentationoptions-swift.struct/hidedock.md) are mutually exclusive: You may specify one or the other, but not both.
- [autoHideMenuBar](presentationoptions-swift.struct/autohidemenubar.md) and [hideMenuBar](presentationoptions-swift.struct/hidemenubar.md) are mutually exclusive: You may specify one or the other, but not both.
- If you specify [hideMenuBar](presentationoptions-swift.struct/hidemenubar.md), it must be accompanied by [hideDock](presentationoptions-swift.struct/hidedock.md).
- If you specify [autoHideMenuBar](presentationoptions-swift.struct/autohidemenubar.md), it must be accompanied by either [hideDock](presentationoptions-swift.struct/hidedock.md) or [autoHideDock](presentationoptions-swift.struct/autohidedock.md).
- If you specify any of [disableProcessSwitching](presentationoptions-swift.struct/disableprocessswitching.md), [disableForceQuit](presentationoptions-swift.struct/disableforcequit.md), [disableSessionTermination](presentationoptions-swift.struct/disablesessiontermination.md), or [disableMenuBarTransparency](presentationoptions-swift.struct/disablemenubartransparency.md), it must be accompanied by either [hideDock](presentationoptions-swift.struct/hidedock.md) or [autoHideDock](presentationoptions-swift.struct/autohidedock.md).
- [autoHideToolbar](presentationoptions-swift.struct/autohidetoolbar.md) may be used only when both [fullScreen](presentationoptions-swift.struct/fullscreen.md) and [autoHideMenuBar](presentationoptions-swift.struct/autohidemenubar.md) are also set.

When [NSApplication](../nsapplication.md) receives a parameter value that does not conform to these requirements, it raises an [invalidArgumentException](https://developer.apple.com/documentation/foundation/nsexceptionname/invalidargumentexception).

## Topics

### Presentation Options

- [autoHideDock](presentationoptions-swift.struct/autohidedock.md): The dock is normally hidden, but automatically appears when moused near.
- [hideDock](presentationoptions-swift.struct/hidedock.md): The dock is entirely hidden and disabled.
- [autoHideMenuBar](presentationoptions-swift.struct/autohidemenubar.md): The menu bar is normally hidden, but automatically appears when moused near.
- [hideMenuBar](presentationoptions-swift.struct/hidemenubar.md): The menu bar is entirely hidden and disabled.
- [disableAppleMenu](presentationoptions-swift.struct/disableapplemenu.md): All Apple Menu items are disabled.
- [disableProcessSwitching](presentationoptions-swift.struct/disableprocessswitching.md): The process switching user interface (Command + Tab to cycle through apps) is disabled.
- [disableForceQuit](presentationoptions-swift.struct/disableforcequit.md): The force quit panel (displayed by pressing Command + Option + Esc) is disabled
- [disableSessionTermination](presentationoptions-swift.struct/disablesessiontermination.md): The panel that shows the Restart, Shut Down, and Log Out options that are displayed as a result of pushing the power key is disabled.
- [disableHideApplication](presentationoptions-swift.struct/disablehideapplication.md): The app’s “Hide” menu item is disabled.
- [disableMenuBarTransparency](presentationoptions-swift.struct/disablemenubartransparency.md): The menu bar transparency appearance is disabled.
- [fullScreen](presentationoptions-swift.struct/fullscreen.md): The app is in fullscreen mode.
- [autoHideToolbar](presentationoptions-swift.struct/autohidetoolbar.md): When in fullscreen mode the window toolbar is detached from window and hides and shows with autoHidden menuBar.
- [disableCursorLocationAssistance](presentationoptions-swift.struct/disablecursorlocationassistance.md): The behavior that allows the user to shake the mouse to locate the cursor is disabled.

### Initializers

- [init(rawValue:)](presentationoptions-swift.struct/init%28rawvalue_%29.md): Initializes a new presentation options structure.

### Type Properties

- [disableScreenCornerInteractions](presentationoptions-swift.struct/disablescreencornerinteractions.md): Disable screen corner interactions when the application is frontmost.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Managing the app’s appearance

- [appearance](appearance.md): The appearance associated with the app’s windows.
- [effectiveAppearance](effectiveappearance.md): The appearance that AppKit uses to draw the app’s interface.
- [currentSystemPresentationOptions](currentsystempresentationoptions.md): The set of app presentation options that are currently in effect for the system.
- [presentationOptions](presentationoptions-swift.property.md): The presentation options that should be in effect for the system when this app is active.
- [applicationShouldSuppressHighDynamicRangeContent](applicationshouldsuppresshighdynamicrangecontent.md): A boolean value indicating whether your application should suppress HDR content based on established policy. Built-in AppKit components such as NSImageView will automatically behave correctly with HDR content. You should use this value in conjunction with notifications (`NSApplicationShouldBeginSuppressingHighDynamicRangeContentNotification` and `NSApplicationShouldEndSuppressingHighDynamicRangeContentNotification`) to suppress HDR content in your application when signaled to do so.

# NSApplicationPresentationOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.6+

Constants that control the presentation of the app, typically for fullscreen apps such as games or kiosks.

## Declaration

```objectivec
enum NSApplicationPresentationOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

There are restrictions on the combination of presentation options that can be set simultaneously:

- [NSApplicationPresentationAutoHideDock](presentationoptions-swift.struct/autohidedock.md) and [NSApplicationPresentationHideDock](presentationoptions-swift.struct/hidedock.md) are mutually exclusive: You may specify one or the other, but not both.
- [NSApplicationPresentationAutoHideMenuBar](presentationoptions-swift.struct/autohidemenubar.md) and [NSApplicationPresentationHideMenuBar](presentationoptions-swift.struct/hidemenubar.md) are mutually exclusive: You may specify one or the other, but not both.
- If you specify [NSApplicationPresentationHideMenuBar](presentationoptions-swift.struct/hidemenubar.md), it must be accompanied by [NSApplicationPresentationHideDock](presentationoptions-swift.struct/hidedock.md).
- If you specify [NSApplicationPresentationAutoHideMenuBar](presentationoptions-swift.struct/autohidemenubar.md), it must be accompanied by either [NSApplicationPresentationHideDock](presentationoptions-swift.struct/hidedock.md) or [NSApplicationPresentationAutoHideDock](presentationoptions-swift.struct/autohidedock.md).
- If you specify any of [NSApplicationPresentationDisableProcessSwitching](presentationoptions-swift.struct/disableprocessswitching.md), [NSApplicationPresentationDisableForceQuit](presentationoptions-swift.struct/disableforcequit.md), [NSApplicationPresentationDisableSessionTermination](presentationoptions-swift.struct/disablesessiontermination.md), or [NSApplicationPresentationDisableMenuBarTransparency](presentationoptions-swift.struct/disablemenubartransparency.md), it must be accompanied by either [NSApplicationPresentationHideDock](presentationoptions-swift.struct/hidedock.md) or [NSApplicationPresentationAutoHideDock](presentationoptions-swift.struct/autohidedock.md).
- [NSApplicationPresentationAutoHideToolbar](presentationoptions-swift.struct/autohidetoolbar.md) may be used only when both [NSApplicationPresentationFullScreen](presentationoptions-swift.struct/fullscreen.md) and [NSApplicationPresentationAutoHideMenuBar](presentationoptions-swift.struct/autohidemenubar.md) are also set.

When [NSApplication](../nsapplication.md) receives a parameter value that does not conform to these requirements, it raises an [NSInvalidArgumentException](https://developer.apple.com/documentation/foundation/nsexceptionname/invalidargumentexception).

## Topics

### Presentation Options

- [NSApplicationPresentationDefault](../nsapplicationpresentationoptions/nsapplicationpresentationdefault.md): This is the default presentation mode.
- [NSApplicationPresentationAutoHideDock](presentationoptions-swift.struct/autohidedock.md): The dock is normally hidden, but automatically appears when moused near.
- [NSApplicationPresentationHideDock](presentationoptions-swift.struct/hidedock.md): The dock is entirely hidden and disabled.
- [NSApplicationPresentationAutoHideMenuBar](presentationoptions-swift.struct/autohidemenubar.md): The menu bar is normally hidden, but automatically appears when moused near.
- [NSApplicationPresentationHideMenuBar](presentationoptions-swift.struct/hidemenubar.md): The menu bar is entirely hidden and disabled.
- [NSApplicationPresentationDisableAppleMenu](presentationoptions-swift.struct/disableapplemenu.md): All Apple Menu items are disabled.
- [NSApplicationPresentationDisableProcessSwitching](presentationoptions-swift.struct/disableprocessswitching.md): The process switching user interface (Command + Tab to cycle through apps) is disabled.
- [NSApplicationPresentationDisableForceQuit](presentationoptions-swift.struct/disableforcequit.md): The force quit panel (displayed by pressing Command + Option + Esc) is disabled
- [NSApplicationPresentationDisableSessionTermination](presentationoptions-swift.struct/disablesessiontermination.md): The panel that shows the Restart, Shut Down, and Log Out options that are displayed as a result of pushing the power key is disabled.
- [NSApplicationPresentationDisableHideApplication](presentationoptions-swift.struct/disablehideapplication.md): The app’s “Hide” menu item is disabled.
- [NSApplicationPresentationDisableMenuBarTransparency](presentationoptions-swift.struct/disablemenubartransparency.md): The menu bar transparency appearance is disabled.
- [NSApplicationPresentationFullScreen](presentationoptions-swift.struct/fullscreen.md): The app is in fullscreen mode.
- [NSApplicationPresentationAutoHideToolbar](presentationoptions-swift.struct/autohidetoolbar.md): When in fullscreen mode the window toolbar is detached from window and hides and shows with autoHidden menuBar.
- [NSApplicationPresentationDisableCursorLocationAssistance](presentationoptions-swift.struct/disablecursorlocationassistance.md): The behavior that allows the user to shake the mouse to locate the cursor is disabled.

### Enumeration Cases

- [NSApplicationPresentationDisableScreenCornerInteractions](presentationoptions-swift.struct/disablescreencornerinteractions.md): Disable screen corner interactions when the application is frontmost.

## See Also

### Managing the app’s appearance

- [appearance](appearance.md): The appearance associated with the app’s windows.
- [effectiveAppearance](effectiveappearance.md): The appearance that AppKit uses to draw the app’s interface.
- [currentSystemPresentationOptions](currentsystempresentationoptions.md): The set of app presentation options that are currently in effect for the system.
- [presentationOptions](presentationoptions-swift.property.md): The presentation options that should be in effect for the system when this app is active.
- [applicationShouldSuppressHighDynamicRangeContent](applicationshouldsuppresshighdynamicrangecontent.md): A boolean value indicating whether your application should suppress HDR content based on established policy. Built-in AppKit components such as NSImageView will automatically behave correctly with HDR content. You should use this value in conjunction with notifications (`NSApplicationShouldBeginSuppressingHighDynamicRangeContentNotification` and `NSApplicationShouldEndSuppressingHighDynamicRangeContentNotification`) to suppress HDR content in your application when signaled to do so.
