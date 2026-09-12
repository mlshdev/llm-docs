> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/present(_:)-67jce](https://developer.apple.com/documentation/passkit/pkpasslibrary/present(_:)-67jce)

# present(\_:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.12+ · visionOS 1.0+ (deprecated in 27.0)

Presents the payment pass for use in-store.

> Use [present(\_:)](present%28__%29-9467u.md) instead.

## Declaration

```swift
func present(_ pass: PKPaymentPass)
```

## Parameters

- `pass`: The pass to present.

<a id="Discussion"></a>

## Discussion

You can use [present(\_:)](present%28__%29-67jce.md)  to present your payment pass for use in-store.  Your app must have the proper entitlement to see the payment pass that you present. Therefore, this method is mostly relevant to a bank or merchant app that presents its own payment method for use in-store.

## See Also

### Deprecated Methods

- [activate(\_:withActivationCode:completion:)](activate%28__withactivationcode_completion_%29.md): Deprecated. Activates a payment pass using the provided activation code.
- [activate(\_:withActivationData:completion:)](activate%28__withactivationdata_completion_%29.md): Deprecated. Activates a payment pass using the provided activation code.
- [canAddPaymentPass(withPrimaryAccountIdentifier:)](canaddpaymentpass%28withprimaryaccountidentifier_%29.md): Deprecated. A Boolean value that indicates whether the app can add a card to Apple Pay for the provided primary account identifier.
- [isPaymentPassActivationAvailable()](ispaymentpassactivationavailable%28%29-swift.type.method.md): Deprecated. Returns a Boolean value that indicates whether the device supports adding payment passes.
- [isPaymentPassActivationAvailable()](ispaymentpassactivationavailable%28%29-swift.method.md): Deprecated. Returns a Boolean value that indicates whether the device supports adding payment passes.
- [remotePaymentPasses()](remotepaymentpasses%28%29.md): Deprecated. Returns a list of passes from a remote device.

# presentPaymentPass: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.12+ · visionOS 1.0+ (deprecated in 27.0)

Presents the payment pass for use in-store.

> Use [presentSecureElementPass:](present%28__%29-9467u.md) instead.

## Declaration

```objectivec
- (void) presentPaymentPass:(PKPaymentPass *) pass;
```

## Parameters

- `pass`: The pass to present.

<a id="Discussion"></a>

## Discussion

You can use [presentPaymentPass:](present%28__%29-67jce.md)  to present your payment pass for use in-store.  Your app must have the proper entitlement to see the payment pass that you present. Therefore, this method is mostly relevant to a bank or merchant app that presents its own payment method for use in-store.

## See Also

### Deprecated Methods

- [activatePaymentPass:withActivationCode:completion:](activate%28__withactivationcode_completion_%29.md): Deprecated. Activates a payment pass using the provided activation code.
- [activatePaymentPass:withActivationData:completion:](activate%28__withactivationdata_completion_%29.md): Deprecated. Activates a payment pass using the provided activation code.
- [canAddPaymentPassWithPrimaryAccountIdentifier:](canaddpaymentpass%28withprimaryaccountidentifier_%29.md): Deprecated. A Boolean value that indicates whether the app can add a card to Apple Pay for the provided primary account identifier.
- [isPaymentPassActivationAvailable](ispaymentpassactivationavailable%28%29-swift.type.method.md): Deprecated. Returns a Boolean value that indicates whether the device supports adding payment passes.
- [isPaymentPassActivationAvailable](ispaymentpassactivationavailable%28%29-swift.method.md): Deprecated. Returns a Boolean value that indicates whether the device supports adding payment passes.
- [remotePaymentPasses](remotepaymentpasses%28%29.md): Deprecated. Returns a list of passes from a remote device.
