> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamframeinfo](https://developer.apple.com/documentation/screencapturekit/scstreamframeinfo)

# SCStreamFrameInfo (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

An instance that defines metadata keys for a stream frame.

## Declaration

```swift
struct SCStreamFrameInfo
```

<a id="overview"></a>

## Overview

Use [SCStreamFrameInfo](scstreamframeinfo.md) keys to retrieve values from the dictionary of metadata attached to the sample buffers that a stream produces. For example, you can retrieve the display time, content scale, and scaling factor, as shown below:

```swift
// A dictionary of attachments for a streamed sample buffer.
let attachments: [SCStreamFrameInfo: Any] = // Retrieve attachments from a sample buffer.

let displayTime = attachments[.displayTime] as? UInt64 ?? 0
let contentScale = attachments[.contentScale] as? Double ?? 0.0
let scaleFactor = attachments[.scaleFactor] as? Double ?? 0.0
```

## Topics

### Frame information constants

- [status](scstreamframeinfo/status.md): A key to retrieve the status of a video frame.
- [displayTime](scstreamframeinfo/displaytime.md): A key to retrieve the display time of a video frame.
- [scaleFactor](scstreamframeinfo/scalefactor.md): A key to retrieve the scale factor of a video frame.
- [contentScale](scstreamframeinfo/contentscale.md): A key to retrieve the content scale of a video frame.
- [contentRect](scstreamframeinfo/contentrect.md): A key to retrieve the content rectangle of a video frame.
- [boundingRect](scstreamframeinfo/boundingrect.md): A key to retrieve the bounding rectangle for a video frame.
- [screenRect](scstreamframeinfo/screenrect.md): A key to retrieve the onscreen location of captured content.
- [dirtyRects](scstreamframeinfo/dirtyrects.md): A key to retrieve the areas of a video frame that contain changes.
- [presenterOverlayContentRect](scstreamframeinfo/presenteroverlaycontentrect.md)

### Initializers

- [init(rawValue:)](scstreamframeinfo/init%28rawvalue_%29.md): Creates a new instance with a raw value.

### Type Properties

- [videoOrientation](scstreamframeinfo/videoorientation.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Output processing

- [SCStreamOutput](scstreamoutput.md): A delegate protocol your app implements to receive capture stream output events.
- [SCStreamOutputType](scstreamoutputtype.md): Constants that represent output types for a stream frame.
- [SCFrameStatus](scframestatus.md): Status values for a frame from a stream.
- [SCClipBufferingOutput](scclipbufferingoutput.md)

# SCStreamFrameInfo (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Type Alias  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

An instance that defines metadata keys for a stream frame.

## Declaration

```objectivec
typedef NSString * SCStreamFrameInfo;
```

<a id="overview"></a>

## Overview

Use [SCStreamFrameInfo](scstreamframeinfo.md) keys to retrieve values from the dictionary of metadata attached to the sample buffers that a stream produces. For example, you can retrieve the display time, content scale, and scaling factor, as shown below:

```swift
// A dictionary of attachments for a streamed sample buffer.
let attachments: [SCStreamFrameInfo: Any] = // Retrieve attachments from a sample buffer.

let displayTime = attachments[.displayTime] as? UInt64 ?? 0
let contentScale = attachments[.contentScale] as? Double ?? 0.0
let scaleFactor = attachments[.scaleFactor] as? Double ?? 0.0
```

## Topics

### Frame information constants

- [SCStreamFrameInfoStatus](scstreamframeinfo/status.md): A key to retrieve the status of a video frame.
- [SCStreamFrameInfoDisplayTime](scstreamframeinfo/displaytime.md): A key to retrieve the display time of a video frame.
- [SCStreamFrameInfoScaleFactor](scstreamframeinfo/scalefactor.md): A key to retrieve the scale factor of a video frame.
- [SCStreamFrameInfoContentScale](scstreamframeinfo/contentscale.md): A key to retrieve the content scale of a video frame.
- [SCStreamFrameInfoContentRect](scstreamframeinfo/contentrect.md): A key to retrieve the content rectangle of a video frame.
- [SCStreamFrameInfoBoundingRect](scstreamframeinfo/boundingrect.md): A key to retrieve the bounding rectangle for a video frame.
- [SCStreamFrameInfoScreenRect](scstreamframeinfo/screenrect.md): A key to retrieve the onscreen location of captured content.
- [SCStreamFrameInfoDirtyRects](scstreamframeinfo/dirtyrects.md): A key to retrieve the areas of a video frame that contain changes.
- [SCStreamFrameInfoPresenterOverlayContentRect](scstreamframeinfo/presenteroverlaycontentrect.md)

## See Also

### Output processing

- [SCStreamOutput](scstreamoutput.md): A delegate protocol your app implements to receive capture stream output events.
- [SCStreamOutputType](scstreamoutputtype.md): Constants that represent output types for a stream frame.
- [SCFrameStatus](scframestatus.md): Status values for a frame from a stream.
- [SCClipBufferingOutput](scclipbufferingoutput.md)
