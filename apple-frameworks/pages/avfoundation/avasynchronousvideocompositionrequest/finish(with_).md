> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasynchronousvideocompositionrequest/finish(with:)](https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/finish(with:))

# finish(with:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Finishes the request with an error.

## Declaration

```swift
func finish(with error: any Error)
```

## Parameters

- `error`: Returns the error encountered during the compositing.

<a id="Discussion"></a>

## Discussion

A custom compositor calls this method to indicate that the attempt to compose a frame failed.

## See Also

### Finishing the request

- [finish(withComposedVideoFrame:)](finish%28withcomposedvideoframe_%29.md): Deprecated. Finishes the request to compose the frame.
- [finish(withComposedPixelBuffer:)](finish%28withcomposedpixelbuffer_%29.md): The method that the custom compositor calls when composition succeeds.
- [finish(withComposedTaggedBuffers:)](finish%28withcomposedtaggedbuffers_%29.md): The method that the custom compositor calls when composition succeeds.
- [finishCancelledRequest()](finishcancelledrequest%28%29.md): Cancels the request to compose a video frame.

# finishWithError: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Finishes the request with an error.

## Declaration

```objectivec
- (void) finishWithError:(NSError *) error;
```

## Parameters

- `error`: Returns the error encountered during the compositing.

<a id="Discussion"></a>

## Discussion

A custom compositor calls this method to indicate that the attempt to compose a frame failed.

## See Also

### Finishing the request

- [finishWithComposedVideoFrame:](finish%28withcomposedvideoframe_%29.md): Deprecated. Finishes the request to compose the frame.
- [finishWithComposedTaggedBufferGroup:](finishwithcomposedtaggedbuffergroup_.md): The method that the custom compositor calls when composition succeeds.
- [finishCancelledRequest](finishcancelledrequest%28%29.md): Cancels the request to compose a video frame.
