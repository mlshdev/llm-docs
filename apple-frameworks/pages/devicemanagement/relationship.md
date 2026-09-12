> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/relationship](https://developer.apple.com/documentation/devicemanagement/relationship)

# Relationship

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 2.1+

A to-one or to-many relationship from one resource object to others.

## Declaration

```
object Relationship
```

## Properties

- `data` — `[Resource]` (required): A paginated collection of resources in the relationship.
- `href` — `string`: A relative location to fetch the relationship, if it may be fetched directly.
- `meta` — `Relationship.Meta`: Contextual data about the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.

## Topics

### Related Objects

- [Relationship.Meta](relationship/meta-data.dictionary.md)

## See Also

### Getting resource and relationship information

- [Resource](resource.md): A resource such as an app or book.
