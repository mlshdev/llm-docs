> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/appstore/presentoffercoderedeemsheet(in:)](https://developer.apple.com/documentation/storekit/appstore/presentoffercoderedeemsheet(in:))

# presentOfferCodeRedeemSheet(in:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Displays a sheet in the window scene that enables customers to redeem an offer code that you configure in App Store Connect.

> Use [presentOfferCodeRedeemSheet(from:options:)](presentoffercoderedeemsheet%28from_options_%29-89agc.md) instead.

## Declaration

```swift
@MainActor static func presentOfferCodeRedeemSheet(in scene: UIWindowScene) async throws
```

## Parameters

- `scene`: The [UIWindowScene](../../uikit/uiwindowscene.md) that StoreKit uses to display the offer code redemption sheet.

## Mentioned In

- [Implementing offer codes in your app](../implementing-offer-codes-in-your-app.md)
- [Supporting subscription offer codes in your app](../supporting-subscription-offer-codes-in-your-app.md)
- [Testing purchases made outside your app](../testing-purchases-made-outside-your-app.md)

<a id="Discussion"></a>

## Discussion

The [presentOfferCodeRedeemSheet(in:)](presentoffercoderedeemsheet%28in_%29.md) method displays a system sheet in the window scene, where customers can enter and redeem offer codes. If you generate offer codes in App Store Connect, call this function to enable customers to redeem the offer. To display the sheet using SwiftUI, see [offerCodeRedemption(isPresented:onCompletion:)](https://developer.apple.com/documentation/swiftui/view/offercoderedemption%28ispresented:oncompletion:%29).

> **Important**

>  Set up offer codes in App Store Connect before calling this API. Customers can only redeem these offers in your app through the redemption sheet; don’t use a custom UI.

For more information on offer codes, see [Supporting offer codes in your app](../supporting-offer-codes-in-your-app.md).

When customers redeem an offer code, StoreKit emits the resulting transaction in [updates](../transaction/updates.md). Set up a transaction listener as soon as your app launches to receive new transactions while the app is running. For more information, see [updates](../transaction/updates.md).

In Mac apps built with Mac Catalyst, this method throws a [StoreKitError.unknown](../storekiterror/unknown.md) error.

## See Also

### Deprecated

- [offerCodeRedemption(isPresented:onCompletion:)](https://developer.apple.com/documentation/swiftui/view/offercoderedemption%28ispresented:oncompletion:%29): Deprecated.
- [presentOfferCodeRedeemSheet(from:)](presentoffercoderedeemsheet%28from_%29.md): Deprecated. Displays a sheet in the view that enables customers to redeem an offer code that you configure in App Store Connect.
