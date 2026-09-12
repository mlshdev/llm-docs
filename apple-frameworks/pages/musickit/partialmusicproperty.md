> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/partialmusicproperty](https://developer.apple.com/documentation/musickit/partialmusicproperty)

# PartialMusicProperty

**Framework:** MusicKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A partially type-erased identifier for a music item property from a concrete root type to any resulting value type.

## Declaration

```swift
class PartialMusicProperty<Root>
```

## Topics

### Type Properties

- [albums](partialmusicproperty/albums-2huns.md): Conforms when `Root` is `Artist`. An identifier for the relationship property that returns the associated albums for the artist.
- [albums](partialmusicproperty/albums-5kqf6.md): Conforms when `Root` is `Song`. An identifier for the relationship property that returns the associated albums for the song.
- [albums](partialmusicproperty/albums-6v0rp.md): Conforms when `Root` is `MusicVideo`. An identifier of the relationship property that returns the associated albums for the music video.
- [appearsOn](partialmusicproperty/appearson.md): Conforms when `Root` is `Album`. An identifier for the association property that returns a collection of playlists that include tracks from the album.
- [appearsOnAlbums](partialmusicproperty/appearsonalbums.md): Conforms when `Root` is `Artist`. An identifier for the association property that returns a collection of albums from other artists that this artist appears on.
- [artistURL](partialmusicproperty/artisturl-7j56f.md): Conforms when `Root` is `MusicVideo`. An identifier for the extended attribute property that returns the artist’s URL.
- [artistURL](partialmusicproperty/artisturl-81r7i.md): Conforms when `Root` is `Song`. An identifier for the extended attribute property that returns the artist’s URL.
- [artistURL](partialmusicproperty/artisturl-msvj.md): Conforms when `Root` is `Album`. An identifier for the extended attribute property that returns the artist’s URL.
- [artists](partialmusicproperty/artists-1bm4c.md): Conforms when `Root` is `Album`. An identifier for the relationship property that returns the associated artists for the album.
- [artists](partialmusicproperty/artists-3x8cx.md): Conforms when `Root` is `Song`. An identifier for the relationship property that returns the associated artists for the song.
- [artists](partialmusicproperty/artists-6myll.md): Conforms when `Root` is `MusicVideo`. An identifier of the relationship property that returns the associated artists for the music video.
- [audioVariants](partialmusicproperty/audiovariants-60v28.md): Conforms when `Root` is `Song`. An identifier for the extended attribute property that returns the audio variants for the song.
- [audioVariants](partialmusicproperty/audiovariants-8zkt2.md): Conforms when `Root` is `Album`. An identifier for the extended attribute property that returns the audio variants for the album.
- [compilationAlbums](partialmusicproperty/compilationalbums.md): Conforms when `Root` is `Artist`. An identifier for the association property that returns a collection of compilation albums that include tracks by the artist.
- [composers](partialmusicproperty/composers.md): Conforms when `Root` is `Song`. An identifier for the relationship property that returns the song’s composers.
- [curator](partialmusicproperty/curator.md): Conforms when `Root` is `Playlist`. An identifier for the extended attribute property that returns the playlist’s associated curator.
- [entries](partialmusicproperty/entries.md): Conforms when `Root` is `Playlist`. An identifier for the relationship property that returns the entries in the playlist.
- [featuredAlbums](partialmusicproperty/featuredalbums.md): Conforms when `Root` is `Artist`. An identifier for the association property that returns a collection of featured albums for the artist.
- [featuredArtists](partialmusicproperty/featuredartists.md): Conforms when `Root` is `Playlist`. An identifier for the association property that returns a collection of featured artists for this playlist.
- [featuredPlaylists](partialmusicproperty/featuredplaylists.md): Conforms when `Root` is `Artist`. An identifier for the association property that returns a collection of the artist’s playlists.
- [fullAlbums](partialmusicproperty/fullalbums.md): Conforms when `Root` is `Artist`. An identifier for the association property that returns a collection of the artist’s full-release albums.
- [genres](partialmusicproperty/genres-2y2ss.md): Conforms when `Root` is `MusicVideo`. An identifier of the relationship property that returns the associated genres for the music video.
- [genres](partialmusicproperty/genres-3jsli.md): Conforms when `Root` is `Artist`. An identifier for the relationship property that returns the associated genres for the artist.
- [genres](partialmusicproperty/genres-5w9nm.md): Conforms when `Root` is `Song`. An identifier for the relationship property that returns the associated genres for the song.
- [genres](partialmusicproperty/genres-7el74.md): Conforms when `Root` is `Album`. An identifier for the relationship property that returns the genres for the album.
- [latestRelease](partialmusicproperty/latestrelease.md): Conforms when `Root` is `Artist`. An identifier for the association property that returns the artist’s most recent album.
- [latestReleases](partialmusicproperty/latestreleases.md): Conforms when `Root` is `RecordLabel`. An identifier for the association property that returns a collection of the most recent releases for the record label.
- [liveAlbums](partialmusicproperty/livealbums.md): Conforms when `Root` is `Artist`. An identifier for the association property that returns a collection of the artist’s live albums.
- [moreByArtist](partialmusicproperty/morebyartist.md): Conforms when `Root` is `MusicVideo`. An identifier of the association property that returns a collection of additional music videos by the artist.
- [moreByCurator](partialmusicproperty/morebycurator.md): Conforms when `Root` is `Playlist`. An identifier for the association property that returns a collection of additional playlists by the same curator.
- [moreInGenre](partialmusicproperty/moreingenre.md): Conforms when `Root` is `MusicVideo`. A identifier of the association property that returns a collection of music videos in the same genre as this music video.
- [musicVideos](partialmusicproperty/musicvideos-6hip3.md): Conforms when `Root` is `Artist`. An identifier for the relationship property that returns the associated music videos for the artist.
- [musicVideos](partialmusicproperty/musicvideos-89mym.md): Conforms when `Root` is `Song`. An identifier for the relationship property that returns the song’s associated music videos.
- [otherVersions](partialmusicproperty/otherversions.md): Conforms when `Root` is `Album`. An identifier for the association property that returns a collection of other versions of the album.
- [playlists](partialmusicproperty/playlists-1j0l9.md): Conforms when `Root` is `Artist`. An identifier for the relationship property that returns the associated playlists for the artist.
- [playlists](partialmusicproperty/playlists-9quj1.md): Conforms when `Root` is `Curator`. An identifier for the relationship property that returns the associated playlists for the curator.
- [playlists](partialmusicproperty/playlists-wgt7.md): Conforms when `Root` is `RadioShow`. An identifier for the relationship property that returns the associated playlists for the radio show.
- [radioShow](partialmusicproperty/radioshow.md): Conforms when `Root` is `Playlist`. An identifier for the extended attribute property that returns the playlist’s associated radio show.
- [recordLabels](partialmusicproperty/recordlabels.md): Conforms when `Root` is `Album`. An identifier for the relationship property that returns the record labels for the album.
- [relatedAlbums](partialmusicproperty/relatedalbums.md): Conforms when `Root` is `Album`. An identifier for the association property that returns a collection of related albums.
- [relatedVideos](partialmusicproperty/relatedvideos.md): Conforms when `Root` is `Album`. An identifier for the association property that returns a collection of related music videos for the album.
- [similarArtists](partialmusicproperty/similarartists.md): Conforms when `Root` is `Artist`. An identifier for the association property that returns a collection of artists similar to this artist.
- [singles](partialmusicproperty/singles.md): Conforms when `Root` is `Artist`. An identifier of the association property that returns a collection of the artist’s albums in the *singles* category.
- [songs](partialmusicproperty/songs.md): Conforms when `Root` is `MusicVideo`. An identifier of the relationship property that returns the associated songs for the music video.
- [station](partialmusicproperty/station-8u1rf.md): Conforms when `Root` is `Song`. An identifier for the relationship property that returns the associated station for the song.
- [station](partialmusicproperty/station-8zftf.md): Conforms when `Root` is `Artist`. An identifier for the relationship property that returns the associated station for the artist.
- [topMusicVideos](partialmusicproperty/topmusicvideos.md): Conforms when `Root` is `Artist`. An identifier for the association property that returns a collection of the artist’s top music videos.
- [topReleases](partialmusicproperty/topreleases.md): Conforms when `Root` is `RecordLabel`. An identifier for the association property that returns a collection of top releases for the record label.
- [topSongs](partialmusicproperty/topsongs.md): Conforms when `Root` is `Artist`. An identifier for the association property that returns a collection of the artist’s top songs.
- [tracks](partialmusicproperty/tracks-8mq2j.md): Conforms when `Root` is `Playlist`. An identifier for the relationship property that returns the tracks in the playlist.
- [tracks](partialmusicproperty/tracks-9mk2l.md): Conforms when `Root` is `Album`. An identifier for the relationship property that returns the tracks on the album.

## Relationships

### Inherits From

- [AnyMusicProperty](anymusicproperty.md)

### Inherited By

- [MusicAttributeProperty](musicattributeproperty.md)
- [PartialMusicAsyncProperty](partialmusicasyncproperty.md)

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Utility

- [MusicItem](musicitem.md): A protocol with basic requirements for music items.
- [MusicItemID](musicitemid.md): An object that represents a unique identifier for a music item.
- [MusicItemCollection](musicitemcollection.md): A collection of music items.
- [MusicPropertyContainer](musicpropertycontainer.md): A protocol for music items that allow loading additional properties that you can fetch asynchronously.
- [MusicRelationshipProperty](musicrelationshipproperty.md): An identifier for a music item relationship property from a specific root type to a specific value type for the element of the resulting collection.
- [MusicExtendedAttributeProperty](musicextendedattributeproperty.md): An identifier for a music item extended attribute property from a specific root type to a specific resulting value type.
- [MusicAttributeProperty](musicattributeproperty.md): An identifier for a music item attribute property from a specific root type to a specific resulting value type.
- [PartialMusicAsyncProperty](partialmusicasyncproperty.md): A partially type-erased identifier for a music item property that you can fetch asynchronously from a concrete root type to any resulting value type.
- [AnyMusicProperty](anymusicproperty.md): A type-erased identifier for a music item property, from any root type to any resulting value type.
