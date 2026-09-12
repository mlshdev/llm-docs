> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/books](https://developer.apple.com/documentation/devicemanagement/books)

# Books

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 2.1+

A resource object that represents a book.

## Declaration

```
object Books
```

## Properties

- `attributes` — `Books.Attributes`: The attributes for the books resource type.
- `href` — `string` (required): A relative location for the books resource.
- `id` — `string` (required): The identifier for the books resource.
- `relationships` — `Books.Relationships`: The relationships from books to other resources.
- `type` — `string` (required): The type of the resource. The only allowed value is `books`.
  **Allowed values:** `books`

## Topics

### Related Objects

- [Books.Attributes](books/attributes-data.dictionary.md): The attributes for a books resource.
- [Books.Relationships](books/relationships-data.dictionary.md)

## See Also

### Getting common type information

- [Artwork](artwork.md): An object that represents artwork.
- [DescriptionAttribute](descriptionattribute.md): An object that represents a description attribute.
- [Genres](genres.md): A resource object that represents a music genre.
- [Apps](apps.md): A resource object that represents an app.
