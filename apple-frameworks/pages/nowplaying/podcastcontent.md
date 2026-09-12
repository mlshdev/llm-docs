> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/podcastcontent](https://developer.apple.com/documentation/nowplaying/podcastcontent)

# PodcastContent

**Framework:** Now Playing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Content representing a podcast episode.

## Declaration

```swift
struct PodcastContent
```

## Mentioned In

- [Publishing media sessions](publishing-media-sessions.md)

<a id="overview"></a>

## Overview

Use this type for podcast playback, including individual episodes and series.

## Topics

### Initializers

- [init(id:episodeTitle:showName:releaseDate:type:duration:artwork:)](podcastcontent/init%28id_episodetitle_showname_releasedate_type_duration_artwork_%29.md): Creates podcast episode content.
- [init(id:episodeTitle:showName:releaseDate:type:duration:artwork:animatedArtwork:)](podcastcontent/init%28id_episodetitle_showname_releasedate_type_duration_artwork_animatedartwork_%29.md): Creates podcast episode content with static and animated artwork.

### Instance Properties

- [animatedArtwork](podcastcontent/animatedartwork.md): Animated artwork for this content.
- [artwork](podcastcontent/artwork.md): Artwork for this content.
- [duration](podcastcontent/duration.md): The duration of this content.
- [episodeTitle](podcastcontent/episodetitle.md): The title of the podcast episode.
- [releaseDate](podcastcontent/releasedate.md): The release date of the episode.
- [showName](podcastcontent/showname.md): The name of the podcast show.
- [type](podcastcontent/type.md): The media type (audio or video).

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [MediaContentRepresentable](mediacontentrepresentable.md)

## See Also

### Presenting content

- [MediaContentRepresentable](mediacontentrepresentable.md): A protocol that describes media content being played.
- [MusicContent](musiccontent.md): Content representing a music track or song.
- [MovieContent](moviecontent.md): Content representing a movie.
- [TVShowContent](tvshowcontent.md): Content representing a TV show episode.
- [BookContent](bookcontent.md): Content representing an audiobook or book being read aloud.
- [RadioContent](radiocontent.md): Content representing a radio station or live audio stream.
- [HomeMediaContent](homemediacontent.md): Content representing home media or ambient content.
- [GenericContent](genericcontent.md): Content representing generic or unspecified media.
