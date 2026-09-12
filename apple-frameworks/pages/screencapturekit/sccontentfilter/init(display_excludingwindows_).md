> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentfilter/init(display:excludingwindows:)](https://developer.apple.com/documentation/screencapturekit/sccontentfilter/init(display:excludingwindows:))

# init(display:excludingWindows:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Initializer  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

Creates a filter that captures the contents of a display, excluding the specified windows.

## Declaration

```swift
init(display: SCDisplay, excludingWindows excluded: [SCWindow])
```

## Parameters

- `display`: A display to capture.
- `excluded`: An array of windows to exclude from the output.

## See Also

### Creating a filter

- [init(desktopIndependentWindow:)](init%28desktopindependentwindow_%29.md): Creates a filter that captures only the specified window.
- [init(display:including:)](init%28display_including_%29.md): Creates a filter that captures only specific windows from a display.
- [init(display:including:exceptingWindows:)](init%28display_including_exceptingwindows_%29.md): Creates a filter that captures a display, including only windows of the specified apps.
- [init(display:excludingApplications:exceptingWindows:)](init%28display_excludingapplications_exceptingwindows_%29.md): Creates a filter that captures a display, excluding windows of the specified apps.

# initWithDisplay:excludingWindows: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

Creates a filter that captures the contents of a display, excluding the specified windows.

## Declaration

```objectivec
- (instancetype) initWithDisplay:(SCDisplay *) display excludingWindows:(NSArray<SCWindow *> *) excluded;
```

## Parameters

- `display`: A display to capture.
- `excluded`: An array of windows to exclude from the output.

## See Also

### Creating a filter

- [initWithDesktopIndependentWindow:](init%28desktopindependentwindow_%29.md): Creates a filter that captures only the specified window.
- [initWithDisplay:includingWindows:](init%28display_including_%29.md): Creates a filter that captures only specific windows from a display.
- [initWithDisplay:includingApplications:exceptingWindows:](init%28display_including_exceptingwindows_%29.md): Creates a filter that captures a display, including only windows of the specified apps.
- [initWithDisplay:excludingApplications:exceptingWindows:](init%28display_excludingapplications_exceptingwindows_%29.md): Creates a filter that captures a display, excluding windows of the specified apps.
