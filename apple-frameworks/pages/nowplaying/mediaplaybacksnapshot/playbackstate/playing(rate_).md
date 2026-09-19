> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/nowplaying/mediaplaybacksnapshot/playbackstate/playing(rate:)

# MediaPlaybackSnapshot.PlaybackState.playing(rate:)

**Framework:** Now Playing  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Content is currently playing.

## Declaration

```swift
case playing(rate: Float = 1.0)
```

<a id="discussion"></a>

## Discussion

The associated `rate` reflects the actual speed at which content is advancing, including temporary changes like seeking (for example, `5.0` during fast-forward).
