> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcastsamplehandler/broadcastpaused()](https://developer.apple.com/documentation/replaykit/rpbroadcastsamplehandler/broadcastpaused())

# broadcastPaused() (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Perform any required actions after a live broadcast is paused.

> No longer supported

## Declaration

```swift
func broadcastPaused()
```

<a id="Discussion"></a>

## Discussion

ReplayKit calls this method when the the broadcasting app calls its [pauseBroadcast()](../rpbroadcastcontroller/pausebroadcast%28%29.md) method.

## See Also

### Handling Sample Buffer Clips

- [broadcastStarted(withSetupInfo:)](broadcaststarted%28withsetupinfo_%29.md): Deprecated. Perform any required actions after starting a live broadcast.
- [broadcastResumed()](broadcastresumed%28%29.md): Deprecated. Perform any required actions after a live broadcast is resumed.
- [broadcastFinished()](broadcastfinished%28%29.md): Deprecated. Perform any required actions after a live broadcast is finished.
- [broadcastAnnotated(withApplicationInfo:)](broadcastannotated%28withapplicationinfo_%29.md): Deprecated. Perform any required actions after starting a live broadcast.
- [RPApplicationInfoBundleIdentifierKey](../rpapplicationinfobundleidentifierkey.md): Deprecated. The key to retrieve the app’s bundle identifier from the user-information dictionary.
- [processSampleBuffer(\_:with:)](processsamplebuffer%28__with_%29.md): Deprecated. Processes video and audio data as it becomes available during a live broadcast.
- [RPVideoSampleOrientationKey](../rpvideosampleorientationkey.md): Deprecated. The sample attachment key that describes the video orientation.
- [finishBroadcastWithError(\_:)](finishbroadcastwitherror%28__%29.md): Deprecated. Stops the broadcast and passes an error back to the broadcasting app.

# broadcastPaused (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Perform any required actions after a live broadcast is paused.

> No longer supported

## Declaration

```objectivec
- (void) broadcastPaused;
```

<a id="Discussion"></a>

## Discussion

ReplayKit calls this method when the the broadcasting app calls its [pauseBroadcast](../rpbroadcastcontroller/pausebroadcast%28%29.md) method.

## See Also

### Handling Sample Buffer Clips

- [broadcastStartedWithSetupInfo:](broadcaststarted%28withsetupinfo_%29.md): Deprecated. Perform any required actions after starting a live broadcast.
- [broadcastResumed](broadcastresumed%28%29.md): Deprecated. Perform any required actions after a live broadcast is resumed.
- [broadcastFinished](broadcastfinished%28%29.md): Deprecated. Perform any required actions after a live broadcast is finished.
- [broadcastAnnotatedWithApplicationInfo:](broadcastannotated%28withapplicationinfo_%29.md): Deprecated. Perform any required actions after starting a live broadcast.
- [RPApplicationInfoBundleIdentifierKey](../rpapplicationinfobundleidentifierkey.md): Deprecated. The key to retrieve the app’s bundle identifier from the user-information dictionary.
- [processSampleBuffer:withType:](processsamplebuffer%28__with_%29.md): Deprecated. Processes video and audio data as it becomes available during a live broadcast.
- [RPVideoSampleOrientationKey](../rpvideosampleorientationkey.md): Deprecated. The sample attachment key that describes the video orientation.
- [finishBroadcastWithError:](finishbroadcastwitherror%28__%29.md): Deprecated. Stops the broadcast and passes an error back to the broadcasting app.
