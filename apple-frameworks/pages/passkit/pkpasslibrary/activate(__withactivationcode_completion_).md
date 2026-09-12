> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/activate(_:withactivationcode:completion:)](https://developer.apple.com/documentation/passkit/pkpasslibrary/activate(_:withactivationcode:completion:))

# activate(\_:withActivationCode:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ · visionOS 1.0+ (deprecated in 1.0)

Activates a payment pass using the provided activation code.

> Use [activate(\_:activationData:completion:)](activate%28__activationdata_completion_%29.md) instead.

## Declaration

```swift
func activate(_ paymentPass: PKPaymentPass, withActivationCode activationCode: String, completion: ((Bool, any Error) -> Void)? = nil)
```

## Parameters

- `paymentPass`: The payment pass to activate.
- `activationCode`: The activation code.
- `completion`: The completion block that PassKit calls after activation.

  This block takes the following parameters:

  - **`success`**: [true](https://developer.apple.com/documentation/swift/true) if authorization succeeds; otherwise, [false](https://developer.apple.com/documentation/swift/false).
  - **`error`**: If `success` is [false](https://developer.apple.com/documentation/swift/false), a description of the error.

<a id="Discussion"></a>

## Discussion

You can only activate a provisioned pass, and it must be in the [PKPaymentPassActivationState.requiresActivation](../pkpaymentpassactivationstate/requiresactivation.md) state.

> **Important**

>  Activating payment passes requires a special entitlement from Apple. For more information about requesting this entitlement, see [developer.apple.com/apple-pay/](https://developer.apple.com/apple-pay/).

## See Also

### Deprecated Methods

- [activate(\_:withActivationData:completion:)](activate%28__withactivationdata_completion_%29.md): Deprecated. Activates a payment pass using the provided activation code.
- [canAddPaymentPass(withPrimaryAccountIdentifier:)](canaddpaymentpass%28withprimaryaccountidentifier_%29.md): Deprecated. A Boolean value that indicates whether the app can add a card to Apple Pay for the provided primary account identifier.
- [isPaymentPassActivationAvailable()](ispaymentpassactivationavailable%28%29-swift.type.method.md): Deprecated. Returns a Boolean value that indicates whether the device supports adding payment passes.
- [isPaymentPassActivationAvailable()](ispaymentpassactivationavailable%28%29-swift.method.md): Deprecated. Returns a Boolean value that indicates whether the device supports adding payment passes.
- [present(\_:)](present%28__%29-67jce.md): Deprecated. Presents the payment pass for use in-store.
- [remotePaymentPasses()](remotepaymentpasses%28%29.md): Deprecated. Returns a list of passes from a remote device.

# activatePaymentPass:withActivationCode:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ · visionOS 1.0+ (deprecated in 1.0)

Activates a payment pass using the provided activation code.

> Use [activateSecureElementPass:withActivationData:completion:](activate%28__activationdata_completion_%29.md) instead.

## Declaration

```objectivec
- (void) activatePaymentPass:(PKPaymentPass *) paymentPass withActivationCode:(NSString *) activationCode completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `paymentPass`: The payment pass to activate.
- `activationCode`: The activation code.
- `completion`: The completion block that PassKit calls after activation.

  This block takes the following parameters:

  - **`success`**: [true](https://developer.apple.com/documentation/swift/true) if authorization succeeds; otherwise, [false](https://developer.apple.com/documentation/swift/false).
  - **`error`**: If `success` is [false](https://developer.apple.com/documentation/swift/false), a description of the error.

<a id="Discussion"></a>

## Discussion

You can only activate a provisioned pass, and it must be in the [PKPaymentPassActivationStateRequiresActivation](../pkpaymentpassactivationstate/requiresactivation.md) state.

> **Important**

>  Activating payment passes requires a special entitlement from Apple. For more information about requesting this entitlement, see [developer.apple.com/apple-pay/](https://developer.apple.com/apple-pay/).

## See Also

### Deprecated Methods

- [activatePaymentPass:withActivationData:completion:](activate%28__withactivationdata_completion_%29.md): Deprecated. Activates a payment pass using the provided activation code.
- [canAddPaymentPassWithPrimaryAccountIdentifier:](canaddpaymentpass%28withprimaryaccountidentifier_%29.md): Deprecated. A Boolean value that indicates whether the app can add a card to Apple Pay for the provided primary account identifier.
- [isPaymentPassActivationAvailable](ispaymentpassactivationavailable%28%29-swift.type.method.md): Deprecated. Returns a Boolean value that indicates whether the device supports adding payment passes.
- [isPaymentPassActivationAvailable](ispaymentpassactivationavailable%28%29-swift.method.md): Deprecated. Returns a Boolean value that indicates whether the device supports adding payment passes.
- [presentPaymentPass:](present%28__%29-67jce.md): Deprecated. Presents the payment pass for use in-store.
- [remotePaymentPasses](remotepaymentpasses%28%29.md): Deprecated. Returns a list of passes from a remote device.
