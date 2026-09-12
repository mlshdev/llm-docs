> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/revocationdate](https://developer.apple.com/documentation/storekit/transaction/revocationdate)

# revocationDate

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The date that the App Store refunded the transaction or revoked it from Family Sharing.

## Declaration

```swift
let revocationDate: Date?
```

## Mentioned In

- [Managing the life cycle of monthly subscriptions with a 12-month commitment](../managing-lifecycle-of-monthly-subscriptions-with-a-12-month-commitment-.md)
- [Testing refund requests](../testing-refund-requests.md)
- [Supporting monthly subscriptions with a 12-month commitment](../supporting-monthly-subscriptions-with-a-12-month-commitment.md)
- [Testing Family Sharing](../testing-family-sharing.md)

## See Also

### Getting revocation status

- [revocationReason](revocationreason-swift.property.md): The reason that the App Store refunded the transaction or revoked it from Family Sharing.
- [Transaction.RevocationReason](revocationreason-swift.struct.md): Reasons that describe why the App Store may refund a transaction or revoke it from Family Sharing.
