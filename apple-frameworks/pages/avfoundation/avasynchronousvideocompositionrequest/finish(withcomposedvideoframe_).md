> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasynchronousvideocompositionrequest/finish(withcomposedvideoframe:)](https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/finish(withcomposedvideoframe:))

# finish(withComposedVideoFrame:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.9+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Finishes the request to compose the frame.

> Use finish(withComposedVideoFrame: CVReadOnlyPixelBuffer) instead

## Declaration

```swift
func finish(withComposedVideoFrame composedVideoFrame: CVPixelBuffer)
```

## Parameters

- `composedVideoFrame`: The successfully composed pixel buffer.

<a id="Discussion"></a>

## Discussion

A custom compositor calls this method to indicate that it’s composed a frame successfully.

## See Also

### Finishing the request

- [finish(withComposedPixelBuffer:)](finish%28withcomposedpixelbuffer_%29.md): The method that the custom compositor calls when composition succeeds.
- [finish(withComposedTaggedBuffers:)](finish%28withcomposedtaggedbuffers_%29.md): The method that the custom compositor calls when composition succeeds.
- [finish(with:)](finish%28with_%29.md): Finishes the request with an error.
- [finishCancelledRequest()](finishcancelledrequest%28%29.md): Cancels the request to compose a video frame.

# finishWithComposedVideoFrame: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Finishes the request to compose the frame.

## Declaration

```objectivec
- (void) finishWithComposedVideoFrame:(CVPixelBufferRef) composedVideoFrame;
```

## Parameters

- `composedVideoFrame`: The successfully composed pixel buffer.

<a id="Discussion"></a>

## Discussion

A custom compositor calls this method to indicate that it’s composed a frame successfully.

## See Also

### Finishing the request

- [finishWithComposedTaggedBufferGroup:](finishwithcomposedtaggedbuffergroup_.md): The method that the custom compositor calls when composition succeeds.
- [finishWithError:](finish%28with_%29.md): Finishes the request with an error.
- [finishCancelledRequest](finishcancelledrequest%28%29.md): Cancels the request to compose a video frame.
