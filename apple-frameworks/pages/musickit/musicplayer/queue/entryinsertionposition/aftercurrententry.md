> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicplayer/queue/entryinsertionposition/aftercurrententry](https://developer.apple.com/documentation/musickit/musicplayer/queue/entryinsertionposition/aftercurrententry)

# MusicPlayer.Queue.EntryInsertionPosition.afterCurrentEntry

**Framework:** MusicKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

A position that allows prepending entries in the playback queue, similar to the Play Next feature in the Music app.

## Declaration

```swift
case afterCurrentEntry
```

<a id="discussion"></a>

## Discussion

Inserting entries after the current one merely enqueues them to play next, and lets the current entry finish playing to the end.

Alternatively, you may change the current entry programmatically by setting the `currentEntry` property of the [queue](../../../applicationmusicplayer/queue-swift.property.md) or [queue](../../../systemmusicplayer/queue.md).
