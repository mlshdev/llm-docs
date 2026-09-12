> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/albums/views-data.dictionary](https://developer.apple.com/documentation/applemusicapi/albums/views-data.dictionary)

# Albums.Views

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The relationship views for an album resource.

## Declaration

```
object Albums.Views
```

## Properties

- `appears-on` — `Albums.Views.AlbumsAppearsOnView`: A selection of playlists that tracks from this album appear on.
- `other-versions` — `Albums.Views.AlbumsOtherVersionsView`: Other versions of this album.
- `related-albums` — `Albums.Views.AlbumsRelatedAlbumsView`: Other albums related or similar to this album.
- `related-videos` — `Albums.Views.AlbumsRelatedVideosView`: Music videos associated with tracks on this album.

## Topics

### Related Objects

- [Albums.Views.AlbumsAppearsOnView](views-data.dictionary/albumsappearsonview.md): A relationship view from this album to a selection of playlists tracks from this album appear on.
- [Albums.Views.AlbumsOtherVersionsView](views-data.dictionary/albumsotherversionsview.md): A relationship view for other versions of this album.
- [Albums.Views.AlbumsRelatedAlbumsView](views-data.dictionary/albumsrelatedalbumsview.md): A relationship view from this album to related and similar albums.
- [Albums.Views.AlbumsRelatedVideosView](views-data.dictionary/albumsrelatedvideosview.md): A relationship view from this album to music videos for the songs on the album.

## See Also

### Related Objects

- [Albums.Attributes](attributes-data.dictionary.md): The attributes for an album resource.
- [Albums.Relationships](relationships-data.dictionary.md): The relationships for an album resource.
