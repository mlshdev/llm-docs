> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasynchronousvideocompositionrequest](https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest)

# AVAsynchronousVideoCompositionRequest (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An object that contains information a video compositor needs to render an output pixel buffer.

## Declaration

```swift
class AVAsynchronousVideoCompositionRequest
```

<a id="overview"></a>

## Overview

The video compositor must adopt the [AVVideoCompositing](avvideocompositing.md) protocol.

## Topics

### Inspecting the request

- [compositionTime](avasynchronousvideocompositionrequest/compositiontime.md): A time for which to compose the frame.
- [renderContext](avasynchronousvideocompositionrequest/rendercontext.md): The rendering context of the video composition.
- [videoCompositionInstruction](avasynchronousvideocompositionrequest/videocompositioninstruction.md): A video composition instruction that indicates how to compose the frame.

### Accessing source data

- [attach(\_:to:)](avasynchronousvideocompositionrequest/attach%28__to_%29.md): Associates the pixel buffer with the specified spatial configuration.
- [sourceFrame(byTrackID:)](avasynchronousvideocompositionrequest/sourceframe%28bytrackid_%29.md): Deprecated. Returns a source pixel buffer for the track that contains the specified identifier.
- [sourceReadOnlyPixelBuffer(byTrackID:)](avasynchronousvideocompositionrequest/sourcereadonlypixelbuffer%28bytrackid_%29.md): Returns the source CVReadOnlyPixelBuffer for the given track ID. If the track contains tagged buffers, a pixel buffer from one of the tagged buffers will be returned.
- [sourceReadySampleBuffer(byTrackID:)](avasynchronousvideocompositionrequest/sourcereadysamplebuffer%28bytrackid_%29.md): Returns the source CMReadySampleBuffer for the given track ID.
- [sourceSampleBuffer(byTrackID:)](avasynchronousvideocompositionrequest/sourcesamplebuffer%28bytrackid_%29.md): Deprecated. Returns a source sample buffer for the track that contains the specified identifier.
- [sourceSampleDataTrackIDs](avasynchronousvideocompositionrequest/sourcesampledatatrackids-3yiab.md): The identifiers of tracks that contain source sample data.
- [sourceTaggedDynamicBuffers(byTrackID:)](avasynchronousvideocompositionrequest/sourcetaggeddynamicbuffers%28bytrackid_%29.md): Returns the source tagged dynamic buffers for the given track ID. Returns nil if the video track does not contain tagged buffers, or if the track does not contain video. This function should only be called when supportsSourceTaggedBuffers is YES.
- [sourceTimedMetadata(byTrackID:)](avasynchronousvideocompositionrequest/sourcetimedmetadata%28bytrackid_%29.md): Returns a source timed metadata group for the track that contains the specified identifier.
- [sourceTrackIDs](avasynchronousvideocompositionrequest/sourcetrackids.md): The identifiers of tracks that contain source video.

### Finishing the request

- [finish(withComposedVideoFrame:)](avasynchronousvideocompositionrequest/finish%28withcomposedvideoframe_%29.md): Deprecated. Finishes the request to compose the frame.
- [finish(withComposedPixelBuffer:)](avasynchronousvideocompositionrequest/finish%28withcomposedpixelbuffer_%29.md): The method that the custom compositor calls when composition succeeds.
- [finish(withComposedTaggedBuffers:)](avasynchronousvideocompositionrequest/finish%28withcomposedtaggedbuffers_%29.md): The method that the custom compositor calls when composition succeeds.
- [finish(with:)](avasynchronousvideocompositionrequest/finish%28with_%29.md): Finishes the request with an error.
- [finishCancelledRequest()](avasynchronousvideocompositionrequest/finishcancelledrequest%28%29.md): Cancels the request to compose a video frame.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Rendering the composition

- [startRequest(\_:)](avvideocompositing/startrequest%28__%29.md): Directs a custom video compositor object to create a new pixel buffer composed asynchronously from a collection of sources.
- [cancelAllPendingVideoCompositionRequests()](avvideocompositing/cancelallpendingvideocompositionrequests%28%29.md): Directs a custom video compositor object to cancel or finish all pending video composition requests.

# AVAsynchronousVideoCompositionRequest (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An object that contains information a video compositor needs to render an output pixel buffer.

## Declaration

```objectivec
@interface AVAsynchronousVideoCompositionRequest : NSObject
```

<a id="overview"></a>

## Overview

The video compositor must adopt the [AVVideoCompositing](avvideocompositing.md) protocol.

## Topics

### Inspecting the request

- [compositionTime](avasynchronousvideocompositionrequest/compositiontime.md): A time for which to compose the frame.
- [renderContext](avasynchronousvideocompositionrequest/rendercontext.md): The rendering context of the video composition.
- [videoCompositionInstruction](avasynchronousvideocompositionrequest/videocompositioninstruction.md): A video composition instruction that indicates how to compose the frame.

### Accessing source data

- [attachSpatialVideoConfiguration:toPixelBuffer:](avasynchronousvideocompositionrequest/attachspatialvideoconfiguration_topixelbuffer_.md): Associates the pixel buffer with the specified spatial configuration.
- [sourceFrameByTrackID:](avasynchronousvideocompositionrequest/sourceframe%28bytrackid_%29.md): Deprecated. Returns a source pixel buffer for the track that contains the specified identifier.
- [sourceSampleBufferByTrackID:](avasynchronousvideocompositionrequest/sourcesamplebuffer%28bytrackid_%29.md): Deprecated. Returns a source sample buffer for the track that contains the specified identifier.
- [sourceSampleDataTrackIDs](avasynchronousvideocompositionrequest/sourcesampledatatrackids-9vxz5.md): The identifiers of tracks that contain source metadata.
- [sourceTaggedBufferGroupByTrackID:](avasynchronousvideocompositionrequest/sourcetaggedbuffergroupbytrackid_.md): Returns the source CMTaggedBufferGroupRef for the given track ID.
- [sourceTimedMetadataByTrackID:](avasynchronousvideocompositionrequest/sourcetimedmetadata%28bytrackid_%29.md): Returns a source timed metadata group for the track that contains the specified identifier.
- [sourceTrackIDs](avasynchronousvideocompositionrequest/sourcetrackids.md): The identifiers of tracks that contain source video.

### Finishing the request

- [finishWithComposedVideoFrame:](avasynchronousvideocompositionrequest/finish%28withcomposedvideoframe_%29.md): Deprecated. Finishes the request to compose the frame.
- [finishWithComposedTaggedBufferGroup:](avasynchronousvideocompositionrequest/finishwithcomposedtaggedbuffergroup_.md): The method that the custom compositor calls when composition succeeds.
- [finishWithError:](avasynchronousvideocompositionrequest/finish%28with_%29.md): Finishes the request with an error.
- [finishCancelledRequest](avasynchronousvideocompositionrequest/finishcancelledrequest%28%29.md): Cancels the request to compose a video frame.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Rendering the composition

- [startVideoCompositionRequest:](avvideocompositing/startrequest%28__%29.md): Directs a custom video compositor object to create a new pixel buffer composed asynchronously from a collection of sources.
- [cancelAllPendingVideoCompositionRequests](avvideocompositing/cancelallpendingvideocompositionrequests%28%29.md): Directs a custom video compositor object to cancel or finish all pending video composition requests.
