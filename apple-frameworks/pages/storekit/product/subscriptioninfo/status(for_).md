> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/status(for:)](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/status(for:))

# status(for:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Gets the subscription status for a subscription group identifier.

## Declaration

```swift
static func status(for groupID: String) async throws -> [Product.SubscriptionInfo.Status]
```

## Parameters

- `groupID`: The subscription group identifier of the subscription to get status for.

<a id="return-value"></a>

## Return Value

An array of [Product.SubscriptionInfo.Status](status-swift.struct.md). This array is empty if the customer has never subscribed to a product in this subscription group.

<a id="Discussion"></a>

## Discussion

To get the subscription group identifier of a subscription, see [subscriptionGroupID](subscriptiongroupid.md) in [Product.SubscriptionInfo](../subscriptioninfo.md), or [subscriptionGroupID](../../transaction/subscriptiongroupid.md) in [Transaction](../../transaction.md). You originally create subscription group identifiers when you set up in-app purchases in App Store Connect. For more information, see [Offer auto-renewable subscriptions](https://help.apple.com/app-store-connect/#/dev75708c031).

Users can only buy one auto-renewable subscription within a group at a time. However, the returned array may contain multiple status values if your subscription supports Family Sharing, and the person has access to other subscriptions in the group through Family Sharing. For more information about Family Sharing, see [Enable Family Sharing for your subscriptions](https://developer.apple.com/news/?id=ksfkdwpr).

## See Also

### Determining the subscription status

- [status](status-swift.property.md): An array that contains status information for a subscription group, including renewal and transaction information.
- [status(transactionID:)](status%28transactionid_%29.md): Gets the subscription status for a transaction ID.
- [Product.SubscriptionInfo.Status](status-swift.struct.md): The renewal status information for an auto-renewable subscription.
