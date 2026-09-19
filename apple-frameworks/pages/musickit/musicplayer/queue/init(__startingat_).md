> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musickit/musicplayer/queue/init(_:startingat:)

# init(\_:startingAt:)

**Framework:** MusicKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a playback queue with playback queue entries.

## Declaration

```swift
required init<S>(_ entries: S, startingAt startEntry: S.Element? = nil) where S : Sequence, S.Element == MusicPlayer.Queue.Entry
```
