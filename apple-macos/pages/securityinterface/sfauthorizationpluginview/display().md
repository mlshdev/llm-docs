> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationpluginview/display()](https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/display())

# display() (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Displays the user interface provided by the authorization plug-in view subclass.

## Declaration

```swift
func display()
```

<a id="Discussion"></a>

## Discussion

It’s not likely that you will want to override this method, but if you do, be sure to call `[super displayView]`. If you don’t call `[super displayView]`, your custom view will not get displayed.

This method will raise an [SFDisplayViewException](../sfdisplayviewexception.md) exception if an error occurs while displaying the authorization dialog.

## See Also

### Communicating with the Authorization Plug-in

- [setButton(\_:enabled:)](setbutton%28__enabled_%29.md): Enables or disables a button in the authorization plug-in’s user interface.
- [update()](update%28%29.md): Tells the authorization plug-in to get and display the appropriate view in the authorization plug-in’s user interface.

# displayView (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Displays the user interface provided by the authorization plug-in view subclass.

## Declaration

```objectivec
- (void) displayView;
```

<a id="Discussion"></a>

## Discussion

It’s not likely that you will want to override this method, but if you do, be sure to call `[super displayView]`. If you don’t call `[super displayView]`, your custom view will not get displayed.

This method will raise an [SFDisplayViewException](../sfdisplayviewexception.md) exception if an error occurs while displaying the authorization dialog.

## See Also

### Communicating with the Authorization Plug-in

- [setButton:enabled:](setbutton%28__enabled_%29.md): Enables or disables a button in the authorization plug-in’s user interface.
- [updateView](update%28%29.md): Tells the authorization plug-in to get and display the appropriate view in the authorization plug-in’s user interface.
