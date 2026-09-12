> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/orderlookupstatus](https://developer.apple.com/documentation/appstoreserverapi/orderlookupstatus)

# OrderLookupStatus

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.1+

A value that indicates whether the order ID in the request is valid for your app.

## Declaration

```
int32 OrderLookupStatus
```

## Possible Values

- `0`: The [orderId](orderid.md) that you provided in the [Look Up Order ID](look-up-order-id.md) request is valid and contains at least one in-app purchase for your app.
- `1`: The [orderId](orderid.md) is invalid or doesn’t contain any in-app purchases for your app.
