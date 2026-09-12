> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcastsamplehandler](https://developer.apple.com/documentation/replaykit/rpbroadcastsamplehandler)

# RPBroadcastSampleHandler (Swift)

**Framework:** ReplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object that processes buffer objects as received from ReplayKit.

> No longer supported

## Declaration

```swift
class RPBroadcastSampleHandler
```

<a id="overview"></a>

## Overview

To handle [CMSampleBuffer](../coremedia/cmsamplebuffer.md) objects as captured by ReplayKit, you subclass `RPBroadcastSampleHandler`. You enable this mode of handling by setting `RPBroadcastProcessMode` in the extension’s `Info.plist` file to `RPBroadcastProcessModeSampleBuffer`.

In your subclass, implement the [processSampleBuffer(\_:with:)](rpbroadcastsamplehandler/processsamplebuffer%28__with_%29.md) method to handle video and audio buffers, as well as the [broadcastStarted(withSetupInfo:)](rpbroadcastsamplehandler/broadcaststarted%28withsetupinfo_%29.md), [broadcastFinished()](rpbroadcastsamplehandler/broadcastfinished%28%29.md), [broadcastPaused()](rpbroadcastsamplehandler/broadcastpaused%28%29.md), and [broadcastResumed()](rpbroadcastsamplehandler/broadcastresumed%28%29.md) methods to handle starting and stopping the broadcast.

ReplayKit invokes methods in your `RPBroadcastSampleHandler` subclass in a serial fashion. After invoking one method, ReplayKit won’t invoke another method until the first method returns. That means it’s safe for your implementations to update their stored state without the use of locks or synchronization to provide thread safety.

## Topics

### Handling Sample Buffer Clips

- [broadcastStarted(withSetupInfo:)](rpbroadcastsamplehandler/broadcaststarted%28withsetupinfo_%29.md): Deprecated. Perform any required actions after starting a live broadcast.
- [broadcastPaused()](rpbroadcastsamplehandler/broadcastpaused%28%29.md): Deprecated. Perform any required actions after a live broadcast is paused.
- [broadcastResumed()](rpbroadcastsamplehandler/broadcastresumed%28%29.md): Deprecated. Perform any required actions after a live broadcast is resumed.
- [broadcastFinished()](rpbroadcastsamplehandler/broadcastfinished%28%29.md): Deprecated. Perform any required actions after a live broadcast is finished.
- [broadcastAnnotated(withApplicationInfo:)](rpbroadcastsamplehandler/broadcastannotated%28withapplicationinfo_%29.md): Deprecated. Perform any required actions after starting a live broadcast.
- [RPApplicationInfoBundleIdentifierKey](rpapplicationinfobundleidentifierkey.md): Deprecated. The key to retrieve the app’s bundle identifier from the user-information dictionary.
- [processSampleBuffer(\_:with:)](rpbroadcastsamplehandler/processsamplebuffer%28__with_%29.md): Deprecated. Processes video and audio data as it becomes available during a live broadcast.
- [RPVideoSampleOrientationKey](rpvideosampleorientationkey.md): Deprecated. The sample attachment key that describes the video orientation.
- [finishBroadcastWithError(\_:)](rpbroadcastsamplehandler/finishbroadcastwitherror%28__%29.md): Deprecated. Stops the broadcast and passes an error back to the broadcasting app.

## Relationships

### Inherits From

- [RPBroadcastHandler](rpbroadcasthandler.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Media Clip Processing

- [RPBroadcastController](rpbroadcastcontroller.md): Deprecated. An object containing methods for starting and controlling a broadcast.
- [RPBroadcastHandler](rpbroadcasthandler.md): Deprecated. An object that sends messages to the broadcasting app.
- [RPBroadcastMP4ClipHandler](rpbroadcastmp4cliphandler.md): Deprecated. An object that processes MP4 movie clips from ReplayKit.

# RPBroadcastSampleHandler (Objective-C)

**Framework:** ReplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object that processes buffer objects as received from ReplayKit.

> No longer supported

## Declaration

```objectivec
@interface RPBroadcastSampleHandler : RPBroadcastHandler
```

<a id="overview"></a>

## Overview

To handle [CMSampleBufferRef](../coremedia/cmsamplebuffer.md) objects as captured by ReplayKit, you subclass `RPBroadcastSampleHandler`. You enable this mode of handling by setting `RPBroadcastProcessMode` in the extension’s `Info.plist` file to `RPBroadcastProcessModeSampleBuffer`.

In your subclass, implement the [processSampleBuffer:withType:](rpbroadcastsamplehandler/processsamplebuffer%28__with_%29.md) method to handle video and audio buffers, as well as the [broadcastStartedWithSetupInfo:](rpbroadcastsamplehandler/broadcaststarted%28withsetupinfo_%29.md), [broadcastFinished](rpbroadcastsamplehandler/broadcastfinished%28%29.md), [broadcastPaused](rpbroadcastsamplehandler/broadcastpaused%28%29.md), and [broadcastResumed](rpbroadcastsamplehandler/broadcastresumed%28%29.md) methods to handle starting and stopping the broadcast.

ReplayKit invokes methods in your `RPBroadcastSampleHandler` subclass in a serial fashion. After invoking one method, ReplayKit won’t invoke another method until the first method returns. That means it’s safe for your implementations to update their stored state without the use of locks or synchronization to provide thread safety.

## Topics

### Handling Sample Buffer Clips

- [broadcastStartedWithSetupInfo:](rpbroadcastsamplehandler/broadcaststarted%28withsetupinfo_%29.md): Deprecated. Perform any required actions after starting a live broadcast.
- [broadcastPaused](rpbroadcastsamplehandler/broadcastpaused%28%29.md): Deprecated. Perform any required actions after a live broadcast is paused.
- [broadcastResumed](rpbroadcastsamplehandler/broadcastresumed%28%29.md): Deprecated. Perform any required actions after a live broadcast is resumed.
- [broadcastFinished](rpbroadcastsamplehandler/broadcastfinished%28%29.md): Deprecated. Perform any required actions after a live broadcast is finished.
- [broadcastAnnotatedWithApplicationInfo:](rpbroadcastsamplehandler/broadcastannotated%28withapplicationinfo_%29.md): Deprecated. Perform any required actions after starting a live broadcast.
- [RPApplicationInfoBundleIdentifierKey](rpapplicationinfobundleidentifierkey.md): Deprecated. The key to retrieve the app’s bundle identifier from the user-information dictionary.
- [processSampleBuffer:withType:](rpbroadcastsamplehandler/processsamplebuffer%28__with_%29.md): Deprecated. Processes video and audio data as it becomes available during a live broadcast.
- [RPVideoSampleOrientationKey](rpvideosampleorientationkey.md): Deprecated. The sample attachment key that describes the video orientation.
- [finishBroadcastWithError:](rpbroadcastsamplehandler/finishbroadcastwitherror%28__%29.md): Deprecated. Stops the broadcast and passes an error back to the broadcasting app.

## Relationships

### Inherits From

- [RPBroadcastHandler](rpbroadcasthandler.md)

## See Also

### Media Clip Processing

- [RPBroadcastController](rpbroadcastcontroller.md): Deprecated. An object containing methods for starting and controlling a broadcast.
- [RPBroadcastHandler](rpbroadcasthandler.md): Deprecated. An object that sends messages to the broadcasting app.
- [RPBroadcastMP4ClipHandler](rpbroadcastmp4cliphandler.md): Deprecated. An object that processes MP4 movie clips from ReplayKit.
