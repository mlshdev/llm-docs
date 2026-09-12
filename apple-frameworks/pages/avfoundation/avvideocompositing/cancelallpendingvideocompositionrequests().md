> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositing/cancelallpendingvideocompositionrequests()](https://developer.apple.com/documentation/avfoundation/avvideocompositing/cancelallpendingvideocompositionrequests())

# cancelAllPendingVideoCompositionRequests() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Directs a custom video compositor object to cancel or finish all pending video composition requests.

## Declaration

```swift
optional func cancelAllPendingVideoCompositionRequests()
```

<a id="Discussion"></a>

## Discussion

Upon receiving this message, a custom video compositor must block until it has either cancelled all pending frame requests, and called the [finishCancelledRequest()](../avasynchronousvideocompositionrequest/finishcancelledrequest%28%29.md) method for each of them. If cancellation is not possible, the method must block until it has finished processing of all the frames and called the [finish(withComposedVideoFrame:)](../avasynchronousvideocompositionrequest/finish%28withcomposedvideoframe_%29.md) method for each of them.

## See Also

### Rendering the composition

- [startRequest(\_:)](startrequest%28__%29.md): Directs a custom video compositor object to create a new pixel buffer composed asynchronously from a collection of sources.
- [AVAsynchronousVideoCompositionRequest](../avasynchronousvideocompositionrequest.md): An object that contains information a video compositor needs to render an output pixel buffer.

# cancelAllPendingVideoCompositionRequests (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Directs a custom video compositor object to cancel or finish all pending video composition requests.

## Declaration

```objectivec
- (void) cancelAllPendingVideoCompositionRequests;
```

<a id="Discussion"></a>

## Discussion

Upon receiving this message, a custom video compositor must block until it has either cancelled all pending frame requests, and called the [finishCancelledRequest](../avasynchronousvideocompositionrequest/finishcancelledrequest%28%29.md) method for each of them. If cancellation is not possible, the method must block until it has finished processing of all the frames and called the [finishWithComposedVideoFrame:](../avasynchronousvideocompositionrequest/finish%28withcomposedvideoframe_%29.md) method for each of them.

## See Also

### Rendering the composition

- [startVideoCompositionRequest:](startrequest%28__%29.md): Directs a custom video compositor object to create a new pixel buffer composed asynchronously from a collection of sources.
- [AVAsynchronousVideoCompositionRequest](../avasynchronousvideocompositionrequest.md): An object that contains information a video compositor needs to render an output pixel buffer.
