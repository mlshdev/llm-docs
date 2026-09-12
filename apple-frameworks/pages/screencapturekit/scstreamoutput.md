> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamoutput](https://developer.apple.com/documentation/screencapturekit/scstreamoutput)

# SCStreamOutput (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

A delegate protocol your app implements to receive capture stream output events.

## Declaration

```swift
protocol SCStreamOutput : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The [SCStreamOutput](scstreamoutput.md) protocol provides a way to retrieve output from an [SCStream](scstream.md).

After you call [startCapture(completionHandler:)](scstream/startcapture%28completionhandler_%29.md), the system provides frame data through the [stream(\_:didOutputSampleBuffer:of:)](scstreamoutput/stream%28__didoutputsamplebuffer_of_%29.md) method. You can inspect the [CMSampleBuffer](../coremedia/cmsamplebuffer.md) to retrieve image data, and inspect the sample buffer for metadata about the frame.

## Topics

### Receiving stream output

- [stream(\_:didOutputSampleBuffer:of:)](scstreamoutput/stream%28__didoutputsamplebuffer_of_%29.md): Tells the delegate that a capture stream produced a frame.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Output processing

- [SCStreamOutputType](scstreamoutputtype.md): Constants that represent output types for a stream frame.
- [SCStreamFrameInfo](scstreamframeinfo.md): An instance that defines metadata keys for a stream frame.
- [SCFrameStatus](scframestatus.md): Status values for a frame from a stream.
- [SCClipBufferingOutput](scclipbufferingoutput.md)

# SCStreamOutput (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

A delegate protocol your app implements to receive capture stream output events.

## Declaration

```objectivec
@protocol SCStreamOutput <NSObject>
```

<a id="overview"></a>

## Overview

The [SCStreamOutput](scstreamoutput.md) protocol provides a way to retrieve output from an [SCStream](scstream.md).

After you call [startCaptureWithCompletionHandler:](scstream/startcapture%28completionhandler_%29.md), the system provides frame data through the [stream:didOutputSampleBuffer:ofType:](scstreamoutput/stream%28__didoutputsamplebuffer_of_%29.md) method. You can inspect the [CMSampleBufferRef](../coremedia/cmsamplebuffer.md) to retrieve image data, and inspect the sample buffer for metadata about the frame.

## Topics

### Receiving stream output

- [stream:didOutputSampleBuffer:ofType:](scstreamoutput/stream%28__didoutputsamplebuffer_of_%29.md): Tells the delegate that a capture stream produced a frame.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Output processing

- [SCStreamOutputType](scstreamoutputtype.md): Constants that represent output types for a stream frame.
- [SCStreamFrameInfo](scstreamframeinfo.md): An instance that defines metadata keys for a stream frame.
- [SCFrameStatus](scframestatus.md): Status values for a frame from a stream.
- [SCClipBufferingOutput](scclipbufferingoutput.md)
