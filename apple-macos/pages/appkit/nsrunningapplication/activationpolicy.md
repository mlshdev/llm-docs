> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunningapplication/activationpolicy](https://developer.apple.com/documentation/appkit/nsrunningapplication/activationpolicy)

# activationPolicy (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Indicates the activation policy of the application.

## Declaration

```swift
var activationPolicy: NSApplication.ActivationPolicy { get }
```

<a id="Discussion"></a>

## Discussion

The value returned by this property is usually fixed, but it may change through a call to [activate(options:)](activate%28options_%29.md).

This property is observable using key-value observing.

## See Also

### Activating applications

- [activate(options:)](activate%28options_%29.md): Attempts to activate the application using the specified options.
- [activate(from:options:)](activate%28from_options_%29.md): Attempts to activate the application using the specified options.
- [isActive](isactive.md): Indicates whether the application is currently frontmost.
- [NSApplication.ActivationOptions](../nsapplication/activationoptions.md): The following flags are for [activate(options:)](activate%28options_%29.md).
- [NSApplication.ActivationPolicy](../nsapplication/activationpolicy-swift.enum.md): Activation policies (used by [activationPolicy](activationpolicy.md)) that control whether and how an app may be activated.

# activationPolicy (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Indicates the activation policy of the application.

## Declaration

```objectivec
@property (readonly) NSApplicationActivationPolicy activationPolicy;
```

<a id="Discussion"></a>

## Discussion

The value returned by this property is usually fixed, but it may change through a call to [activateWithOptions:](activate%28options_%29.md).

This property is observable using key-value observing.

## See Also

### Activating applications

- [activateWithOptions:](activate%28options_%29.md): Attempts to activate the application using the specified options.
- [activateFromApplication:options:](activate%28from_options_%29.md): Attempts to activate the application using the specified options.
- [active](isactive.md): Indicates whether the application is currently frontmost.
- [NSApplicationActivationOptions](../nsapplication/activationoptions.md): The following flags are for [activateWithOptions:](activate%28options_%29.md).
- [NSApplicationActivationPolicy](../nsapplication/activationpolicy-swift.enum.md): Activation policies (used by [activationPolicy](activationpolicy.md)) that control whether and how an app may be activated.
