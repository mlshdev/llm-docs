> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/artists/views-data.dictionary](https://developer.apple.com/documentation/applemusicapi/artists/views-data.dictionary)

# Artists.Views

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The views for associations between artists and other resources.

## Declaration

```
object Artists.Views
```

## Properties

- `appears-on-albums` — `Artists.Views.ArtistsAppearsOnAlbumsView`: A selection of albums from other artists this artist appears on.
- `compilation-albums` — `Artists.Views.ArtistsCompilationAlbumsView`: Albums associated with the artist categorized as “compilations.”
- `featured-albums` — `Artists.Views.ArtistsFeaturedAlbumsView`: A collection of albums selected as featured for the artist.
- `featured-music-videos` — `Artists.Views.ArtistsFeaturedMusicVideosView`: A collection of music videos selected as featured for the artist.
- `featured-playlists` — `Artists.Views.ArtistsFeaturedPlaylistsView`: Relevant playlists associated with the artist.
- `full-albums` — `Artists.Views.ArtistsFullAlbumsView`: Full-release albums associated with the artist.
- `latest-release` — `Artists.Views.ArtistsLatestReleaseView`: The latest release for the artist deemed to still be recent.
- `live-albums` — `Artists.Views.ArtistsLiveAlbumsView`: Albums associated with the artist categorized as live performances.
- `similar-artists` — `Artists.Views.ArtistsSimilarArtistsView`: Other artists similar to this artist.
- `singles` — `Artists.Views.ArtistsSinglesView`: Albums associated with the artist categorized as “singles.”
- `top-music-videos` — `Artists.Views.ArtistsTopMusicVideosView`: Relevant music videos associated with the artist.
- `top-songs` — `Artists.Views.ArtistsTopSongsView`: Songs associated with the artist based on popularity in the current storefront.

## Topics

### Related Objects

- [Artists.Views.ArtistsAppearsOnAlbumsView](views-data.dictionary/artistsappearsonalbumsview.md): A relationship view from this artist to a selection of albums from other artists on which this artist also appears.
- [Artists.Views.ArtistsCompilationAlbumsView](views-data.dictionary/artistscompilationalbumsview.md): A relationship view from this artist to albums associated with the artist categorized as compilations.
- [Artists.Views.ArtistsFeaturedAlbumsView](views-data.dictionary/artistsfeaturedalbumsview.md): A relationship view from this artist to a collection of albums selected as featured for the artist.
- [Artists.Views.ArtistsFeaturedMusicVideosView](views-data.dictionary/artistsfeaturedmusicvideosview.md): A relationship view from this artist to a collection of music videos selected as featured for the artist.
- [Artists.Views.ArtistsFeaturedPlaylistsView](views-data.dictionary/artistsfeaturedplaylistsview.md): A relationship view from this artist to relevant playlists associated with the artist.
- [Artists.Views.ArtistsFullAlbumsView](views-data.dictionary/artistsfullalbumsview.md): A relationship view from this artist to full-release albums associated with the artist.
- [Artists.Views.ArtistsLatestReleaseView](views-data.dictionary/artistslatestreleaseview.md): A relationship view from this artist to the latest release for the artist determined to still be recent by the Apple Music Catalog.
- [Artists.Views.ArtistsLiveAlbumsView](views-data.dictionary/artistslivealbumsview.md): A relationship view from this artist to albums associated with the artist categorized as live performances.
- [Artists.Views.ArtistsSimilarArtistsView](views-data.dictionary/artistssimilarartistsview.md): A relationship view from this artist to other artists similar to this artist.
- [Artists.Views.ArtistsSinglesView](views-data.dictionary/artistssinglesview.md): A relationship view from this artist to albums associated with the artist categorized as singles.
- [Artists.Views.ArtistsTopMusicVideosView](views-data.dictionary/artiststopmusicvideosview.md): A relationship view from this artist to relevant music videos associated with the artist.
- [Artists.Views.ArtistsTopSongsView](views-data.dictionary/artiststopsongsview.md): A relationship view from this artist to songs associated with the artist based on popularity in the current storefront.

## See Also

### Related Objects

- [Artists.Attributes](attributes-data.dictionary.md): The attributes for an artist resource.
- [Artists.Relationships](relationships-data.dictionary.md): The relationships for an artist resource.
