> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/applicationmusicplayer/queue-swift.class/init(for:startingat:)](https://developer.apple.com/documentation/musickit/applicationmusicplayer/queue-swift.class/init(for:startingat:))

# init(for:startingAt:)

**Framework:** MusicKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a playback queue with playable music items.

## Declaration

```swift
required init<S, PlayableMusicItemType>(for playableItems: S, startingAt startPlayableItem: S.Element? = nil) where S : Sequence, PlayableMusicItemType : PlayableMusicItem, PlayableMusicItemType == S.Element
```
