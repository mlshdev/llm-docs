> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunningapplication/activate(options:)](https://developer.apple.com/documentation/appkit/nsrunningapplication/activate(options:))

# activate(options:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Attempts to activate the application using the specified options.

## Declaration

```swift
func activate(options: NSApplication.ActivationOptions = []) -> Bool
```

## Parameters

- `options`: The options to use when activating the application. See [NSApplication.ActivationOptions](../nsapplication/activationoptions.md) for the possible values.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the application was activated successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method will return [false](https://developer.apple.com/documentation/swift/false) if the application has quit, or is not a type of application than can be activated.

## See Also

### Activating applications

- [activate(from:options:)](activate%28from_options_%29.md): Attempts to activate the application using the specified options.
- [isActive](isactive.md): Indicates whether the application is currently frontmost.
- [NSApplication.ActivationOptions](../nsapplication/activationoptions.md): The following flags are for [activate(options:)](activate%28options_%29.md).
- [activationPolicy](activationpolicy.md): Indicates the activation policy of the application.
- [NSApplication.ActivationPolicy](../nsapplication/activationpolicy-swift.enum.md): Activation policies (used by [activationPolicy](activationpolicy.md)) that control whether and how an app may be activated.

# activateWithOptions: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Attempts to activate the application using the specified options.

## Declaration

```objectivec
- (BOOL) activateWithOptions:(NSApplicationActivationOptions) options;
```

## Parameters

- `options`: The options to use when activating the application. See [NSApplicationActivationOptions](../nsapplication/activationoptions.md) for the possible values.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the application was activated successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method will return [false](https://developer.apple.com/documentation/swift/false) if the application has quit, or is not a type of application than can be activated.

## See Also

### Activating applications

- [activateFromApplication:options:](activate%28from_options_%29.md): Attempts to activate the application using the specified options.
- [active](isactive.md): Indicates whether the application is currently frontmost.
- [NSApplicationActivationOptions](../nsapplication/activationoptions.md): The following flags are for [activateWithOptions:](activate%28options_%29.md).
- [activationPolicy](activationpolicy.md): Indicates the activation policy of the application.
- [NSApplicationActivationPolicy](../nsapplication/activationpolicy-swift.enum.md): Activation policies (used by [activationPolicy](activationpolicy.md)) that control whether and how an app may be activated.
