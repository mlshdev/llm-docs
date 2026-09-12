> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/librarysearchresponse/results-data.dictionary/libraryplaylistssearchresult](https://developer.apple.com/documentation/applemusicapi/librarysearchresponse/results-data.dictionary/libraryplaylistssearchresult)

# LibrarySearchResponse.Results.LibraryPlaylistsSearchResult

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The library playlists results for a term search for specific resource types.

## Declaration

```
object LibrarySearchResponse.Results.LibraryPlaylistsSearchResult
```

## Properties

- `data` — `[LibraryPlaylists]` (required): The library playlist resources matching the search term, ordered by best match.
- `href` — `string`: A relative location for the resource.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources if more exist.

## See Also

### Related Objects

- [LibrarySearchResponse.Results.LibraryAlbumsSearchResult](libraryalbumssearchresult.md): The library albums results for a term search for specific resource types.
- [LibrarySearchResponse.Results.LibraryArtistsSearchResult](libraryartistssearchresult.md): The library artists results for a term search for specific resource types.
- [LibrarySearchResponse.Results.LibraryMusicVideosSearchResult](librarymusicvideossearchresult.md): The library music videos results for a term search for specific resource types.
- [LibrarySearchResponse.Results.LibrarySongsSearchResult](librarysongssearchresult.md): The library songs results for a term search for specific resource types.
