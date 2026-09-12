> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/ispaymentpassactivationavailable()-swift.method](https://developer.apple.com/documentation/passkit/pkpasslibrary/ispaymentpassactivationavailable()-swift.method)

# isPaymentPassActivationAvailable() (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.12+ · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns a Boolean value that indicates whether the device supports adding payment passes.

> Use [isSecureElementPassActivationAvailable](issecureelementpassactivationavailable.md) instead.

## Declaration

```swift
func isPaymentPassActivationAvailable() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports adding payment passes.

<a id="Discussion"></a>

## Discussion

Activating payment passes requires a special entitlement from Apple. If the entitlement isn’t present, this method returns [false](https://developer.apple.com/documentation/swift/false).  For more information about requesting this entitlement, see [developer.apple.com/apple-pay/](https://developer.apple.com/apple-pay/).

## See Also

### Deprecated Methods

- [activate(\_:withActivationCode:completion:)](activate%28__withactivationcode_completion_%29.md): Deprecated. Activates a payment pass using the provided activation code.
- [activate(\_:withActivationData:completion:)](activate%28__withactivationdata_completion_%29.md): Deprecated. Activates a payment pass using the provided activation code.
- [canAddPaymentPass(withPrimaryAccountIdentifier:)](canaddpaymentpass%28withprimaryaccountidentifier_%29.md): Deprecated. A Boolean value that indicates whether the app can add a card to Apple Pay for the provided primary account identifier.
- [isPaymentPassActivationAvailable()](ispaymentpassactivationavailable%28%29-swift.type.method.md): Deprecated. Returns a Boolean value that indicates whether the device supports adding payment passes.
- [present(\_:)](present%28__%29-67jce.md): Deprecated. Presents the payment pass for use in-store.
- [remotePaymentPasses()](remotepaymentpasses%28%29.md): Deprecated. Returns a list of passes from a remote device.

# isPaymentPassActivationAvailable (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.12+ · visionOS 1.0+ (deprecated in 27.0) · watchOS 3.0+ (deprecated in 27.0)

Returns a Boolean value that indicates whether the device supports adding payment passes.

> Use [secureElementPassActivationAvailable](issecureelementpassactivationavailable.md) instead.

## Declaration

```objectivec
- (BOOL) isPaymentPassActivationAvailable;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports adding payment passes.

<a id="Discussion"></a>

## Discussion

Activating payment passes requires a special entitlement from Apple. If the entitlement isn’t present, this method returns [false](https://developer.apple.com/documentation/swift/false).  For more information about requesting this entitlement, see [developer.apple.com/apple-pay/](https://developer.apple.com/apple-pay/).

## See Also

### Deprecated Methods

- [activatePaymentPass:withActivationCode:completion:](activate%28__withactivationcode_completion_%29.md): Deprecated. Activates a payment pass using the provided activation code.
- [activatePaymentPass:withActivationData:completion:](activate%28__withactivationdata_completion_%29.md): Deprecated. Activates a payment pass using the provided activation code.
- [canAddPaymentPassWithPrimaryAccountIdentifier:](canaddpaymentpass%28withprimaryaccountidentifier_%29.md): Deprecated. A Boolean value that indicates whether the app can add a card to Apple Pay for the provided primary account identifier.
- [isPaymentPassActivationAvailable](ispaymentpassactivationavailable%28%29-swift.type.method.md): Deprecated. Returns a Boolean value that indicates whether the device supports adding payment passes.
- [presentPaymentPass:](present%28__%29-67jce.md): Deprecated. Presents the payment pass for use in-store.
- [remotePaymentPasses](remotepaymentpasses%28%29.md): Deprecated. Returns a list of passes from a remote device.
