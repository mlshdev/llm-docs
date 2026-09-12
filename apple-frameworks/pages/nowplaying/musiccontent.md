> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/musiccontent](https://developer.apple.com/documentation/nowplaying/musiccontent)

# MusicContent

**Framework:** Now Playing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Content representing a music track or song.

## Declaration

```swift
struct MusicContent
```

## Mentioned In

- [Publishing media sessions](publishing-media-sessions.md)

<a id="overview"></a>

## Overview

Use this type for music playback, including songs, albums, and playlists.

The following example shows how to create music content with additional metadata:

```swift
var content: some MediaContentRepresentable {
    var content = MusicContent(
        id: track.id,
        songTitle: track.title,
        artistName: track.artist,
        albumName: track.album,
        type: .audio,
        duration: .finite(track.duration),
        artwork: Artwork(id: track.artworkID) { size in
            let data = await loadArtworkData(size: size)
            return try ArtworkRepresentation(data: data)
        }
    )
    content.composer = track.composer
    content.genre = track.genre
    content.isExplicit = track.isExplicit
    return content
}
```

## Topics

### Initializers

- [init(id:songTitle:artistName:albumName:type:duration:artwork:)](musiccontent/init%28id_songtitle_artistname_albumname_type_duration_artwork_%29.md): Creates music content with the specified metadata.
- [init(id:songTitle:artistName:albumName:type:duration:artwork:animatedArtwork:)](musiccontent/init%28id_songtitle_artistname_albumname_type_duration_artwork_animatedartwork_%29.md): Creates music content with static and animated artwork.

### Instance Properties

- [albumName](musiccontent/albumname.md): The name of the album.
- [animatedArtwork](musiccontent/animatedartwork.md): Animated artwork for this content.
- [artistName](musiccontent/artistname.md): The name of the artist or performer.
- [artwork](musiccontent/artwork.md): Artwork for this content.
- [composer](musiccontent/composer.md): The name of the composer, if applicable.
- [duration](musiccontent/duration.md): The duration of this content.
- [isrc](musiccontent/isrc.md): The International Standard Recording Code (ISRC) for this content.
- [songTitle](musiccontent/songtitle.md): The title of the song.
- [type](musiccontent/type.md): The media type (audio or video).

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [MediaContentRepresentable](mediacontentrepresentable.md)

## See Also

### Presenting content

- [MediaContentRepresentable](mediacontentrepresentable.md): A protocol that describes media content being played.
- [PodcastContent](podcastcontent.md): Content representing a podcast episode.
- [MovieContent](moviecontent.md): Content representing a movie.
- [TVShowContent](tvshowcontent.md): Content representing a TV show episode.
- [BookContent](bookcontent.md): Content representing an audiobook or book being read aloud.
- [RadioContent](radiocontent.md): Content representing a radio station or live audio stream.
- [HomeMediaContent](homemediacontent.md): Content representing home media or ambient content.
- [GenericContent](genericcontent.md): Content representing generic or unspecified media.
