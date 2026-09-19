> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/inappownershiptype

# inAppOwnershipType

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

A string that describes whether the transaction was purchased by the customer, or is available to them through Family Sharing.

## Declaration

```
string inAppOwnershipType
```

## Possible Values

- `FAMILY_SHARED`: The transaction belongs to a family member who benefits from service.
- `PURCHASED`: The transaction belongs to the purchaser.
