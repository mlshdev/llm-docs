> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/purchaseoption/subscriptionrenewalbehavior/cancelimmediately](https://developer.apple.com/documentation/storekit/product/purchaseoption/subscriptionrenewalbehavior/cancelimmediately)

# Product.PurchaseOption.SubscriptionRenewalBehavior.cancelImmediately

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A subscription-renewal behavior in the testing environment that cancels the subscription, resulting in only one subscription period.

## Declaration

```swift
case cancelImmediately
```

<a id="Discussion"></a>

## Discussion

Choose this option for test cases that require an auto-renewable subscription that won’t renew.

## See Also

### Renewal behaviors in the testing environment

- [Product.PurchaseOption.SubscriptionRenewalBehavior.renewUntilNow](renewuntilnow.md): A subscription-renewal behavior in the testing environment that allows the subscription to renew continuously, up to the current date.
