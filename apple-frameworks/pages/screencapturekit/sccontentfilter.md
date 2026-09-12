> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentfilter](https://developer.apple.com/documentation/screencapturekit/sccontentfilter)

# SCContentFilter (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

An instance that filters the content a stream captures.

## Declaration

```swift
class SCContentFilter
```

<a id="overview"></a>

## Overview

Use a content filter to limit an [SCStream](scstream.md) object’s output to only that matching your filter criteria. Retrieve the displays, apps, and windows that your app can capture from an instance of [SCShareableContent](scshareablecontent.md).

## Topics

### Creating a filter

- [init(desktopIndependentWindow:)](sccontentfilter/init%28desktopindependentwindow_%29.md): Creates a filter that captures only the specified window.
- [init(display:including:)](sccontentfilter/init%28display_including_%29.md): Creates a filter that captures only specific windows from a display.
- [init(display:excludingWindows:)](sccontentfilter/init%28display_excludingwindows_%29.md): Creates a filter that captures the contents of a display, excluding the specified windows.
- [init(display:including:exceptingWindows:)](sccontentfilter/init%28display_including_exceptingwindows_%29.md): Creates a filter that captures a display, including only windows of the specified apps.
- [init(display:excludingApplications:exceptingWindows:)](sccontentfilter/init%28display_excludingapplications_exceptingwindows_%29.md): Creates a filter that captures a display, excluding windows of the specified apps.

### Filter properties

- [contentRect](sccontentfilter/contentrect.md): The size and location of the content to filter, in screen points.
- [pointPixelScale](sccontentfilter/pointpixelscale.md): The scaling factor used to translate screen points into pixels.
- [streamType](sccontentfilter/streamtype.md): Deprecated. The type of the streaming content.
- [SCStreamType](scstreamtype.md): Deprecated. The display type of the presented stream.
- [style](sccontentfilter/style.md): The display style of the sharable content.

### Initializers

- [init(display:includingApplications:exceptingWindows:)](sccontentfilter/init%28display_includingapplications_exceptingwindows_%29.md)
- [init(display:includingWindows:)](sccontentfilter/init%28display_includingwindows_%29.md)

### Instance Properties

- [includeMenuBar](sccontentfilter/includemenubar.md)
- [includedApplications](sccontentfilter/includedapplications.md)
- [includedDisplays](sccontentfilter/includeddisplays.md)
- [includedWindows](sccontentfilter/includedwindows.md)
- [isCameraEnabled](sccontentfilter/iscameraenabled.md)
- [isMicrophoneEnabled](sccontentfilter/ismicrophoneenabled.md)

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

### Content capture

- [SCStream](scstream.md): An instance that represents a stream of shareable content.
- [SCStreamConfiguration](scstreamconfiguration.md): An instance that provides the output configuration for a stream.
- [SCStreamDelegate](scstreamdelegate.md): A delegate protocol your app implements to respond to stream events.
- [SCScreenshotManager](scscreenshotmanager.md): An instance for the capture of single frames from a stream.
- [SCScreenshotConfiguration](scscreenshotconfiguration.md): An object that contains screenshot properties such as output width, height, and image quality specifications.
- [SCScreenshotOutput](scscreenshotoutput.md): An object that contains all images requested by the client.
- [SCVideoEffectOutput](scvideoeffectoutput.md)

# SCContentFilter (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

An instance that filters the content a stream captures.

## Declaration

```objectivec
@interface SCContentFilter : NSObject
```

<a id="overview"></a>

## Overview

Use a content filter to limit an [SCStream](scstream.md) object’s output to only that matching your filter criteria. Retrieve the displays, apps, and windows that your app can capture from an instance of [SCShareableContent](scshareablecontent.md).

## Topics

### Creating a filter

- [initWithDesktopIndependentWindow:](sccontentfilter/init%28desktopindependentwindow_%29.md): Creates a filter that captures only the specified window.
- [initWithDisplay:includingWindows:](sccontentfilter/init%28display_including_%29.md): Creates a filter that captures only specific windows from a display.
- [initWithDisplay:excludingWindows:](sccontentfilter/init%28display_excludingwindows_%29.md): Creates a filter that captures the contents of a display, excluding the specified windows.
- [initWithDisplay:includingApplications:exceptingWindows:](sccontentfilter/init%28display_including_exceptingwindows_%29.md): Creates a filter that captures a display, including only windows of the specified apps.
- [initWithDisplay:excludingApplications:exceptingWindows:](sccontentfilter/init%28display_excludingapplications_exceptingwindows_%29.md): Creates a filter that captures a display, excluding windows of the specified apps.

### Filter properties

- [contentRect](sccontentfilter/contentrect.md): The size and location of the content to filter, in screen points.
- [pointPixelScale](sccontentfilter/pointpixelscale.md): The scaling factor used to translate screen points into pixels.
- [streamType](sccontentfilter/streamtype.md): Deprecated. The type of the streaming content.
- [SCStreamType](scstreamtype.md): Deprecated. The display type of the presented stream.
- [style](sccontentfilter/style.md): The display style of the sharable content.

### Instance Properties

- [includeMenuBar](sccontentfilter/includemenubar.md)
- [includedApplications](sccontentfilter/includedapplications.md)
- [includedDisplays](sccontentfilter/includeddisplays.md)
- [includedWindows](sccontentfilter/includedwindows.md)
- [cameraEnabled](sccontentfilter/iscameraenabled.md)
- [microphoneEnabled](sccontentfilter/ismicrophoneenabled.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Content capture

- [SCStream](scstream.md): An instance that represents a stream of shareable content.
- [SCStreamConfiguration](scstreamconfiguration.md): An instance that provides the output configuration for a stream.
- [SCStreamDelegate](scstreamdelegate.md): A delegate protocol your app implements to respond to stream events.
- [SCScreenshotManager](scscreenshotmanager.md): An instance for the capture of single frames from a stream.
- [SCScreenshotConfiguration](scscreenshotconfiguration.md): An object that contains screenshot properties such as output width, height, and image quality specifications.
- [SCScreenshotOutput](scscreenshotoutput.md): An object that contains all images requested by the client.
- [SCVideoEffectOutput](scvideoeffectoutput.md)
