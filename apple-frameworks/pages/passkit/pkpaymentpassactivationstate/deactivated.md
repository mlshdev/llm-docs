> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkpaymentpassactivationstate/deactivated

# PKPaymentPassActivationState.deactivated (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 27.2) · iPadOS 8.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 3.0+ (deprecated in 27.2)

Not active because the issuer disabled the account associated with the device.

> Use [PKSecureElementPass.PassActivationState.deactivated](../pksecureelementpass/passactivationstate-swift.enum/deactivated.md) instead.

## Declaration

```swift
case deactivated
```

<a id="Discussion"></a>

## Discussion

To reactivate the account, reprovision the pass.

## See Also

### Activation states

- [PKPaymentPassActivationState.activated](activated.md): Deprecated. Active and ready for payment use.
- [PKPaymentPassActivationState.requiresActivation](requiresactivation.md): Deprecated. Not active but may be activated by the issuer.
- [PKPaymentPassActivationState.activating](activating.md): Deprecated. Not ready for use but activation is in progress.
- [PKPaymentPassActivationState.suspended](suspended.md): Deprecated. Not active and can’t be activated.

# PKPaymentPassActivationStateDeactivated (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ (deprecated in 27.2) · iPadOS 8.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 3.0+ (deprecated in 27.2)

Not active because the issuer disabled the account associated with the device.

> Use [PKSecureElementPassActivationStateDeactivated](../pksecureelementpass/passactivationstate-swift.enum/deactivated.md) instead.

## Declaration

```objectivec
PKPaymentPassActivationStateDeactivated
```

<a id="Discussion"></a>

## Discussion

To reactivate the account, reprovision the pass.

## See Also

### Activation states

- [PKPaymentPassActivationStateActivated](activated.md): Deprecated. Active and ready for payment use.
- [PKPaymentPassActivationStateRequiresActivation](requiresactivation.md): Deprecated. Not active but may be activated by the issuer.
- [PKPaymentPassActivationStateActivating](activating.md): Deprecated. Not ready for use but activation is in progress.
- [PKPaymentPassActivationStateSuspended](suspended.md): Deprecated. Not active and can’t be activated.
