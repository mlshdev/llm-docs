> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessor/processframe(fromimagebuffer:completionhandler:)](https://developer.apple.com/documentation/mediaextension/merawprocessor/processframe(fromimagebuffer:completionhandler:))

# processFrame(fromImageBuffer:completionHandler:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Requests the processor to process a video frame.

## Declaration

```swift
func processFrame(fromImageBuffer inputFrame: CVPixelBuffer, completionHandler: @escaping @Sendable (CVPixelBuffer?, (any Error)?) -> Void)
```

```swift
func processFrame(fromImageBuffer inputFrame: CVPixelBuffer) async throws -> CVPixelBuffer
```

## Parameters

- `inputFrame`: A CVPixelBuffer that contains a video frame to process.
- `completionHandler`: The handler is invoked when a frame processes and is ready to be sent back to the caller. This block does not need to be called in the order in which frames were submitted.

<a id="Discussion"></a>

## Discussion

The completionHandler block must be called for every [processFrame(fromImageBuffer:completionHandler:)](processframe%28fromimagebuffer_completionhandler_%29.md) call when processing is complete. The completion handler block should return either a processed pixel buffer or an error.

# processFrameFromImageBuffer:completionHandler: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Requests the processor to process a video frame.

## Declaration

```objectivec
- (void) processFrameFromImageBuffer:(CVPixelBufferRef) inputFrame completionHandler:(void (^)(CVPixelBufferRef imageBuffer, NSError *error)) completionHandler;
```

## Parameters

- `inputFrame`: A CVPixelBuffer that contains a video frame to process.
- `completionHandler`: The handler is invoked when a frame processes and is ready to be sent back to the caller. This block does not need to be called in the order in which frames were submitted.

<a id="Discussion"></a>

## Discussion

The completionHandler block must be called for every [processFrameFromImageBuffer:completionHandler:](processframe%28fromimagebuffer_completionhandler_%29.md) call when processing is complete. The completion handler block should return either a processed pixel buffer or an error.
