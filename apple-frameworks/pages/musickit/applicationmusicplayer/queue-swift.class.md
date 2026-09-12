> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/applicationmusicplayer/queue-swift.class](https://developer.apple.com/documentation/musickit/applicationmusicplayer/queue-swift.class)

# ApplicationMusicPlayer.Queue

**Framework:** MusicKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

## Declaration

```swift
class Queue
```

## Topics

### Structures

- [ApplicationMusicPlayer.Queue.Entries](queue-swift.class/entries-swift.struct.md)

### Initializers

- [init(\_:startingAt:)](queue-swift.class/init%28__startingat_%29.md): Creates a playback queue with playback queue entries.
- [init(album:startingAt:)](queue-swift.class/init%28album_startingat_%29.md): Creates a playback queue with an album and a specific track for the player to start playback.
- [init(arrayLiteral:)](queue-swift.class/init%28arrayliteral_%29.md)
- [init(for:startingAt:)](queue-swift.class/init%28for_startingat_%29.md): Creates a playback queue with playable music items.
- [init(playlist:startingAt:)](queue-swift.class/init%28playlist_startingat_%29.md): Creates a playback queue with a playlist and a specific playlist entry for the player to start playback.

### Instance Properties

- [entries](queue-swift.class/entries-swift.property.md)

## Relationships

### Inherits From

- [MusicPlayer.Queue](../musicplayer/queue.md)

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [ObservableObject](../../combine/observableobject.md)
