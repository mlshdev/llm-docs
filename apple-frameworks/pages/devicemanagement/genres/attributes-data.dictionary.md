> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/genres/attributes-data.dictionary

# Genres.Attributes

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 2.1+

The attributes for a genre resource.

## Declaration

```
object Genres.Attributes
```

## Properties

- `name` — `string` (required): The localized name of the genre.
- `parentId` — `string`: The parent ID of the genre.
- `parentName` — `string`: The name of this genre’s parent genre.
- `url` — `string` (required): The clean URL for the genre.
