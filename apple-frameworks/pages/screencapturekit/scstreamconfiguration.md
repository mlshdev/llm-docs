> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamconfiguration](https://developer.apple.com/documentation/screencapturekit/scstreamconfiguration)

# SCStreamConfiguration (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

An instance that provides the output configuration for a stream.

## Declaration

```swift
class SCStreamConfiguration
```

<a id="overview"></a>

## Overview

Creating an instance of this class provides a default configuration for a stream. Only configure its properties if you need to customize the output.

## Topics

### Specifying dimensions

- [width](scstreamconfiguration/width.md): The width of the output.
- [height](scstreamconfiguration/height.md): The height of the output.
- [scalesToFit](scstreamconfiguration/scalestofit.md): A Boolean value that indicates whether to scale the output to fit the configured width and height.
- [sourceRect](scstreamconfiguration/sourcerect.md): A rectangle that specifies the source area to capture.
- [destinationRect](scstreamconfiguration/destinationrect.md): A rectangle that specifies a destination into which to write the output.
- [preservesAspectRatio](scstreamconfiguration/preservesaspectratio.md): A Boolean value that determines if the stream preserves aspect ratio.

### Configuring colors

- [pixelFormat](scstreamconfiguration/pixelformat.md): A pixel format for sample buffers that a stream outputs.
- [colorMatrix](scstreamconfiguration/colormatrix.md): A color matrix to apply to the output surface.
- [colorSpaceName](scstreamconfiguration/colorspacename.md): A color space to use for the output buffer.
- [backgroundColor](scstreamconfiguration/backgroundcolor.md): A background color for the output.

### Configuring captured elements

- [showsCursor](scstreamconfiguration/showscursor.md): A Boolean value that determines whether the cursor is visible in the stream.
- [shouldBeOpaque](scstreamconfiguration/shouldbeopaque.md): A Boolean value that indicates if semitransparent content presents as opaque.
- [capturesShadowsOnly](scstreamconfiguration/capturesshadowsonly.md): A Boolean value that indicates if the stream only captures shadows.
- [ignoreShadowsDisplay](scstreamconfiguration/ignoreshadowsdisplay.md): A Boolean value that indicates if the stream ignores the capturing of window shadows when streaming in display style.
- [ignoreShadowsSingleWindow](scstreamconfiguration/ignoreshadowssinglewindow.md): A Boolean value that indicates if the stream ignores the capturing of window shadows when streaming in window style.
- [ignoreGlobalClipDisplay](scstreamconfiguration/ignoreglobalclipdisplay.md): A Boolean value that indicates if the stream ignores content clipped past the edge of a display, when streaming in display style.
- [ignoreGlobalClipSingleWindow](scstreamconfiguration/ignoreglobalclipsinglewindow.md): A Boolean value that indicates if the stream ignores content clipped past the edge of a display, when streaming in window style.

### Configuring captured frames

- [queueDepth](scstreamconfiguration/queuedepth.md): The maximum number of frames for the queue to store.
- [minimumFrameInterval](scstreamconfiguration/minimumframeinterval.md): The desired minimum time between frame updates, in seconds.
- [captureResolution](scstreamconfiguration/captureresolution.md): The resolution at which to capture source content.
- [SCCaptureResolutionType](sccaptureresolutiontype.md): Available resolutions for content capture.

### Configuring audio

- [capturesAudio](scstreamconfiguration/capturesaudio.md): A Boolean value that indicates whether to capture audio.
- [sampleRate](scstreamconfiguration/samplerate.md): The sample rate for audio capture.
- [channelCount](scstreamconfiguration/channelcount.md): The number of audio channels to capture.
- [excludesCurrentProcessAudio](scstreamconfiguration/excludescurrentprocessaudio.md): A Boolean value that indicates whether to exclude audio from your app during capture.

### Identifying a stream

- [streamName](scstreamconfiguration/streamname.md): A name that you provide for identifying the stream.

### Notifying presenters

- [presenterOverlayPrivacyAlertSetting](scstreamconfiguration/presenteroverlayprivacyalertsetting.md): A value indicating if alerts appear to presenters while using Presenter Overlay.
- [SCPresenterOverlayAlertSetting](scpresenteroverlayalertsetting.md): Configures how to present streaming notifications to a streamer of Presenter Overlay.

### Enumerations

- [SCCaptureDynamicRange](sccapturedynamicrange.md): Specifies whether the captured screen output is standard or high dynamic range.
- [SCStreamConfiguration.Preset](scstreamconfiguration/preset.md)

### Initializers

- [init(preset:)](scstreamconfiguration/init%28preset_%29.md)

### Instance Properties

- [captureDynamicRange](scstreamconfiguration/capturedynamicrange.md)
- [captureMicrophone](scstreamconfiguration/capturemicrophone.md)
- [includeChildWindows](scstreamconfiguration/includechildwindows.md)
- [microphoneCaptureDeviceID](scstreamconfiguration/microphonecapturedeviceid.md)
- [showMouseClicks](scstreamconfiguration/showmouseclicks.md)

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
- [SCContentFilter](sccontentfilter.md): An instance that filters the content a stream captures.
- [SCStreamDelegate](scstreamdelegate.md): A delegate protocol your app implements to respond to stream events.
- [SCScreenshotManager](scscreenshotmanager.md): An instance for the capture of single frames from a stream.
- [SCScreenshotConfiguration](scscreenshotconfiguration.md): An object that contains screenshot properties such as output width, height, and image quality specifications.
- [SCScreenshotOutput](scscreenshotoutput.md): An object that contains all images requested by the client.
- [SCVideoEffectOutput](scvideoeffectoutput.md)

# SCStreamConfiguration (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

An instance that provides the output configuration for a stream.

## Declaration

```objectivec
@interface SCStreamConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Creating an instance of this class provides a default configuration for a stream. Only configure its properties if you need to customize the output.

## Topics

### Specifying dimensions

- [width](scstreamconfiguration/width.md): The width of the output.
- [height](scstreamconfiguration/height.md): The height of the output.
- [scalesToFit](scstreamconfiguration/scalestofit.md): A Boolean value that indicates whether to scale the output to fit the configured width and height.
- [sourceRect](scstreamconfiguration/sourcerect.md): A rectangle that specifies the source area to capture.
- [destinationRect](scstreamconfiguration/destinationrect.md): A rectangle that specifies a destination into which to write the output.
- [preservesAspectRatio](scstreamconfiguration/preservesaspectratio.md): A Boolean value that determines if the stream preserves aspect ratio.

### Configuring colors

- [pixelFormat](scstreamconfiguration/pixelformat.md): A pixel format for sample buffers that a stream outputs.
- [colorMatrix](scstreamconfiguration/colormatrix.md): A color matrix to apply to the output surface.
- [colorSpaceName](scstreamconfiguration/colorspacename.md): A color space to use for the output buffer.
- [backgroundColor](scstreamconfiguration/backgroundcolor.md): A background color for the output.

### Configuring captured elements

- [showsCursor](scstreamconfiguration/showscursor.md): A Boolean value that determines whether the cursor is visible in the stream.
- [shouldBeOpaque](scstreamconfiguration/shouldbeopaque.md): A Boolean value that indicates if semitransparent content presents as opaque.
- [capturesShadowsOnly](scstreamconfiguration/capturesshadowsonly.md): A Boolean value that indicates if the stream only captures shadows.
- [ignoreShadowsDisplay](scstreamconfiguration/ignoreshadowsdisplay.md): A Boolean value that indicates if the stream ignores the capturing of window shadows when streaming in display style.
- [ignoreShadowsSingleWindow](scstreamconfiguration/ignoreshadowssinglewindow.md): A Boolean value that indicates if the stream ignores the capturing of window shadows when streaming in window style.
- [ignoreGlobalClipDisplay](scstreamconfiguration/ignoreglobalclipdisplay.md): A Boolean value that indicates if the stream ignores content clipped past the edge of a display, when streaming in display style.
- [ignoreGlobalClipSingleWindow](scstreamconfiguration/ignoreglobalclipsinglewindow.md): A Boolean value that indicates if the stream ignores content clipped past the edge of a display, when streaming in window style.

### Configuring captured frames

- [queueDepth](scstreamconfiguration/queuedepth.md): The maximum number of frames for the queue to store.
- [minimumFrameInterval](scstreamconfiguration/minimumframeinterval.md): The desired minimum time between frame updates, in seconds.
- [captureResolution](scstreamconfiguration/captureresolution.md): The resolution at which to capture source content.
- [SCCaptureResolutionType](sccaptureresolutiontype.md): Available resolutions for content capture.

### Configuring audio

- [capturesAudio](scstreamconfiguration/capturesaudio.md): A Boolean value that indicates whether to capture audio.
- [sampleRate](scstreamconfiguration/samplerate.md): The sample rate for audio capture.
- [channelCount](scstreamconfiguration/channelcount.md): The number of audio channels to capture.
- [excludesCurrentProcessAudio](scstreamconfiguration/excludescurrentprocessaudio.md): A Boolean value that indicates whether to exclude audio from your app during capture.

### Identifying a stream

- [streamName](scstreamconfiguration/streamname.md): A name that you provide for identifying the stream.

### Notifying presenters

- [presenterOverlayPrivacyAlertSetting](scstreamconfiguration/presenteroverlayprivacyalertsetting.md): A value indicating if alerts appear to presenters while using Presenter Overlay.
- [SCPresenterOverlayAlertSetting](scpresenteroverlayalertsetting.md): Configures how to present streaming notifications to a streamer of Presenter Overlay.

### Enumerations

- [SCCaptureDynamicRange](sccapturedynamicrange.md): Specifies whether the captured screen output is standard or high dynamic range.
- [SCStreamConfigurationPreset](scstreamconfiguration/preset.md)

### Instance Properties

- [captureDynamicRange](scstreamconfiguration/capturedynamicrange.md)
- [captureMicrophone](scstreamconfiguration/capturemicrophone.md)
- [includeChildWindows](scstreamconfiguration/includechildwindows.md)
- [microphoneCaptureDeviceID](scstreamconfiguration/microphonecapturedeviceid.md)
- [showMouseClicks](scstreamconfiguration/showmouseclicks.md)

### Type Methods

- [streamConfigurationWithPreset:](scstreamconfiguration/init%28preset_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Content capture

- [SCStream](scstream.md): An instance that represents a stream of shareable content.
- [SCContentFilter](sccontentfilter.md): An instance that filters the content a stream captures.
- [SCStreamDelegate](scstreamdelegate.md): A delegate protocol your app implements to respond to stream events.
- [SCScreenshotManager](scscreenshotmanager.md): An instance for the capture of single frames from a stream.
- [SCScreenshotConfiguration](scscreenshotconfiguration.md): An object that contains screenshot properties such as output width, height, and image quality specifications.
- [SCScreenshotOutput](scscreenshotoutput.md): An object that contains all images requested by the client.
- [SCVideoEffectOutput](scvideoeffectoutput.md)
