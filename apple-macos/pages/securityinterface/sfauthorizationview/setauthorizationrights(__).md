> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationview/setauthorizationrights(_:)](https://developer.apple.com/documentation/securityinterface/sfauthorizationview/setauthorizationrights(_:))

# setAuthorizationRights(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sets the authorization rights for this view.

## Declaration

```swift
func setAuthorizationRights(_ authorizationRights: UnsafePointer<AuthorizationRights>!)
```

## Parameters

- `authorizationRights`: An authorization rights structure specifying the authorization rights represented by the authorization view.

<a id="Discussion"></a>

## Discussion

Either this method or the [setString(\_:)](setstring%28__%29.md) method must be called before the view displays correctly.

The authorization rights structures are defined in [AuthorizationRights](https://developer.apple.com/documentation/security/authorizationrights) in [Authorization Services](https://developer.apple.com/documentation/security/authorization-services).

## See Also

### Related Documentation

- [authorizationRights()](authorizationrights%28%29.md): Returns the authorization rights for this view.

### Setting up the authorization view

- [setString(\_:)](setstring%28__%29.md): Sets the requested-right string to use with the default authorization rights set.
- [setAutoupdate(\_:)](setautoupdate%28__%29.md): Sets the authorization view to update itself automatically.
- [setAutoupdate(\_:interval:)](setautoupdate%28__interval_%29.md): Sets the authorization view to update itself at a specific interval.
- [setFlags(\_:)](setflags%28__%29.md): Sets the current authorization flags for the view.
- [setEnabled(\_:)](setenabled%28__%29.md): Sets the current state of the authorization view.

# setAuthorizationRights: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sets the authorization rights for this view.

## Declaration

```objectivec
- (void) setAuthorizationRights:(const AuthorizationRights *) authorizationRights;
```

## Parameters

- `authorizationRights`: An authorization rights structure specifying the authorization rights represented by the authorization view.

<a id="Discussion"></a>

## Discussion

Either this method or the [setString:](setstring%28__%29.md) method must be called before the view displays correctly.

The authorization rights structures are defined in [AuthorizationRights](https://developer.apple.com/documentation/security/authorizationrights) in [Authorization Services](https://developer.apple.com/documentation/security/authorization-services).

## See Also

### Related Documentation

- [authorizationRights](authorizationrights%28%29.md): Returns the authorization rights for this view.

### Setting up the authorization view

- [setString:](setstring%28__%29.md): Sets the requested-right string to use with the default authorization rights set.
- [setAutoupdate:](setautoupdate%28__%29.md): Sets the authorization view to update itself automatically.
- [setAutoupdate:interval:](setautoupdate%28__interval_%29.md): Sets the authorization view to update itself at a specific interval.
- [setFlags:](setflags%28__%29.md): Sets the current authorization flags for the view.
- [setEnabled:](setenabled%28__%29.md): Sets the current state of the authorization view.
