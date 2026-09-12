> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksecureelementpass/passactivationstate-swift.enum/requiresactivation](https://developer.apple.com/documentation/passkit/pksecureelementpass/passactivationstate-swift.enum/requiresactivation)

# PKSecureElementPass.PassActivationState.requiresActivation (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

The pass requires activation by the issuer.

## Declaration

```swift
case requiresActivation
```

## See Also

### Activation states

- [PKSecureElementPass.PassActivationState.activating](activating.md): The pass isn’t ready to use, but activation is in progress
- [PKSecureElementPass.PassActivationState.activated](activated.md): The pass is active and ready to use.
- [PKSecureElementPass.PassActivationState.suspended](suspended.md): The user or the issuer has suspended the pass and it isn’t available to use.
- [PKSecureElementPass.PassActivationState.deactivated](deactivated.md): The issuer has deactivated the pass.

# PKSecureElementPassActivationStateRequiresActivation (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

The pass requires activation by the issuer.

## Declaration

```objectivec
PKSecureElementPassActivationStateRequiresActivation
```

## See Also

### Activation states

- [PKSecureElementPassActivationStateActivating](activating.md): The pass isn’t ready to use, but activation is in progress
- [PKSecureElementPassActivationStateActivated](activated.md): The pass is active and ready to use.
- [PKSecureElementPassActivationStateSuspended](suspended.md): The user or the issuer has suspended the pass and it isn’t available to use.
- [PKSecureElementPassActivationStateDeactivated](deactivated.md): The issuer has deactivated the pass.
