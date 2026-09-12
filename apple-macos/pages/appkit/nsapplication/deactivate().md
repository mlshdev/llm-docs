> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/deactivate()](https://developer.apple.com/documentation/appkit/nsapplication/deactivate())

# deactivate() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Deactivates the receiver.

## Declaration

```swift
func deactivate()
```

## Mentioned In

- [Passing control from one app to another with cooperative activation](../passing-control-from-one-app-to-another-with-cooperative-activation.md)

<a id="Discussion"></a>

## Discussion

Normally, you shouldn’t invoke this method—AppKit is responsible for proper deactivation.

## See Also

### Related Documentation

- [activate(ignoringOtherApps:)](activate%28ignoringotherapps_%29.md): Deprecated. Makes the receiver the active app.

### Activating and deactivating the app

- [Passing control from one app to another with cooperative activation](../passing-control-from-one-app-to-another-with-cooperative-activation.md): Request focus for your app, and coordinate passing control from one app to another.
- [activate()](activate%28%29.md): Activates the receiver app, if appropriate.
- [isActive](isactive.md): A Boolean value indicating whether this is the active app.
- [yieldActivation(to:)](yieldactivation%28to_%29.md): Explicitly allows another app to make itself active.
- [yieldActivation(toApplicationWithBundleIdentifier:)](yieldactivation%28toapplicationwithbundleidentifier_%29.md): Explicitly allows another app to make itself active.
- [NSApplication.ActivationOptions](activationoptions.md): The following flags are for [activate(options:)](../nsrunningapplication/activate%28options_%29.md).

# deactivate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Deactivates the receiver.

## Declaration

```objectivec
- (void) deactivate;
```

## Mentioned In

- [Passing control from one app to another with cooperative activation](../passing-control-from-one-app-to-another-with-cooperative-activation.md)

<a id="Discussion"></a>

## Discussion

Normally, you shouldn’t invoke this method—AppKit is responsible for proper deactivation.

## See Also

### Related Documentation

- [activateIgnoringOtherApps:](activate%28ignoringotherapps_%29.md): Deprecated. Makes the receiver the active app.

### Activating and deactivating the app

- [Passing control from one app to another with cooperative activation](../passing-control-from-one-app-to-another-with-cooperative-activation.md): Request focus for your app, and coordinate passing control from one app to another.
- [activate](activate%28%29.md): Activates the receiver app, if appropriate.
- [active](isactive.md): A Boolean value indicating whether this is the active app.
- [yieldActivationToApplication:](yieldactivation%28to_%29.md): Explicitly allows another app to make itself active.
- [yieldActivationToApplicationWithBundleIdentifier:](yieldactivation%28toapplicationwithbundleidentifier_%29.md): Explicitly allows another app to make itself active.
- [NSApplicationActivationOptions](activationoptions.md): The following flags are for [activateWithOptions:](../nsrunningapplication/activate%28options_%29.md).
