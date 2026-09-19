> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkpaymentpassactivationstate/requiresactivation

# PKPaymentPassActivationState.requiresActivation (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 27.2) · iPadOS 8.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 3.0+ (deprecated in 27.2)

Not active but may be activated by the issuer.

> Use [PKSecureElementPass.PassActivationState.requiresActivation](../pksecureelementpass/passactivationstate-swift.enum/requiresactivation.md) instead.

## Declaration

```swift
case requiresActivation
```

## See Also

### Activation states

- [PKPaymentPassActivationState.activated](activated.md): Deprecated. Active and ready for payment use.
- [PKPaymentPassActivationState.activating](activating.md): Deprecated. Not ready for use but activation is in progress.
- [PKPaymentPassActivationState.suspended](suspended.md): Deprecated. Not active and can’t be activated.
- [PKPaymentPassActivationState.deactivated](deactivated.md): Deprecated. Not active because the issuer disabled the account associated with the device.

# PKPaymentPassActivationStateRequiresActivation (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ (deprecated in 27.2) · iPadOS 8.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 3.0+ (deprecated in 27.2)

Not active but may be activated by the issuer.

> Use [PKSecureElementPassActivationStateRequiresActivation](../pksecureelementpass/passactivationstate-swift.enum/requiresactivation.md) instead.

## Declaration

```objectivec
PKPaymentPassActivationStateRequiresActivation
```

## See Also

### Activation states

- [PKPaymentPassActivationStateActivated](activated.md): Deprecated. Active and ready for payment use.
- [PKPaymentPassActivationStateActivating](activating.md): Deprecated. Not ready for use but activation is in progress.
- [PKPaymentPassActivationStateSuspended](suspended.md): Deprecated. Not active and can’t be activated.
- [PKPaymentPassActivationStateDeactivated](deactivated.md): Deprecated. Not active because the issuer disabled the account associated with the device.
