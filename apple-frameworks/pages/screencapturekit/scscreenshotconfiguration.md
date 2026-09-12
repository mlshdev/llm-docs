> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scscreenshotconfiguration](https://developer.apple.com/documentation/screencapturekit/scscreenshotconfiguration)

# SCScreenshotConfiguration (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

An object that contains screenshot properties such as output width, height, and image quality specifications.

## Declaration

```swift
class SCScreenshotConfiguration
```

<a id="overview"></a>

## Overview

`SCScreenshotConfiguration` provides a default image capture configuration for [SCScreenshotManager](scscreenshotmanager.md). Only configure its properties if you need to customize the output. Additional options for customization include dynamic range settings, image reproduction optimizations, and ignoring user interface elements.

## Topics

### Instance Properties

- [contentType](scscreenshotconfiguration/contenttype.md): A uniform type identifier that specifies the screenshot’s file format; HEIC, JPEG, or PNG.
- [destinationRect](scscreenshotconfiguration/destinationrect.md): A rectangle that specifies whether to output screenshots in a subset of the output image.
- [displayIntent](scscreenshotconfiguration/displayintent-swift.property.md): Specifies whether the screen capture uses attributes of the local or canonical display.
- [dynamicRange](scscreenshotconfiguration/dynamicrange-swift.property.md): Specifies the type of image returned to the client; standard dynamic range, high dynamic range, or both.
- [fileURL](scscreenshotconfiguration/fileurl.md): Specifies the URL where the screenshot process saves the output.
- [height](scscreenshotconfiguration/height.md): An integer value that specifies the output height, measured in pixels.
- [ignoreClipping](scscreenshotconfiguration/ignoreclipping.md): A Boolean value that specifies whether to ignore framing on windows when using content filters.
- [ignoreShadows](scscreenshotconfiguration/ignoreshadows.md): A Boolean value that specifies whether to ignore framing on windows.
- [includeChildWindows](scscreenshotconfiguration/includechildwindows.md): A Boolean that specifies whether the screenshot captures subwindows of the included apps and windows.
- [showsCursor](scscreenshotconfiguration/showscursor.md): A Boolean value that specifies whether the pointer appears in the screenshot.
- [sourceRect](scscreenshotconfiguration/sourcerect.md): A rectangle that specifies that the screenshot only samples a subset of the frame input.
- [width](scscreenshotconfiguration/width.md): An integer value that specifies the output width in pixels.

### Type Properties

- [supportedContentTypes](scscreenshotconfiguration/supportedcontenttypes.md): An array of uniform type identifiers that correspond to file formats the output image supports.

### Enumerations

- [SCScreenshotConfiguration.DisplayIntent](scscreenshotconfiguration/displayintent-swift.enum.md): A value that specifies the type of display a screenshot rendering optimizes for.
- [SCScreenshotConfiguration.DynamicRange](scscreenshotconfiguration/dynamicrange-swift.enum.md): Specifies the type of images returned to the client; standard dynamic range, high dynamic range, or both.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Content capture

- [SCStream](scstream.md): An instance that represents a stream of shareable content.
- [SCStreamConfiguration](scstreamconfiguration.md): An instance that provides the output configuration for a stream.
- [SCContentFilter](sccontentfilter.md): An instance that filters the content a stream captures.
- [SCStreamDelegate](scstreamdelegate.md): A delegate protocol your app implements to respond to stream events.
- [SCScreenshotManager](scscreenshotmanager.md): An instance for the capture of single frames from a stream.
- [SCScreenshotOutput](scscreenshotoutput.md): An object that contains all images requested by the client.
- [SCVideoEffectOutput](scvideoeffectoutput.md)

# SCScreenshotConfiguration (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

An object that contains screenshot properties such as output width, height, and image quality specifications.

## Declaration

```objectivec
@interface SCScreenshotConfiguration : NSObject
```

<a id="overview"></a>

## Overview

`SCScreenshotConfiguration` provides a default image capture configuration for [SCScreenshotManager](scscreenshotmanager.md). Only configure its properties if you need to customize the output. Additional options for customization include dynamic range settings, image reproduction optimizations, and ignoring user interface elements.

## Topics

### Instance Properties

- [contentType](scscreenshotconfiguration/contenttype.md): A uniform type identifier that specifies the screenshot’s file format; HEIC, JPEG, or PNG.
- [destinationRect](scscreenshotconfiguration/destinationrect.md): A rectangle that specifies whether to output screenshots in a subset of the output image.
- [displayIntent](scscreenshotconfiguration/displayintent-swift.property.md): Specifies whether the screen capture uses attributes of the local or canonical display.
- [dynamicRange](scscreenshotconfiguration/dynamicrange-swift.property.md): Specifies the type of image returned to the client; standard dynamic range, high dynamic range, or both.
- [fileURL](scscreenshotconfiguration/fileurl.md): Specifies the URL where the screenshot process saves the output.
- [height](scscreenshotconfiguration/height.md): An integer value that specifies the output height, measured in pixels.
- [ignoreClipping](scscreenshotconfiguration/ignoreclipping.md): A Boolean value that specifies whether to ignore framing on windows when using content filters.
- [ignoreShadows](scscreenshotconfiguration/ignoreshadows.md): A Boolean value that specifies whether to ignore framing on windows.
- [includeChildWindows](scscreenshotconfiguration/includechildwindows.md): A Boolean that specifies whether the screenshot captures subwindows of the included apps and windows.
- [showsCursor](scscreenshotconfiguration/showscursor.md): A Boolean value that specifies whether the pointer appears in the screenshot.
- [sourceRect](scscreenshotconfiguration/sourcerect.md): A rectangle that specifies that the screenshot only samples a subset of the frame input.
- [width](scscreenshotconfiguration/width.md): An integer value that specifies the output width in pixels.

### Type Properties

- [supportedContentTypes](scscreenshotconfiguration/supportedcontenttypes.md): An array of uniform type identifiers that correspond to file formats the output image supports.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Content capture

- [SCStream](scstream.md): An instance that represents a stream of shareable content.
- [SCStreamConfiguration](scstreamconfiguration.md): An instance that provides the output configuration for a stream.
- [SCContentFilter](sccontentfilter.md): An instance that filters the content a stream captures.
- [SCStreamDelegate](scstreamdelegate.md): A delegate protocol your app implements to respond to stream events.
- [SCScreenshotManager](scscreenshotmanager.md): An instance for the capture of single frames from a stream.
- [SCScreenshotOutput](scscreenshotoutput.md): An object that contains all images requested by the client.
- [SCVideoEffectOutput](scvideoeffectoutput.md)
