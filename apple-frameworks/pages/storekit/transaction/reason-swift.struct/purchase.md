> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/reason-swift.struct/purchase](https://developer.apple.com/documentation/storekit/transaction/reason-swift.struct/purchase)

# purchase

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A transaction reason that indicates a purchase is initiated by a customer.

## Declaration

```swift
static let purchase: Transaction.Reason
```

<a id="Discussion"></a>

## Discussion

The customer initiated the purchase, which may be for any in-app purchase type: consumable, non-consumable, non-renewing subscription, or auto-renewable subscription.

## See Also

### Transaction reasons

- [renewal](renewal.md): A transaction reason that indicates the App Store server initiated a purchase transaction to renew an auto-renewable subscription.
