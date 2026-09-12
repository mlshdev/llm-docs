> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationpluginview/willactivate(withuser:)](https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/willactivate(withuser:))

# willActivate(withUser:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Tells the authorization plug-in that its user interface is about to be made active by the Apple-provided Security Agent.

## Declaration

```swift
func willActivate(withUser inUserInformation: [AnyHashable : Any]!)
```

## Parameters

- `inUserInformation`: A dictionary that contains the following information:

  - [SFAuthorizationPluginViewUserNameKey](../sfauthorizationpluginviewusernamekey.md)

  An [NSString](https://developer.apple.com/documentation/foundation/nsstring) object containing the selected user’s name

  - [SFAuthorizationPluginViewUserShortNameKey](../sfauthorizationpluginviewusershortnamekey.md)

  An [NSString](https://developer.apple.com/documentation/foundation/nsstring) object containing the selected user’s short name

  Note: `inUserInformation` may be `nil`.

<a id="Discussion"></a>

## Discussion

Your [SFAuthorizationPluginView](../sfauthorizationpluginview.md) instance can use the user name to pre-populate a text field in the user interface.

## See Also

### Configuring the User Interface

- [didActivate()](didactivate%28%29.md): Tells the authorization plug-in when its user interface has become active.
- [didDeactivate()](diddeactivate%28%29.md): Tells the authorization plug-in that its user interface has been deactivated.

# willActivateWithUser: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Tells the authorization plug-in that its user interface is about to be made active by the Apple-provided Security Agent.

## Declaration

```objectivec
- (void) willActivateWithUser:(NSDictionary *) inUserInformation;
```

## Parameters

- `inUserInformation`: A dictionary that contains the following information:

  - [SFAuthorizationPluginViewUserNameKey](../sfauthorizationpluginviewusernamekey.md)

  An [NSString](https://developer.apple.com/documentation/foundation/nsstring) object containing the selected user’s name

  - [SFAuthorizationPluginViewUserShortNameKey](../sfauthorizationpluginviewusershortnamekey.md)

  An [NSString](https://developer.apple.com/documentation/foundation/nsstring) object containing the selected user’s short name

  Note: `inUserInformation` may be `nil`.

<a id="Discussion"></a>

## Discussion

Your [SFAuthorizationPluginView](../sfauthorizationpluginview.md) instance can use the user name to pre-populate a text field in the user interface.

## See Also

### Configuring the User Interface

- [didActivate](didactivate%28%29.md): Tells the authorization plug-in when its user interface has become active.
- [didDeactivate](diddeactivate%28%29.md): Tells the authorization plug-in that its user interface has been deactivated.
