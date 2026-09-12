> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/didnotconsenttopriceincrease](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct/didnotconsenttopriceincrease)

# didNotConsentToPriceIncrease

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The subscription expired because the customer didn’t consent to a price increase that requires customer consent.

## Declaration

```swift
static let didNotConsentToPriceIncrease: Product.SubscriptionInfo.RenewalInfo.ExpirationReason
```

## Mentioned In

- [Managing Price Increases for Auto-Renewable Subscriptions](../../../../managing-price-increases-for-auto-renewable-subscriptions.md)

<a id="Discussion"></a>

## Discussion

The customer didn’t consent to an auto-renewable subscription price increase that requires their consent, or to a subscription offer conversion that requires their consent, so the subscription expired.

For more information about subscription price increases that require customer consent, see [Auto-renewable subscription price increase thresholds](https://developer.apple.com/help/app-store-connect/reference/auto-renewable-subscription-price-increase-thresholds). For more information about offer conversions that require customer consent, see [Consent for subscription offer conversions](https://developer.apple.com/help/app-store-connect/reference/consent-for-subscription-offer-conversions).

## See Also

### Getting the expiration reason

- [autoRenewDisabled](autorenewdisabled.md): The auto-renewable subscription expired because the customer voluntarily canceled their subscription.
- [billingError](billingerror.md): The auto-renewable subscription expired because of a billing error.
- [productUnavailable](productunavailable.md): The auto-renewable subscription expired because the product was unavailable for purchase at the time of the renewal.
- [unknown](unknown.md): The auto-renewable subscription expired for an unknown reason.
