> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationview/setenabled(_:)](https://developer.apple.com/documentation/securityinterface/sfauthorizationview/setenabled(_:))

# setEnabled(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sets the current state of the authorization view.

## Declaration

```swift
func setEnabled(_ enabled: Bool)
```

## Parameters

- `enabled`: Specifies whether the authorization view should be enabled ([true](https://developer.apple.com/documentation/swift/true)) or disabled ([false](https://developer.apple.com/documentation/swift/false)).

<a id="Discussion"></a>

## Discussion

A disabled view is visible but dimmed.

## See Also

### Related Documentation

- [authorizationState()](authorizationstate%28%29.md): Returns the current state of the authorization view.

### Setting up the authorization view

- [setString(\_:)](setstring%28__%29.md): Sets the requested-right string to use with the default authorization rights set.
- [setAuthorizationRights(\_:)](setauthorizationrights%28__%29.md): Sets the authorization rights for this view.
- [setAutoupdate(\_:)](setautoupdate%28__%29.md): Sets the authorization view to update itself automatically.
- [setAutoupdate(\_:interval:)](setautoupdate%28__interval_%29.md): Sets the authorization view to update itself at a specific interval.
- [setFlags(\_:)](setflags%28__%29.md): Sets the current authorization flags for the view.

# setEnabled: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sets the current state of the authorization view.

## Declaration

```objectivec
- (void) setEnabled:(BOOL) enabled;
```

## Parameters

- `enabled`: Specifies whether the authorization view should be enabled ([true](https://developer.apple.com/documentation/swift/true)) or disabled ([false](https://developer.apple.com/documentation/swift/false)).

<a id="Discussion"></a>

## Discussion

A disabled view is visible but dimmed.

## See Also

### Related Documentation

- [authorizationState](authorizationstate%28%29.md): Returns the current state of the authorization view.

### Setting up the authorization view

- [setString:](setstring%28__%29.md): Sets the requested-right string to use with the default authorization rights set.
- [setAuthorizationRights:](setauthorizationrights%28__%29.md): Sets the authorization rights for this view.
- [setAutoupdate:](setautoupdate%28__%29.md): Sets the authorization view to update itself automatically.
- [setAutoupdate:interval:](setautoupdate%28__interval_%29.md): Sets the authorization view to update itself at a specific interval.
- [setFlags:](setflags%28__%29.md): Sets the current authorization flags for the view.
