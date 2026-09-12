> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationpluginview/buttonpressed(_:)](https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/buttonpressed(_:))

# buttonPressed(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Tells the authorization plug-in that the user pressed a button in the custom view.

## Declaration

```swift
func buttonPressed(_ inButtonType: SFButtonType)
```

## Parameters

- `inButtonType`: The type of button that was pressed.

<a id="Discussion"></a>

## Discussion

By default, [buttonPressed(\_:)](buttonpressed%28__%29.md) will set a result of Deny when the OK or Login buttons are pressed. An [SFAuthorizationPluginView](../sfauthorizationpluginview.md) subclass needs to override this method to set the context values for the short name of the user so that user attributes can be looked up. To do this, use [kAuthorizationEnvironmentUsername](https://developer.apple.com/documentation/security/kauthorizationenvironmentusername) as the key. A subclass should also set any additional context values that are needed by the authorization plug-in to verify the user’s credentials. To do this, use the appropriate function pointers you receive from [callbacks()](callbacks%28%29.md).

When you override this method, do not call `[super buttonPressed]`.

## See Also

### Responding to User Actions

- [view(for:)](view%28for_%29.md): Returns the appropriate view object for the specified view type.

# buttonPressed: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Tells the authorization plug-in that the user pressed a button in the custom view.

## Declaration

```objectivec
- (void) buttonPressed:(SFButtonType) inButtonType;
```

## Parameters

- `inButtonType`: The type of button that was pressed.

<a id="Discussion"></a>

## Discussion

By default, [buttonPressed:](buttonpressed%28__%29.md) will set a result of Deny when the OK or Login buttons are pressed. An [SFAuthorizationPluginView](../sfauthorizationpluginview.md) subclass needs to override this method to set the context values for the short name of the user so that user attributes can be looked up. To do this, use [kAuthorizationEnvironmentUsername](https://developer.apple.com/documentation/security/kauthorizationenvironmentusername) as the key. A subclass should also set any additional context values that are needed by the authorization plug-in to verify the user’s credentials. To do this, use the appropriate function pointers you receive from [callbacks](callbacks%28%29.md).

When you override this method, do not call `[super buttonPressed]`.

## See Also

### Responding to User Actions

- [viewForType:](view%28for_%29.md): Returns the appropriate view object for the specified view type.
