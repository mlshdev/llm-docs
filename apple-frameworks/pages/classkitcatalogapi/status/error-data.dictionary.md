> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkitcatalogapi/status/error-data.dictionary](https://developer.apple.com/documentation/classkitcatalogapi/status/error-data.dictionary)

# Status.Error

**Interface language:** Data

**Framework:** ClassKit Catalog API  
**Kind:** Dictionary  
**Availability:** ClassKit 1.0+

Information that explains why a request failed.

## Declaration

```
object Status.Error
```

## Properties

- `code` — `string`: A brief code that identifies the kind of error.
- `id` — `string`: The `statusId` of the request that caused the error, as described in [Get Status](../get-status.md).
- `message` — `string`: A human readable explanation for the error.
