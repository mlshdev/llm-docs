> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/playbackstallednotification](https://developer.apple.com/documentation/avfoundation/avplayeritem/playbackstallednotification)

# playbackStalledNotification (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A notification the system posts when a player item media doesn’t arrive in time to continue playback.

## Declaration

```swift
class let playbackStalledNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification’s object is the player item whose playback is unable to continue due to network delays. Streaming-media playback continues after the player item retrieves a sufficient amount of data. File-based playback doesn’t continue.

> **Important**

>  The system may post this notification on a thread other than the one you use to register the observer.

## See Also

### Observing notifications

- [didPlayToEndTimeNotification](didplaytoendtimenotification.md): A notification the system posts when a player item plays to its end time.
- [failedToPlayToEndTimeNotification](failedtoplaytoendtimenotification.md): A notification that the system posts when a player item fails to play to its end time.
- [timeJumpedNotification](timejumpednotification.md): A notification the system posts when a player item’s time changes discontinuously.
- [mediaSelectionDidChangeNotification](mediaselectiondidchangenotification.md): A notification the player item posts when its media selection changes.
- [recommendedTimeOffsetFromLiveDidChangeNotification](recommendedtimeoffsetfromlivedidchangenotification.md): A notification the player item posts when its offset from the live time changes.
- [newAccessLogEntryNotification](newaccesslogentrynotification.md): A notification the system posts when a player item adds a new entry to its access log.
- [newErrorLogEntryNotification](newerrorlogentrynotification.md): A notification the system posts when a player item adds a new entry to its error log.

# AVPlayerItemPlaybackStalledNotification (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A notification the system posts when a player item media doesn’t arrive in time to continue playback.

## Declaration

```objectivec
extern NSNotificationName const AVPlayerItemPlaybackStalledNotification;
```

<a id="Discussion"></a>

## Discussion

The notification’s object is the player item whose playback is unable to continue due to network delays. Streaming-media playback continues after the player item retrieves a sufficient amount of data. File-based playback doesn’t continue.

> **Important**

>  The system may post this notification on a thread other than the one you use to register the observer.

## See Also

### Observing notifications

- [AVPlayerItemDidPlayToEndTimeNotification](didplaytoendtimenotification.md): A notification the system posts when a player item plays to its end time.
- [AVPlayerItemFailedToPlayToEndTimeNotification](failedtoplaytoendtimenotification.md): A notification that the system posts when a player item fails to play to its end time.
- [AVPlayerItemTimeJumpedNotification](timejumpednotification.md): A notification the system posts when a player item’s time changes discontinuously.
- [AVPlayerItemMediaSelectionDidChangeNotification](mediaselectiondidchangenotification.md): A notification the player item posts when its media selection changes.
- [AVPlayerItemRecommendedTimeOffsetFromLiveDidChangeNotification](recommendedtimeoffsetfromlivedidchangenotification.md): A notification the player item posts when its offset from the live time changes.
- [AVPlayerItemNewAccessLogEntryNotification](newaccesslogentrynotification.md): A notification the system posts when a player item adds a new entry to its access log.
- [AVPlayerItemNewErrorLogEntryNotification](newerrorlogentrynotification.md): A notification the system posts when a player item adds a new entry to its error log.
