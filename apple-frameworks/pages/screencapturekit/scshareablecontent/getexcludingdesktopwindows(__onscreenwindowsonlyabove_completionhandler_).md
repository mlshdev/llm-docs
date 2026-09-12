> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scshareablecontent/getexcludingdesktopwindows(_:onscreenwindowsonlyabove:completionhandler:)](https://developer.apple.com/documentation/screencapturekit/scshareablecontent/getexcludingdesktopwindows(_:onscreenwindowsonlyabove:completionhandler:))

# getExcludingDesktopWindows(\_:onScreenWindowsOnlyAbove:completionHandler:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

Retrieves the displays, apps, and windows that are in front of the specified window.

## Declaration

```swift
class func getExcludingDesktopWindows(_ excludeDesktopWindows: Bool, onScreenWindowsOnlyAbove window: SCWindow, completionHandler: @escaping @Sendable (SCShareableContent?, (any Error)?) -> Void)
```

```swift
class func excludingDesktopWindows(_ excludeDesktopWindows: Bool, onScreenWindowsOnlyAbove window: SCWindow) async throws -> SCShareableContent
```

## Parameters

- `excludeDesktopWindows`: A Boolean value that indicates whether to exclude desktop windows like Finder, Dock, and Desktop from the set of shareable content.
- `window`: The window above which to retrieve shareable content.
- `completionHandler`: A callback the system invokes with the shareable content, or an error if a failure occurs.

<a id="discussion"></a>

## Discussion

Use this method to retrieve the onscreen content matching your filtering criteria. If the call is successful, the system passes an [SCShareableContent](../scshareablecontent.md) instance to the completion handler; otherwise, it returns an error that describes the failure.

## See Also

### Retrieving shareable content

- [getWithCompletionHandler(\_:)](getwithcompletionhandler%28__%29.md): Retrieves the displays, apps, and windows that your app can capture.
- [getExcludingDesktopWindows(\_:onScreenWindowsOnly:completionHandler:)](getexcludingdesktopwindows%28__onscreenwindowsonly_completionhandler_%29.md): Retrieves the displays, apps, and windows that match your criteria.
- [getExcludingDesktopWindows(\_:onScreenWindowsOnlyBelow:completionHandler:)](getexcludingdesktopwindows%28__onscreenwindowsonlybelow_completionhandler_%29.md): Retrieves the displays, apps, and windows that are behind the specified window.
- [info(for:)](info%28for_%29.md): Retrieves any available sharable content information that matches the provided filter.

# getShareableContentExcludingDesktopWindows:onScreenWindowsOnlyAboveWindow:completionHandler: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

Retrieves the displays, apps, and windows that are in front of the specified window.

## Declaration

```objectivec
+ (void) getShareableContentExcludingDesktopWindows:(BOOL) excludeDesktopWindows onScreenWindowsOnlyAboveWindow:(SCWindow *) window completionHandler:(void (^)(SCShareableContent *shareableContent, NSError *error)) completionHandler;
```

## Parameters

- `excludeDesktopWindows`: A Boolean value that indicates whether to exclude desktop windows like Finder, Dock, and Desktop from the set of shareable content.
- `window`: The window above which to retrieve shareable content.
- `completionHandler`: A callback the system invokes with the shareable content, or an error if a failure occurs.

<a id="discussion"></a>

## Discussion

Use this method to retrieve the onscreen content matching your filtering criteria. If the call is successful, the system passes an [SCShareableContent](../scshareablecontent.md) instance to the completion handler; otherwise, it returns an error that describes the failure.

## See Also

### Retrieving shareable content

- [getShareableContentWithCompletionHandler:](getwithcompletionhandler%28__%29.md): Retrieves the displays, apps, and windows that your app can capture.
- [getShareableContentExcludingDesktopWindows:onScreenWindowsOnly:completionHandler:](getexcludingdesktopwindows%28__onscreenwindowsonly_completionhandler_%29.md): Retrieves the displays, apps, and windows that match your criteria.
- [getShareableContentExcludingDesktopWindows:onScreenWindowsOnlyBelowWindow:completionHandler:](getexcludingdesktopwindows%28__onscreenwindowsonlybelow_completionhandler_%29.md): Retrieves the displays, apps, and windows that are behind the specified window.
- [infoForFilter:](info%28for_%29.md): Retrieves any available sharable content information that matches the provided filter.
