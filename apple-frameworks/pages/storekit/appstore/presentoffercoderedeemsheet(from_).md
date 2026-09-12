> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/appstore/presentoffercoderedeemsheet(from:)](https://developer.apple.com/documentation/storekit/appstore/presentoffercoderedeemsheet(from:))

# presentOfferCodeRedeemSheet(from:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** macOS 15.0+ (deprecated in 27.0)

Displays a sheet in the view that enables customers to redeem an offer code that you configure in App Store Connect.

> Use [presentOfferCodeRedeemSheet(from:options:)](presentoffercoderedeemsheet%28from_options_%29-gj8m.md) instead.

## Declaration

```swift
@MainActor static func presentOfferCodeRedeemSheet(from controller: NSViewController) async throws
```

## Parameters

- `controller`: An [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller) that StoreKit uses to display the offer code redemption sheet.

## Mentioned In

- [Supporting subscription offer codes in your app](../supporting-subscription-offer-codes-in-your-app.md)

<a id="Discussion"></a>

## Discussion

This method displays a system sheet in the view, where customers can enter and redeem offer codes. Use this method if you generate offer codes in App Store Connect and your app uses AppKit.

> **Important**

>  Set up offer codes in App Store Connect before calling this API. Customers can only redeem these offers in your app through the redemption sheet; don’t use a custom UI.

For more information on offer codes, see [Supporting offer codes in your app](../supporting-offer-codes-in-your-app.md).

When customers redeem an offer code, StoreKit emits the resulting transaction in [updates](../transaction/updates.md). Set up a transaction listener as soon as your app launches to receive new transactions while the app is running.

## See Also

### Deprecated

- [presentOfferCodeRedeemSheet(in:)](presentoffercoderedeemsheet%28in_%29.md): Deprecated. Displays a sheet in the window scene that enables customers to redeem an offer code that you configure in App Store Connect.
- [offerCodeRedemption(isPresented:onCompletion:)](https://developer.apple.com/documentation/swiftui/view/offercoderedemption%28ispresented:oncompletion:%29): Deprecated.
