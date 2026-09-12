> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/bookcontent](https://developer.apple.com/documentation/nowplaying/bookcontent)

# BookContent

**Framework:** Now Playing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Content representing an audiobook or book being read aloud.

## Declaration

```swift
struct BookContent
```

## Mentioned In

- [Publishing media sessions](publishing-media-sessions.md)

<a id="overview"></a>

## Overview

Use this type for audiobooks and other spoken-word book content.

## Topics

### Initializers

- [init(id:title:authorName:narratorName:type:duration:artwork:)](bookcontent/init%28id_title_authorname_narratorname_type_duration_artwork_%29.md): Creates audiobook content.
- [init(id:title:authorName:narratorName:type:duration:artwork:animatedArtwork:)](bookcontent/init%28id_title_authorname_narratorname_type_duration_artwork_animatedartwork_%29.md): Creates audiobook content with static and animated artwork.

### Instance Properties

- [animatedArtwork](bookcontent/animatedartwork.md): Animated artwork for this content.
- [artwork](bookcontent/artwork.md): Artwork for this content.
- [authorName](bookcontent/authorname.md): The author of the book.
- [chapter](bookcontent/chapter.md): The current chapter information, if applicable.
- [duration](bookcontent/duration.md): The duration of this content.
- [narratorName](bookcontent/narratorname.md): The narrator of the audiobook, if applicable.
- [title](bookcontent/title.md): The title of the book.
- [type](bookcontent/type.md): The media type. Defaults to `.audio` for book content.

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
- [TVShowContent](tvshowcontent.md): Content representing a TV show episode.
- [RadioContent](radiocontent.md): Content representing a radio station or live audio stream.
- [HomeMediaContent](homemediacontent.md): Content representing home media or ambient content.
- [GenericContent](genericcontent.md): Content representing generic or unspecified media.
