> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentpassactivationstate/suspended](https://developer.apple.com/documentation/passkit/pkpaymentpassactivationstate/suspended)

# PKPaymentPassActivationState.suspended (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 3.0+ (deprecated in 27.0)

Not active and can’t be activated.

> Use [PKSecureElementPass.PassActivationState.suspended](../pksecureelementpass/passactivationstate-swift.enum/suspended.md) instead.

## Declaration

```swift
case suspended
```

## See Also

### Activation states

- [PKPaymentPassActivationState.activated](activated.md): Deprecated. Active and ready for payment use.
- [PKPaymentPassActivationState.requiresActivation](requiresactivation.md): Deprecated. Not active but may be activated by the issuer.
- [PKPaymentPassActivationState.activating](activating.md): Deprecated. Not ready for use but activation is in progress.
- [PKPaymentPassActivationState.deactivated](deactivated.md): Deprecated. Not active because the issuer disabled the account associated with the device.

# PKPaymentPassActivationStateSuspended (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 3.0+ (deprecated in 27.0)

Not active and can’t be activated.

> Use [PKSecureElementPassActivationStateSuspended](../pksecureelementpass/passactivationstate-swift.enum/suspended.md) instead.

## Declaration

```objectivec
PKPaymentPassActivationStateSuspended
```

## See Also

### Activation states

- [PKPaymentPassActivationStateActivated](activated.md): Deprecated. Active and ready for payment use.
- [PKPaymentPassActivationStateRequiresActivation](requiresactivation.md): Deprecated. Not active but may be activated by the issuer.
- [PKPaymentPassActivationStateActivating](activating.md): Deprecated. Not ready for use but activation is in progress.
- [PKPaymentPassActivationStateDeactivated](deactivated.md): Deprecated. Not active because the issuer disabled the account associated with the device.
