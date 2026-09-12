> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.property](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.property)

# expirationReason

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The reason the auto-renewable subscription expired.

## Declaration

```swift
let expirationReason: Product.SubscriptionInfo.RenewalInfo.ExpirationReason?
```

## Mentioned In

- [Managing Price Increases for Auto-Renewable Subscriptions](../../../managing-price-increases-for-auto-renewable-subscriptions.md)

<a id="Discussion"></a>

## Discussion

This optional value is `nil` if the auto-renewable subscription is active and hasn’t expired.

## See Also

### Getting the renewal or expiration state

- [state](../status-swift.struct/state.md): The renewal state of the auto-renewable subscription.
- [autoRenewPreference](autorenewpreference.md): The product ID of the auto-renewable subscription that will automatically renew.
- [willAutoRenew](willautorenew.md): A Boolean value that indicates whether the subscription automatically renews in the next period.
- [Product.SubscriptionInfo.RenewalInfo.ExpirationReason](expirationreason-swift.struct.md): The reasons for auto-renewable subscription expirations.
