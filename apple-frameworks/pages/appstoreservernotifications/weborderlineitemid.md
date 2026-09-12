> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/weborderlineitemid](https://developer.apple.com/documentation/appstoreservernotifications/weborderlineitemid)

# webOrderLineItemId

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.0+

The unique identifier of subscription purchase events across devices, including subscription renewals.

## Declaration

```
string webOrderLineItemId
```

<a id="Discussion"></a>

## Discussion

This value applies only to auto-renewable subscriptions.

## See Also

### Transaction identifiers

- [originalTransactionId](originaltransactionid.md): The original transaction identifier of a purchase.
- [transactionId](transactionid.md): The unique identifier for a transaction, such as an In-App Purchase, restored purchase, or subscription renewal.
- [previousOriginalTransactionId](previousoriginaltransactionid.md): The original transaction identifer of a subscription before migration.
