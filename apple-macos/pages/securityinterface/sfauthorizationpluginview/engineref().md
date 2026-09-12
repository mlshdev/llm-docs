> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationpluginview/engineref()](https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/engineref())

# engineRef() (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the authorization engine handle with which this instance was initialized.

## Declaration

```swift
func engineRef() -> AuthorizationEngineRef!
```

<a id="return-value"></a>

## Return Value

A handle of type [AuthorizationEngineRef](https://developer.apple.com/documentation/security/authorizationengineref).

<a id="Discussion"></a>

## Discussion

Use the authorization engine handle when you call the functions in the [AuthorizationCallbacks](https://developer.apple.com/documentation/security/authorizationcallbacks) structure to set a result or a context value.

## See Also

### Getting Instance Information

- [callbacks()](callbacks%28%29.md): Returns the authorization callbacks structure with which this instance was initialized.
- [lastError()](lasterror%28%29.md): Returns the last error that occurred during evaluation.

# engineRef (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the authorization engine handle with which this instance was initialized.

## Declaration

```objectivec
- (AuthorizationEngineRef) engineRef;
```

<a id="return-value"></a>

## Return Value

A handle of type [AuthorizationEngineRef](https://developer.apple.com/documentation/security/authorizationengineref).

<a id="Discussion"></a>

## Discussion

Use the authorization engine handle when you call the functions in the [AuthorizationCallbacks](https://developer.apple.com/documentation/security/authorizationcallbacks) structure to set a result or a context value.

## See Also

### Getting Instance Information

- [callbacks](callbacks%28%29.md): Returns the authorization callbacks structure with which this instance was initialized.
- [lastError](lasterror%28%29.md): Returns the last error that occurred during evaluation.
