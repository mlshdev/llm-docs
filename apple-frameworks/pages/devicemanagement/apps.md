> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/apps](https://developer.apple.com/documentation/devicemanagement/apps)

# Apps

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 2.1+

A resource object that represents an app.

## Declaration

```
object Apps
```

## Properties

- `attributes` — `Apps.Attributes`: The attributes for the apps resource type.
- `href` — `string` (required): A relative location for the apps resource.
- `id` — `string` (required): The identifier for the apps resource.
- `relationships` — `Apps.Relationships`: The relationships from apps to other resources.
- `type` — `string` (required): The type of the resource. The only allowed value is `apps`.
  **Allowed values:** `apps`

## Topics

### Related Objects

- [Apps.Attributes](apps/attributes-data.dictionary.md): The attributes for an apps resource.
- [Apps.Relationships](apps/relationships-data.dictionary.md): The relationships for an apps resource.

## See Also

### Getting common type information

- [Artwork](artwork.md): An object that represents artwork.
- [DescriptionAttribute](descriptionattribute.md): An object that represents a description attribute.
- [Genres](genres.md): A resource object that represents a music genre.
- [Books](books.md): A resource object that represents a book.
