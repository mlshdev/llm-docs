> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/originaltransactionid](https://developer.apple.com/documentation/appstoreservernotifications/originaltransactionid)

# originalTransactionId

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.0+

The original transaction identifier of a purchase.

## Declaration

```
string originalTransactionId
```

<a id="Discussion"></a>

## Discussion

This value is identical to the transaction identifier ([transactionId](transactionid.md)) except when the user restores or renews a subscription.

## See Also

### Transaction identifiers

- [transactionId](transactionid.md): The unique identifier for a transaction, such as an In-App Purchase, restored purchase, or subscription renewal.
- [webOrderLineItemId](weborderlineitemid.md): The unique identifier of subscription purchase events across devices, including subscription renewals.
- [previousOriginalTransactionId](previousoriginaltransactionid.md): The original transaction identifer of a subscription before migration.
