> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkpaymentpass/activationstate

# activationState (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 27.2) · iPadOS 8.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 3.0+ (deprecated in 27.2)

The current activation state of the pass.

> Use [passActivationState](../pksecureelementpass/passactivationstate-swift.property.md) instead.

## Declaration

```swift
var activationState: PKPaymentPassActivationState { get }
```

<a id="Discussion"></a>

## Discussion

You must activate a payment pass before you can use it.

For possible values and their meanings, see [PKPaymentPass](../pkpaymentpass.md).

## See Also

### Related Documentation

- [Wallet Developer Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/PassKit_PG/index.html#//apple_ref/doc/uid/TP40012195)

### Determining activation state

- [PKPaymentPassActivationState](../pkpaymentpassactivationstate.md): Deprecated. Cases that indicate payment pass activation states.

# activationState (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 27.2) · iPadOS 8.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 3.0+ (deprecated in 27.2)

The current activation state of the pass.

> Use [passActivationState](../pksecureelementpass/passactivationstate-swift.property.md) instead.

## Declaration

```objectivec
@property (nonatomic, readonly) PKPaymentPassActivationState activationState;
```

<a id="Discussion"></a>

## Discussion

You must activate a payment pass before you can use it.

For possible values and their meanings, see [PKPaymentPass](../pkpaymentpass.md).

## See Also

### Related Documentation

- [Wallet Developer Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/PassKit_PG/index.html#//apple_ref/doc/uid/TP40012195)

### Determining activation state

- [PKPaymentPassActivationState](../pkpaymentpassactivationstate.md): Deprecated. Cases that indicate payment pass activation states.
