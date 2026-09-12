> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/ispaymentpassactivationavailable()-swift.type.method](https://developer.apple.com/documentation/passkit/pkpasslibrary/ispaymentpassactivationavailable()-swift.type.method)

# isPaymentPassActivationAvailable() (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Returns a Boolean value that indicates whether the device supports adding payment passes.

> Use [isSecureElementPassActivationAvailable](issecureelementpassactivationavailable.md) instead.

## Declaration

```swift
class func isPaymentPassActivationAvailable() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports adding payment passes.

## See Also

### Deprecated Methods

- [activate(\_:withActivationCode:completion:)](activate%28__withactivationcode_completion_%29.md): Deprecated. Activates a payment pass using the provided activation code.
- [activate(\_:withActivationData:completion:)](activate%28__withactivationdata_completion_%29.md): Deprecated. Activates a payment pass using the provided activation code.
- [canAddPaymentPass(withPrimaryAccountIdentifier:)](canaddpaymentpass%28withprimaryaccountidentifier_%29.md): Deprecated. A Boolean value that indicates whether the app can add a card to Apple Pay for the provided primary account identifier.
- [isPaymentPassActivationAvailable()](ispaymentpassactivationavailable%28%29-swift.method.md): Deprecated. Returns a Boolean value that indicates whether the device supports adding payment passes.
- [present(\_:)](present%28__%29-67jce.md): Deprecated. Presents the payment pass for use in-store.
- [remotePaymentPasses()](remotepaymentpasses%28%29.md): Deprecated. Returns a list of passes from a remote device.

# isPaymentPassActivationAvailable (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 2.0)

Returns a Boolean value that indicates whether the device supports adding payment passes.

> Use [secureElementPassActivationAvailable](issecureelementpassactivationavailable.md) instead.

## Declaration

```objectivec
+ (BOOL) isPaymentPassActivationAvailable;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports adding payment passes.

## See Also

### Deprecated Methods

- [activatePaymentPass:withActivationCode:completion:](activate%28__withactivationcode_completion_%29.md): Deprecated. Activates a payment pass using the provided activation code.
- [activatePaymentPass:withActivationData:completion:](activate%28__withactivationdata_completion_%29.md): Deprecated. Activates a payment pass using the provided activation code.
- [canAddPaymentPassWithPrimaryAccountIdentifier:](canaddpaymentpass%28withprimaryaccountidentifier_%29.md): Deprecated. A Boolean value that indicates whether the app can add a card to Apple Pay for the provided primary account identifier.
- [isPaymentPassActivationAvailable](ispaymentpassactivationavailable%28%29-swift.method.md): Deprecated. Returns a Boolean value that indicates whether the device supports adding payment passes.
- [presentPaymentPass:](present%28__%29-67jce.md): Deprecated. Presents the payment pass for use in-store.
- [remotePaymentPasses](remotepaymentpasses%28%29.md): Deprecated. Returns a list of passes from a remote device.
