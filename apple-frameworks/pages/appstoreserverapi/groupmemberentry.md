> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/groupmemberentry

# GroupMemberEntry

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.22+

A customer that belongs to a group.

## Declaration

```
object GroupMemberEntry
```

## Properties

- `appTransactionId` — `appTransactionId`: The unique identifier of the member’s app download transaction.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

The [Get Group Members](get-group-members.md) endpoint returns a `GroupMemberEntry` for each member of a group.
