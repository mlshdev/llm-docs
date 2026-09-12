> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationpluginview/didactivate()](https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/didactivate())

# didActivate() (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Tells the authorization plug-in when its user interface has become active.

## Declaration

```swift
func didActivate()
```

## See Also

### Configuring the User Interface

- [didDeactivate()](diddeactivate%28%29.md): Tells the authorization plug-in that its user interface has been deactivated.
- [willActivate(withUser:)](willactivate%28withuser_%29.md): Tells the authorization plug-in that its user interface is about to be made active by the Apple-provided Security Agent.

# didActivate (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Tells the authorization plug-in when its user interface has become active.

## Declaration

```objectivec
- (void) didActivate;
```

## See Also

### Configuring the User Interface

- [didDeactivate](diddeactivate%28%29.md): Tells the authorization plug-in that its user interface has been deactivated.
- [willActivateWithUser:](willactivate%28withuser_%29.md): Tells the authorization plug-in that its user interface is about to be made active by the Apple-provided Security Agent.
