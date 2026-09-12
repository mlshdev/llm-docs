> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scshareablecontent/getexcludingdesktopwindows(_:onscreenwindowsonly:completionhandler:)](https://developer.apple.com/documentation/screencapturekit/scshareablecontent/getexcludingdesktopwindows(_:onscreenwindowsonly:completionhandler:))

# getExcludingDesktopWindows(\_:onScreenWindowsOnly:completionHandler:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

Retrieves the displays, apps, and windows that match your criteria.

## Declaration

```swift
class func getExcludingDesktopWindows(_ excludeDesktopWindows: Bool, onScreenWindowsOnly: Bool, completionHandler: @escaping @Sendable (SCShareableContent?, (any Error)?) -> Void)
```

```swift
class func excludingDesktopWindows(_ excludeDesktopWindows: Bool, onScreenWindowsOnly: Bool) async throws -> SCShareableContent
```

## Parameters

- `excludeDesktopWindows`: A Boolean value that indicates whether to exclude desktop windows like Finder, Dock, and Desktop from the set of shareable content.
- `onScreenWindowsOnly`: A Boolean value that indicates whether to include only onscreen windows in the set of shareable content.
- `completionHandler`: A callback the system invokes with the shareable content, or an error if a failure occurs.

<a id="discussion"></a>

## Discussion

Use this method to retrieve the onscreen content matching your filtering criteria. If the call is successful, the system passes an [SCShareableContent](../scshareablecontent.md) instance to the completion handler; otherwise, it returns an error that describes the failure.

## See Also

### Retrieving shareable content

- [getWithCompletionHandler(\_:)](getwithcompletionhandler%28__%29.md): Retrieves the displays, apps, and windows that your app can capture.
- [getExcludingDesktopWindows(\_:onScreenWindowsOnlyAbove:completionHandler:)](getexcludingdesktopwindows%28__onscreenwindowsonlyabove_completionhandler_%29.md): Retrieves the displays, apps, and windows that are in front of the specified window.
- [getExcludingDesktopWindows(\_:onScreenWindowsOnlyBelow:completionHandler:)](getexcludingdesktopwindows%28__onscreenwindowsonlybelow_completionhandler_%29.md): Retrieves the displays, apps, and windows that are behind the specified window.
- [info(for:)](info%28for_%29.md): Retrieves any available sharable content information that matches the provided filter.

# getShareableContentExcludingDesktopWindows:onScreenWindowsOnly:completionHandler: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

Retrieves the displays, apps, and windows that match your criteria.

## Declaration

```objectivec
+ (void) getShareableContentExcludingDesktopWindows:(BOOL) excludeDesktopWindows onScreenWindowsOnly:(BOOL) onScreenWindowsOnly completionHandler:(void (^)(SCShareableContent *shareableContent, NSError *error)) completionHandler;
```

## Parameters

- `excludeDesktopWindows`: A Boolean value that indicates whether to exclude desktop windows like Finder, Dock, and Desktop from the set of shareable content.
- `onScreenWindowsOnly`: A Boolean value that indicates whether to include only onscreen windows in the set of shareable content.
- `completionHandler`: A callback the system invokes with the shareable content, or an error if a failure occurs.

<a id="discussion"></a>

## Discussion

Use this method to retrieve the onscreen content matching your filtering criteria. If the call is successful, the system passes an [SCShareableContent](../scshareablecontent.md) instance to the completion handler; otherwise, it returns an error that describes the failure.

## See Also

### Retrieving shareable content

- [getShareableContentWithCompletionHandler:](getwithcompletionhandler%28__%29.md): Retrieves the displays, apps, and windows that your app can capture.
- [getShareableContentExcludingDesktopWindows:onScreenWindowsOnlyAboveWindow:completionHandler:](getexcludingdesktopwindows%28__onscreenwindowsonlyabove_completionhandler_%29.md): Retrieves the displays, apps, and windows that are in front of the specified window.
- [getShareableContentExcludingDesktopWindows:onScreenWindowsOnlyBelowWindow:completionHandler:](getexcludingdesktopwindows%28__onscreenwindowsonlybelow_completionhandler_%29.md): Retrieves the displays, apps, and windows that are behind the specified window.
- [infoForFilter:](info%28for_%29.md): Retrieves any available sharable content information that matches the provided filter.
