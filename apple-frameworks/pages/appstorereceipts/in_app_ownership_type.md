> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstorereceipts/in_app_ownership_type](https://developer.apple.com/documentation/appstorereceipts/in_app_ownership_type)

# in_app_ownership_type

**Interface language:** Data

**Framework:** App Store Receipts  
**Kind:** Type  
**Availability:** App Store Receipts 1.4+ (deprecated in 1.7)

The relationship of the user with the family-shared purchase to which they have access.

## Declaration

```
string in_app_ownership_type
```

## Possible Values

- `FAMILY_SHARED`: The transaction belongs to a family member who benefits from service.
- `PURCHASED`: The transaction belongs to the purchaser.

<a id="Discussion"></a>

## Discussion

When family members benefit from a shared subscription, App Store updates their receipt to include the family-shared purchase. Use the value of [in_app_ownership_type](in_app_ownership_type.md) to understand whether a transaction belongs to the purchaser or a family member who benefits.

This field appears in the App Store server notifications unified receipt ([unified_receipt.Latest_receipt_info](../appstoreservernotifications/unified_receipt/latest_receipt_info-data.dictionary.md)) and in transaction receipts ([responseBody.Latest_receipt_info](responsebody/latest_receipt_info-data.dictionary.md)).

For more information about Family Sharing, see [Supporting Family Sharing in your app](../storekit/supporting-family-sharing-in-your-app.md).
