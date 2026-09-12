> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit](https://developer.apple.com/documentation/screencapturekit)

# ScreenCaptureKit (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Framework  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

Stream screen content and audio to your app with fine-grained control over what you capture.

<a id="overview"></a>

## Overview

Use ScreenCaptureKit to capture high-performance video and audio across iOS, iPadOS, macOS, tvOS, and visionOS. The framework gives you fine-grained control to select and stream only the content you want to capture, delivering media to your app as [CMSampleBuffer](coremedia/cmsamplebuffer.md) objects with the associated metadata.

> **Important**

> ScreenCaptureKit replaces ReplayKit for screen streaming and mirroring. A broadcast extension is no longer necessary.

Use [SCContentSharingPicker](screencapturekit/sccontentsharingpicker.md), the system screen-sharing control, as the recommended approach for letting people select content sources and manage active streams, rather than building your own selection UI. To capture content while your app is in the background, configure the appropriate [Configuring background execution modes](https://developer.apple.com/documentation/xcode/configuring-background-execution-modes) in the Signing & Capabilities pane in Xcode.

Request screen recording permission from the person before capturing content. In the Info pane of the Xcode target editor, add a `NSScreenCaptureUsageDescription` key with a description of why your app requires screen recording access.

> **Note**

> For related WWDC sessions, see [Meet ScreenCaptureKit](https://developer.apple.com/wwdc22/10156) (WWDC22 Session 10156), [Take ScreenCaptureKit to the next level](https://developer.apple.com/wwdc22/10155) (WWDC22 Session 10155), and [What’s new in ScreenCaptureKit](https://developer.apple.com/videos/play/wwdc2023/10136/) (WWDC23 Session 10136).

## Topics

### Essentials

- [ScreenCaptureKit updates](https://developer.apple.com/documentation/updates/screencapturekit): Learn about important changes to ScreenCaptureKit.
- [Persistent Content Capture](bundleresources/entitlements/com.apple.developer.persistent-content-capture.md): A Boolean value that indicates whether a Virtual Network Computing (VNC) app needs persistent access to screen capture.
- [Capturing screen content on iOS](screencapturekit/capturing-screen-content-on-ios.md): Record and share screen captures on iOS by presenting the system content-sharing picker.
- [Capturing screen content in macOS](screencapturekit/capturing-screen-content-in-macos.md): Stream desktop content like displays, apps, and windows by adopting screen capture in your app.

### Shareable content

- [SCShareableContent](screencapturekit/scshareablecontent.md): An instance that represents a set of displays, apps, and windows that your app can capture.
- [SCShareableContentInfo](screencapturekit/scshareablecontentinfo.md): An instance that provides information for the content in a given stream.
- [SCShareableContentStyle](screencapturekit/scshareablecontentstyle.md): The style of content presented in a stream.
- [SCDisplay](screencapturekit/scdisplay.md): An instance that represents a display device.
- [SCRunningApplication](screencapturekit/scrunningapplication.md): An instance that represents an app running on a device.
- [SCWindow](screencapturekit/scwindow.md): An instance that represents an onscreen window.

### Content capture

- [SCStream](screencapturekit/scstream.md): An instance that represents a stream of shareable content.
- [SCStreamConfiguration](screencapturekit/scstreamconfiguration.md): An instance that provides the output configuration for a stream.
- [SCContentFilter](screencapturekit/sccontentfilter.md): An instance that filters the content a stream captures.
- [SCStreamDelegate](screencapturekit/scstreamdelegate.md): A delegate protocol your app implements to respond to stream events.
- [SCScreenshotManager](screencapturekit/scscreenshotmanager.md): An instance for the capture of single frames from a stream.
- [SCScreenshotConfiguration](screencapturekit/scscreenshotconfiguration.md): An object that contains screenshot properties such as output width, height, and image quality specifications.
- [SCScreenshotOutput](screencapturekit/scscreenshotoutput.md): An object that contains all images requested by the client.
- [SCVideoEffectOutput](screencapturekit/scvideoeffectoutput.md)

### Output processing

- [SCStreamOutput](screencapturekit/scstreamoutput.md): A delegate protocol your app implements to receive capture stream output events.
- [SCStreamOutputType](screencapturekit/scstreamoutputtype.md): Constants that represent output types for a stream frame.
- [SCStreamFrameInfo](screencapturekit/scstreamframeinfo.md): An instance that defines metadata keys for a stream frame.
- [SCFrameStatus](screencapturekit/scframestatus.md): Status values for a frame from a stream.
- [SCClipBufferingOutput](screencapturekit/scclipbufferingoutput.md)

### System content-sharing picker

- [SCContentSharingPicker](screencapturekit/sccontentsharingpicker.md): An instance of a picker presented by the operating system for managing frame-capture streams.
- [SCContentSharingPickerConfiguration](screencapturekit/sccontentsharingpickerconfiguration-swift.struct.md): An instance for configuring the system content-sharing picker.
- [SCContentSharingPickerMode](screencapturekit/sccontentsharingpickermode.md): Available modes for selecting streaming content from a picker presented by the operating system.
- [SCContentSharingPickerObserver](screencapturekit/sccontentsharingpickerobserver.md): An observer protocol your app implements to receive messages from the operating system’s content picker.

### Stream errors (Swift)

- [SCStreamErrorDomain](screencapturekit/scstreamerrordomain.md): A string representation of the error domain.
- [SCStreamError](screencapturekit/scstreamerror.md): An instance representing a ScreenCaptureKit framework error.

### Classes

- [SCRecordingEditor](screencapturekit/screcordingeditor.md)

### Protocols

- [SCClipBufferingOutputDelegate](screencapturekit/scclipbufferingoutputdelegate.md)
- [SCRecordingEditorDelegate](screencapturekit/screcordingeditordelegate.md)

# ScreenCaptureKit (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Framework  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

Stream screen content and audio to your app with fine-grained control over what you capture.

<a id="overview"></a>

## Overview

Use ScreenCaptureKit to capture high-performance video and audio across iOS, iPadOS, macOS, tvOS, and visionOS. The framework gives you fine-grained control to select and stream only the content you want to capture, delivering media to your app as [CMSampleBufferRef](coremedia/cmsamplebuffer.md) objects with the associated metadata.

> **Important**

> ScreenCaptureKit replaces ReplayKit for screen streaming and mirroring. A broadcast extension is no longer necessary.

Use [SCContentSharingPicker](screencapturekit/sccontentsharingpicker.md), the system screen-sharing control, as the recommended approach for letting people select content sources and manage active streams, rather than building your own selection UI. To capture content while your app is in the background, configure the appropriate [Configuring background execution modes](https://developer.apple.com/documentation/xcode/configuring-background-execution-modes) in the Signing & Capabilities pane in Xcode.

Request screen recording permission from the person before capturing content. In the Info pane of the Xcode target editor, add a `NSScreenCaptureUsageDescription` key with a description of why your app requires screen recording access.

> **Note**

> For related WWDC sessions, see [Meet ScreenCaptureKit](https://developer.apple.com/wwdc22/10156) (WWDC22 Session 10156), [Take ScreenCaptureKit to the next level](https://developer.apple.com/wwdc22/10155) (WWDC22 Session 10155), and [What’s new in ScreenCaptureKit](https://developer.apple.com/videos/play/wwdc2023/10136/) (WWDC23 Session 10136).

## Topics

### Essentials

- [ScreenCaptureKit updates](https://developer.apple.com/documentation/updates/screencapturekit): Learn about important changes to ScreenCaptureKit.
- [Persistent Content Capture](bundleresources/entitlements/com.apple.developer.persistent-content-capture.md): A Boolean value that indicates whether a Virtual Network Computing (VNC) app needs persistent access to screen capture.
- [Capturing screen content on iOS](screencapturekit/capturing-screen-content-on-ios.md): Record and share screen captures on iOS by presenting the system content-sharing picker.
- [Capturing screen content in macOS](screencapturekit/capturing-screen-content-in-macos.md): Stream desktop content like displays, apps, and windows by adopting screen capture in your app.

### Shareable content

- [SCShareableContent](screencapturekit/scshareablecontent.md): An instance that represents a set of displays, apps, and windows that your app can capture.
- [SCShareableContentInfo](screencapturekit/scshareablecontentinfo.md): An instance that provides information for the content in a given stream.
- [SCShareableContentStyle](screencapturekit/scshareablecontentstyle.md): The style of content presented in a stream.
- [SCDisplay](screencapturekit/scdisplay.md): An instance that represents a display device.
- [SCRunningApplication](screencapturekit/scrunningapplication.md): An instance that represents an app running on a device.
- [SCWindow](screencapturekit/scwindow.md): An instance that represents an onscreen window.

### Content capture

- [SCStream](screencapturekit/scstream.md): An instance that represents a stream of shareable content.
- [SCStreamConfiguration](screencapturekit/scstreamconfiguration.md): An instance that provides the output configuration for a stream.
- [SCContentFilter](screencapturekit/sccontentfilter.md): An instance that filters the content a stream captures.
- [SCStreamDelegate](screencapturekit/scstreamdelegate.md): A delegate protocol your app implements to respond to stream events.
- [SCScreenshotManager](screencapturekit/scscreenshotmanager.md): An instance for the capture of single frames from a stream.
- [SCScreenshotConfiguration](screencapturekit/scscreenshotconfiguration.md): An object that contains screenshot properties such as output width, height, and image quality specifications.
- [SCScreenshotOutput](screencapturekit/scscreenshotoutput.md): An object that contains all images requested by the client.
- [SCVideoEffectOutput](screencapturekit/scvideoeffectoutput.md)

### Output processing

- [SCStreamOutput](screencapturekit/scstreamoutput.md): A delegate protocol your app implements to receive capture stream output events.
- [SCStreamOutputType](screencapturekit/scstreamoutputtype.md): Constants that represent output types for a stream frame.
- [SCStreamFrameInfo](screencapturekit/scstreamframeinfo.md): An instance that defines metadata keys for a stream frame.
- [SCFrameStatus](screencapturekit/scframestatus.md): Status values for a frame from a stream.
- [SCClipBufferingOutput](screencapturekit/scclipbufferingoutput.md)

### System content-sharing picker

- [SCContentSharingPicker](screencapturekit/sccontentsharingpicker.md): An instance of a picker presented by the operating system for managing frame-capture streams.
- [SCContentSharingPickerConfiguration](screencapturekit/sccontentsharingpickerconfiguration-c.class.md): An instance for configuring the system content-sharing picker.
- [SCContentSharingPickerMode](screencapturekit/sccontentsharingpickermode.md): Available modes for selecting streaming content from a picker presented by the operating system.
- [SCContentSharingPickerObserver](screencapturekit/sccontentsharingpickerobserver.md): An observer protocol your app implements to receive messages from the operating system’s content picker.

### Stream errors (Objective-C)

- [SCStreamErrorDomain](screencapturekit/scstreamerrordomain.md): A string representation of the error domain.
- [SCStreamErrorCode](screencapturekit/scstreamerror/code.md): Codes for user cancellation events and errors that can occur in ScreenCaptureKit.

### Classes

- [SCRecordingEditor](screencapturekit/screcordingeditor.md)

### Protocols

- [SCClipBufferingOutputDelegate](screencapturekit/scclipbufferingoutputdelegate.md)
- [SCRecordingEditorDelegate](screencapturekit/screcordingeditordelegate.md)

### Variables

- [SCStreamFrameInfoVideoOrientation](screencapturekit/scstreamframeinfo/videoorientation.md)

### Enumerations

- [SCRecordingEditorMode](screencapturekit/screcordingeditor/mode.md)
- [SCScreenshotDisplayIntent](screencapturekit/scscreenshotconfiguration/displayintent-swift.enum.md): A value that specifies the type of display a screenshot rendering optimizes for.
- [SCScreenshotDynamicRange](screencapturekit/scscreenshotconfiguration/dynamicrange-swift.enum.md): Specifies the type of images returned to the client; standard dynamic range, high dynamic range, or both.
