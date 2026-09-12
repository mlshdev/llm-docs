> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/reason-swift.struct](https://developer.apple.com/documentation/storekit/transaction/reason-swift.struct)

# Transaction.Reason

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A cause of a purchase transaction, indicating whether it’s a customer’s purchase or an auto-renewable subscription renewal that the system initiates.

## Declaration

```swift
struct Reason
```

## Topics

### Transaction reasons

- [purchase](reason-swift.struct/purchase.md): A transaction reason that indicates a purchase is initiated by a customer.
- [renewal](reason-swift.struct/renewal.md): A transaction reason that indicates the App Store server initiated a purchase transaction to renew an auto-renewable subscription.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting transaction reason

- [reason](reason-swift.property.md): The cause of the purchase transaction, whether it’s a customer’s purchase or an auto-renewable subscription renewal that the system initiates.
