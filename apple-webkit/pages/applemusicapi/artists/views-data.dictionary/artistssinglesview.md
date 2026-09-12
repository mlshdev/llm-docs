> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/artists/views-data.dictionary/artistssinglesview](https://developer.apple.com/documentation/applemusicapi/artists/views-data.dictionary/artistssinglesview)

# Artists.Views.ArtistsSinglesView

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship view from this artist to albums associated with the artist categorized as singles.

## Declaration

```
object Artists.Views.ArtistsSinglesView
```

## Properties

- `href` — `string`: A relative location for the view.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the view if more exist.
- `attributes` — `Artists.Views.ArtistsSinglesView.Attributes` (required): The attributes for the view.
- `data` — `[Albums]` (required): Albums associated with the artist categorized as singles.

## Topics

### Related Objects

- [Artists.Views.ArtistsSinglesView.Attributes](artistssinglesview/attributes-data.dictionary.md): Albums associated with the artist and categorized as singles.

## See Also

### Related Objects

- [Artists.Views.ArtistsAppearsOnAlbumsView](artistsappearsonalbumsview.md): A relationship view from this artist to a selection of albums from other artists on which this artist also appears.
- [Artists.Views.ArtistsCompilationAlbumsView](artistscompilationalbumsview.md): A relationship view from this artist to albums associated with the artist categorized as compilations.
- [Artists.Views.ArtistsFeaturedAlbumsView](artistsfeaturedalbumsview.md): A relationship view from this artist to a collection of albums selected as featured for the artist.
- [Artists.Views.ArtistsFeaturedMusicVideosView](artistsfeaturedmusicvideosview.md): A relationship view from this artist to a collection of music videos selected as featured for the artist.
- [Artists.Views.ArtistsFeaturedPlaylistsView](artistsfeaturedplaylistsview.md): A relationship view from this artist to relevant playlists associated with the artist.
- [Artists.Views.ArtistsFullAlbumsView](artistsfullalbumsview.md): A relationship view from this artist to full-release albums associated with the artist.
- [Artists.Views.ArtistsLatestReleaseView](artistslatestreleaseview.md): A relationship view from this artist to the latest release for the artist determined to still be recent by the Apple Music Catalog.
- [Artists.Views.ArtistsLiveAlbumsView](artistslivealbumsview.md): A relationship view from this artist to albums associated with the artist categorized as live performances.
- [Artists.Views.ArtistsSimilarArtistsView](artistssimilarartistsview.md): A relationship view from this artist to other artists similar to this artist.
- [Artists.Views.ArtistsTopMusicVideosView](artiststopmusicvideosview.md): A relationship view from this artist to relevant music videos associated with the artist.
- [Artists.Views.ArtistsTopSongsView](artiststopsongsview.md): A relationship view from this artist to songs associated with the artist based on popularity in the current storefront.
