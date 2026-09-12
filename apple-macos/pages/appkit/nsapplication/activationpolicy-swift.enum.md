> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/activationpolicy-swift.enum](https://developer.apple.com/documentation/appkit/nsapplication/activationpolicy-swift.enum)

# NSApplication.ActivationPolicy (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Activation policies (used by [activationPolicy](../nsrunningapplication/activationpolicy.md)) that control whether and how an app may be activated.

## Declaration

```swift
enum ActivationPolicy
```

## Topics

### Activation Policies

- [NSApplication.ActivationPolicy.regular](activationpolicy-swift.enum/regular.md): The application is an ordinary app that appears in the Dock and may have a user interface.
- [NSApplication.ActivationPolicy.accessory](activationpolicy-swift.enum/accessory.md): The application doesn’t appear in the Dock and doesn’t have a menu bar, but it may be activated programmatically or by clicking on one of its windows.
- [NSApplication.ActivationPolicy.prohibited](activationpolicy-swift.enum/prohibited.md): The application doesn’t appear in the Dock and may not create windows or be activated.

### Initializers

- [init(rawValue:)](activationpolicy-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the activation policy

- [activationPolicy()](activationpolicy%28%29.md): Returns the app’s activation policy.
- [setActivationPolicy(\_:)](setactivationpolicy%28__%29.md): Attempts to modify the app’s activation policy.

# NSApplicationActivationPolicy (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Activation policies (used by [activationPolicy](../nsrunningapplication/activationpolicy.md)) that control whether and how an app may be activated.

## Declaration

```objectivec
enum NSApplicationActivationPolicy : NSInteger;
```

## Topics

### Activation Policies

- [NSApplicationActivationPolicyRegular](activationpolicy-swift.enum/regular.md): The application is an ordinary app that appears in the Dock and may have a user interface.
- [NSApplicationActivationPolicyAccessory](activationpolicy-swift.enum/accessory.md): The application doesn’t appear in the Dock and doesn’t have a menu bar, but it may be activated programmatically or by clicking on one of its windows.
- [NSApplicationActivationPolicyProhibited](activationpolicy-swift.enum/prohibited.md): The application doesn’t appear in the Dock and may not create windows or be activated.

## See Also

### Configuring the activation policy

- [activationPolicy](activationpolicy%28%29.md): Returns the app’s activation policy.
- [setActivationPolicy:](setactivationpolicy%28__%29.md): Attempts to modify the app’s activation policy.
