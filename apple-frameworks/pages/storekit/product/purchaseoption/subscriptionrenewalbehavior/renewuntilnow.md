> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/purchaseoption/subscriptionrenewalbehavior/renewuntilnow](https://developer.apple.com/documentation/storekit/product/purchaseoption/subscriptionrenewalbehavior/renewuntilnow)

# Product.PurchaseOption.SubscriptionRenewalBehavior.renewUntilNow

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A subscription-renewal behavior in the testing environment that allows the subscription to renew continuously, up to the current date.

## Declaration

```swift
case renewUntilNow
```

<a id="Discussion"></a>

## Discussion

Choose this option to create test cases that require an auto-renewable subscription that continues to renew. If you set the purchase date in [purchaseDate(\_:renewalBehavior:)](../purchasedate%28__renewalbehavior_%29.md)to the past, the testing environment generates transactions for all the subscription renewals up to the current date.

## See Also

### Renewal behaviors in the testing environment

- [Product.PurchaseOption.SubscriptionRenewalBehavior.cancelImmediately](cancelimmediately.md): A subscription-renewal behavior in the testing environment that cancels the subscription, resulting in only one subscription period.
