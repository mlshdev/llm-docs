> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/purchaseoption/purchasedate(_:renewalbehavior:)](https://developer.apple.com/documentation/storekit/product/purchaseoption/purchasedate(_:renewalbehavior:))

# purchaseDate(\_:renewalBehavior:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Sets the purchase date for the transaction in the testing environment, and indicates the renewal behavior for an auto-renewable subscription.

## Declaration

```swift
static func purchaseDate(_ date: Date, renewalBehavior: Product.PurchaseOption.SubscriptionRenewalBehavior = .renewUntilNow) -> Product.PurchaseOption
```

## Parameters

- `date`: The purchase date for the transaction. Specify a date in the past or the current moment. Dates in the future aren’t valid.
- `renewalBehavior`: The renewal behavior for the auto-renewable subscription in this transaction, whether it renews continuously from the purchase date, or it cancels after the first period. By default, the subscription renews.

<a id="Discussion"></a>

## Discussion

Use this purchase option when you test your app in Xcode using [StoreKit Test](https://developer.apple.com/documentation/storekittest) and call [buyProduct(identifier:options:)](https://developer.apple.com/documentation/storekittest/sktestsession/buyproduct%28identifier:options:%29).

Use this purchase option to create useful transactions for your test cases. For example, use a date in the past with the default `renewalBehavior` to generate a full history of subscription renewals to test. Or, use a date in the past with the [Product.PurchaseOption.SubscriptionRenewalBehavior.cancelImmediately](subscriptionrenewalbehavior/cancelimmediately.md) behavior to simulate an account of a customer who canceled their subscription.

## See Also

### Setting options for StoreKit Testing in Xcode

- [Product.PurchaseOption.SubscriptionRenewalBehavior](subscriptionrenewalbehavior.md): Renewal options for auto-renewable subscriptions that you purchase in the testing environment.
- [codeOffer(referenceName:)](codeoffer%28referencename_%29.md): Sets an offer code for the transaction in the testing environment.
- [promotionalOffer(id:)](promotionaloffer%28id_%29.md): Sets a promotional offer for the transaction in the testing environment.
