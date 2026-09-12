> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasynchronousvideocompositionrequest/finishcancelledrequest()](https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/finishcancelledrequest())

# finishCancelledRequest() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Cancels the request to compose a video frame.

## Declaration

```swift
func finishCancelledRequest()
```

## See Also

### Finishing the request

- [finish(withComposedVideoFrame:)](finish%28withcomposedvideoframe_%29.md): Deprecated. Finishes the request to compose the frame.
- [finish(withComposedPixelBuffer:)](finish%28withcomposedpixelbuffer_%29.md): The method that the custom compositor calls when composition succeeds.
- [finish(withComposedTaggedBuffers:)](finish%28withcomposedtaggedbuffers_%29.md): The method that the custom compositor calls when composition succeeds.
- [finish(with:)](finish%28with_%29.md): Finishes the request with an error.

# finishCancelledRequest (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Cancels the request to compose a video frame.

## Declaration

```objectivec
- (void) finishCancelledRequest;
```

## See Also

### Finishing the request

- [finishWithComposedVideoFrame:](finish%28withcomposedvideoframe_%29.md): Deprecated. Finishes the request to compose the frame.
- [finishWithComposedTaggedBufferGroup:](finishwithcomposedtaggedbuffergroup_.md): The method that the custom compositor calls when composition succeeds.
- [finishWithError:](finish%28with_%29.md): Finishes the request with an error.
