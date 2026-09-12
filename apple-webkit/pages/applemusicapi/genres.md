> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/genres](https://developer.apple.com/documentation/applemusicapi/genres)

# Genres

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A resource object that represents a music genre.

## Declaration

```
object Genres
```

## Properties

- `id` — `string` (required): The identifier for the genre.
- `type` — `string` (required): This value must always be `genres`.
  **Allowed values:** `genres`
- `href` — `string` (required): The relative location for the genre resource.
- `attributes` — `Genres.Attributes`: The attributes for the genre.

## Topics

### Related Objects

- [Genres.Attributes](genres/attributes-data.dictionary.md): The attributes for a genre resource.

## See Also

### Handling the Response

- [GenresResponse](genresresponse.md): The response to a genres request.
