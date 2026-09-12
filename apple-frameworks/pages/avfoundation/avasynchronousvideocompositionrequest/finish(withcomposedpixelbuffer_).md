> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasynchronousvideocompositionrequest/finish(withcomposedpixelbuffer:)](https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/finish(withcomposedpixelbuffer:))

# finish(withComposedPixelBuffer:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The method that the custom compositor calls when composition succeeds.

## Declaration

```swift
func finish(withComposedPixelBuffer readOnlyPixelBuffer: CVReadOnlyPixelBuffer)
```

## See Also

### Finishing the request

- [finish(withComposedVideoFrame:)](finish%28withcomposedvideoframe_%29.md): Deprecated. Finishes the request to compose the frame.
- [finish(withComposedTaggedBuffers:)](finish%28withcomposedtaggedbuffers_%29.md): The method that the custom compositor calls when composition succeeds.
- [finish(with:)](finish%28with_%29.md): Finishes the request with an error.
- [finishCancelledRequest()](finishcancelledrequest%28%29.md): Cancels the request to compose a video frame.
