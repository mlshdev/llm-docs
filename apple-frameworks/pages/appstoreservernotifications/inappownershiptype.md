> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreservernotifications/inappownershiptype

# inAppOwnershipType

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.0+

A string that describes whether the transaction was purchased by the customer, or is available to them through Family Sharing, an organization, or a group.

## Declaration

```
string inAppOwnershipType
```

## Possible Values

- `FAMILY_SHARED`: The transaction belongs to a family member who benefits from the service.
- `PURCHASED`: The transaction belongs to the purchaser.
- `ASSIGNED`: The transaction belongs to a customer who has access through an organization or group.

## Mentioned In

- [App Store Server Notifications changelog](app-store-server-notifications-changelog.md)
