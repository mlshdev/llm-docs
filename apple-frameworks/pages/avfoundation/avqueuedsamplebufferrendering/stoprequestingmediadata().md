> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avqueuedsamplebufferrendering/stoprequestingmediadata()](https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrendering/stoprequestingmediadata())

# stopRequestingMediaData() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Cancels any current [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md) call.

## Declaration

```swift
func stopRequestingMediaData()
```

<a id="Discussion"></a>

## Discussion

Always pair a call to [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md) with this method. You can call this method from inside or outside of the requesting method’s block parameter.

## See Also

### Requesting media

- [isReadyForMoreMediaData](isreadyformoremediadata.md): Deprecated. A Boolean value that indicates whether the receiver is able to accept more sample buffers.
- [enqueue(\_:)](enqueue%28__%29.md): Deprecated. Sends a sample buffer to the queue for rendering.
- [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md): Deprecated. Tells the target to invoke a client-supplied block in order to gather sample buffers for playback.

# stopRequestingMediaData (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Cancels any current [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md) call.

## Declaration

```objectivec
- (void) stopRequestingMediaData;
```

<a id="Discussion"></a>

## Discussion

Always pair a call to [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md) with this method. You can call this method from inside or outside of the requesting method’s block parameter.

## See Also

### Requesting media

- [readyForMoreMediaData](isreadyformoremediadata.md): Deprecated. A Boolean value that indicates whether the receiver is able to accept more sample buffers.
- [enqueueSampleBuffer:](enqueue%28__%29.md): Deprecated. Sends a sample buffer to the queue for rendering.
- [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md): Deprecated. Tells the target to invoke a client-supplied block in order to gather sample buffers for playback.
