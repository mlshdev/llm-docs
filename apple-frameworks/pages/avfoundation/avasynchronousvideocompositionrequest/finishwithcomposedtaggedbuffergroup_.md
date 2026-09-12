> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasynchronousvideocompositionrequest/finishwithcomposedtaggedbuffergroup:](https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/finishwithcomposedtaggedbuffergroup:)

# finishWithComposedTaggedBufferGroup:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The method that the custom compositor calls when composition succeeds.

## Declaration

```objectivec
- (void) finishWithComposedTaggedBufferGroup:(CMTaggedBufferGroupRef) taggedBufferGroup;
```

## Parameters

- `taggedBufferGroup`: The tagged buffer group containing the composed tagged buffers. The tagged buffers must be compatible with the outputBufferDescription specified in the video composition. The outputBufferDescription must not be nil when calling this function. NOTE: If `AVVideoComposition/spatialConfigurations` is not empty, then `attach(spatialVideoConfiguration:to:)` must be called with one of the spatial configurations. An exception will be thrown otherwise. Also, all pixel buffers must be associated with the same spatial configuration. An exception will be thrown otherwise.

## See Also

### Finishing the request

- [finishWithComposedVideoFrame:](finish%28withcomposedvideoframe_%29.md): Deprecated. Finishes the request to compose the frame.
- [finishWithError:](finish%28with_%29.md): Finishes the request with an error.
- [finishCancelledRequest](finishcancelledrequest%28%29.md): Cancels the request to compose a video frame.
