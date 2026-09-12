> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/artists/attributes-data.dictionary](https://developer.apple.com/documentation/applemusicapi/artists/attributes-data.dictionary)

# Artists.Attributes

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The attributes for an artist resource.

## Declaration

```
object Artists.Attributes
```

## Properties

- `artwork` — `Artwork`: The artwork for the artist image.
- `editorialNotes` — `EditorialNotes`: The notes about the artist that appear in the Apple Music catalog.
- `genreNames` — `[string]` (required): The names of the genres associated with this artist.
- `inFavorites` — `boolean`: Whether the catalog resource ID is in the person’s favorites.
- `name` — `string` (required): The localized name of the artist.
- `url` — `string` (required): The URL for sharing the artist in Apple Music.

## See Also

### Related Objects

- [Artists.Relationships](relationships-data.dictionary.md): The relationships for an artist resource.
- [Artists.Views](views-data.dictionary.md): The views for associations between artists and other resources.
