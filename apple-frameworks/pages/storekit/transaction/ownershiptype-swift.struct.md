> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/ownershiptype-swift.struct](https://developer.apple.com/documentation/storekit/transaction/ownershiptype-swift.struct)

# Transaction.OwnershipType

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The types the system uses to describe whether the user purchased the product or it’s available to them through Family Sharing.

## Declaration

```swift
struct OwnershipType
```

## Topics

### Getting ownership types

- [familyShared](ownershiptype-swift.struct/familyshared.md): The transaction belongs to a family member who benefits from the service.
- [purchased](ownershiptype-swift.struct/purchased.md): The transaction belongs to the purchaser.

### Getting a localized description

- [localizedDescription](ownershiptype-swift.struct/localizeddescription.md): The localized text that describes the ownership type.

### Type Properties

- [assigned](ownershiptype-swift.struct/assigned.md): The user has access to this transaction through an organization.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting purchase details

- [isUpgraded](isupgraded.md): A Boolean that indicates whether the user upgraded to another subscription.
- [ownershipType](ownershiptype-swift.property.md): A value that indicates whether the transaction was purchased by the user, or is made available to them through Family Sharing.
- [purchasedQuantity](purchasedquantity.md): The number of consumable products purchased.
