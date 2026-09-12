> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/mediaserviceswerelostnotification](https://developer.apple.com/documentation/avfaudio/avaudiosession/mediaserviceswerelostnotification)

# mediaServicesWereLostNotification (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A notification the system posts when it terminates the media server.

## Declaration

```swift
class let mediaServicesWereLostNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The system posts this notification when the media server first becomes unavailable. Most apps don’t need to subscribe to this notification and should instead subscribe to the [mediaServicesWereResetNotification](mediaserviceswereresetnotification.md) notification. However, you can use this notification as a cue to take any appropriate steps to handle requests that come in before the server restarts.

This notification has no [userInfo](../../foundation/nsnotification/userinfo.md) dictionary.

The system posts this notification on the main thread.

## See Also

### Handling a change of media services

- [mediaServicesWereResetNotification](mediaserviceswereresetnotification.md): A notification the system posts when the media server restarts.

# AVAudioSessionMediaServicesWereLostNotification (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A notification the system posts when it terminates the media server.

## Declaration

```objectivec
extern NSNotificationName const AVAudioSessionMediaServicesWereLostNotification;
```

<a id="Discussion"></a>

## Discussion

The system posts this notification when the media server first becomes unavailable. Most apps don’t need to subscribe to this notification and should instead subscribe to the [AVAudioSessionMediaServicesWereResetNotification](mediaserviceswereresetnotification.md) notification. However, you can use this notification as a cue to take any appropriate steps to handle requests that come in before the server restarts.

This notification has no [userInfo](../../foundation/nsnotification/userinfo.md) dictionary.

The system posts this notification on the main thread.

## See Also

### Handling a change of media services

- [AVAudioSessionMediaServicesWereResetNotification](mediaserviceswereresetnotification.md): A notification the system posts when the media server restarts.
