> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationpluginview/diddeactivate()](https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/diddeactivate())

# didDeactivate() (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Tells the authorization plug-in that its user interface has been deactivated.

## Declaration

```swift
func didDeactivate()
```

## See Also

### Configuring the User Interface

- [didActivate()](didactivate%28%29.md): Tells the authorization plug-in when its user interface has become active.
- [willActivate(withUser:)](willactivate%28withuser_%29.md): Tells the authorization plug-in that its user interface is about to be made active by the Apple-provided Security Agent.

# didDeactivate (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Tells the authorization plug-in that its user interface has been deactivated.

## Declaration

```objectivec
- (void) didDeactivate;
```

## See Also

### Configuring the User Interface

- [didActivate](didactivate%28%29.md): Tells the authorization plug-in when its user interface has become active.
- [willActivateWithUser:](willactivate%28withuser_%29.md): Tells the authorization plug-in that its user interface is about to be made active by the Apple-provided Security Agent.
