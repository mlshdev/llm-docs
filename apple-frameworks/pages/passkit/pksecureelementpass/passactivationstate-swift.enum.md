> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksecureelementpass/passactivationstate-swift.enum](https://developer.apple.com/documentation/passkit/pksecureelementpass/passactivationstate-swift.enum)

# PKSecureElementPass.PassActivationState (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

The activation states of a Secure Element pass.

## Declaration

```swift
enum PassActivationState
```

## Topics

### Activation states

- [PKSecureElementPass.PassActivationState.requiresActivation](passactivationstate-swift.enum/requiresactivation.md): The pass requires activation by the issuer.
- [PKSecureElementPass.PassActivationState.activating](passactivationstate-swift.enum/activating.md): The pass isn’t ready to use, but activation is in progress
- [PKSecureElementPass.PassActivationState.activated](passactivationstate-swift.enum/activated.md): The pass is active and ready to use.
- [PKSecureElementPass.PassActivationState.suspended](passactivationstate-swift.enum/suspended.md): The user or the issuer has suspended the pass and it isn’t available to use.
- [PKSecureElementPass.PassActivationState.deactivated](passactivationstate-swift.enum/deactivated.md): The issuer has deactivated the pass.

### Initializers

- [init(rawValue:)](passactivationstate-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the activation state

- [passActivationState](passactivationstate-swift.property.md): The activation state of the pass.

# PKSecureElementPassActivationState (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

The activation states of a Secure Element pass.

## Declaration

```objectivec
enum PKSecureElementPassActivationState : NSInteger;
```

## Topics

### Activation states

- [PKSecureElementPassActivationStateRequiresActivation](passactivationstate-swift.enum/requiresactivation.md): The pass requires activation by the issuer.
- [PKSecureElementPassActivationStateActivating](passactivationstate-swift.enum/activating.md): The pass isn’t ready to use, but activation is in progress
- [PKSecureElementPassActivationStateActivated](passactivationstate-swift.enum/activated.md): The pass is active and ready to use.
- [PKSecureElementPassActivationStateSuspended](passactivationstate-swift.enum/suspended.md): The user or the issuer has suspended the pass and it isn’t available to use.
- [PKSecureElementPassActivationStateDeactivated](passactivationstate-swift.enum/deactivated.md): The issuer has deactivated the pass.

## See Also

### Getting the activation state

- [passActivationState](passactivationstate-swift.property.md): The activation state of the pass.
