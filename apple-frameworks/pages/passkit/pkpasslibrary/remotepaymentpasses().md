> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkpasslibrary/remotepaymentpasses()

# remotePaymentPasses() (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.2) · iPadOS 9.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.12+ · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

Returns a list of passes from a remote device.

> Use [remoteSecureElementPasses](remotesecureelementpasses.md) instead.

## Declaration

```swift
func remotePaymentPasses() -> [PKPaymentPass]
```

<a id="return-value"></a>

## Return Value

An array that contains all the passes on a remote paired device (for example, an Apple Watch) for the current device.

## See Also

### Deprecated Methods

- [activate(\_:withActivationCode:completion:)](activate%28__withactivationcode_completion_%29.md): Deprecated. Activates a payment pass using the provided activation code.
- [activate(\_:withActivationData:completion:)](activate%28__withactivationdata_completion_%29.md): Deprecated. Activates a payment pass using the provided activation code.
- [canAddPaymentPass(withPrimaryAccountIdentifier:)](canaddpaymentpass%28withprimaryaccountidentifier_%29.md): Deprecated. A Boolean value that indicates whether the app can add a card to Apple Pay for the provided primary account identifier.
- [isPaymentPassActivationAvailable()](ispaymentpassactivationavailable%28%29-swift.type.method.md): Deprecated. Returns a Boolean value that indicates whether the device supports adding payment passes.
- [isPaymentPassActivationAvailable()](ispaymentpassactivationavailable%28%29-swift.method.md): Deprecated. Returns a Boolean value that indicates whether the device supports adding payment passes.
- [present(\_:)](present%28__%29-67jce.md): Deprecated. Presents the payment pass for use in-store.

# remotePaymentPasses (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.2) · iPadOS 9.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.12+ · visionOS 1.0+ (deprecated in 27.2) · watchOS 3.0+ (deprecated in 27.2)

Returns a list of passes from a remote device.

> Use [remoteSecureElementPasses](remotesecureelementpasses.md) instead.

## Declaration

```objectivec
- (NSArray<PKPaymentPass *> *) remotePaymentPasses;
```

<a id="return-value"></a>

## Return Value

An array that contains all the passes on a remote paired device (for example, an Apple Watch) for the current device.

## See Also

### Deprecated Methods

- [activatePaymentPass:withActivationCode:completion:](activate%28__withactivationcode_completion_%29.md): Deprecated. Activates a payment pass using the provided activation code.
- [activatePaymentPass:withActivationData:completion:](activate%28__withactivationdata_completion_%29.md): Deprecated. Activates a payment pass using the provided activation code.
- [canAddPaymentPassWithPrimaryAccountIdentifier:](canaddpaymentpass%28withprimaryaccountidentifier_%29.md): Deprecated. A Boolean value that indicates whether the app can add a card to Apple Pay for the provided primary account identifier.
- [isPaymentPassActivationAvailable](ispaymentpassactivationavailable%28%29-swift.type.method.md): Deprecated. Returns a Boolean value that indicates whether the device supports adding payment passes.
- [isPaymentPassActivationAvailable](ispaymentpassactivationavailable%28%29-swift.method.md): Deprecated. Returns a Boolean value that indicates whether the device supports adding payment passes.
- [presentPaymentPass:](present%28__%29-67jce.md): Deprecated. Presents the payment pass for use in-store.
