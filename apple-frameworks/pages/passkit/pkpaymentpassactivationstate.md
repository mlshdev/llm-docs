> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentpassactivationstate](https://developer.apple.com/documentation/passkit/pkpaymentpassactivationstate)

# PKPaymentPassActivationState (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 3.0+ (deprecated in 27.0)

Cases that indicate payment pass activation states.

> Use [PKSecureElementPass.PassActivationState](pksecureelementpass/passactivationstate-swift.enum.md) instead.

## Declaration

```swift
enum PKPaymentPassActivationState
```

## Topics

### Activation states

- [PKPaymentPassActivationState.activated](pkpaymentpassactivationstate/activated.md): Deprecated. Active and ready for payment use.
- [PKPaymentPassActivationState.requiresActivation](pkpaymentpassactivationstate/requiresactivation.md): Deprecated. Not active but may be activated by the issuer.
- [PKPaymentPassActivationState.activating](pkpaymentpassactivationstate/activating.md): Deprecated. Not ready for use but activation is in progress.
- [PKPaymentPassActivationState.suspended](pkpaymentpassactivationstate/suspended.md): Deprecated. Not active and can’t be activated.
- [PKPaymentPassActivationState.deactivated](pkpaymentpassactivationstate/deactivated.md): Deprecated. Not active because the issuer disabled the account associated with the device.

### Initializers

- [init(rawValue:)](pkpaymentpassactivationstate/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining activation state

- [activationState](pkpaymentpass/activationstate.md): Deprecated. The current activation state of the pass.

# PKPaymentPassActivationState (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 3.0+ (deprecated in 27.0)

Cases that indicate payment pass activation states.

> Use [PKSecureElementPassActivationState](pksecureelementpass/passactivationstate-swift.enum.md) instead.

## Declaration

```objectivec
enum PKPaymentPassActivationState : NSUInteger;
```

## Topics

### Activation states

- [PKPaymentPassActivationStateActivated](pkpaymentpassactivationstate/activated.md): Deprecated. Active and ready for payment use.
- [PKPaymentPassActivationStateRequiresActivation](pkpaymentpassactivationstate/requiresactivation.md): Deprecated. Not active but may be activated by the issuer.
- [PKPaymentPassActivationStateActivating](pkpaymentpassactivationstate/activating.md): Deprecated. Not ready for use but activation is in progress.
- [PKPaymentPassActivationStateSuspended](pkpaymentpassactivationstate/suspended.md): Deprecated. Not active and can’t be activated.
- [PKPaymentPassActivationStateDeactivated](pkpaymentpassactivationstate/deactivated.md): Deprecated. Not active because the issuer disabled the account associated with the device.

## See Also

### Determining activation state

- [activationState](pkpaymentpass/activationstate.md): Deprecated. The current activation state of the pass.
