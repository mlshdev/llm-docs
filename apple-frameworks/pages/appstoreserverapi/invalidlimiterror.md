> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/invalidlimiterror

# InvalidLimitError

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.22+

An error that indicates the request limit is invalid.

## Declaration

```
object InvalidLimitError
```

## Properties

- `errorCode` — `int64`: **Allowed values:** `4000004`
- `errorMessage` — `string`: **Allowed values:** `Invalid request limit.`

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

A request returns this error if you call the [Get Group Members](get-group-members.md) endpoint with a [limit](limit.md) query parameter that’s outside the supported range. The maximum value is `100`.

## See Also

### Group membership errors

- [GroupNotFoundError](groupnotfounderror.md): An error that indicates the group wasn’t found.
- [InvalidGroupIdError](invalidgroupiderror.md): An error that indicates the group identifier is invalid.
