> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/setactivationpolicy(_:)](https://developer.apple.com/documentation/appkit/nsapplication/setactivationpolicy(_:))

# setActivationPolicy(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Attempts to modify the app’s activation policy.

## Declaration

```swift
func setActivationPolicy(_ activationPolicy: NSApplication.ActivationPolicy) -> Bool
```

## Parameters

- `activationPolicy`: The desired activation policy.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the policy switch succeded; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can set any activation policy in macOS 10.9 and later; in macOS 10.8 and earlier, you can only set the activation policy to  `NSApplicationActivationPolicyProhibited` or `NSApplicationActivationPolicyRegular`.

## See Also

### Configuring the activation policy

- [activationPolicy()](activationpolicy%28%29.md): Returns the app’s activation policy.
- [NSApplication.ActivationPolicy](activationpolicy-swift.enum.md): Activation policies (used by [activationPolicy](../nsrunningapplication/activationpolicy.md)) that control whether and how an app may be activated.

# setActivationPolicy: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Attempts to modify the app’s activation policy.

## Declaration

```objectivec
- (BOOL) setActivationPolicy:(NSApplicationActivationPolicy) activationPolicy;
```

## Parameters

- `activationPolicy`: The desired activation policy.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the policy switch succeded; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can set any activation policy in macOS 10.9 and later; in macOS 10.8 and earlier, you can only set the activation policy to  `NSApplicationActivationPolicyProhibited` or `NSApplicationActivationPolicyRegular`.

## See Also

### Configuring the activation policy

- [activationPolicy](activationpolicy%28%29.md): Returns the app’s activation policy.
- [NSApplicationActivationPolicy](activationpolicy-swift.enum.md): Activation policies (used by [activationPolicy](../nsrunningapplication/activationpolicy.md)) that control whether and how an app may be activated.
