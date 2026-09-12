> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcastsamplehandler/finishbroadcastwitherror(_:)](https://developer.apple.com/documentation/replaykit/rpbroadcastsamplehandler/finishbroadcastwitherror(_:))

# finishBroadcastWithError(\_:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Stops the broadcast and passes an error back to the broadcasting app.

> No longer supported

## Declaration

```swift
func finishBroadcastWithError(_ error: any Error)
```

## Parameters

- `error`: An NSError object that is passed back to the broadcasting app through the [broadcastController(\_:didFinishWithError:)](../rpbroadcastcontrollerdelegate/broadcastcontroller%28__didfinishwitherror_%29.md) method.

<a id="Discussion"></a>

## Discussion

Call this method in your sample handler when it cannot proceed due to an error.

## See Also

### Handling Sample Buffer Clips

- [broadcastStarted(withSetupInfo:)](broadcaststarted%28withsetupinfo_%29.md): Deprecated. Perform any required actions after starting a live broadcast.
- [broadcastPaused()](broadcastpaused%28%29.md): Deprecated. Perform any required actions after a live broadcast is paused.
- [broadcastResumed()](broadcastresumed%28%29.md): Deprecated. Perform any required actions after a live broadcast is resumed.
- [broadcastFinished()](broadcastfinished%28%29.md): Deprecated. Perform any required actions after a live broadcast is finished.
- [broadcastAnnotated(withApplicationInfo:)](broadcastannotated%28withapplicationinfo_%29.md): Deprecated. Perform any required actions after starting a live broadcast.
- [RPApplicationInfoBundleIdentifierKey](../rpapplicationinfobundleidentifierkey.md): Deprecated. The key to retrieve the app’s bundle identifier from the user-information dictionary.
- [processSampleBuffer(\_:with:)](processsamplebuffer%28__with_%29.md): Deprecated. Processes video and audio data as it becomes available during a live broadcast.
- [RPVideoSampleOrientationKey](../rpvideosampleorientationkey.md): Deprecated. The sample attachment key that describes the video orientation.

# finishBroadcastWithError: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Stops the broadcast and passes an error back to the broadcasting app.

> No longer supported

## Declaration

```objectivec
- (void) finishBroadcastWithError:(NSError *) error;
```

## Parameters

- `error`: An NSError object that is passed back to the broadcasting app through the [broadcastController:didFinishWithError:](../rpbroadcastcontrollerdelegate/broadcastcontroller%28__didfinishwitherror_%29.md) method.

<a id="Discussion"></a>

## Discussion

Call this method in your sample handler when it cannot proceed due to an error.

## See Also

### Handling Sample Buffer Clips

- [broadcastStartedWithSetupInfo:](broadcaststarted%28withsetupinfo_%29.md): Deprecated. Perform any required actions after starting a live broadcast.
- [broadcastPaused](broadcastpaused%28%29.md): Deprecated. Perform any required actions after a live broadcast is paused.
- [broadcastResumed](broadcastresumed%28%29.md): Deprecated. Perform any required actions after a live broadcast is resumed.
- [broadcastFinished](broadcastfinished%28%29.md): Deprecated. Perform any required actions after a live broadcast is finished.
- [broadcastAnnotatedWithApplicationInfo:](broadcastannotated%28withapplicationinfo_%29.md): Deprecated. Perform any required actions after starting a live broadcast.
- [RPApplicationInfoBundleIdentifierKey](../rpapplicationinfobundleidentifierkey.md): Deprecated. The key to retrieve the app’s bundle identifier from the user-information dictionary.
- [processSampleBuffer:withType:](processsamplebuffer%28__with_%29.md): Deprecated. Processes video and audio data as it becomes available during a live broadcast.
- [RPVideoSampleOrientationKey](../rpvideosampleorientationkey.md): Deprecated. The sample attachment key that describes the video orientation.
