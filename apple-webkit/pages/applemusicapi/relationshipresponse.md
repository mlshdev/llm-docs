> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/relationshipresponse](https://developer.apple.com/documentation/applemusicapi/relationshipresponse)

# RelationshipResponse

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The response for a direct resource relationship fetch.

## Declaration

```
object RelationshipResponse
```

## Properties

- `data` — `[Resource]` (required): A paginated collection of resources in the relationship.
- `meta` — `RelationshipResponse.Meta`: Contextual data about the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.

## Topics

### Related Objects

- [RelationshipResponse.Meta](relationshipresponse/meta-data.dictionary.md): Contextual data about the relationship.
