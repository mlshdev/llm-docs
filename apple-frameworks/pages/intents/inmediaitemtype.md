> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediaitemtype](https://developer.apple.com/documentation/intents/inmediaitemtype)

# INMediaItemType (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

The type of content the media item describes.

## Declaration

```swift
enum INMediaItemType
```

## Topics

### Stations

- [INMediaItemType.station](inmediaitemtype/station.md): A media type that indicates a station.
- [INMediaItemType.radioStation](inmediaitemtype/radiostation.md): A media type that indicates a radio station.
- [INMediaItemType.algorithmicRadioStation](inmediaitemtype/algorithmicradiostation.md): A media type that indicates related content.

### Music

- [INMediaItemType.album](inmediaitemtype/album.md): A media type that indicates an album.
- [INMediaItemType.artist](inmediaitemtype/artist.md): A media type that indicates an artist.
- [INMediaItemType.musicStation](inmediaitemtype/musicstation.md): A media type that indicates a music station.
- [INMediaItemType.musicVideo](inmediaitemtype/musicvideo.md): A media type that indicates a music video.
- [INMediaItemType.playlist](inmediaitemtype/playlist.md): A media type that indicates a playlist of music.
- [INMediaItemType.song](inmediaitemtype/song.md): A media type that indicates a song.
- [INMediaItemType.music](inmediaitemtype/music.md): A media type that indicates music.

### Movie and TV

- [INMediaItemType.movie](inmediaitemtype/movie.md): A media type that indicates a movie.
- [INMediaItemType.tvShow](inmediaitemtype/tvshow.md): A media type that indicates a TV show or series.
- [INMediaItemType.tvShowEpisode](inmediaitemtype/tvshowepisode.md): A media type that indicates an episode of a TV show or series.

### Podcast

- [INMediaItemType.podcastEpisode](inmediaitemtype/podcastepisode.md): A media type that indicates a podcast episode.
- [INMediaItemType.podcastPlaylist](inmediaitemtype/podcastplaylist.md): A media type that indicates a playlist of podcast episodes.
- [INMediaItemType.podcastShow](inmediaitemtype/podcastshow.md): A media type that indicates a podcast show.
- [INMediaItemType.podcastStation](inmediaitemtype/podcaststation.md): A media type that indicates a podcast station.

### Audio Book

- [INMediaItemType.audioBook](inmediaitemtype/audiobook.md): A media type that indicates an audio book.

### News

- [INMediaItemType.news](inmediaitemtype/news.md): A media type that indicates news.

### General

- [INMediaItemType.unknown](inmediaitemtype/unknown.md): A media type that indicates an unknown type.
- [INMediaItemType.genre](inmediaitemtype/genre.md): A media type that indicates a genre.

### Initializers

- [init(rawValue:)](inmediaitemtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing the Media Item

- [artwork](inmediaitem/artwork.md): Artwork for the media item.
- [identifier](inmediaitem/identifier.md): The value your app uses to identify the media item.
- [title](inmediaitem/title.md): The media item title.
- [artist](inmediaitem/artist.md): The artist associated with the media item.
- [type](inmediaitem/type.md): The media item type.

# INMediaItemType (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

The type of content the media item describes.

## Declaration

```objectivec
enum INMediaItemType : NSInteger;
```

## Topics

### Stations

- [INMediaItemTypeStation](inmediaitemtype/station.md): A media type that indicates a station.
- [INMediaItemTypeRadioStation](inmediaitemtype/radiostation.md): A media type that indicates a radio station.
- [INMediaItemTypeAlgorithmicRadioStation](inmediaitemtype/algorithmicradiostation.md): A media type that indicates related content.

### Music

- [INMediaItemTypeAlbum](inmediaitemtype/album.md): A media type that indicates an album.
- [INMediaItemTypeArtist](inmediaitemtype/artist.md): A media type that indicates an artist.
- [INMediaItemTypeMusicStation](inmediaitemtype/musicstation.md): A media type that indicates a music station.
- [INMediaItemTypeMusicVideo](inmediaitemtype/musicvideo.md): A media type that indicates a music video.
- [INMediaItemTypePlaylist](inmediaitemtype/playlist.md): A media type that indicates a playlist of music.
- [INMediaItemTypeSong](inmediaitemtype/song.md): A media type that indicates a song.
- [INMediaItemTypeMusic](inmediaitemtype/music.md): A media type that indicates music.

### Movie and TV

- [INMediaItemTypeMovie](inmediaitemtype/movie.md): A media type that indicates a movie.
- [INMediaItemTypeTVShow](inmediaitemtype/tvshow.md): A media type that indicates a TV show or series.
- [INMediaItemTypeTVShowEpisode](inmediaitemtype/tvshowepisode.md): A media type that indicates an episode of a TV show or series.

### Podcast

- [INMediaItemTypePodcastEpisode](inmediaitemtype/podcastepisode.md): A media type that indicates a podcast episode.
- [INMediaItemTypePodcastPlaylist](inmediaitemtype/podcastplaylist.md): A media type that indicates a playlist of podcast episodes.
- [INMediaItemTypePodcastShow](inmediaitemtype/podcastshow.md): A media type that indicates a podcast show.
- [INMediaItemTypePodcastStation](inmediaitemtype/podcaststation.md): A media type that indicates a podcast station.

### Audio Book

- [INMediaItemTypeAudioBook](inmediaitemtype/audiobook.md): A media type that indicates an audio book.

### News

- [INMediaItemTypeNews](inmediaitemtype/news.md): A media type that indicates news.

### General

- [INMediaItemTypeUnknown](inmediaitemtype/unknown.md): A media type that indicates an unknown type.
- [INMediaItemTypeGenre](inmediaitemtype/genre.md): A media type that indicates a genre.

## See Also

### Describing the Media Item

- [artwork](inmediaitem/artwork.md): Artwork for the media item.
- [identifier](inmediaitem/identifier.md): The value your app uses to identify the media item.
- [title](inmediaitem/title.md): The media item title.
- [artist](inmediaitem/artist.md): The artist associated with the media item.
- [type](inmediaitem/type.md): The media item type.
