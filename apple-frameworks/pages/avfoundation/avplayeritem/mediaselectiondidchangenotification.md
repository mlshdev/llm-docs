> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/mediaselectiondidchangenotification](https://developer.apple.com/documentation/avfoundation/avplayeritem/mediaselectiondidchangenotification)

# mediaSelectionDidChangeNotification (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A notification the player item posts when its media selection changes.

## Declaration

```swift
class let mediaSelectionDidChangeNotification: NSNotification.Name
```

## See Also

### Observing notifications

- [didPlayToEndTimeNotification](didplaytoendtimenotification.md): A notification the system posts when a player item plays to its end time.
- [failedToPlayToEndTimeNotification](failedtoplaytoendtimenotification.md): A notification that the system posts when a player item fails to play to its end time.
- [timeJumpedNotification](timejumpednotification.md): A notification the system posts when a player item’s time changes discontinuously.
- [playbackStalledNotification](playbackstallednotification.md): A notification the system posts when a player item media doesn’t arrive in time to continue playback.
- [recommendedTimeOffsetFromLiveDidChangeNotification](recommendedtimeoffsetfromlivedidchangenotification.md): A notification the player item posts when its offset from the live time changes.
- [newAccessLogEntryNotification](newaccesslogentrynotification.md): A notification the system posts when a player item adds a new entry to its access log.
- [newErrorLogEntryNotification](newerrorlogentrynotification.md): A notification the system posts when a player item adds a new entry to its error log.

# AVPlayerItemMediaSelectionDidChangeNotification (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A notification the player item posts when its media selection changes.

## Declaration

```objectivec
extern NSNotificationName const AVPlayerItemMediaSelectionDidChangeNotification;
```

## See Also

### Observing notifications

- [AVPlayerItemDidPlayToEndTimeNotification](didplaytoendtimenotification.md): A notification the system posts when a player item plays to its end time.
- [AVPlayerItemFailedToPlayToEndTimeNotification](failedtoplaytoendtimenotification.md): A notification that the system posts when a player item fails to play to its end time.
- [AVPlayerItemTimeJumpedNotification](timejumpednotification.md): A notification the system posts when a player item’s time changes discontinuously.
- [AVPlayerItemPlaybackStalledNotification](playbackstallednotification.md): A notification the system posts when a player item media doesn’t arrive in time to continue playback.
- [AVPlayerItemRecommendedTimeOffsetFromLiveDidChangeNotification](recommendedtimeoffsetfromlivedidchangenotification.md): A notification the player item posts when its offset from the live time changes.
- [AVPlayerItemNewAccessLogEntryNotification](newaccesslogentrynotification.md): A notification the system posts when a player item adds a new entry to its access log.
- [AVPlayerItemNewErrorLogEntryNotification](newerrorlogentrynotification.md): A notification the system posts when a player item adds a new entry to its error log.
