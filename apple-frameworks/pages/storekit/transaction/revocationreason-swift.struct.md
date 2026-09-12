> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/revocationreason-swift.struct](https://developer.apple.com/documentation/storekit/transaction/revocationreason-swift.struct)

# Transaction.RevocationReason

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Reasons that describe why the App Store may refund a transaction or revoke it from Family Sharing.

## Declaration

```swift
struct RevocationReason
```

## Topics

### Revocation reasons

- [developerIssue](revocationreason-swift.struct/developerissue.md): The value that indicates a customer canceled the transaction due to an actual or perceived issue within your app.
- [other](revocationreason-swift.struct/other.md): The value that indicates a customer canceled the transaction for other reasons.

### Getting a localized description

- [localizedDescription](revocationreason-swift.struct/localizeddescription.md): The localized text that describes the revocation reason.

### Type Properties

- [upgradedToBundle](revocationreason-swift.struct/upgradedtobundle.md): The transaction was revoked because the customer switched to a subscription bundle.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting revocation status

- [revocationDate](revocationdate.md): The date that the App Store refunded the transaction or revoked it from Family Sharing.
- [revocationReason](revocationreason-swift.property.md): The reason that the App Store refunded the transaction or revoked it from Family Sharing.
