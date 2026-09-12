> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/ownershiptype-swift.property](https://developer.apple.com/documentation/storekit/transaction/ownershiptype-swift.property)

# ownershipType

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A value that indicates whether the transaction was purchased by the user, or is made available to them through Family Sharing.

## Declaration

```swift
let ownershipType: Transaction.OwnershipType
```

## See Also

### Getting purchase details

- [isUpgraded](isupgraded.md): A Boolean that indicates whether the user upgraded to another subscription.
- [Transaction.OwnershipType](ownershiptype-swift.struct.md): The types the system uses to describe whether the user purchased the product or it’s available to them through Family Sharing.
- [purchasedQuantity](purchasedquantity.md): The number of consumable products purchased.
