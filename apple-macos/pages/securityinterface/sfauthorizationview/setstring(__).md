> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationview/setstring(_:)](https://developer.apple.com/documentation/securityinterface/sfauthorizationview/setstring(_:))

# setString(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sets the requested-right string to use with the default authorization rights set.

## Declaration

```swift
func setString(_ authorizationString: AuthorizationString!)
```

## Parameters

- `authorizationString`: The string to be displayed.

<a id="Discussion"></a>

## Discussion

This is a convenience method that creates an authorization rights set when you specify only the name of the requested right. The requested-right string is displayed in the Details pane of the user authentication dialog box. Either this method or the [setAuthorizationRights(\_:)](setauthorizationrights%28__%29.md) method must be called before the view displays correctly.

## See Also

### Related Documentation

- [Authorization Services Programming Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/authorization_concepts/01introduction/introduction.html#//apple_ref/doc/uid/TP30000995)
- [authorizationRights()](authorizationrights%28%29.md): Returns the authorization rights for this view.

### Setting up the authorization view

- [setAuthorizationRights(\_:)](setauthorizationrights%28__%29.md): Sets the authorization rights for this view.
- [setAutoupdate(\_:)](setautoupdate%28__%29.md): Sets the authorization view to update itself automatically.
- [setAutoupdate(\_:interval:)](setautoupdate%28__interval_%29.md): Sets the authorization view to update itself at a specific interval.
- [setFlags(\_:)](setflags%28__%29.md): Sets the current authorization flags for the view.
- [setEnabled(\_:)](setenabled%28__%29.md): Sets the current state of the authorization view.

# setString: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sets the requested-right string to use with the default authorization rights set.

## Declaration

```objectivec
- (void) setString:(AuthorizationString) authorizationString;
```

## Parameters

- `authorizationString`: The string to be displayed.

<a id="Discussion"></a>

## Discussion

This is a convenience method that creates an authorization rights set when you specify only the name of the requested right. The requested-right string is displayed in the Details pane of the user authentication dialog box. Either this method or the [setAuthorizationRights:](setauthorizationrights%28__%29.md) method must be called before the view displays correctly.

## See Also

### Related Documentation

- [Authorization Services Programming Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/authorization_concepts/01introduction/introduction.html#//apple_ref/doc/uid/TP30000995)
- [authorizationRights](authorizationrights%28%29.md): Returns the authorization rights for this view.

### Setting up the authorization view

- [setAuthorizationRights:](setauthorizationrights%28__%29.md): Sets the authorization rights for this view.
- [setAutoupdate:](setautoupdate%28__%29.md): Sets the authorization view to update itself automatically.
- [setAutoupdate:interval:](setautoupdate%28__interval_%29.md): Sets the authorization view to update itself at a specific interval.
- [setFlags:](setflags%28__%29.md): Sets the current authorization flags for the view.
- [setEnabled:](setenabled%28__%29.md): Sets the current state of the authorization view.
