> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkitcatalogapi/status](https://developer.apple.com/documentation/classkitcatalogapi/status)

# Status

**Interface language:** Data

**Framework:** ClassKit Catalog API  
**Kind:** Dictionary  
**Availability:** ClassKit 1.0+

The state of a request that the API previously accepted, but didn’t complete right away.

## Declaration

```
object Status
```

## Properties

- `location` — `string`: The URL used to retrieve this status.
- `state` — `string`: The state of the request.
  **Allowed values:** `pending`, `inProgress`, `complete`, `error`
- `teamId` — `string`: The identifier of the team associated with this status.
- `statusId` — `string`: The unique value that identifies this status.
- `error` — `Status.Error`: Information that the system provides for a request that fails.
- `statusCode` — `string`: A response code that indicates the outcome of the request.

## Topics

### Errors

- [Status.Error](status/error-data.dictionary.md): Information that explains why a request failed.

## See Also

### Retrieving Status

- [Get Status](get-status.md): Fetch the status of an operation that you initiated earlier.
