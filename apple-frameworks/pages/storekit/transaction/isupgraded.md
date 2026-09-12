> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/isupgraded](https://developer.apple.com/documentation/storekit/transaction/isupgraded)

# isUpgraded

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean that indicates whether the user upgraded to another subscription.

## Declaration

```swift
let isUpgraded: Bool
```

## Mentioned In

- [Supporting monthly subscriptions with a 12-month commitment](../supporting-monthly-subscriptions-with-a-12-month-commitment.md)

<a id="Discussion"></a>

## Discussion

If [isUpgraded](isupgraded.md) is `true`, the user has upgraded the subscription represented by this transaction to another subscription. This value appears in the transaction only when the value is `true`. To determine the service that the customer is entitled to, look for another transaction that has a subscription with a higher level of service.

## See Also

### Getting purchase details

- [ownershipType](ownershiptype-swift.property.md): A value that indicates whether the transaction was purchased by the user, or is made available to them through Family Sharing.
- [Transaction.OwnershipType](ownershiptype-swift.struct.md): The types the system uses to describe whether the user purchased the product or it’s available to them through Family Sharing.
- [purchasedQuantity](purchasedquantity.md): The number of consumable products purchased.
