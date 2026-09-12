> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/productunavailable](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/productunavailable)

# productUnavailable

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The auto-renewable subscription expired because the product was unavailable for purchase at the time of the renewal.

## Declaration

```swift
static let productUnavailable: Product.SubscriptionInfo.RenewalInfo.ExpirationReason
```

## See Also

### Getting the expiration reason

- [autoRenewDisabled](autorenewdisabled.md): The auto-renewable subscription expired because the customer voluntarily canceled their subscription.
- [billingError](billingerror.md): The auto-renewable subscription expired because of a billing error.
- [didNotConsentToPriceIncrease](didnotconsenttopriceincrease.md): The subscription expired because the customer didn’t consent to a price increase that requires customer consent.
- [unknown](unknown.md): The auto-renewable subscription expired for an unknown reason.
