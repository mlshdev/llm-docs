> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/customwindowstoexitfullscreen(for:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/customwindowstoexitfullscreen(for:))

# customWindowsToExitFullScreen(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Called when the window is about to exit full-screen mode.

## Declaration

```swift
@MainActor optional func customWindowsToExitFullScreen(for window: NSWindow) -> [NSWindow]?
```

## Parameters

- `window`: The window to exit full-screen mode.

<a id="return-value"></a>

## Return Value

An array of windows involved in the animation out of full-screen mode for `window`; otherwise `nil`.

<a id="Discussion"></a>

## Discussion

This method lets the window delegate customize the animation when the window is about to exit full-screen mode by providing a custom window or windows containing layers or other effects. If an you do not want to perform custom animation, you can omit the implementation of this method, or it can return `nil`.

## See Also

### Custom Full-Screen Presentation Animations

- [customWindowsToEnterFullScreen(for:)](customwindowstoenterfullscreen%28for_%29.md): Called when the window is about to enter full-screen mode.
- [customWindowsToEnterFullScreen(for:on:)](customwindowstoenterfullscreen%28for_on_%29.md): Called when the window is about to enter full-screen mode.
- [window(\_:startCustomAnimationToEnterFullScreenWithDuration:)](window%28__startcustomanimationtoenterfullscreenwithduration_%29.md): This method is called to start the window animation into full-screen mode, including transitioning to a new space.
- [window(\_:startCustomAnimationToEnterFullScreenOn:withDuration:)](window%28__startcustomanimationtoenterfullscreenon_withduration_%29.md): This method is called to start the window animation into full-screen mode, including transitioning to a new space.
- [windowDidFailToEnterFullScreen(\_:)](windowdidfailtoenterfullscreen%28__%29.md): Called if the window failed to enter full-screen mode.
- [window(\_:startCustomAnimationToExitFullScreenWithDuration:)](window%28__startcustomanimationtoexitfullscreenwithduration_%29.md): This method is called to start the window animation out of full-screen mode, including transitioning back to the desktop space.
- [windowDidFailToExitFullScreen(\_:)](windowdidfailtoexitfullscreen%28__%29.md): Called if the window failed to exit full-screen mode.

# customWindowsToExitFullScreenForWindow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Called when the window is about to exit full-screen mode.

## Declaration

```objectivec
- (NSArray<NSWindow *> *) customWindowsToExitFullScreenForWindow:(NSWindow *) window;
```

## Parameters

- `window`: The window to exit full-screen mode.

<a id="return-value"></a>

## Return Value

An array of windows involved in the animation out of full-screen mode for `window`; otherwise `nil`.

<a id="Discussion"></a>

## Discussion

This method lets the window delegate customize the animation when the window is about to exit full-screen mode by providing a custom window or windows containing layers or other effects. If an you do not want to perform custom animation, you can omit the implementation of this method, or it can return `nil`.

## See Also

### Custom Full-Screen Presentation Animations

- [customWindowsToEnterFullScreenForWindow:](customwindowstoenterfullscreen%28for_%29.md): Called when the window is about to enter full-screen mode.
- [customWindowsToEnterFullScreenForWindow:onScreen:](customwindowstoenterfullscreen%28for_on_%29.md): Called when the window is about to enter full-screen mode.
- [window:startCustomAnimationToEnterFullScreenWithDuration:](window%28__startcustomanimationtoenterfullscreenwithduration_%29.md): This method is called to start the window animation into full-screen mode, including transitioning to a new space.
- [window:startCustomAnimationToEnterFullScreenOnScreen:withDuration:](window%28__startcustomanimationtoenterfullscreenon_withduration_%29.md): This method is called to start the window animation into full-screen mode, including transitioning to a new space.
- [windowDidFailToEnterFullScreen:](windowdidfailtoenterfullscreen%28__%29.md): Called if the window failed to enter full-screen mode.
- [window:startCustomAnimationToExitFullScreenWithDuration:](window%28__startcustomanimationtoexitfullscreenwithduration_%29.md): This method is called to start the window animation out of full-screen mode, including transitioning back to the desktop space.
- [windowDidFailToExitFullScreen:](windowdidfailtoexitfullscreen%28__%29.md): Called if the window failed to exit full-screen mode.
