> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/activationpolicy-swift.enum/regular](https://developer.apple.com/documentation/appkit/nsapplication/activationpolicy-swift.enum/regular)

# NSApplication.ActivationPolicy.regular (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

The application is an ordinary app that appears in the Dock and may have a user interface.

## Declaration

```swift
case regular
```

<a id="Discussion"></a>

## Discussion

This policy is the default for bundled apps, unless overridden in the `Info.plist`.

## See Also

### Activation Policies

- [NSApplication.ActivationPolicy.accessory](accessory.md): The application doesn’t appear in the Dock and doesn’t have a menu bar, but it may be activated programmatically or by clicking on one of its windows.
- [NSApplication.ActivationPolicy.prohibited](prohibited.md): The application doesn’t appear in the Dock and may not create windows or be activated.

# NSApplicationActivationPolicyRegular (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

The application is an ordinary app that appears in the Dock and may have a user interface.

## Declaration

```objectivec
NSApplicationActivationPolicyRegular
```

<a id="Discussion"></a>

## Discussion

This policy is the default for bundled apps, unless overridden in the `Info.plist`.

## See Also

### Activation Policies

- [NSApplicationActivationPolicyAccessory](accessory.md): The application doesn’t appear in the Dock and doesn’t have a menu bar, but it may be activated programmatically or by clicking on one of its windows.
- [NSApplicationActivationPolicyProhibited](prohibited.md): The application doesn’t appear in the Dock and may not create windows or be activated.
