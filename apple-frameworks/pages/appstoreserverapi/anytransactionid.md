> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/anytransactionid](https://developer.apple.com/documentation/appstoreserverapi/anytransactionid)

# anyTransactionId

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

A type that represents an original transaction ID, transaction ID, or app transaction ID.

## Declaration

```
string anyTransactionId
```

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

This type represents any [originalTransactionId](originaltransactionid.md), [transactionId](transactionid.md) or [appTransactionId](apptransactionid.md) that belongs to the customer of your app.

## See Also

### Transaction identifiers

- [originalTransactionId](originaltransactionid.md): The original transaction identifier of a purchase.
- [transactionId](transactionid.md): The unique identifier for a transaction, such as an In-App Purchase, restored In-App Purchase, or subscription renewal.
- [webOrderLineItemId](weborderlineitemid.md): The unique identifier of subscription-purchase events across devices, including renewals.
