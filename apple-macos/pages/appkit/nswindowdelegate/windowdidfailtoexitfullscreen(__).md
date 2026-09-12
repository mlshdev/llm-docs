> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowdidfailtoexitfullscreen(_:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowdidfailtoexitfullscreen(_:))

# windowDidFailToExitFullScreen(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Called if the window failed to exit full-screen mode.

## Declaration

```swift
@MainActor optional func windowDidFailToExitFullScreen(_ window: NSWindow)
```

## Parameters

- `window`: The window that failed to exit to full-screen mode.

<a id="Discussion"></a>

## Discussion

In some cases, the transition to exit full-screen mode can fail, due to being in the midst of handling some other animation or user gesture. This method indicates that there was an error, and you should clean up any work you may have done to prepare to exit full-screen mode.

This message is sent whether or not the delegate indicated a custom animation by returning non-`nil` from  [customWindowsToExitFullScreen(for:)](customwindowstoexitfullscreen%28for_%29.md).

## See Also

### Custom Full-Screen Presentation Animations

- [customWindowsToEnterFullScreen(for:)](customwindowstoenterfullscreen%28for_%29.md): Called when the window is about to enter full-screen mode.
- [customWindowsToEnterFullScreen(for:on:)](customwindowstoenterfullscreen%28for_on_%29.md): Called when the window is about to enter full-screen mode.
- [window(\_:startCustomAnimationToEnterFullScreenWithDuration:)](window%28__startcustomanimationtoenterfullscreenwithduration_%29.md): This method is called to start the window animation into full-screen mode, including transitioning to a new space.
- [window(\_:startCustomAnimationToEnterFullScreenOn:withDuration:)](window%28__startcustomanimationtoenterfullscreenon_withduration_%29.md): This method is called to start the window animation into full-screen mode, including transitioning to a new space.
- [windowDidFailToEnterFullScreen(\_:)](windowdidfailtoenterfullscreen%28__%29.md): Called if the window failed to enter full-screen mode.
- [customWindowsToExitFullScreen(for:)](customwindowstoexitfullscreen%28for_%29.md): Called when the window is about to exit full-screen mode.
- [window(\_:startCustomAnimationToExitFullScreenWithDuration:)](window%28__startcustomanimationtoexitfullscreenwithduration_%29.md): This method is called to start the window animation out of full-screen mode, including transitioning back to the desktop space.

# windowDidFailToExitFullScreen: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Called if the window failed to exit full-screen mode.

## Declaration

```objectivec
- (void) windowDidFailToExitFullScreen:(NSWindow *) window;
```

## Parameters

- `window`: The window that failed to exit to full-screen mode.

<a id="Discussion"></a>

## Discussion

In some cases, the transition to exit full-screen mode can fail, due to being in the midst of handling some other animation or user gesture. This method indicates that there was an error, and you should clean up any work you may have done to prepare to exit full-screen mode.

This message is sent whether or not the delegate indicated a custom animation by returning non-`nil` from  [customWindowsToExitFullScreenForWindow:](customwindowstoexitfullscreen%28for_%29.md).

## See Also

### Custom Full-Screen Presentation Animations

- [customWindowsToEnterFullScreenForWindow:](customwindowstoenterfullscreen%28for_%29.md): Called when the window is about to enter full-screen mode.
- [customWindowsToEnterFullScreenForWindow:onScreen:](customwindowstoenterfullscreen%28for_on_%29.md): Called when the window is about to enter full-screen mode.
- [window:startCustomAnimationToEnterFullScreenWithDuration:](window%28__startcustomanimationtoenterfullscreenwithduration_%29.md): This method is called to start the window animation into full-screen mode, including transitioning to a new space.
- [window:startCustomAnimationToEnterFullScreenOnScreen:withDuration:](window%28__startcustomanimationtoenterfullscreenon_withduration_%29.md): This method is called to start the window animation into full-screen mode, including transitioning to a new space.
- [windowDidFailToEnterFullScreen:](windowdidfailtoenterfullscreen%28__%29.md): Called if the window failed to enter full-screen mode.
- [customWindowsToExitFullScreenForWindow:](customwindowstoexitfullscreen%28for_%29.md): Called when the window is about to exit full-screen mode.
- [window:startCustomAnimationToExitFullScreenWithDuration:](window%28__startcustomanimationtoexitfullscreenwithduration_%29.md): This method is called to start the window animation out of full-screen mode, including transitioning back to the desktop space.
