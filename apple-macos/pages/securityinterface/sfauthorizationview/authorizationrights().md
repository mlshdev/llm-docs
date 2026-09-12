> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationview/authorizationrights()](https://developer.apple.com/documentation/securityinterface/sfauthorizationview/authorizationrights())

# authorizationRights() (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns the authorization rights for this view.

## Declaration

```swift
func authorizationRights() -> UnsafeMutablePointer<AuthorizationRights>!
```

## See Also

### Related Documentation

- [setAuthorizationRights(\_:)](setauthorizationrights%28__%29.md): Sets the authorization rights for this view.

### Getting information about the authorization view

- [authorization()](authorization%28%29.md): Returns the authorization object associated with this view.
- [authorizationState()](authorizationstate%28%29.md): Returns the current state of the authorization view.
- [isEnabled()](isenabled%28%29.md): Indicates whether the authorization view is enabled ([true](https://developer.apple.com/documentation/swift/true)) or disabled ([false](https://developer.apple.com/documentation/swift/false)).

# authorizationRights (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns the authorization rights for this view.

## Declaration

```objectivec
- (AuthorizationRights *) authorizationRights;
```

## See Also

### Related Documentation

- [setAuthorizationRights:](setauthorizationrights%28__%29.md): Sets the authorization rights for this view.

### Getting information about the authorization view

- [authorization](authorization%28%29.md): Returns the authorization object associated with this view.
- [authorizationState](authorizationstate%28%29.md): Returns the current state of the authorization view.
- [isEnabled](isenabled%28%29.md): Indicates whether the authorization view is enabled ([true](https://developer.apple.com/documentation/swift/true)) or disabled ([false](https://developer.apple.com/documentation/swift/false)).
