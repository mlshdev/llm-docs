> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scscreenshotmanager/capturesamplebuffer(contentfilter:configuration:completionhandler:)](https://developer.apple.com/documentation/screencapturekit/scscreenshotmanager/capturesamplebuffer(contentfilter:configuration:completionhandler:))

# captureSampleBuffer(contentFilter:configuration:completionHandler:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

Captures a single frame directly from a stream’s buffer, using a filter.

## Declaration

```swift
class func captureSampleBuffer(contentFilter: SCContentFilter, configuration config: SCStreamConfiguration, completionHandler: (@Sendable (CMSampleBuffer?, (any Error)?) -> Void)? = nil)
```

```swift
class func captureSampleBuffer(contentFilter: SCContentFilter, configuration config: SCStreamConfiguration) async throws -> CMSampleBuffer
```

## Parameters

- `contentFilter`: The content filter used to select the stream.
- `config`: Configuration information for how to record the stream buffer.
- `completionHandler`: Closure that processes the capture taken from streaming content.

## See Also

### Individual frame capture

- [captureImage(contentFilter:configuration:completionHandler:)](captureimage%28contentfilter_configuration_completionhandler_%29.md): Captures a single frame from a stream as an image, using a filter.

# captureSampleBufferWithFilter:configuration:completionHandler: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

Captures a single frame directly from a stream’s buffer, using a filter.

## Declaration

```objectivec
+ (void) captureSampleBufferWithFilter:(SCContentFilter *) contentFilter configuration:(SCStreamConfiguration *) config completionHandler:(void (^)(CMSampleBufferRef sampleBuffer, NSError *error)) completionHandler;
```

## Parameters

- `contentFilter`: The content filter used to select the stream.
- `config`: Configuration information for how to record the stream buffer.
- `completionHandler`: Closure that processes the capture taken from streaming content.

## See Also

### Individual frame capture

- [captureImageWithFilter:configuration:completionHandler:](captureimage%28contentfilter_configuration_completionhandler_%29.md): Captures a single frame from a stream as an image, using a filter.
