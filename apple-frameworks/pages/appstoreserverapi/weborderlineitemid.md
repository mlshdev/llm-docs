> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/weborderlineitemid](https://developer.apple.com/documentation/appstoreserverapi/weborderlineitemid)

# webOrderLineItemId

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

The unique identifier of subscription-purchase events across devices, including renewals.

## Declaration

```
string webOrderLineItemId
```

<a id="Discussion"></a>

## Discussion

This value applies only to auto-renewable subscriptions.

## See Also

### Response data types

- [effectiveDate](effectivedate.md): The new subscription expiration date for a subscription-renewal extension.
- [originalTransactionId](originaltransactionid.md): The original transaction identifier of a purchase.
- [success](success.md): A Boolean value that indicates whether the subscription-renewal-date extension succeeded.
