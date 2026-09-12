> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/isactive](https://developer.apple.com/documentation/appkit/nsapplication/isactive)

# isActive (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether this is the active app.

## Declaration

```swift
var isActive: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the app is active or [false](https://developer.apple.com/documentation/swift/false) if it’s not.

## See Also

### Related Documentation

- [activate(ignoringOtherApps:)](activate%28ignoringotherapps_%29.md): Deprecated. Makes the receiver the active app.

### Activating and deactivating the app

- [Passing control from one app to another with cooperative activation](../passing-control-from-one-app-to-another-with-cooperative-activation.md): Request focus for your app, and coordinate passing control from one app to another.
- [activate()](activate%28%29.md): Activates the receiver app, if appropriate.
- [deactivate()](deactivate%28%29.md): Deactivates the receiver.
- [yieldActivation(to:)](yieldactivation%28to_%29.md): Explicitly allows another app to make itself active.
- [yieldActivation(toApplicationWithBundleIdentifier:)](yieldactivation%28toapplicationwithbundleidentifier_%29.md): Explicitly allows another app to make itself active.
- [NSApplication.ActivationOptions](activationoptions.md): The following flags are for [activate(options:)](../nsrunningapplication/activate%28options_%29.md).

# active (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether this is the active app.

## Declaration

```objectivec
@property (readonly, getter=isActive) BOOL active;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the app is active or [false](https://developer.apple.com/documentation/swift/false) if it’s not.

## See Also

### Related Documentation

- [activateIgnoringOtherApps:](activate%28ignoringotherapps_%29.md): Deprecated. Makes the receiver the active app.

### Activating and deactivating the app

- [Passing control from one app to another with cooperative activation](../passing-control-from-one-app-to-another-with-cooperative-activation.md): Request focus for your app, and coordinate passing control from one app to another.
- [activate](activate%28%29.md): Activates the receiver app, if appropriate.
- [deactivate](deactivate%28%29.md): Deactivates the receiver.
- [yieldActivationToApplication:](yieldactivation%28to_%29.md): Explicitly allows another app to make itself active.
- [yieldActivationToApplicationWithBundleIdentifier:](yieldactivation%28toapplicationwithbundleidentifier_%29.md): Explicitly allows another app to make itself active.
- [NSApplicationActivationOptions](activationoptions.md): The following flags are for [activateWithOptions:](../nsrunningapplication/activate%28options_%29.md).
