> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/activate()](https://developer.apple.com/documentation/appkit/nsapplication/activate())

# activate() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Activates the receiver app, if appropriate.

## Declaration

```swift
func activate()
```

## Mentioned In

- [Passing control from one app to another with cooperative activation](../passing-control-from-one-app-to-another-with-cooperative-activation.md)

<a id="Discussion"></a>

## Discussion

Use this method to request app activation; calling this method doesn’t guarantee app activation. For cooperative activation, the other app should call [yieldActivation(to:)](yieldactivation%28to_%29.md) or equivalent before the target app invokes [activate()](activate%28%29.md).

Invoking [activate()](activate%28%29.md) on an already-active application cancels any pending activation yields by the receiver.

## See Also

### Activating and deactivating the app

- [Passing control from one app to another with cooperative activation](../passing-control-from-one-app-to-another-with-cooperative-activation.md): Request focus for your app, and coordinate passing control from one app to another.
- [deactivate()](deactivate%28%29.md): Deactivates the receiver.
- [isActive](isactive.md): A Boolean value indicating whether this is the active app.
- [yieldActivation(to:)](yieldactivation%28to_%29.md): Explicitly allows another app to make itself active.
- [yieldActivation(toApplicationWithBundleIdentifier:)](yieldactivation%28toapplicationwithbundleidentifier_%29.md): Explicitly allows another app to make itself active.
- [NSApplication.ActivationOptions](activationoptions.md): The following flags are for [activate(options:)](../nsrunningapplication/activate%28options_%29.md).

# activate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Activates the receiver app, if appropriate.

## Declaration

```objectivec
- (void) activate;
```

## Mentioned In

- [Passing control from one app to another with cooperative activation](../passing-control-from-one-app-to-another-with-cooperative-activation.md)

<a id="Discussion"></a>

## Discussion

Use this method to request app activation; calling this method doesn’t guarantee app activation. For cooperative activation, the other app should call [yieldActivationToApplication:](yieldactivation%28to_%29.md) or equivalent before the target app invokes [activate](activate%28%29.md).

Invoking [activate](activate%28%29.md) on an already-active application cancels any pending activation yields by the receiver.

## See Also

### Activating and deactivating the app

- [Passing control from one app to another with cooperative activation](../passing-control-from-one-app-to-another-with-cooperative-activation.md): Request focus for your app, and coordinate passing control from one app to another.
- [deactivate](deactivate%28%29.md): Deactivates the receiver.
- [active](isactive.md): A Boolean value indicating whether this is the active app.
- [yieldActivationToApplication:](yieldactivation%28to_%29.md): Explicitly allows another app to make itself active.
- [yieldActivationToApplicationWithBundleIdentifier:](yieldactivation%28toapplicationwithbundleidentifier_%29.md): Explicitly allows another app to make itself active.
- [NSApplicationActivationOptions](activationoptions.md): The following flags are for [activateWithOptions:](../nsrunningapplication/activate%28options_%29.md).
