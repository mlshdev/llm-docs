> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/timecontrolstatus-swift.enum/waitingtoplayatspecifiedrate](https://developer.apple.com/documentation/avfoundation/avplayer/timecontrolstatus-swift.enum/waitingtoplayatspecifiedrate)

# AVPlayer.TimeControlStatus.waitingToPlayAtSpecifiedRate (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A state that indicates that the player is waiting for network conditions to improve before it can start or resume playback.

## Declaration

```swift
case waitingToPlayAtSpecifiedRate
```

<a id="Discussion"></a>

## Discussion

The player enters this state in the following conditions:

- Playback stalls because the playback buffer is empty.
- The playback rate changes from zero to a nonzero value and there isn’t enough media to start playback.
- The value of its [currentItem](../currentitem.md) property is `nil`.

In this state, the value of the [rate](../rate.md) property doesn’t indicate the current playback rate, but the rate at which playback starts or resumes. Refer to the value of [reasonForWaitingToPlay](../reasonforwaitingtoplay.md) for details about the player is waiting and the conditions that allow its status to change to [AVPlayer.TimeControlStatus.playing](playing.md).

> **Tip**

>  While waiting for buffering, you can attempt to start playback of any available media data by calling [playImmediately(atRate:)](../playimmediately%28atrate_%29.md).

## See Also

### Status values

- [AVPlayer.TimeControlStatus.paused](paused.md): A state that indicates the player paused playback indefinitely.
- [AVPlayer.TimeControlStatus.playing](playing.md): A state that indicates that the player is currently playing media.

# AVPlayerTimeControlStatusWaitingToPlayAtSpecifiedRate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A state that indicates that the player is waiting for network conditions to improve before it can start or resume playback.

## Declaration

```objectivec
AVPlayerTimeControlStatusWaitingToPlayAtSpecifiedRate
```

<a id="Discussion"></a>

## Discussion

The player enters this state in the following conditions:

- Playback stalls because the playback buffer is empty.
- The playback rate changes from zero to a nonzero value and there isn’t enough media to start playback.
- The value of its [currentItem](../currentitem.md) property is `nil`.

In this state, the value of the [rate](../rate.md) property doesn’t indicate the current playback rate, but the rate at which playback starts or resumes. Refer to the value of [reasonForWaitingToPlay](../reasonforwaitingtoplay.md) for details about the player is waiting and the conditions that allow its status to change to [AVPlayerTimeControlStatusPlaying](playing.md).

> **Tip**

>  While waiting for buffering, you can attempt to start playback of any available media data by calling [playImmediatelyAtRate:](../playimmediately%28atrate_%29.md).

## See Also

### Status values

- [AVPlayerTimeControlStatusPaused](paused.md): A state that indicates the player paused playback indefinitely.
- [AVPlayerTimeControlStatusPlaying](playing.md): A state that indicates that the player is currently playing media.
