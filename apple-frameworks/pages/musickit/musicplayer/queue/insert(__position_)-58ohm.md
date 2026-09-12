> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicplayer/queue/insert(_:position:)-58ohm](https://developer.apple.com/documentation/musickit/musicplayer/queue/insert(_:position:)-58ohm)

# insert(\_:position:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

Inserts entries into the playback queue.

## Declaration

```swift
func insert<S>(_ entries: S, position: MusicPlayer.Queue.EntryInsertionPosition) async throws where S : Sequence, S.Element == MusicPlayer.Queue.Entry
```
