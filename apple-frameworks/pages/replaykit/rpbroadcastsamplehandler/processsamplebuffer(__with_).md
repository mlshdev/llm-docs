> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcastsamplehandler/processsamplebuffer(_:with:)](https://developer.apple.com/documentation/replaykit/rpbroadcastsamplehandler/processsamplebuffer(_:with:))

# processSampleBuffer(\_:with:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Processes video and audio data as it becomes available during a live broadcast.

> No longer supported

## Declaration

```swift
func processSampleBuffer(_ sampleBuffer: CMSampleBuffer, with sampleBufferType: RPSampleBufferType)
```

## Parameters

- `sampleBuffer`: A [CMSampleBuffer](../../coremedia/cmsamplebuffer.md) object containing either audio or video data.
- `sampleBufferType`: An [RPSampleBufferType](../rpsamplebuffertype.md) identifying the media type of the recorded sample.

<a id="Discussion"></a>

## Discussion

This method handles buffers of all sample buffer types throughout each broadcast. If no audio is available — for example, if the microphone isn’t capturing input — ReplayKit provides audio buffers whose samples represent continuous silence.

ReplayKit provides sample buffers sequentially. After invoking this method with a sample buffer, ReplayKit won’t invoke the method again for any sample buffer type until the current invocation returns.

The sample buffer passed to this method is available only until the method returns. You shouldn’t keep a reference to the sample buffer after the method returns.

## See Also

### Handling Sample Buffer Clips

- [broadcastStarted(withSetupInfo:)](broadcaststarted%28withsetupinfo_%29.md): Deprecated. Perform any required actions after starting a live broadcast.
- [broadcastPaused()](broadcastpaused%28%29.md): Deprecated. Perform any required actions after a live broadcast is paused.
- [broadcastResumed()](broadcastresumed%28%29.md): Deprecated. Perform any required actions after a live broadcast is resumed.
- [broadcastFinished()](broadcastfinished%28%29.md): Deprecated. Perform any required actions after a live broadcast is finished.
- [broadcastAnnotated(withApplicationInfo:)](broadcastannotated%28withapplicationinfo_%29.md): Deprecated. Perform any required actions after starting a live broadcast.
- [RPApplicationInfoBundleIdentifierKey](../rpapplicationinfobundleidentifierkey.md): Deprecated. The key to retrieve the app’s bundle identifier from the user-information dictionary.
- [RPVideoSampleOrientationKey](../rpvideosampleorientationkey.md): Deprecated. The sample attachment key that describes the video orientation.
- [finishBroadcastWithError(\_:)](finishbroadcastwitherror%28__%29.md): Deprecated. Stops the broadcast and passes an error back to the broadcasting app.

# processSampleBuffer:withType: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Processes video and audio data as it becomes available during a live broadcast.

> No longer supported

## Declaration

```objectivec
- (void) processSampleBuffer:(CMSampleBufferRef) sampleBuffer withType:(RPSampleBufferType) sampleBufferType;
```

## Parameters

- `sampleBuffer`: A [CMSampleBufferRef](../../coremedia/cmsamplebuffer.md) object containing either audio or video data.
- `sampleBufferType`: An [RPSampleBufferType](../rpsamplebuffertype.md) identifying the media type of the recorded sample.

<a id="Discussion"></a>

## Discussion

This method handles buffers of all sample buffer types throughout each broadcast. If no audio is available — for example, if the microphone isn’t capturing input — ReplayKit provides audio buffers whose samples represent continuous silence.

ReplayKit provides sample buffers sequentially. After invoking this method with a sample buffer, ReplayKit won’t invoke the method again for any sample buffer type until the current invocation returns.

The sample buffer passed to this method is available only until the method returns. You shouldn’t keep a reference to the sample buffer after the method returns.

## See Also

### Handling Sample Buffer Clips

- [broadcastStartedWithSetupInfo:](broadcaststarted%28withsetupinfo_%29.md): Deprecated. Perform any required actions after starting a live broadcast.
- [broadcastPaused](broadcastpaused%28%29.md): Deprecated. Perform any required actions after a live broadcast is paused.
- [broadcastResumed](broadcastresumed%28%29.md): Deprecated. Perform any required actions after a live broadcast is resumed.
- [broadcastFinished](broadcastfinished%28%29.md): Deprecated. Perform any required actions after a live broadcast is finished.
- [broadcastAnnotatedWithApplicationInfo:](broadcastannotated%28withapplicationinfo_%29.md): Deprecated. Perform any required actions after starting a live broadcast.
- [RPApplicationInfoBundleIdentifierKey](../rpapplicationinfobundleidentifierkey.md): Deprecated. The key to retrieve the app’s bundle identifier from the user-information dictionary.
- [RPVideoSampleOrientationKey](../rpvideosampleorientationkey.md): Deprecated. The sample attachment key that describes the video orientation.
- [finishBroadcastWithError:](finishbroadcastwitherror%28__%29.md): Deprecated. Stops the broadcast and passes an error back to the broadcasting app.
