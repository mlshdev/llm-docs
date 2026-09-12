> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/playlists/views-data.dictionary/playlistsmorebycuratorview](https://developer.apple.com/documentation/applemusicapi/playlists/views-data.dictionary/playlistsmorebycuratorview)

# Playlists.Views.PlaylistsMoreByCuratorView

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

Additional content by the same curator for this playlist.

## Declaration

```
object Playlists.Views.PlaylistsMoreByCuratorView
```

## Properties

- `href` — `string`: A relative location for the view.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the view if more exist.
- `attributes` — `Playlists.Views.PlaylistsMoreByCuratorView.Attributes` (required): The attribute metadata for the view.
- `data` — `[Playlists]` (required): A paginated collection of resources in the view.

## Topics

### Related Objects

- [Playlists.Views.PlaylistsMoreByCuratorView.Attributes](playlistsmorebycuratorview/attributes-data.dictionary.md): Attribute metadata for the view containing additional content by the same curator for this playlist.

## See Also

### Related Objects

- [Playlists.Views.PlaylistsFeaturedArtistsView](playlistsfeaturedartistsview.md): Artists that are featured on this playlist.
