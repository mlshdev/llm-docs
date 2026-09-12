> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationview/setflags(_:)](https://developer.apple.com/documentation/securityinterface/sfauthorizationview/setflags(_:))

# setFlags(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sets the current authorization flags for the view.

## Declaration

```swift
func setFlags(_ flags: AuthorizationFlags)
```

## Parameters

- `flags`: The authorization flags to set for this view.

<a id="Discussion"></a>

## Discussion

You can use this method to change the authorization flag settings made with the [setAuthorizationRights(\_:)](setauthorizationrights%28__%29.md) method or to specify flags other than the default ([kAuthorizationFlagDefaults](https://developer.apple.com/documentation/security/authorizationflags/kauthorizationflagdefaults)) used by the [setString(\_:)](setstring%28__%29.md) method.

The authorization flags are described in Authorization Options in [Authorization Services](https://developer.apple.com/documentation/security/authorization-services).

## See Also

### Setting up the authorization view

- [setString(\_:)](setstring%28__%29.md): Sets the requested-right string to use with the default authorization rights set.
- [setAuthorizationRights(\_:)](setauthorizationrights%28__%29.md): Sets the authorization rights for this view.
- [setAutoupdate(\_:)](setautoupdate%28__%29.md): Sets the authorization view to update itself automatically.
- [setAutoupdate(\_:interval:)](setautoupdate%28__interval_%29.md): Sets the authorization view to update itself at a specific interval.
- [setEnabled(\_:)](setenabled%28__%29.md): Sets the current state of the authorization view.

# setFlags: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sets the current authorization flags for the view.

## Declaration

```objectivec
- (void) setFlags:(AuthorizationFlags) flags;
```

## Parameters

- `flags`: The authorization flags to set for this view.

<a id="Discussion"></a>

## Discussion

You can use this method to change the authorization flag settings made with the [setAuthorizationRights:](setauthorizationrights%28__%29.md) method or to specify flags other than the default ([kAuthorizationFlagDefaults](https://developer.apple.com/documentation/security/authorizationflags/kauthorizationflagdefaults)) used by the [setString:](setstring%28__%29.md) method.

The authorization flags are described in Authorization Options in [Authorization Services](https://developer.apple.com/documentation/security/authorization-services).

## See Also

### Setting up the authorization view

- [setString:](setstring%28__%29.md): Sets the requested-right string to use with the default authorization rights set.
- [setAuthorizationRights:](setauthorizationrights%28__%29.md): Sets the authorization rights for this view.
- [setAutoupdate:](setautoupdate%28__%29.md): Sets the authorization view to update itself automatically.
- [setAutoupdate:interval:](setautoupdate%28__interval_%29.md): Sets the authorization view to update itself at a specific interval.
- [setEnabled:](setenabled%28__%29.md): Sets the current state of the authorization view.
