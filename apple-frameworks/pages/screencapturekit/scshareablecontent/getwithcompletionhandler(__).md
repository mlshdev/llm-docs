> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scshareablecontent/getwithcompletionhandler(_:)](https://developer.apple.com/documentation/screencapturekit/scshareablecontent/getwithcompletionhandler(_:))

# getWithCompletionHandler(\_:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

Retrieves the displays, apps, and windows that your app can capture.

## Declaration

```swift
class func getWithCompletionHandler(_ completionHandler: @escaping @Sendable (SCShareableContent?, (any Error)?) -> Void)
```

```swift
class var current: SCShareableContent { get async throws }
```

## Parameters

- `completionHandler`: A callback the system invokes with the shareable content, or an error if a failure occurs.

<a id="discussion"></a>

## Discussion

Use this method to retrieve the onscreen content that your app can capture. If the call is successful, the system returns the shareable content to the completion handler; otherwise, it returns an error that describes the failure.

## See Also

### Retrieving shareable content

- [getExcludingDesktopWindows(\_:onScreenWindowsOnly:completionHandler:)](getexcludingdesktopwindows%28__onscreenwindowsonly_completionhandler_%29.md): Retrieves the displays, apps, and windows that match your criteria.
- [getExcludingDesktopWindows(\_:onScreenWindowsOnlyAbove:completionHandler:)](getexcludingdesktopwindows%28__onscreenwindowsonlyabove_completionhandler_%29.md): Retrieves the displays, apps, and windows that are in front of the specified window.
- [getExcludingDesktopWindows(\_:onScreenWindowsOnlyBelow:completionHandler:)](getexcludingdesktopwindows%28__onscreenwindowsonlybelow_completionhandler_%29.md): Retrieves the displays, apps, and windows that are behind the specified window.
- [info(for:)](info%28for_%29.md): Retrieves any available sharable content information that matches the provided filter.

# getShareableContentWithCompletionHandler: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

Retrieves the displays, apps, and windows that your app can capture.

## Declaration

```objectivec
+ (void) getShareableContentWithCompletionHandler:(void (^)(SCShareableContent *shareableContent, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A callback the system invokes with the shareable content, or an error if a failure occurs.

<a id="discussion"></a>

## Discussion

Use this method to retrieve the onscreen content that your app can capture. If the call is successful, the system returns the shareable content to the completion handler; otherwise, it returns an error that describes the failure.

## See Also

### Retrieving shareable content

- [getShareableContentExcludingDesktopWindows:onScreenWindowsOnly:completionHandler:](getexcludingdesktopwindows%28__onscreenwindowsonly_completionhandler_%29.md): Retrieves the displays, apps, and windows that match your criteria.
- [getShareableContentExcludingDesktopWindows:onScreenWindowsOnlyAboveWindow:completionHandler:](getexcludingdesktopwindows%28__onscreenwindowsonlyabove_completionhandler_%29.md): Retrieves the displays, apps, and windows that are in front of the specified window.
- [getShareableContentExcludingDesktopWindows:onScreenWindowsOnlyBelowWindow:completionHandler:](getexcludingdesktopwindows%28__onscreenwindowsonlybelow_completionhandler_%29.md): Retrieves the displays, apps, and windows that are behind the specified window.
- [infoForFilter:](info%28for_%29.md): Retrieves any available sharable content information that matches the provided filter.
