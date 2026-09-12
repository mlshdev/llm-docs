> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationpluginview/lasterror()](https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/lasterror())

# lastError() (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the last error that occurred during evaluation.

## Declaration

```swift
func lastError() -> (any Error)!
```

<a id="Discussion"></a>

## Discussion

Your authorization plug-in should override this method and return the last error that occurred during evaluation or `nil` if no error occurred.

A downstream plug-in can set a context value using the `kAuthorizationContextFlagSticky` flag to make it available to the `SFAuthorizationPluginView` class in case of an error.

## See Also

### Getting Instance Information

- [callbacks()](callbacks%28%29.md): Returns the authorization callbacks structure with which this instance was initialized.
- [engineRef()](engineref%28%29.md): Returns the authorization engine handle with which this instance was initialized.

# lastError (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the last error that occurred during evaluation.

## Declaration

```objectivec
- (NSError *) lastError;
```

<a id="Discussion"></a>

## Discussion

Your authorization plug-in should override this method and return the last error that occurred during evaluation or `nil` if no error occurred.

A downstream plug-in can set a context value using the `kAuthorizationContextFlagSticky` flag to make it available to the `SFAuthorizationPluginView` class in case of an error.

## See Also

### Getting Instance Information

- [callbacks](callbacks%28%29.md): Returns the authorization callbacks structure with which this instance was initialized.
- [engineRef](engineref%28%29.md): Returns the authorization engine handle with which this instance was initialized.
