> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationpluginview/update()](https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/update())

# update() (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Tells the authorization plug-in to get and display the appropriate view in the authorization plug-in’s user interface.

## Declaration

```swift
func update()
```

<a id="Discussion"></a>

## Discussion

Your subclass of [SFAuthorizationPluginView](../sfauthorizationpluginview.md) should call this method when a user clicks a button in your view that should result in a new view being displayed. Calling this method causes the authorization plug-in to get the new view and display it.

## See Also

### Communicating with the Authorization Plug-in

- [display()](display%28%29.md): Displays the user interface provided by the authorization plug-in view subclass.
- [setButton(\_:enabled:)](setbutton%28__enabled_%29.md): Enables or disables a button in the authorization plug-in’s user interface.

# updateView (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Tells the authorization plug-in to get and display the appropriate view in the authorization plug-in’s user interface.

## Declaration

```objectivec
- (void) updateView;
```

<a id="Discussion"></a>

## Discussion

Your subclass of [SFAuthorizationPluginView](../sfauthorizationpluginview.md) should call this method when a user clicks a button in your view that should result in a new view being displayed. Calling this method causes the authorization plug-in to get the new view and display it.

## See Also

### Communicating with the Authorization Plug-in

- [displayView](display%28%29.md): Displays the user interface provided by the authorization plug-in view subclass.
- [setButton:enabled:](setbutton%28__enabled_%29.md): Enables or disables a button in the authorization plug-in’s user interface.
