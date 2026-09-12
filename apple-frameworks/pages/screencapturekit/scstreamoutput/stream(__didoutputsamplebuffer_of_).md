> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamoutput/stream(_:didoutputsamplebuffer:of:)](https://developer.apple.com/documentation/screencapturekit/scstreamoutput/stream(_:didoutputsamplebuffer:of:))

# stream(\_:didOutputSampleBuffer:of:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

Tells the delegate that a capture stream produced a frame.

## Declaration

```swift
optional func stream(_ stream: SCStream, didOutputSampleBuffer sampleBuffer: CMSampleBuffer, of type: SCStreamOutputType)
```

## Parameters

- `stream`: The frame capture stream that produced this frame.
- `sampleBuffer`: The sample buffer containing capture data.
- `type`: The type of capture contained in the sample buffer.

# stream:didOutputSampleBuffer:ofType: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

Tells the delegate that a capture stream produced a frame.

## Declaration

```objectivec
- (void) stream:(SCStream *) stream didOutputSampleBuffer:(CMSampleBufferRef) sampleBuffer ofType:(SCStreamOutputType) type;
```

## Parameters

- `stream`: The frame capture stream that produced this frame.
- `sampleBuffer`: The sample buffer containing capture data.
- `type`: The type of capture contained in the sample buffer.
