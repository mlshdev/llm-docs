> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/applicationmusicplayer/queue-swift.class/init(_:startingat:)](https://developer.apple.com/documentation/musickit/applicationmusicplayer/queue-swift.class/init(_:startingat:))

# init(\_:startingAt:)

**Framework:** MusicKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a playback queue with playback queue entries.

## Declaration

```swift
required init<S>(_ entries: S, startingAt startEntry: S.Element? = nil) where S : Sequence, S.Element == MusicPlayer.Queue.Entry
```
