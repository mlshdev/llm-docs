> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicplayer/queue](https://developer.apple.com/documentation/musickit/musicplayer/queue)

# MusicPlayer.Queue

**Framework:** MusicKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

A representation of the playback queue for a music player.

## Declaration

```swift
class Queue
```

## Topics

### Structures

- [MusicPlayer.Queue.Entry](queue/entry.md): An entry for the playback queue of the music player.

### Initializers

- [init(\_:startingAt:)](queue/init%28__startingat_%29.md): Creates a playback queue with playback queue entries.
- [init(album:startingAt:)](queue/init%28album_startingat_%29.md): Creates a playback queue with an album and a specific track for the player to start playback.
- [init(for:startingAt:)](queue/init%28for_startingat_%29.md): Creates a playback queue with playable music items.
- [init(playlist:startingAt:)](queue/init%28playlist_startingat_%29.md): Creates a playback queue with a playlist and a specific playlist entry for the player to start playback.

### Instance Properties

- [affectsListeningHistory](queue/affectslisteninghistory.md): A Boolean value that indicates whether this playing this queue will affect the user’s listening history. Defaults to `true`.
- [currentEntry](queue/currententry.md): The currently active entry in the playback queue.

### Instance Methods

- [insert(\_:position:)](queue/insert%28__position_%29-186ue.md): Inserts a playable music item into the playback queue.
- [insert(\_:position:)](queue/insert%28__position_%29-228pb.md): Inserts playable music items into the playback queue.
- [insert(\_:position:)](queue/insert%28__position_%29-3lv7k.md): Inserts an entry into the playback queue.
- [insert(\_:position:)](queue/insert%28__position_%29-58ohm.md): Inserts entries into the playback queue.

### Enumerations

- [MusicPlayer.Queue.EntryInsertionPosition](queue/entryinsertionposition.md): An enumeration for the various supported positions for inserting playable music items or entries in the playback queue.

## Relationships

### Inherited By

- [ApplicationMusicPlayer.Queue](../applicationmusicplayer/queue-swift.class.md)

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [ObservableObject](../../combine/observableobject.md)
