> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentpassactivationstate/activating](https://developer.apple.com/documentation/passkit/pkpaymentpassactivationstate/activating)

# PKPaymentPassActivationState.activating (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 3.0+ (deprecated in 27.0)

Not ready for use but activation is in progress.

> Use [PKSecureElementPass.PassActivationState.activating](../pksecureelementpass/passactivationstate-swift.enum/activating.md) instead.

## Declaration

```swift
case activating
```

## See Also

### Activation states

- [PKPaymentPassActivationState.activated](activated.md): Deprecated. Active and ready for payment use.
- [PKPaymentPassActivationState.requiresActivation](requiresactivation.md): Deprecated. Not active but may be activated by the issuer.
- [PKPaymentPassActivationState.suspended](suspended.md): Deprecated. Not active and can’t be activated.
- [PKPaymentPassActivationState.deactivated](deactivated.md): Deprecated. Not active because the issuer disabled the account associated with the device.

# PKPaymentPassActivationStateActivating (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 3.0+ (deprecated in 27.0)

Not ready for use but activation is in progress.

> Use [PKSecureElementPassActivationStateActivating](../pksecureelementpass/passactivationstate-swift.enum/activating.md) instead.

## Declaration

```objectivec
PKPaymentPassActivationStateActivating
```

## See Also

### Activation states

- [PKPaymentPassActivationStateActivated](activated.md): Deprecated. Active and ready for payment use.
- [PKPaymentPassActivationStateRequiresActivation](requiresactivation.md): Deprecated. Not active but may be activated by the issuer.
- [PKPaymentPassActivationStateSuspended](suspended.md): Deprecated. Not active and can’t be activated.
- [PKPaymentPassActivationStateDeactivated](deactivated.md): Deprecated. Not active because the issuer disabled the account associated with the device.
