> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunningapplication/activate(from:options:)](https://developer.apple.com/documentation/appkit/nsrunningapplication/activate(from:options:))

# activate(from:options:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Attempts to activate the application using the specified options.

## Declaration

```swift
func activate(from application: NSRunningApplication, options: NSApplication.ActivationOptions = []) -> Bool
```

## Parameters

- `application`: The application to activate.
- `options`: The options to use during activation.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the request is allowed by the system, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use this method to request app activation. Calling this method doesn’t guarantee app activation. For cooperative activation, the other application should call [yieldActivation(to:)](../nsapplication/yieldactivation%28to_%29.md) or equivalent prior to the target application invoking [activate()](../nsapplication/activate%28%29.md).

## See Also

### Activating applications

- [activate(options:)](activate%28options_%29.md): Attempts to activate the application using the specified options.
- [isActive](isactive.md): Indicates whether the application is currently frontmost.
- [NSApplication.ActivationOptions](../nsapplication/activationoptions.md): The following flags are for [activate(options:)](activate%28options_%29.md).
- [activationPolicy](activationpolicy.md): Indicates the activation policy of the application.
- [NSApplication.ActivationPolicy](../nsapplication/activationpolicy-swift.enum.md): Activation policies (used by [activationPolicy](activationpolicy.md)) that control whether and how an app may be activated.

# activateFromApplication:options: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Attempts to activate the application using the specified options.

## Declaration

```objectivec
- (BOOL) activateFromApplication:(NSRunningApplication *) application options:(NSApplicationActivationOptions) options;
```

## Parameters

- `application`: The application to activate.
- `options`: The options to use during activation.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the request is allowed by the system, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use this method to request app activation. Calling this method doesn’t guarantee app activation. For cooperative activation, the other application should call [yieldActivationToApplication:](../nsapplication/yieldactivation%28to_%29.md) or equivalent prior to the target application invoking [activate](../nsapplication/activate%28%29.md).

## See Also

### Activating applications

- [activateWithOptions:](activate%28options_%29.md): Attempts to activate the application using the specified options.
- [active](isactive.md): Indicates whether the application is currently frontmost.
- [NSApplicationActivationOptions](../nsapplication/activationoptions.md): The following flags are for [activateWithOptions:](activate%28options_%29.md).
- [activationPolicy](activationpolicy.md): Indicates the activation policy of the application.
- [NSApplicationActivationPolicy](../nsapplication/activationpolicy-swift.enum.md): Activation policies (used by [activationPolicy](activationpolicy.md)) that control whether and how an app may be activated.
