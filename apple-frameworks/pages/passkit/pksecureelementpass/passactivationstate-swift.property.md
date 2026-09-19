> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pksecureelementpass/passactivationstate-swift.property

# passActivationState (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

The activation state of the pass.

## Declaration

```swift
var passActivationState: PKSecureElementPass.PassActivationState { get }
```

<a id="Discussion"></a>

## Discussion

You must activate a secure pass before it can be used.

For possible values and their meanings, see [PKSecureElementPass.PassActivationState](passactivationstate-swift.enum.md).

## See Also

### Getting the activation state

- [PKSecureElementPass.PassActivationState](passactivationstate-swift.enum.md): The activation states of a Secure Element pass.

# passActivationState (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

The activation state of the pass.

## Declaration

```objectivec
@property (nonatomic, readonly) PKSecureElementPassActivationState passActivationState;
```

<a id="Discussion"></a>

## Discussion

You must activate a secure pass before it can be used.

For possible values and their meanings, see [PKSecureElementPassActivationState](passactivationstate-swift.enum.md).

## See Also

### Getting the activation state

- [PKSecureElementPassActivationState](passactivationstate-swift.enum.md): The activation states of a Secure Element pass.
