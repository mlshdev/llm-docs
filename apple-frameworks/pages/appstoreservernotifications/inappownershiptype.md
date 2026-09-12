> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/inappownershiptype](https://developer.apple.com/documentation/appstoreservernotifications/inappownershiptype)

# inAppOwnershipType

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.0+

A string that describes whether the transaction was purchased by the customer, or is available to them through Family Sharing.

## Declaration

```
string inAppOwnershipType
```

## Possible Values

- `FAMILY_SHARED`: The transaction belongs to a family member who benefits from the service.
- `PURCHASED`: The transaction belongs to the purchaser.
