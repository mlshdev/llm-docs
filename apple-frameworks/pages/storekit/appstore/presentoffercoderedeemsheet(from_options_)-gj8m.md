> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/appstore/presentoffercoderedeemsheet(from:options:)-gj8m](https://developer.apple.com/documentation/storekit/appstore/presentoffercoderedeemsheet(from:options:)-gj8m)

# presentOfferCodeRedeemSheet(from:options:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

Presents a sheet that enables users to redeem subscription offer codes that you configure in App Store Connect.

## Declaration

```swift
@MainActor static func presentOfferCodeRedeemSheet(from window: NSWindow, options: Set<RedeemOption> = []) async throws -> VerificationResult<Transaction>
```

## Parameters

- `window`: The `NSWindow` that StoreKit uses to display the offer code redemption sheet.
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
