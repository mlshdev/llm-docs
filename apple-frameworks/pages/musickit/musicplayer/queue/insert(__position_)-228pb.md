> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicplayer/queue/insert(_:position:)-228pb](https://developer.apple.com/documentation/musickit/musicplayer/queue/insert(_:position:)-228pb)

# insert(\_:position:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

Inserts playable music items into the playback queue.

## Declaration

```swift
func insert<S, PlayableMusicItemType>(_ playableItems: S, position: MusicPlayer.Queue.EntryInsertionPosition) async throws where S : Sequence, PlayableMusicItemType : PlayableMusicItem, PlayableMusicItemType == S.Element
```
