> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/window(_:startcustomanimationtoenterfullscreenwithduration:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/window(_:startcustomanimationtoenterfullscreenwithduration:))

# window(\_:startCustomAnimationToEnterFullScreenWithDuration:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

This method is called to start the window animation into full-screen mode, including transitioning to a new space.

## Declaration

```swift
@MainActor optional func window(_ window: NSWindow, startCustomAnimationToEnterFullScreenWithDuration duration: TimeInterval)
```

## Parameters

- `window`: The window to enter full-screen mode.
- `duration`: The duration of the presentation change.

<a id="Discussion"></a>

## Discussion

You can implement this method to perform custom animation with the given duration to be in sync with the system animation.

<a id="Special-Considerations"></a>

### Special Considerations

This method is called only if [customWindowsToEnterFullScreen(for:)](customwindowstoenterfullscreen%28for_%29.md) returns non-`nil`.

## See Also

### Custom Full-Screen Presentation Animations

- [customWindowsToEnterFullScreen(for:)](customwindowstoenterfullscreen%28for_%29.md): Called when the window is about to enter full-screen mode.
- [customWindowsToEnterFullScreen(for:on:)](customwindowstoenterfullscreen%28for_on_%29.md): Called when the window is about to enter full-screen mode.
- [window(\_:startCustomAnimationToEnterFullScreenOn:withDuration:)](window%28__startcustomanimationtoenterfullscreenon_withduration_%29.md): This method is called to start the window animation into full-screen mode, including transitioning to a new space.
- [windowDidFailToEnterFullScreen(\_:)](windowdidfailtoenterfullscreen%28__%29.md): Called if the window failed to enter full-screen mode.
- [customWindowsToExitFullScreen(for:)](customwindowstoexitfullscreen%28for_%29.md): Called when the window is about to exit full-screen mode.
- [window(\_:startCustomAnimationToExitFullScreenWithDuration:)](window%28__startcustomanimationtoexitfullscreenwithduration_%29.md): This method is called to start the window animation out of full-screen mode, including transitioning back to the desktop space.
- [windowDidFailToExitFullScreen(\_:)](windowdidfailtoexitfullscreen%28__%29.md): Called if the window failed to exit full-screen mode.

# window:startCustomAnimationToEnterFullScreenWithDuration: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

This method is called to start the window animation into full-screen mode, including transitioning to a new space.

## Declaration

```objectivec
- (void) window:(NSWindow *) window startCustomAnimationToEnterFullScreenWithDuration:(NSTimeInterval) duration;
```

## Parameters

- `window`: The window to enter full-screen mode.
- `duration`: The duration of the presentation change.

<a id="Discussion"></a>

## Discussion

You can implement this method to perform custom animation with the given duration to be in sync with the system animation.

<a id="Special-Considerations"></a>

### Special Considerations

This method is called only if [customWindowsToEnterFullScreenForWindow:](customwindowstoenterfullscreen%28for_%29.md) returns non-`nil`.

## See Also

### Custom Full-Screen Presentation Animations

- [customWindowsToEnterFullScreenForWindow:](customwindowstoenterfullscreen%28for_%29.md): Called when the window is about to enter full-screen mode.
- [customWindowsToEnterFullScreenForWindow:onScreen:](customwindowstoenterfullscreen%28for_on_%29.md): Called when the window is about to enter full-screen mode.
- [window:startCustomAnimationToEnterFullScreenOnScreen:withDuration:](window%28__startcustomanimationtoenterfullscreenon_withduration_%29.md): This method is called to start the window animation into full-screen mode, including transitioning to a new space.
- [windowDidFailToEnterFullScreen:](windowdidfailtoenterfullscreen%28__%29.md): Called if the window failed to enter full-screen mode.
- [customWindowsToExitFullScreenForWindow:](customwindowstoexitfullscreen%28for_%29.md): Called when the window is about to exit full-screen mode.
- [window:startCustomAnimationToExitFullScreenWithDuration:](window%28__startcustomanimationtoexitfullscreenwithduration_%29.md): This method is called to start the window animation out of full-screen mode, including transitioning back to the desktop space.
- [windowDidFailToExitFullScreen:](windowdidfailtoexitfullscreen%28__%29.md): Called if the window failed to exit full-screen mode.
