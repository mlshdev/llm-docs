> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/relationshipviewresponse](https://developer.apple.com/documentation/applemusicapi/relationshipviewresponse)

# RelationshipViewResponse

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The response for a direct resource view fetch.

## Declaration

```
object RelationshipViewResponse
```

## Properties

- `attributes` — `RelationshipViewResponse.Attributes`: The attribute metadata for the view.
- `data` — `[Resource]` (required): A paginated collection of resources in the view.
- `meta` — `RelationshipViewResponse.Meta`: Contextual data about the view.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the view if more exist.

## Topics

### Related Objects

- [RelationshipViewResponse.Attributes](relationshipviewresponse/attributes-data.dictionary.md): The attribute metadata for the view.
- [RelationshipViewResponse.Meta](relationshipviewresponse/meta-data.dictionary.md): Contextual data about the view.
