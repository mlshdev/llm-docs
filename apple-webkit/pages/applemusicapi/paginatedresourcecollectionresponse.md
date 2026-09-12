> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/paginatedresourcecollectionresponse](https://developer.apple.com/documentation/applemusicapi/paginatedresourcecollectionresponse)

# PaginatedResourceCollectionResponse

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A response object composed of paginated resource objects for the request.

## Declaration

```
object PaginatedResourceCollectionResponse
```

## Properties

- `next` — `string`: A relative cursor to fetch the next paginated collection of resources for the request if more exist.
- `data` — `[Resource]` (required): A paginated collection of resources for the request.
