> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/invalidgroupiderror

# InvalidGroupIdError

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.22+

An error that indicates the group identifier is invalid.

## Declaration

```
object InvalidGroupIdError
```

## Properties

- `errorCode` — `int64`: **Allowed values:** `4000225`
- `errorMessage` — `string`: **Allowed values:** `Invalid request. The group ID is invalid.`

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

A request returns this error if you call the [Get Group Members](get-group-members.md) endpoint with a `groupId` that isn’t well-formed.

If the identifier is well-formed but doesn’t identify a group in your app, the request returns a [GroupNotFoundError](groupnotfounderror.md) instead. Use a [groupId](groupid.md) that the [Get Customer Groups](get-customer-groups.md) endpoint returns.

## See Also

### Group membership errors

- [GroupNotFoundError](groupnotfounderror.md): An error that indicates the group wasn’t found.
- [InvalidLimitError](invalidlimiterror.md): An error that indicates the request limit is invalid.
