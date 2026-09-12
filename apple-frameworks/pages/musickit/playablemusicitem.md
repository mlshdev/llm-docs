> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/playablemusicitem](https://developer.apple.com/documentation/musickit/playablemusicitem)

# PlayableMusicItem

**Framework:** MusicKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

A set of properties that a music player uses to initiate playback for a music item.

## Declaration

```swift
protocol PlayableMusicItem : MusicItem
```

## Topics

### Instance Properties

- [playParameters](playablemusicitem/playparameters.md): The parameters to use to play the music item.

## Relationships

### Inherits From

- [MusicItem](musicitem.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [Album](album.md)
- [MusicPlayer.Queue.Entry.Item](musicplayer/queue/entry/item-swift.enum.md)
- [Playlist](playlist.md)
- [Playlist.Entry](playlist/entry.md)
- [Playlist.Entry.Item](playlist/entry/item-swift.enum.md)
- [RecentlyPlayedMusicItem](recentlyplayedmusicitem.md)
- [Song](song.md)
- [Station](station.md)
- [Track](track.md)

## See Also

### Playback

- [ApplicationMusicPlayer](applicationmusicplayer.md): An object your app uses to play music in a way that doesn’t affect the Music app’s state.
- [SystemMusicPlayer](systemmusicplayer.md): An object your app uses to play music by controlling the Music app’s state.
- [MusicPlayer](musicplayer.md): An object your app uses to play music.
- [PlayParameters](playparameters.md): An opaque object that represents parameters to initiate playback of a playable music item using a music player.
