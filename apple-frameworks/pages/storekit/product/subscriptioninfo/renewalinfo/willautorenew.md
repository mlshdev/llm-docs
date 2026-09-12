> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/renewalinfo/willautorenew](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/willautorenew)

# willAutoRenew

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether the subscription automatically renews in the next period.

## Declaration

```swift
let willAutoRenew: Bool
```

## Mentioned In

- [Managing the life cycle of monthly subscriptions with a 12-month commitment](../../../managing-lifecycle-of-monthly-subscriptions-with-a-12-month-commitment-.md)
- [Supporting win-back offers in your app](../../../supporting-win-back-offers-in-your-app.md)

## See Also

### Getting the renewal or expiration state

- [state](../status-swift.struct/state.md): The renewal state of the auto-renewable subscription.
- [autoRenewPreference](autorenewpreference.md): The product ID of the auto-renewable subscription that will automatically renew.
- [expirationReason](expirationreason-swift.property.md): The reason the auto-renewable subscription expired.
- [Product.SubscriptionInfo.RenewalInfo.ExpirationReason](expirationreason-swift.struct.md): The reasons for auto-renewable subscription expirations.
