> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/activationpolicy()](https://developer.apple.com/documentation/appkit/nsapplication/activationpolicy())

# activationPolicy() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the app’s activation policy.

## Declaration

```swift
func activationPolicy() -> NSApplication.ActivationPolicy
```

<a id="return-value"></a>

## Return Value

The app’s current activation policy.

## See Also

### Configuring the activation policy

- [setActivationPolicy(\_:)](setactivationpolicy%28__%29.md): Attempts to modify the app’s activation policy.
- [NSApplication.ActivationPolicy](activationpolicy-swift.enum.md): Activation policies (used by [activationPolicy](../nsrunningapplication/activationpolicy.md)) that control whether and how an app may be activated.

# activationPolicy (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the app’s activation policy.

## Declaration

```objectivec
- (NSApplicationActivationPolicy) activationPolicy;
```

<a id="return-value"></a>

## Return Value

The app’s current activation policy.

## See Also

### Configuring the activation policy

- [setActivationPolicy:](setactivationpolicy%28__%29.md): Attempts to modify the app’s activation policy.
- [NSApplicationActivationPolicy](activationpolicy-swift.enum.md): Activation policies (used by [activationPolicy](../nsrunningapplication/activationpolicy.md)) that control whether and how an app may be activated.
