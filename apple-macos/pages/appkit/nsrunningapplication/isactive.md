> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunningapplication/isactive](https://developer.apple.com/documentation/appkit/nsrunningapplication/isactive)

# isActive (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Indicates whether the application is currently frontmost.

## Declaration

```swift
var isActive: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is observable using key-value observing.

## See Also

### Activating applications

- [activate(options:)](activate%28options_%29.md): Attempts to activate the application using the specified options.
- [activate(from:options:)](activate%28from_options_%29.md): Attempts to activate the application using the specified options.
- [NSApplication.ActivationOptions](../nsapplication/activationoptions.md): The following flags are for [activate(options:)](activate%28options_%29.md).
- [activationPolicy](activationpolicy.md): Indicates the activation policy of the application.
- [NSApplication.ActivationPolicy](../nsapplication/activationpolicy-swift.enum.md): Activation policies (used by [activationPolicy](activationpolicy.md)) that control whether and how an app may be activated.

# active (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Indicates whether the application is currently frontmost.

## Declaration

```objectivec
@property (readonly, getter=isActive) BOOL active;
```

<a id="Discussion"></a>

## Discussion

This property is observable using key-value observing.

## See Also

### Activating applications

- [activateWithOptions:](activate%28options_%29.md): Attempts to activate the application using the specified options.
- [activateFromApplication:options:](activate%28from_options_%29.md): Attempts to activate the application using the specified options.
- [NSApplicationActivationOptions](../nsapplication/activationoptions.md): The following flags are for [activateWithOptions:](activate%28options_%29.md).
- [activationPolicy](activationpolicy.md): Indicates the activation policy of the application.
- [NSApplicationActivationPolicy](../nsapplication/activationpolicy-swift.enum.md): Activation policies (used by [activationPolicy](activationpolicy.md)) that control whether and how an app may be activated.
