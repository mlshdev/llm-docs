> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/renewalinfo/autorenewpreference](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/autorenewpreference)

# autoRenewPreference

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The product ID of the auto-renewable subscription that will automatically renew.

## Declaration

```swift
let autoRenewPreference: String?
```

<a id="Discussion"></a>

## Discussion

This value is the product ID of the auto-renewable subscription that will renew after the current period expires. The value may be:

- The same as [currentProductID](currentproductid.md) if the subscription will renew with the same product.
- Another product ID value if the subscription will renew to a different product.
- `nil` if the subscription won’t renew in the next period. This may occur for several reasons, including when the person disables auto-renew for the subscription, the subscription lapses due to a billing issue, or you increase the subscription price and the person doesn’t accept the increase.

## See Also

### Getting the renewal or expiration state

- [state](../status-swift.struct/state.md): The renewal state of the auto-renewable subscription.
- [willAutoRenew](willautorenew.md): A Boolean value that indicates whether the subscription automatically renews in the next period.
- [expirationReason](expirationreason-swift.property.md): The reason the auto-renewable subscription expired.
- [Product.SubscriptionInfo.RenewalInfo.ExpirationReason](expirationreason-swift.struct.md): The reasons for auto-renewable subscription expirations.
