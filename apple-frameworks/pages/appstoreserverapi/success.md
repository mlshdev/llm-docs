> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/success

# success

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.1+

A Boolean value that indicates whether the subscription-renewal-date extension succeeded.

## Declaration

```
boolean success
```

<a id="Discussion"></a>

## Discussion

If this value is `true`, the renewal date for the subscription is extended.

## See Also

### Response data types

- [effectiveDate](effectivedate.md): The new subscription expiration date for a subscription-renewal extension.
- [originalTransactionId](originaltransactionid.md): The original transaction identifier of a purchase.
- [webOrderLineItemId](weborderlineitemid.md): The unique identifier of subscription-purchase events across devices, including renewals.
