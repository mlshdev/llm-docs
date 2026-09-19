> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musickit/musicplayer/playbackstatus/interrupted

# MusicPlayer.PlaybackStatus.interrupted

**Framework:** MusicKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

The music player is in an interrupted state, such as from an incoming phone call.

## Declaration

```swift
case interrupted
```

<a id="discussion"></a>

## Discussion

When an incoming phone call interrupts the music player, it may resume playing automatically upon ending the call.
