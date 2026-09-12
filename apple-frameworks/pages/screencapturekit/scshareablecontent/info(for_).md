> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scshareablecontent/info(for:)](https://developer.apple.com/documentation/screencapturekit/scshareablecontent/info(for:))

# info(for:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

Retrieves any available sharable content information that matches the provided filter.

## Declaration

```swift
class func info(for filter: SCContentFilter) -> SCShareableContentInfo
```

## Parameters

- `filter`: The filter to match current sharable content against.

<a id="return-value"></a>

## Return Value

The sharable content matching the filter, or `nil` if none is found.

## See Also

### Retrieving shareable content

- [getWithCompletionHandler(\_:)](getwithcompletionhandler%28__%29.md): Retrieves the displays, apps, and windows that your app can capture.
- [getExcludingDesktopWindows(\_:onScreenWindowsOnly:completionHandler:)](getexcludingdesktopwindows%28__onscreenwindowsonly_completionhandler_%29.md): Retrieves the displays, apps, and windows that match your criteria.
- [getExcludingDesktopWindows(\_:onScreenWindowsOnlyAbove:completionHandler:)](getexcludingdesktopwindows%28__onscreenwindowsonlyabove_completionhandler_%29.md): Retrieves the displays, apps, and windows that are in front of the specified window.
- [getExcludingDesktopWindows(\_:onScreenWindowsOnlyBelow:completionHandler:)](getexcludingdesktopwindows%28__onscreenwindowsonlybelow_completionhandler_%29.md): Retrieves the displays, apps, and windows that are behind the specified window.

# infoForFilter: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

Retrieves any available sharable content information that matches the provided filter.

## Declaration

```objectivec
+ (SCShareableContentInfo *) infoForFilter:(SCContentFilter *) filter;
```

## Parameters

- `filter`: The filter to match current sharable content against.

<a id="return-value"></a>

## Return Value

The sharable content matching the filter, or `nil` if none is found.

## See Also

### Retrieving shareable content

- [getShareableContentWithCompletionHandler:](getwithcompletionhandler%28__%29.md): Retrieves the displays, apps, and windows that your app can capture.
- [getShareableContentExcludingDesktopWindows:onScreenWindowsOnly:completionHandler:](getexcludingdesktopwindows%28__onscreenwindowsonly_completionhandler_%29.md): Retrieves the displays, apps, and windows that match your criteria.
- [getShareableContentExcludingDesktopWindows:onScreenWindowsOnlyAboveWindow:completionHandler:](getexcludingdesktopwindows%28__onscreenwindowsonlyabove_completionhandler_%29.md): Retrieves the displays, apps, and windows that are in front of the specified window.
- [getShareableContentExcludingDesktopWindows:onScreenWindowsOnlyBelowWindow:completionHandler:](getexcludingdesktopwindows%28__onscreenwindowsonlybelow_completionhandler_%29.md): Retrieves the displays, apps, and windows that are behind the specified window.
