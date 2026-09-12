> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentpassactivationstate/activated](https://developer.apple.com/documentation/passkit/pkpaymentpassactivationstate/activated)

# PKPaymentPassActivationState.activated (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 3.0+ (deprecated in 27.0)

Active and ready for payment use.

> Use [PKSecureElementPass.PassActivationState.activated](../pksecureelementpass/passactivationstate-swift.enum/activated.md) instead.

## Declaration

```swift
case activated
```

## See Also

### Activation states

- [PKPaymentPassActivationState.requiresActivation](requiresactivation.md): Deprecated. Not active but may be activated by the issuer.
- [PKPaymentPassActivationState.activating](activating.md): Deprecated. Not ready for use but activation is in progress.
- [PKPaymentPassActivationState.suspended](suspended.md): Deprecated. Not active and can’t be activated.
- [PKPaymentPassActivationState.deactivated](deactivated.md): Deprecated. Not active because the issuer disabled the account associated with the device.

# PKPaymentPassActivationStateActivated (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 3.0+ (deprecated in 27.0)

Active and ready for payment use.

> Use [PKSecureElementPassActivationStateActivated](../pksecureelementpass/passactivationstate-swift.enum/activated.md) instead.

## Declaration

```objectivec
PKPaymentPassActivationStateActivated
```

## See Also

### Activation states

- [PKPaymentPassActivationStateRequiresActivation](requiresactivation.md): Deprecated. Not active but may be activated by the issuer.
- [PKPaymentPassActivationStateActivating](activating.md): Deprecated. Not ready for use but activation is in progress.
- [PKPaymentPassActivationStateSuspended](suspended.md): Deprecated. Not active and can’t be activated.
- [PKPaymentPassActivationStateDeactivated](deactivated.md): Deprecated. Not active because the issuer disabled the account associated with the device.
