> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalstate/expired

# expired

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The subscription expired.

## Declaration

```swift
static let expired: Product.SubscriptionInfo.RenewalState
```

## See Also

### Getting the renewal state

- [subscribed](subscribed.md): The customer is currently subscribed.
- [inBillingRetryPeriod](inbillingretryperiod.md): The subscription is in a billing retry period.
- [inGracePeriod](ingraceperiod.md): The subscription is in a billing grace period state.
- [revoked](revoked.md): The App Store has revoked the customer’s access to the subscription group.
