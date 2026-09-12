> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentfilter/init(display:including:exceptingwindows:)](https://developer.apple.com/documentation/screencapturekit/sccontentfilter/init(display:including:exceptingwindows:))

# init(display:including:exceptingWindows:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Initializer  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

Creates a filter that captures a display, including only windows of the specified apps.

## Declaration

```swift
init(display: SCDisplay, including applications: [SCRunningApplication], exceptingWindows: [SCWindow])
```

## Parameters

- `display`: A display to capture.
- `applications`: An array of apps with windows to capture.
- `exceptingWindows`: An array of windows that are exceptions to the previous rules.

<a id="discussion"></a>

## Discussion

The initializer arguments provide a three-stage filter that gives you fine-grained control over the output:

1. Specify a display to capture. If you don’t specify additional filter criteria, the stream includes all content for a display.
2. Specify one or more apps to capture only the windows that they own.
3. Specify one or more windows that are exceptions to the previous rules. If the previous rules include a window, specifying it as an exception excludes it from the output. Likewise, if the previous rules exclude a window, specifying it as an exception includes it in the output.

## See Also

### Creating a filter

- [init(desktopIndependentWindow:)](init%28desktopindependentwindow_%29.md): Creates a filter that captures only the specified window.
- [init(display:including:)](init%28display_including_%29.md): Creates a filter that captures only specific windows from a display.
- [init(display:excludingWindows:)](init%28display_excludingwindows_%29.md): Creates a filter that captures the contents of a display, excluding the specified windows.
- [init(display:excludingApplications:exceptingWindows:)](init%28display_excludingapplications_exceptingwindows_%29.md): Creates a filter that captures a display, excluding windows of the specified apps.

# initWithDisplay:includingApplications:exceptingWindows: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

Creates a filter that captures a display, including only windows of the specified apps.

## Declaration

```objectivec
- (instancetype) initWithDisplay:(SCDisplay *) display includingApplications:(NSArray<SCRunningApplication *> *) applications exceptingWindows:(NSArray<SCWindow *> *) exceptingWindows;
```

## Parameters

- `display`: A display to capture.
- `applications`: An array of apps with windows to capture.
- `exceptingWindows`: An array of windows that are exceptions to the previous rules.

<a id="discussion"></a>

## Discussion

The initializer arguments provide a three-stage filter that gives you fine-grained control over the output:

1. Specify a display to capture. If you don’t specify additional filter criteria, the stream includes all content for a display.
2. Specify one or more apps to capture only the windows that they own.
3. Specify one or more windows that are exceptions to the previous rules. If the previous rules include a window, specifying it as an exception excludes it from the output. Likewise, if the previous rules exclude a window, specifying it as an exception includes it in the output.

## See Also

### Creating a filter

- [initWithDesktopIndependentWindow:](init%28desktopindependentwindow_%29.md): Creates a filter that captures only the specified window.
- [initWithDisplay:includingWindows:](init%28display_including_%29.md): Creates a filter that captures only specific windows from a display.
- [initWithDisplay:excludingWindows:](init%28display_excludingwindows_%29.md): Creates a filter that captures the contents of a display, excluding the specified windows.
- [initWithDisplay:excludingApplications:exceptingWindows:](init%28display_excludingapplications_exceptingwindows_%29.md): Creates a filter that captures a display, excluding windows of the specified apps.
