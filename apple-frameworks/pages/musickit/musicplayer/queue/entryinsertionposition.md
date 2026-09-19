> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musickit/musicplayer/queue/entryinsertionposition

# MusicPlayer.Queue.EntryInsertionPosition

**Framework:** MusicKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

An enumeration for the various supported positions for inserting playable music items or entries in the playback queue.

## Declaration

```swift
enum EntryInsertionPosition
```

## Topics

### Enumeration Cases

- [MusicPlayer.Queue.EntryInsertionPosition.afterCurrentEntry](entryinsertionposition/aftercurrententry.md): A position that allows prepending entries in the playback queue, similar to the Play Next feature in the Music app.
- [MusicPlayer.Queue.EntryInsertionPosition.tail](entryinsertionposition/tail.md): A position that allows appending entries in the playback queue, similar to the Play Later feature in the Music app.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
