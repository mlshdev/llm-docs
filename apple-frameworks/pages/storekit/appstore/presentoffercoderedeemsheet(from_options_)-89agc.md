> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/appstore/presentoffercoderedeemsheet(from:options:)-89agc](https://developer.apple.com/documentation/storekit/appstore/presentoffercoderedeemsheet(from:options:)-89agc)

# presentOfferCodeRedeemSheet(from:options:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Presents a sheet that enables users to redeem subscription offer codes that you configure in App Store Connect.

## Declaration

```swift
@MainActor static func presentOfferCodeRedeemSheet(from viewController: UIViewController, options: Set<RedeemOption> = []) async throws -> VerificationResult<Transaction>
```

## Parameters

- `viewController`: The `UIViewController` that StoreKit uses to display the offer code redemption sheet.
- `options`: A set of [RedeemOption](../redeemoption.md) values to configure the offer code redemption.

<a id="return-value"></a>

## Return Value

A [VerificationResult](../verificationresult.md) containing the [Transaction](../transaction.md) that the redemption produces.

## Mentioned In

- [Supporting offer codes in your app](../supporting-offer-codes-in-your-app.md)

<a id="discussion"></a>

## Discussion

> **Throws**

> [StoreKitError](../storekiterror.md) if the system cannot present the sheet or the redemption fails.

## See Also

### Presenting the offer code redemption sheet

- [Supporting offer codes in your app](../supporting-offer-codes-in-your-app.md): Enable customers to redeem offer codes through the App Store or within your app.
- [offerCodeRedemption(options:isPresented:onCompletion:)](https://developer.apple.com/documentation/swiftui/view/offercoderedemption%28options:ispresented:oncompletion:%29): Presents a sheet that enables customers to redeem offer codes that you configure in App Store Connect.
