> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/screencapturekit/scscreenshotmanager/captureimage(contentfilter:configuration:completionhandler:)

# captureImage(contentFilter:configuration:completionHandler:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

Captures a single frame from a stream as an image, using a filter.

## Declaration

```swift
class func captureImage(contentFilter: SCContentFilter, configuration config: SCStreamConfiguration, completionHandler: (@Sendable (CGImage?, (any Error)?) -> Void)? = nil)
```

```swift
class func captureImage(contentFilter: SCContentFilter, configuration config: SCStreamConfiguration) async throws -> CGImage
```

## Parameters

- `contentFilter`: The content filter used to select the stream.
- `config`: Configuration information for how to capture the screenshot.
- `completionHandler`: Closure that processes the screenshot taken from the streaming content.

## See Also

### Individual frame capture

- [captureSampleBuffer(contentFilter:configuration:completionHandler:)](capturesamplebuffer%28contentfilter_configuration_completionhandler_%29.md): Captures a single frame directly from a stream’s buffer, using a filter.

# captureImageWithFilter:configuration:completionHandler: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

Captures a single frame from a stream as an image, using a filter.

## Declaration

```objectivec
+ (void) captureImageWithFilter:(SCContentFilter *) contentFilter configuration:(SCStreamConfiguration *) config completionHandler:(void (^)(CGImageRef sampleBuffer, NSError *error)) completionHandler;
```

## Parameters

- `contentFilter`: The content filter used to select the stream.
- `config`: Configuration information for how to capture the screenshot.
- `completionHandler`: Closure that processes the screenshot taken from the streaming content.

## See Also

### Individual frame capture

- [captureSampleBufferWithFilter:configuration:completionHandler:](capturesamplebuffer%28contentfilter_configuration_completionhandler_%29.md): Captures a single frame directly from a stream’s buffer, using a filter.
