> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationview/authorizationstate()](https://developer.apple.com/documentation/securityinterface/sfauthorizationview/authorizationstate())

# authorizationState() (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns the current state of the authorization view.

## Declaration

```swift
func authorizationState() -> SFAuthorizationViewState
```

## See Also

### Related Documentation

- [deauthorize(\_:)](deauthorize%28__%29.md): Sets the authorization state to unauthorized and locks the lock icon in the view.
- [authorize(\_:)](authorize%28__%29.md): Attempts to unlock the lock icon in the view.

### Getting information about the authorization view

- [authorization()](authorization%28%29.md): Returns the authorization object associated with this view.
- [authorizationRights()](authorizationrights%28%29.md): Returns the authorization rights for this view.
- [isEnabled()](isenabled%28%29.md): Indicates whether the authorization view is enabled ([true](https://developer.apple.com/documentation/swift/true)) or disabled ([false](https://developer.apple.com/documentation/swift/false)).

# authorizationState (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns the current state of the authorization view.

## Declaration

```objectivec
- (SFAuthorizationViewState) authorizationState;
```

## See Also

### Related Documentation

- [deauthorize:](deauthorize%28__%29.md): Sets the authorization state to unauthorized and locks the lock icon in the view.
- [authorize:](authorize%28__%29.md): Attempts to unlock the lock icon in the view.

### Getting information about the authorization view

- [authorization](authorization%28%29.md): Returns the authorization object associated with this view.
- [authorizationRights](authorizationrights%28%29.md): Returns the authorization rights for this view.
- [isEnabled](isenabled%28%29.md): Indicates whether the authorization view is enabled ([true](https://developer.apple.com/documentation/swift/true)) or disabled ([false](https://developer.apple.com/documentation/swift/false)).
