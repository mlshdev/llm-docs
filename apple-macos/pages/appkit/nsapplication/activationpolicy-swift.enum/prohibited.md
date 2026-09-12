> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/activationpolicy-swift.enum/prohibited](https://developer.apple.com/documentation/appkit/nsapplication/activationpolicy-swift.enum/prohibited)

# NSApplication.ActivationPolicy.prohibited (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

The application doesn’t appear in the Dock and may not create windows or be activated.

## Declaration

```swift
case prohibited
```

<a id="Discussion"></a>

## Discussion

This corresponds to the value of the `LSBackgroundOnly` key in the application’s `Info.plist` file being `1`. This is also the default for unbundled executables that don’t have `Info.plist` files.

## See Also

### Activation Policies

- [NSApplication.ActivationPolicy.regular](regular.md): The application is an ordinary app that appears in the Dock and may have a user interface.
- [NSApplication.ActivationPolicy.accessory](accessory.md): The application doesn’t appear in the Dock and doesn’t have a menu bar, but it may be activated programmatically or by clicking on one of its windows.

# NSApplicationActivationPolicyProhibited (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

The application doesn’t appear in the Dock and may not create windows or be activated.

## Declaration

```objectivec
NSApplicationActivationPolicyProhibited
```

<a id="Discussion"></a>

## Discussion

This corresponds to the value of the `LSBackgroundOnly` key in the application’s `Info.plist` file being `1`. This is also the default for unbundled executables that don’t have `Info.plist` files.

## See Also

### Activation Policies

- [NSApplicationActivationPolicyRegular](regular.md): The application is an ordinary app that appears in the Dock and may have a user interface.
- [NSApplicationActivationPolicyAccessory](accessory.md): The application doesn’t appear in the Dock and doesn’t have a menu bar, but it may be activated programmatically or by clicking on one of its windows.
