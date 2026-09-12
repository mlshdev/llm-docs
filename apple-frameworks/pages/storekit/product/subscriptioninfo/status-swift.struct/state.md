> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/status-swift.struct/state](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/status-swift.struct/state)

# state

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The renewal state of the auto-renewable subscription.

## Declaration

```swift
let state: Product.SubscriptionInfo.RenewalState
```

## See Also

### Getting the renewal or expiration state

- [autoRenewPreference](../renewalinfo/autorenewpreference.md): The product ID of the auto-renewable subscription that will automatically renew.
- [willAutoRenew](../renewalinfo/willautorenew.md): A Boolean value that indicates whether the subscription automatically renews in the next period.
- [expirationReason](../renewalinfo/expirationreason-swift.property.md): The reason the auto-renewable subscription expired.
- [Product.SubscriptionInfo.RenewalInfo.ExpirationReason](../renewalinfo/expirationreason-swift.struct.md): The reasons for auto-renewable subscription expirations.
