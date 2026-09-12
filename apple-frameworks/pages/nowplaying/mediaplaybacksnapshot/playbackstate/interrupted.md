> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediaplaybacksnapshot/playbackstate/interrupted](https://developer.apple.com/documentation/nowplaying/mediaplaybacksnapshot/playbackstate/interrupted)

# MediaPlaybackSnapshot.PlaybackState.interrupted

**Framework:** Now Playing  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Playback was interrupted by the system.

## Declaration

```swift
case interrupted
```

<a id="discussion"></a>

## Discussion

Use this state when playback is interrupted by system events such as a phone call or alarm. Your app is responsible for resuming playback when the interruption ends, if appropriate.
