> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/transactionid](https://developer.apple.com/documentation/appstoreserverapi/transactionid)

# transactionId

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

The unique identifier for a transaction, such as an In-App Purchase, restored In-App Purchase, or subscription renewal.

## Declaration

```
string transactionId
```

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

In a purchase transaction, the `transactionId` matches the original transaction identifier, [originalTransactionId](originaltransactionid.md). When a customer restores a purchase or renews a subscription, the `transactionId` differs.

## See Also

### Transaction identifiers

- [originalTransactionId](originaltransactionid.md): The original transaction identifier of a purchase.
- [webOrderLineItemId](weborderlineitemid.md): The unique identifier of subscription-purchase events across devices, including renewals.
- [anyTransactionId](anytransactionid.md): A type that represents an original transaction ID, transaction ID, or app transaction ID.
