> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/purchaseoption/promotionaloffer(id:)](https://developer.apple.com/documentation/storekit/product/purchaseoption/promotionaloffer(id:))

# promotionalOffer(id:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Sets a promotional offer for the transaction in the testing environment.

## Declaration

```swift
static func promotionalOffer(id identifier: String) -> Product.PurchaseOption
```

## Parameters

- `identifier`: The identifier of the promotional offer to apply to the transaction. You need to set up identifiers in your StoreKit configuration file.

<a id="Discussion"></a>

## Discussion

Use this purchase option when you test your app in Xcode using [StoreKit Test](https://developer.apple.com/documentation/storekittest) and call [buyProduct(identifier:options:)](https://developer.apple.com/documentation/storekittest/sktestsession/buyproduct%28identifier:options:%29). This method makes it possible to test promotional offers without supplying a signature.

Set up the promotional offer identifiers that you use in this call in your StoreKit configuration file. For more information, see [Setting up StoreKit Testing in Xcode](https://developer.apple.com/documentation/xcode/setting-up-storekit-testing-in-xcode).

When you apply this option, the purchase transaction simulates a customer redeeming a promotional offer, and includes the promotional offer you specify.

## See Also

### Setting options for StoreKit Testing in Xcode

- [purchaseDate(\_:renewalBehavior:)](purchasedate%28__renewalbehavior_%29.md): Sets the purchase date for the transaction in the testing environment, and indicates the renewal behavior for an auto-renewable subscription.
- [Product.PurchaseOption.SubscriptionRenewalBehavior](subscriptionrenewalbehavior.md): Renewal options for auto-renewable subscriptions that you purchase in the testing environment.
- [codeOffer(referenceName:)](codeoffer%28referencename_%29.md): Sets an offer code for the transaction in the testing environment.
