> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/playlists/views-data.dictionary/playlistsfeaturedartistsview](https://developer.apple.com/documentation/applemusicapi/playlists/views-data.dictionary/playlistsfeaturedartistsview)

# Playlists.Views.PlaylistsFeaturedArtistsView

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

Artists that are featured on this playlist.

## Declaration

```
object Playlists.Views.PlaylistsFeaturedArtistsView
```

## Properties

- `href` — `string`: A relative location for the view.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the view if more exist.
- `attributes` — `Playlists.Views.PlaylistsFeaturedArtistsView.Attributes` (required): The attribute metadata for the view.
- `data` — `[Artists]` (required): A paginated collection of resources in the view.

## Topics

### Related Objects

- [Playlists.Views.PlaylistsFeaturedArtistsView.Attributes](playlistsfeaturedartistsview/attributes-data.dictionary.md): Attribute metadata for the playlist featured artists view.

## See Also

### Related Objects

- [Playlists.Views.PlaylistsMoreByCuratorView](playlistsmorebycuratorview.md): Additional content by the same curator for this playlist.
