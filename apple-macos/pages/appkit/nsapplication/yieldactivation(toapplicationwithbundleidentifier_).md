> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/yieldactivation(toapplicationwithbundleidentifier:)](https://developer.apple.com/documentation/appkit/nsapplication/yieldactivation(toapplicationwithbundleidentifier:))

# yieldActivation(toApplicationWithBundleIdentifier:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Explicitly allows another app to make itself active.

## Declaration

```swift
func yieldActivation(toApplicationWithBundleIdentifier bundleIdentifier: String)
```

## Parameters

- `bundleIdentifier`: The bundle identifier to yield activation state to.

## Mentioned In

- [Passing control from one app to another with cooperative activation](../passing-control-from-one-app-to-another-with-cooperative-activation.md)

<a id="Discussion"></a>

## Discussion

Calling this method doesn’t deactivate the yielding app, nor does it activate the  app you yield to. For cooperative activation, the other app must request activation in the future by calling [activate()](activate%28%29.md) or equivalent.

Use this method to yield activation to apps that aren’t running at the time the method invokes. If it’s known that the target application is running, use [yieldActivation(to:)](yieldactivation%28to_%29.md) instead.

## See Also

### Activating and deactivating the app

- [Passing control from one app to another with cooperative activation](../passing-control-from-one-app-to-another-with-cooperative-activation.md): Request focus for your app, and coordinate passing control from one app to another.
- [activate()](activate%28%29.md): Activates the receiver app, if appropriate.
- [deactivate()](deactivate%28%29.md): Deactivates the receiver.
- [isActive](isactive.md): A Boolean value indicating whether this is the active app.
- [yieldActivation(to:)](yieldactivation%28to_%29.md): Explicitly allows another app to make itself active.
- [NSApplication.ActivationOptions](activationoptions.md): The following flags are for [activate(options:)](../nsrunningapplication/activate%28options_%29.md).

# yieldActivationToApplicationWithBundleIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Explicitly allows another app to make itself active.

## Declaration

```objectivec
- (void) yieldActivationToApplicationWithBundleIdentifier:(NSString *) bundleIdentifier;
```

## Parameters

- `bundleIdentifier`: The bundle identifier to yield activation state to.

## Mentioned In

- [Passing control from one app to another with cooperative activation](../passing-control-from-one-app-to-another-with-cooperative-activation.md)

<a id="Discussion"></a>

## Discussion

Calling this method doesn’t deactivate the yielding app, nor does it activate the  app you yield to. For cooperative activation, the other app must request activation in the future by calling [activate](activate%28%29.md) or equivalent.

Use this method to yield activation to apps that aren’t running at the time the method invokes. If it’s known that the target application is running, use [yieldActivationToApplication:](yieldactivation%28to_%29.md) instead.

## See Also

### Activating and deactivating the app

- [Passing control from one app to another with cooperative activation](../passing-control-from-one-app-to-another-with-cooperative-activation.md): Request focus for your app, and coordinate passing control from one app to another.
- [activate](activate%28%29.md): Activates the receiver app, if appropriate.
- [deactivate](deactivate%28%29.md): Deactivates the receiver.
- [active](isactive.md): A Boolean value indicating whether this is the active app.
- [yieldActivationToApplication:](yieldactivation%28to_%29.md): Explicitly allows another app to make itself active.
- [NSApplicationActivationOptions](activationoptions.md): The following flags are for [activateWithOptions:](../nsrunningapplication/activate%28options_%29.md).
