> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/moviecontent](https://developer.apple.com/documentation/nowplaying/moviecontent)

# MovieContent

**Framework:** Now Playing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Content representing a movie.

## Declaration

```swift
struct MovieContent
```

## Mentioned In

- [Publishing media sessions](publishing-media-sessions.md)

<a id="overview"></a>

## Overview

Use this type for movie playback, including films and documentaries.

## Topics

### Initializers

- [init(id:title:duration:artwork:)](moviecontent/init%28id_title_duration_artwork_%29.md): Creates movie content.
- [init(id:title:duration:artwork:animatedArtwork:)](moviecontent/init%28id_title_duration_artwork_animatedartwork_%29.md): Creates movie content with static and animated artwork.

### Instance Properties

- [animatedArtwork](moviecontent/animatedartwork.md): Animated artwork for this content.
- [artwork](moviecontent/artwork.md): Artwork for this content.
- [duration](moviecontent/duration.md): The duration of this content.
- [title](moviecontent/title.md): The title of the movie.
- [type](moviecontent/type.md): The media type (always video for movies).

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [MediaContentRepresentable](mediacontentrepresentable.md)

## See Also

### Presenting content

- [MediaContentRepresentable](mediacontentrepresentable.md): A protocol that describes media content being played.
- [MusicContent](musiccontent.md): Content representing a music track or song.
- [PodcastContent](podcastcontent.md): Content representing a podcast episode.
- [TVShowContent](tvshowcontent.md): Content representing a TV show episode.
- [BookContent](bookcontent.md): Content representing an audiobook or book being read aloud.
- [RadioContent](radiocontent.md): Content representing a radio station or live audio stream.
- [HomeMediaContent](homemediacontent.md): Content representing home media or ambient content.
- [GenericContent](genericcontent.md): Content representing generic or unspecified media.
