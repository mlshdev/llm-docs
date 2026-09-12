> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentqueue/presentcoderedemptionsheet()](https://developer.apple.com/documentation/storekit/skpaymentqueue/presentcoderedemptionsheet())

# presentCodeRedemptionSheet() (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Displays a sheet that enables customers to redeem offer codes that you configure in App Store Connect.

> Use [presentOfferCodeRedeemSheet(in:)](../appstore/presentoffercoderedeemsheet%28in_%29.md) or [offerCodeRedemption(isPresented:onCompletion:)](https://developer.apple.com/documentation/swiftui/view/offercoderedemption%28ispresented:oncompletion:%29) instead. For more information, see [Supporting offer codes in your app](../supporting-offer-codes-in-your-app.md).

## Declaration

```swift
func presentCodeRedemptionSheet()
```

## Mentioned In

- [Implementing offer codes in your app](../implementing-offer-codes-in-your-app.md)
- [Testing In-App Purchases in Xcode](../testing-in-app-purchases-in-xcode.md)
- [Supporting offer codes in your app](../supporting-offer-codes-in-your-app.md)
- [Supporting subscription offer codes in your app](../supporting-subscription-offer-codes-in-your-app.md)

<a id="Discussion"></a>

## Discussion

The [presentCodeRedemptionSheet()](presentcoderedemptionsheet%28%29.md) function displays a system sheet where customers can enter and redeem offer codes. If you generate offer codes in App Store Connect, call this function to enable customers to redeem the offer. For information on implementing offer codes, see [Implementing offer codes in your app](../implementing-offer-codes-in-your-app.md).

> **Note**

>  For apps with more than one scene, and on iOS 16 or later and iPadOS 16 or later, use [offerCodeRedemption(isPresented:onCompletion:)](https://developer.apple.com/documentation/swiftui/view/offercoderedemption%28ispresented:oncompletion:%29) or [presentOfferCodeRedeemSheet(in:)](../appstore/presentoffercoderedeemsheet%28in_%29.md) instead.

When your app calls [presentCodeRedemptionSheet()](presentcoderedemptionsheet%28%29.md), the system determines where to display the screen. Use [presentCodeRedemptionSheet()](presentcoderedemptionsheet%28%29.md) to support devices running iOS 14 through iOS 15, and iPadOS 14 through iPadOS 15.

> **Important**

>  Set up offer codes in App Store Connect before calling this API. Customers can only redeem these offers in your app through the redemption sheet; don’t use a custom UI.

For information on configuring and generating offer codes, see [Set up offer codes](https://help.apple.com/app-store-connect/#/dev6a098e4b1).

This method applies to offer codes only; it doesn’t apply to promo codes for apps or in-app purchases. For more information on promo codes, see [Request and manage promo codes](https://help.apple.com/app-store-connect/#/dev50869de4a).

This function doesn’t affect Mac apps built with Mac Catalyst.

# presentCodeRedemptionSheet (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Displays a sheet that enables customers to redeem offer codes that you configure in App Store Connect.

> Use [presentOfferCodeRedeemSheet(in:)](../appstore/presentoffercoderedeemsheet%28in_%29.md) or [offerCodeRedemption(isPresented:onCompletion:)](https://developer.apple.com/documentation/swiftui/view/offercoderedemption%28ispresented:oncompletion:%29) instead. For more information, see [Supporting offer codes in your app](../supporting-offer-codes-in-your-app.md).

## Declaration

```objectivec
- (void) presentCodeRedemptionSheet;
```

## Mentioned In

- [Implementing offer codes in your app](../implementing-offer-codes-in-your-app.md)
- [Testing In-App Purchases in Xcode](../testing-in-app-purchases-in-xcode.md)
- [Supporting offer codes in your app](../supporting-offer-codes-in-your-app.md)
- [Supporting subscription offer codes in your app](../supporting-subscription-offer-codes-in-your-app.md)

<a id="Discussion"></a>

## Discussion

The [presentCodeRedemptionSheet](presentcoderedemptionsheet%28%29.md) function displays a system sheet where customers can enter and redeem offer codes. If you generate offer codes in App Store Connect, call this function to enable customers to redeem the offer. For information on implementing offer codes, see [Implementing offer codes in your app](../implementing-offer-codes-in-your-app.md).

> **Note**

>  For apps with more than one scene, and on iOS 16 or later and iPadOS 16 or later, use [offerCodeRedemption(isPresented:onCompletion:)](https://developer.apple.com/documentation/swiftui/view/offercoderedemption%28ispresented:oncompletion:%29) or [presentOfferCodeRedeemSheet(in:)](../appstore/presentoffercoderedeemsheet%28in_%29.md) instead.

When your app calls [presentCodeRedemptionSheet](presentcoderedemptionsheet%28%29.md), the system determines where to display the screen. Use [presentCodeRedemptionSheet](presentcoderedemptionsheet%28%29.md) to support devices running iOS 14 through iOS 15, and iPadOS 14 through iPadOS 15.

> **Important**

>  Set up offer codes in App Store Connect before calling this API. Customers can only redeem these offers in your app through the redemption sheet; don’t use a custom UI.

For information on configuring and generating offer codes, see [Set up offer codes](https://help.apple.com/app-store-connect/#/dev6a098e4b1).

This method applies to offer codes only; it doesn’t apply to promo codes for apps or in-app purchases. For more information on promo codes, see [Request and manage promo codes](https://help.apple.com/app-store-connect/#/dev50869de4a).

This function doesn’t affect Mac apps built with Mac Catalyst.
