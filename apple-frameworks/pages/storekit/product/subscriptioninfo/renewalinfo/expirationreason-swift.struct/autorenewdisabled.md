> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/autorenewdisabled](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/autorenewdisabled)

# autoRenewDisabled

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The auto-renewable subscription expired because the customer voluntarily canceled their subscription.

## Declaration

```swift
static let autoRenewDisabled: Product.SubscriptionInfo.RenewalInfo.ExpirationReason
```

## Mentioned In

- [Managing Price Increases for Auto-Renewable Subscriptions](../../../../managing-price-increases-for-auto-renewable-subscriptions.md)

## See Also

### Getting the expiration reason

- [billingError](billingerror.md): The auto-renewable subscription expired because of a billing error.
- [didNotConsentToPriceIncrease](didnotconsenttopriceincrease.md): The subscription expired because the customer didn’t consent to a price increase that requires customer consent.
- [productUnavailable](productunavailable.md): The auto-renewable subscription expired because the product was unavailable for purchase at the time of the renewal.
- [unknown](unknown.md): The auto-renewable subscription expired for an unknown reason.
