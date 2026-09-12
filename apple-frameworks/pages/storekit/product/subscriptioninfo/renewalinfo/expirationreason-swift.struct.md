> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/expirationreason-swift.struct)

# Product.SubscriptionInfo.RenewalInfo.ExpirationReason

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The reasons for auto-renewable subscription expirations.

## Declaration

```swift
struct ExpirationReason
```

## Topics

### Getting the expiration reason

- [autoRenewDisabled](expirationreason-swift.struct/autorenewdisabled.md): The auto-renewable subscription expired because the customer voluntarily canceled their subscription.
- [billingError](expirationreason-swift.struct/billingerror.md): The auto-renewable subscription expired because of a billing error.
- [didNotConsentToPriceIncrease](expirationreason-swift.struct/didnotconsenttopriceincrease.md): The subscription expired because the customer didn’t consent to a price increase that requires customer consent.
- [productUnavailable](expirationreason-swift.struct/productunavailable.md): The auto-renewable subscription expired because the product was unavailable for purchase at the time of the renewal.
- [unknown](expirationreason-swift.struct/unknown.md): The auto-renewable subscription expired for an unknown reason.

### Getting a localized description

- [localizedDescription](expirationreason-swift.struct/localizeddescription.md): The localized text that describes the expiration reason.

### Type Properties

- [unbundled](expirationreason-swift.struct/unbundled.md): The subscription expired because the customer left the Subscription Bundle.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the renewal or expiration state

- [state](../status-swift.struct/state.md): The renewal state of the auto-renewable subscription.
- [autoRenewPreference](autorenewpreference.md): The product ID of the auto-renewable subscription that will automatically renew.
- [willAutoRenew](willautorenew.md): A Boolean value that indicates whether the subscription automatically renews in the next period.
- [expirationReason](expirationreason-swift.property.md): The reason the auto-renewable subscription expired.
