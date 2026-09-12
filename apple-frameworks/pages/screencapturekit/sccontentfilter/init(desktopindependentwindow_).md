> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentfilter/init(desktopindependentwindow:)](https://developer.apple.com/documentation/screencapturekit/sccontentfilter/init(desktopindependentwindow:))

# init(desktopIndependentWindow:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Initializer  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

Creates a filter that captures only the specified window.

## Declaration

```swift
init(desktopIndependentWindow window: SCWindow)
```

## Parameters

- `window`: A window to capture.

## See Also

### Creating a filter

- [init(display:including:)](init%28display_including_%29.md): Creates a filter that captures only specific windows from a display.
- [init(display:excludingWindows:)](init%28display_excludingwindows_%29.md): Creates a filter that captures the contents of a display, excluding the specified windows.
- [init(display:including:exceptingWindows:)](init%28display_including_exceptingwindows_%29.md): Creates a filter that captures a display, including only windows of the specified apps.
- [init(display:excludingApplications:exceptingWindows:)](init%28display_excludingapplications_exceptingwindows_%29.md): Creates a filter that captures a display, excluding windows of the specified apps.

# initWithDesktopIndependentWindow: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

Creates a filter that captures only the specified window.

## Declaration

```objectivec
- (instancetype) initWithDesktopIndependentWindow:(SCWindow *) window;
```

## Parameters

- `window`: A window to capture.

## See Also

### Creating a filter

- [initWithDisplay:includingWindows:](init%28display_including_%29.md): Creates a filter that captures only specific windows from a display.
- [initWithDisplay:excludingWindows:](init%28display_excludingwindows_%29.md): Creates a filter that captures the contents of a display, excluding the specified windows.
- [initWithDisplay:includingApplications:exceptingWindows:](init%28display_including_exceptingwindows_%29.md): Creates a filter that captures a display, including only windows of the specified apps.
- [initWithDisplay:excludingApplications:exceptingWindows:](init%28display_excludingapplications_exceptingwindows_%29.md): Creates a filter that captures a display, excluding windows of the specified apps.
