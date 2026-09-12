> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositing/startrequest(_:)](https://developer.apple.com/documentation/avfoundation/avvideocompositing/startrequest(_:))

# startRequest(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Directs a custom video compositor object to create a new pixel buffer composed asynchronously from a collection of sources.

## Declaration

```swift
func startRequest(_ asyncVideoCompositionRequest: AVAsynchronousVideoCompositionRequest)
```

## Parameters

- `asyncVideoCompositionRequest`: An instance of [AVAsynchronousVideoCompositionRequest](../avasynchronousvideocompositionrequest.md) that provides context for the requested composition.

<a id="Discussion"></a>

## Discussion

The custom compositor is expected to invoke, either subsequently or immediately,  the `asyncVideoCompositionRequest` object’s [finish(withComposedVideoFrame:)](../avasynchronousvideocompositionrequest/finish%28withcomposedvideoframe_%29.md) or [finish(with:)](../avasynchronousvideocompositionrequest/finish%28with_%29.md) methods.

If you intend to finish rendering the frame after  handling of this message returns, you must retain `asyncVideoCompositionRequest` until after composition is finished.

Note that if the custom compositor’s implementation of this method returns without finishing the composition immediately, it may be invoked again with another composition request before the prior request is finished; in such cases the custom compositor should be prepared to manage multiple composition requests.

If the rendered frame is exactly the same as one of the source frames, with no letterboxing, pillboxing or cropping needed, then the appropriate source pixel buffer may be returned, after [CFRetain](../../corefoundation/cfretain.md) has been called on it).

## See Also

### Rendering the composition

- [AVAsynchronousVideoCompositionRequest](../avasynchronousvideocompositionrequest.md): An object that contains information a video compositor needs to render an output pixel buffer.
- [cancelAllPendingVideoCompositionRequests()](cancelallpendingvideocompositionrequests%28%29.md): Directs a custom video compositor object to cancel or finish all pending video composition requests.

# startVideoCompositionRequest: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Directs a custom video compositor object to create a new pixel buffer composed asynchronously from a collection of sources.

## Declaration

```objectivec
- (void) startVideoCompositionRequest:(AVAsynchronousVideoCompositionRequest *) asyncVideoCompositionRequest;
```

## Parameters

- `asyncVideoCompositionRequest`: An instance of [AVAsynchronousVideoCompositionRequest](../avasynchronousvideocompositionrequest.md) that provides context for the requested composition.

<a id="Discussion"></a>

## Discussion

The custom compositor is expected to invoke, either subsequently or immediately,  the `asyncVideoCompositionRequest` object’s [finishWithComposedVideoFrame:](../avasynchronousvideocompositionrequest/finish%28withcomposedvideoframe_%29.md) or [finishWithError:](../avasynchronousvideocompositionrequest/finish%28with_%29.md) methods.

If you intend to finish rendering the frame after  handling of this message returns, you must retain `asyncVideoCompositionRequest` until after composition is finished.

Note that if the custom compositor’s implementation of this method returns without finishing the composition immediately, it may be invoked again with another composition request before the prior request is finished; in such cases the custom compositor should be prepared to manage multiple composition requests.

If the rendered frame is exactly the same as one of the source frames, with no letterboxing, pillboxing or cropping needed, then the appropriate source pixel buffer may be returned, after [CFRetain](../../corefoundation/cfretain.md) has been called on it).

## See Also

### Rendering the composition

- [AVAsynchronousVideoCompositionRequest](../avasynchronousvideocompositionrequest.md): An object that contains information a video compositor needs to render an output pixel buffer.
- [cancelAllPendingVideoCompositionRequests](cancelallpendingvideocompositionrequests%28%29.md): Directs a custom video compositor object to cancel or finish all pending video composition requests.
