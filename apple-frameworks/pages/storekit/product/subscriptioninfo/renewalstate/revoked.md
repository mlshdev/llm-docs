> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/renewalstate/revoked](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalstate/revoked)

# revoked

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The App Store has revoked the customer’s access to the subscription group.

## Declaration

```swift
static let revoked: Product.SubscriptionInfo.RenewalState
```

## See Also

### Getting the renewal state

- [subscribed](subscribed.md): The customer is currently subscribed.
- [expired](expired.md): The subscription expired.
- [inBillingRetryPeriod](inbillingretryperiod.md): The subscription is in a billing retry period.
- [inGracePeriod](ingraceperiod.md): The subscription is in a billing grace period state.
