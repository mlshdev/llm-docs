> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationpluginview/callbacks()](https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/callbacks())

# callbacks() (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the authorization callbacks structure with which this instance was initialized.

## Declaration

```swift
func callbacks() -> UnsafePointer<AuthorizationCallbacks>!
```

<a id="return-value"></a>

## Return Value

An object of type [AuthorizationCallbacks](https://developer.apple.com/documentation/security/authorizationcallbacks).

<a id="Discussion"></a>

## Discussion

Use the [AuthorizationCallbacks](https://developer.apple.com/documentation/security/authorizationcallbacks) structure to get the function pointers to functions such as `SetResult` and `SetContextValue`.

## See Also

### Getting Instance Information

- [engineRef()](engineref%28%29.md): Returns the authorization engine handle with which this instance was initialized.
- [lastError()](lasterror%28%29.md): Returns the last error that occurred during evaluation.

# callbacks (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the authorization callbacks structure with which this instance was initialized.

## Declaration

```objectivec
- (const AuthorizationCallbacks *) callbacks;
```

<a id="return-value"></a>

## Return Value

An object of type [AuthorizationCallbacks](https://developer.apple.com/documentation/security/authorizationcallbacks).

<a id="Discussion"></a>

## Discussion

Use the [AuthorizationCallbacks](https://developer.apple.com/documentation/security/authorizationcallbacks) structure to get the function pointers to functions such as `SetResult` and `SetContextValue`.

## See Also

### Getting Instance Information

- [engineRef](engineref%28%29.md): Returns the authorization engine handle with which this instance was initialized.
- [lastError](lasterror%28%29.md): Returns the last error that occurred during evaluation.
