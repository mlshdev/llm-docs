> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationpluginview/setbutton(_:enabled:)](https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/setbutton(_:enabled:))

# setButton(\_:enabled:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Enables or disables a button in the authorization plug-in’s user interface.

## Declaration

```swift
func setButton(_ inButtonType: SFButtonType, enabled inEnabled: Bool)
```

## Parameters

- `inButtonType`: The type of the button.
- `inEnabled`: [true](https://developer.apple.com/documentation/swift/true) to enable the button, [false](https://developer.apple.com/documentation/swift/false) to disable the button.

## See Also

### Communicating with the Authorization Plug-in

- [display()](display%28%29.md): Displays the user interface provided by the authorization plug-in view subclass.
- [update()](update%28%29.md): Tells the authorization plug-in to get and display the appropriate view in the authorization plug-in’s user interface.

# setButton:enabled: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Enables or disables a button in the authorization plug-in’s user interface.

## Declaration

```objectivec
- (void) setButton:(SFButtonType) inButtonType enabled:(BOOL) inEnabled;
```

## Parameters

- `inButtonType`: The type of the button.
- `inEnabled`: [true](https://developer.apple.com/documentation/swift/true) to enable the button, [false](https://developer.apple.com/documentation/swift/false) to disable the button.

## See Also

### Communicating with the Authorization Plug-in

- [displayView](display%28%29.md): Displays the user interface provided by the authorization plug-in view subclass.
- [updateView](update%28%29.md): Tells the authorization plug-in to get and display the appropriate view in the authorization plug-in’s user interface.
