> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scshareablecontent](https://developer.apple.com/documentation/screencapturekit/scshareablecontent)

# SCShareableContent (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

An instance that represents a set of displays, apps, and windows that your app can capture.

## Declaration

```swift
class SCShareableContent
```

<a id="overview"></a>

## Overview

Use the [displays](scshareablecontent/displays.md), [windows](scshareablecontent/windows.md), and [applications](scshareablecontent/applications.md) properties to create a [SCContentFilter](sccontentfilter.md) object that specifies what display content to capture. You apply the filter to an instance of [SCStream](scstream.md) to limit its output to only the content matching your filter.

## Topics

### Retrieving shareable content

- [getWithCompletionHandler(\_:)](scshareablecontent/getwithcompletionhandler%28__%29.md): Retrieves the displays, apps, and windows that your app can capture.
- [getExcludingDesktopWindows(\_:onScreenWindowsOnly:completionHandler:)](scshareablecontent/getexcludingdesktopwindows%28__onscreenwindowsonly_completionhandler_%29.md): Retrieves the displays, apps, and windows that match your criteria.
- [getExcludingDesktopWindows(\_:onScreenWindowsOnlyAbove:completionHandler:)](scshareablecontent/getexcludingdesktopwindows%28__onscreenwindowsonlyabove_completionhandler_%29.md): Retrieves the displays, apps, and windows that are in front of the specified window.
- [getExcludingDesktopWindows(\_:onScreenWindowsOnlyBelow:completionHandler:)](scshareablecontent/getexcludingdesktopwindows%28__onscreenwindowsonlybelow_completionhandler_%29.md): Retrieves the displays, apps, and windows that are behind the specified window.
- [info(for:)](scshareablecontent/info%28for_%29.md): Retrieves any available sharable content information that matches the provided filter.

### Inspecting shareable content

- [windows](scshareablecontent/windows.md): The windows available for capture.
- [displays](scshareablecontent/displays.md): The displays available for capture.
- [applications](scshareablecontent/applications.md): The apps available for capture.

### Type Methods

- [getCurrentProcessShareableContent(completionHandler:)](scshareablecontent/getcurrentprocessshareablecontent%28completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Shareable content

- [SCShareableContentInfo](scshareablecontentinfo.md): An instance that provides information for the content in a given stream.
- [SCShareableContentStyle](scshareablecontentstyle.md): The style of content presented in a stream.
- [SCDisplay](scdisplay.md): An instance that represents a display device.
- [SCRunningApplication](scrunningapplication.md): An instance that represents an app running on a device.
- [SCWindow](scwindow.md): An instance that represents an onscreen window.

# SCShareableContent (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

An instance that represents a set of displays, apps, and windows that your app can capture.

## Declaration

```objectivec
@interface SCShareableContent : NSObject
```

<a id="overview"></a>

## Overview

Use the [displays](scshareablecontent/displays.md), [windows](scshareablecontent/windows.md), and [applications](scshareablecontent/applications.md) properties to create a [SCContentFilter](sccontentfilter.md) object that specifies what display content to capture. You apply the filter to an instance of [SCStream](scstream.md) to limit its output to only the content matching your filter.

## Topics

### Retrieving shareable content

- [getShareableContentWithCompletionHandler:](scshareablecontent/getwithcompletionhandler%28__%29.md): Retrieves the displays, apps, and windows that your app can capture.
- [getShareableContentExcludingDesktopWindows:onScreenWindowsOnly:completionHandler:](scshareablecontent/getexcludingdesktopwindows%28__onscreenwindowsonly_completionhandler_%29.md): Retrieves the displays, apps, and windows that match your criteria.
- [getShareableContentExcludingDesktopWindows:onScreenWindowsOnlyAboveWindow:completionHandler:](scshareablecontent/getexcludingdesktopwindows%28__onscreenwindowsonlyabove_completionhandler_%29.md): Retrieves the displays, apps, and windows that are in front of the specified window.
- [getShareableContentExcludingDesktopWindows:onScreenWindowsOnlyBelowWindow:completionHandler:](scshareablecontent/getexcludingdesktopwindows%28__onscreenwindowsonlybelow_completionhandler_%29.md): Retrieves the displays, apps, and windows that are behind the specified window.
- [infoForFilter:](scshareablecontent/info%28for_%29.md): Retrieves any available sharable content information that matches the provided filter.

### Inspecting shareable content

- [windows](scshareablecontent/windows.md): The windows available for capture.
- [displays](scshareablecontent/displays.md): The displays available for capture.
- [applications](scshareablecontent/applications.md): The apps available for capture.

### Type Methods

- [getCurrentProcessShareableContentWithCompletionHandler:](scshareablecontent/getcurrentprocessshareablecontent%28completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Shareable content

- [SCShareableContentInfo](scshareablecontentinfo.md): An instance that provides information for the content in a given stream.
- [SCShareableContentStyle](scshareablecontentstyle.md): The style of content presented in a stream.
- [SCDisplay](scdisplay.md): An instance that represents a display device.
- [SCRunningApplication](scrunningapplication.md): An instance that represents an app running on a device.
- [SCWindow](scwindow.md): An instance that represents an onscreen window.
