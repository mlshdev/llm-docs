> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/revocationreason-swift.property](https://developer.apple.com/documentation/storekit/transaction/revocationreason-swift.property)

# revocationReason

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The reason that the App Store refunded the transaction or revoked it from Family Sharing.

## Declaration

```swift
let revocationReason: Transaction.RevocationReason?
```

## Mentioned In

- [Testing refund requests](../testing-refund-requests.md)
- [Testing Family Sharing](../testing-family-sharing.md)

## See Also

### Getting revocation status

- [revocationDate](revocationdate.md): The date that the App Store refunded the transaction or revoked it from Family Sharing.
- [Transaction.RevocationReason](revocationreason-swift.struct.md): Reasons that describe why the App Store may refund a transaction or revoke it from Family Sharing.
