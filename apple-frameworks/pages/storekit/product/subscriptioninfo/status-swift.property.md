> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/status-swift.property](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/status-swift.property)

# status

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An array that contains status information for a subscription group, including renewal and transaction information.

## Declaration

```swift
var status: [Product.SubscriptionInfo.Status] { get async throws }
```

<a id="Discussion"></a>

## Discussion

This array is empty if the customer was never subscribed to a product in this subscription group.

The array can have more than one subscription status if your subscription supports Family Sharing. Provide the customer with service for the subscription based on the highest level of service where the state is [subscribed](renewalstate/subscribed.md).

## See Also

### Determining the subscription status

- [status(for:)](status%28for_%29.md): Gets the subscription status for a subscription group identifier.
- [status(transactionID:)](status%28transactionid_%29.md): Gets the subscription status for a transaction ID.
- [Product.SubscriptionInfo.Status](status-swift.struct.md): The renewal status information for an auto-renewable subscription.
