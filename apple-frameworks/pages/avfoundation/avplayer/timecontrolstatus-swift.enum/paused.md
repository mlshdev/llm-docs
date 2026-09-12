> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/timecontrolstatus-swift.enum/paused](https://developer.apple.com/documentation/avfoundation/avplayer/timecontrolstatus-swift.enum/paused)

# AVPlayer.TimeControlStatus.paused (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A state that indicates the player paused playback indefinitely.

## Declaration

```swift
case paused
```

<a id="Discussion"></a>

## Discussion

In this state, the player pauses indefinitely and doesn’t resume playback until you call its play method. You can also resume playback if the player has sufficent data to start playback by calling the player’s [setRate(\_:time:atHostTime:)](../setrate%28__time_athosttime_%29.md) or [playImmediately(atRate:)](../playimmediately%28atrate_%29.md) method with a nonzero rate value.

## See Also

### Status values

- [AVPlayer.TimeControlStatus.waitingToPlayAtSpecifiedRate](waitingtoplayatspecifiedrate.md): A state that indicates that the player is waiting for network conditions to improve before it can start or resume playback.
- [AVPlayer.TimeControlStatus.playing](playing.md): A state that indicates that the player is currently playing media.

# AVPlayerTimeControlStatusPaused (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A state that indicates the player paused playback indefinitely.

## Declaration

```objectivec
AVPlayerTimeControlStatusPaused
```

<a id="Discussion"></a>

## Discussion

In this state, the player pauses indefinitely and doesn’t resume playback until you call its play method. You can also resume playback if the player has sufficent data to start playback by calling the player’s [setRate:time:atHostTime:](../setrate%28__time_athosttime_%29.md) or [playImmediatelyAtRate:](../playimmediately%28atrate_%29.md) method with a nonzero rate value.

## See Also

### Status values

- [AVPlayerTimeControlStatusWaitingToPlayAtSpecifiedRate](waitingtoplayatspecifiedrate.md): A state that indicates that the player is waiting for network conditions to improve before it can start or resume playback.
- [AVPlayerTimeControlStatusPlaying](playing.md): A state that indicates that the player is currently playing media.
