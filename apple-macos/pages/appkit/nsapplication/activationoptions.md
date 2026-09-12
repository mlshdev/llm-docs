> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/activationoptions](https://developer.apple.com/documentation/appkit/nsapplication/activationoptions)

# NSApplication.ActivationOptions (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

The following flags are for [activate(options:)](../nsrunningapplication/activate%28options_%29.md).

## Declaration

```swift
struct ActivationOptions
```

## Topics

### Options

- [activateAllWindows](activationoptions/activateallwindows.md): By default, activation brings only the main and key windows forward. If you specify NSApplicationActivateAllWindows, all of the application’s windows are brought forward.

### Initializers

- [init(rawValue:)](activationoptions/init%28rawvalue_%29.md): Initializes a new activation options structure.

### Deprecated

- [activateIgnoringOtherApps](activationoptions/activateignoringotherapps.md): Deprecated. The application is activated regardless of the currently active app.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Activating and deactivating the app

- [Passing control from one app to another with cooperative activation](../passing-control-from-one-app-to-another-with-cooperative-activation.md): Request focus for your app, and coordinate passing control from one app to another.
- [activate()](activate%28%29.md): Activates the receiver app, if appropriate.
- [deactivate()](deactivate%28%29.md): Deactivates the receiver.
- [isActive](isactive.md): A Boolean value indicating whether this is the active app.
- [yieldActivation(to:)](yieldactivation%28to_%29.md): Explicitly allows another app to make itself active.
- [yieldActivation(toApplicationWithBundleIdentifier:)](yieldactivation%28toapplicationwithbundleidentifier_%29.md): Explicitly allows another app to make itself active.

# NSApplicationActivationOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The following flags are for [activateWithOptions:](../nsrunningapplication/activate%28options_%29.md).

## Declaration

```objectivec
enum NSApplicationActivationOptions : NSUInteger;
```

## Topics

### Options

- [NSApplicationActivateAllWindows](activationoptions/activateallwindows.md): By default, activation brings only the main and key windows forward. If you specify NSApplicationActivateAllWindows, all of the application’s windows are brought forward.

### Deprecated

- [NSApplicationActivateIgnoringOtherApps](activationoptions/activateignoringotherapps.md): Deprecated. The application is activated regardless of the currently active app.

## See Also

### Activating and deactivating the app

- [Passing control from one app to another with cooperative activation](../passing-control-from-one-app-to-another-with-cooperative-activation.md): Request focus for your app, and coordinate passing control from one app to another.
- [activate](activate%28%29.md): Activates the receiver app, if appropriate.
- [deactivate](deactivate%28%29.md): Deactivates the receiver.
- [active](isactive.md): A Boolean value indicating whether this is the active app.
- [yieldActivationToApplication:](yieldactivation%28to_%29.md): Explicitly allows another app to make itself active.
- [yieldActivationToApplicationWithBundleIdentifier:](yieldactivation%28toapplicationwithbundleidentifier_%29.md): Explicitly allows another app to make itself active.
