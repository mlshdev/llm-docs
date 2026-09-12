> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicplayer/queue/entry](https://developer.apple.com/documentation/musickit/musicplayer/queue/entry)

# MusicPlayer.Queue.Entry

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

An entry for the playback queue of the music player.

## Declaration

```swift
struct Entry
```

## Topics

### Initializers

- [init(\_:startTime:endTime:)](entry/init%28__starttime_endtime_%29.md): Creates an entry of the playback queue with a playable music item, and optional start and end times.

### Instance Properties

- [artwork](entry/artwork.md): The artwork of this entry of the playback queue.
- [endTime](entry/endtime.md): An optional end time for this entry of the playback queue.
- [id](entry/id.md): The unique identifier of this entry of the playback queue.
- [isTransient](entry/istransient.md): A Boolean value that indicates whether this entry of the playback queue has a transient music item.
- [item](entry/item-swift.property.md): A music item that corresponds to this entry of the playback queue, such as a song or a music video.
- [startTime](entry/starttime.md): An optional start time for this entry of the playback queue.
- [subtitle](entry/subtitle.md): The subtitle of this entry of the playback queue.
- [title](entry/title.md): The title of this entry of the playback queue.
- [transientItem](entry/transientitem.md): A music item that corresponds to a recently inserted entry in the playback queue that has underlying items the music player still needs to resolve.

### Enumerations

- [MusicPlayer.Queue.Entry.Item](entry/item-swift.enum.md): An item that corresponds to an entry in the playback queue.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
