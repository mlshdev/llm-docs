> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/canaddpaymentpass(withprimaryaccountidentifier:)](https://developer.apple.com/documentation/passkit/pkpasslibrary/canaddpaymentpass(withprimaryaccountidentifier:))

# canAddPaymentPass(withPrimaryAccountIdentifier:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.12+ · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

A Boolean value that indicates whether the app can add a card to Apple Pay for the provided primary account identifier.

> Use [canAddSecureElementPass(primaryAccountIdentifier:)](canaddsecureelementpass%28primaryaccountidentifier_%29.md) instead.

## Declaration

```swift
func canAddPaymentPass(withPrimaryAccountIdentifier primaryAccountIdentifier: String) -> Bool
```

## Parameters

- `primaryAccountIdentifier`: A unique identifier for the underlying funding primary account number (PAN). This isn’t the PAN itself.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if PassKit can add the pass.

<a id="Discussion"></a>

## Discussion

Adding payment passes requires a special entitlement from Apple. If the entitlement isn’t present, this method returns [false](https://developer.apple.com/documentation/swift/false).  For more information about requesting this entitlement, see [developer.apple.com/apple-pay/](https://developer.apple.com/apple-pay/).

## See Also

### Deprecated Methods

- [activate(\_:withActivationCode:completion:)](activate%28__withactivationcode_completion_%29.md): Deprecated. Activates a payment pass using the provided activation code.
- [activate(\_:withActivationData:completion:)](activate%28__withactivationdata_completion_%29.md): Deprecated. Activates a payment pass using the provided activation code.
- [isPaymentPassActivationAvailable()](ispaymentpassactivationavailable%28%29-swift.type.method.md): Deprecated. Returns a Boolean value that indicates whether the device supports adding payment passes.
- [isPaymentPassActivationAvailable()](ispaymentpassactivationavailable%28%29-swift.method.md): Deprecated. Returns a Boolean value that indicates whether the device supports adding payment passes.
- [present(\_:)](present%28__%29-67jce.md): Deprecated. Presents the payment pass for use in-store.
- [remotePaymentPasses()](remotepaymentpasses%28%29.md): Deprecated. Returns a list of passes from a remote device.

# canAddPaymentPassWithPrimaryAccountIdentifier: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.12+ · visionOS 1.0+ (deprecated in 27.0) · watchOS 3.0+ (deprecated in 27.0)

A Boolean value that indicates whether the app can add a card to Apple Pay for the provided primary account identifier.

> Use [canAddSecureElementPassWithPrimaryAccountIdentifier:](canaddsecureelementpass%28primaryaccountidentifier_%29.md) instead.

## Declaration

```objectivec
- (BOOL) canAddPaymentPassWithPrimaryAccountIdentifier:(NSString *) primaryAccountIdentifier;
```

## Parameters

- `primaryAccountIdentifier`: A unique identifier for the underlying funding primary account number (PAN). This isn’t the PAN itself.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if PassKit can add the pass.

<a id="Discussion"></a>

## Discussion

Adding payment passes requires a special entitlement from Apple. If the entitlement isn’t present, this method returns [false](https://developer.apple.com/documentation/swift/false).  For more information about requesting this entitlement, see [developer.apple.com/apple-pay/](https://developer.apple.com/apple-pay/).

## See Also

### Deprecated Methods

- [activatePaymentPass:withActivationCode:completion:](activate%28__withactivationcode_completion_%29.md): Deprecated. Activates a payment pass using the provided activation code.
- [activatePaymentPass:withActivationData:completion:](activate%28__withactivationdata_completion_%29.md): Deprecated. Activates a payment pass using the provided activation code.
- [isPaymentPassActivationAvailable](ispaymentpassactivationavailable%28%29-swift.type.method.md): Deprecated. Returns a Boolean value that indicates whether the device supports adding payment passes.
- [isPaymentPassActivationAvailable](ispaymentpassactivationavailable%28%29-swift.method.md): Deprecated. Returns a Boolean value that indicates whether the device supports adding payment passes.
- [presentPaymentPass:](present%28__%29-67jce.md): Deprecated. Presents the payment pass for use in-store.
- [remotePaymentPasses](remotepaymentpasses%28%29.md): Deprecated. Returns a list of passes from a remote device.
