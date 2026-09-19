> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiwindow/level/statusbar

# statusBar (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The level for a status window.

## Declaration

```swift
static let statusBar: UIWindow.Level
```

<a id="Discussion"></a>

## Discussion

Windows at this level appear on top of your app’s main window, but below alerts.

## See Also

### Window levels

- [normal](normal.md): The default level.
- [alert](alert.md): The level for an alert view.

# UIWindowLevelStatusBar (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The level for a status window.

## Declaration

```objectivec
extern const UIWindowLevel UIWindowLevelStatusBar;
```

<a id="Discussion"></a>

## Discussion

Windows at this level appear on top of your app’s main window, but below alerts.

## See Also

### Window levels

- [UIWindowLevelNormal](normal.md): The default level.
- [UIWindowLevelAlert](alert.md): The level for an alert view.
