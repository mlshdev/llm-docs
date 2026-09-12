> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationview/authorization()](https://developer.apple.com/documentation/securityinterface/sfauthorizationview/authorization())

# authorization() (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns the authorization object associated with this view.

## Declaration

```swift
func authorization() -> SFAuthorization!
```

<a id="Discussion"></a>

## Discussion

The authorization object is defined in [Security Foundation](../../securityfoundation.md).

## See Also

### Getting information about the authorization view

- [authorizationRights()](authorizationrights%28%29.md): Returns the authorization rights for this view.
- [authorizationState()](authorizationstate%28%29.md): Returns the current state of the authorization view.
- [isEnabled()](isenabled%28%29.md): Indicates whether the authorization view is enabled ([true](https://developer.apple.com/documentation/swift/true)) or disabled ([false](https://developer.apple.com/documentation/swift/false)).

# authorization (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns the authorization object associated with this view.

## Declaration

```objectivec
- (SFAuthorization *) authorization;
```

<a id="Discussion"></a>

## Discussion

The authorization object is defined in [Security Foundation](../../securityfoundation.md).

## See Also

### Getting information about the authorization view

- [authorizationRights](authorizationrights%28%29.md): Returns the authorization rights for this view.
- [authorizationState](authorizationstate%28%29.md): Returns the current state of the authorization view.
- [isEnabled](isenabled%28%29.md): Indicates whether the authorization view is enabled ([true](https://developer.apple.com/documentation/swift/true)) or disabled ([false](https://developer.apple.com/documentation/swift/false)).
