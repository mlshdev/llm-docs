> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/genres

# Genres

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 2.1+

A resource object that represents a music genre.

## Declaration

```
object Genres
```

## Properties

- `attributes` — `Genres.Attributes`: The attributes for the genres resource type.
- `href` — `string` (required): A relative location for the genres resource.
- `id` — `string` (required): The identifier for the genres resource.
- `type` — `string` (required): The type of the resource. The only allowed value is `genres`.
  **Allowed values:** `genres`

## Topics

### Related Objects

- [Genres.Attributes](genres/attributes-data.dictionary.md): The attributes for a genre resource.

## See Also

### Getting common type information

- [Artwork](artwork.md): An object that represents artwork.
- [DescriptionAttribute](descriptionattribute.md): An object that represents a description attribute.
- [Apps](apps.md): A resource object that represents an app.
- [Books](books.md): A resource object that represents a book.
