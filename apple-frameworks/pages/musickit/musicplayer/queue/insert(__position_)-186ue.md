> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musickit/musicplayer/queue/insert(_:position:)-186ue

# insert(\_:position:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

Inserts a playable music item into the playback queue.

## Declaration

```swift
func insert<PlayableMusicItemType>(_ playableItem: PlayableMusicItemType, position: MusicPlayer.Queue.EntryInsertionPosition) async throws where PlayableMusicItemType : PlayableMusicItem
```
