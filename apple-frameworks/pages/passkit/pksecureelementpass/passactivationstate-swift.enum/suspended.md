> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksecureelementpass/passactivationstate-swift.enum/suspended](https://developer.apple.com/documentation/passkit/pksecureelementpass/passactivationstate-swift.enum/suspended)

# PKSecureElementPass.PassActivationState.suspended (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

The user or the issuer has suspended the pass and it isn’t available to use.

## Declaration

```swift
case suspended
```

## See Also

### Activation states

- [PKSecureElementPass.PassActivationState.requiresActivation](requiresactivation.md): The pass requires activation by the issuer.
- [PKSecureElementPass.PassActivationState.activating](activating.md): The pass isn’t ready to use, but activation is in progress
- [PKSecureElementPass.PassActivationState.activated](activated.md): The pass is active and ready to use.
- [PKSecureElementPass.PassActivationState.deactivated](deactivated.md): The issuer has deactivated the pass.

# PKSecureElementPassActivationStateSuspended (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

The user or the issuer has suspended the pass and it isn’t available to use.

## Declaration

```objectivec
PKSecureElementPassActivationStateSuspended
```

## See Also

### Activation states

- [PKSecureElementPassActivationStateRequiresActivation](requiresactivation.md): The pass requires activation by the issuer.
- [PKSecureElementPassActivationStateActivating](activating.md): The pass isn’t ready to use, but activation is in progress
- [PKSecureElementPassActivationStateActivated](activated.md): The pass is active and ready to use.
- [PKSecureElementPassActivationStateDeactivated](deactivated.md): The issuer has deactivated the pass.
