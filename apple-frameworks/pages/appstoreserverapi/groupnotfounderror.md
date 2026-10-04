> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/groupnotfounderror

# GroupNotFoundError

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.22+

An error that indicates the group wasn’t found.

## Declaration

```
object GroupNotFoundError
```

## Properties

- `errorCode` — `int64`: **Allowed values:** `4040022`
- `errorMessage` — `string`: **Allowed values:** `Group not found.`

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

A request returns this error if you call the [Get Group Members](get-group-members.md) endpoint with a `groupId` that’s well-formed but doesn’t identify a group in your app.

A group that existed previously can stop existing — for example, when its subscription ends. Get a current `groupId` by calling the [Get Customer Groups](get-customer-groups.md) endpoint.

## See Also

### Group membership errors

- [InvalidGroupIdError](invalidgroupiderror.md): An error that indicates the group identifier is invalid.
- [InvalidLimitError](invalidlimiterror.md): An error that indicates the request limit is invalid.
