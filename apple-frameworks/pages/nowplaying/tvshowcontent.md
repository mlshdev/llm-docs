> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/tvshowcontent](https://developer.apple.com/documentation/nowplaying/tvshowcontent)

# TVShowContent

**Framework:** Now Playing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Content representing a TV show episode.

## Declaration

```swift
struct TVShowContent
```

## Mentioned In

- [Publishing media sessions](publishing-media-sessions.md)

<a id="overview"></a>

## Overview

Use this type for television series playback, including individual episodes.

## Topics

### Initializers

- [init(id:episodeTitle:showName:duration:artwork:)](tvshowcontent/init%28id_episodetitle_showname_duration_artwork_%29.md): Creates TV show episode content.
- [init(id:episodeTitle:showName:duration:artwork:animatedArtwork:)](tvshowcontent/init%28id_episodetitle_showname_duration_artwork_animatedartwork_%29.md): Creates TV show episode content with static and animated artwork.

### Instance Properties

- [animatedArtwork](tvshowcontent/animatedartwork.md): Animated artwork for this content.
- [artwork](tvshowcontent/artwork.md): Artwork for this content.
- [duration](tvshowcontent/duration.md): The duration of this content.
- [episodeTitle](tvshowcontent/episodetitle.md): The title of the episode.
- [showName](tvshowcontent/showname.md): The name of the TV show.
- [type](tvshowcontent/type.md): The media type (always video for TV shows).

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [MediaContentRepresentable](mediacontentrepresentable.md)

## See Also

### Presenting content

- [MediaContentRepresentable](mediacontentrepresentable.md): A protocol that describes media content being played.
- [MusicContent](musiccontent.md): Content representing a music track or song.
- [PodcastContent](podcastcontent.md): Content representing a podcast episode.
- [MovieContent](moviecontent.md): Content representing a movie.
- [BookContent](bookcontent.md): Content representing an audiobook or book being read aloud.
- [RadioContent](radiocontent.md): Content representing a radio station or live audio stream.
- [HomeMediaContent](homemediacontent.md): Content representing home media or ambient content.
- [GenericContent](genericcontent.md): Content representing generic or unspecified media.
