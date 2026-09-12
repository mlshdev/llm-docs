> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/servicesmenu](https://developer.apple.com/documentation/appkit/nsapplication/servicesmenu)

# servicesMenu (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The app’s Services menu.

## Declaration

```swift
var servicesMenu: NSMenu? { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the app’s Services menu or `nil` if that menu has not been created. You can assign a new value to the property to set the Services menu for your app.

## See Also

### Managing the Services Menu

- [registerServicesMenuSendTypes(\_:returnTypes:)](registerservicesmenusendtypes%28__returntypes_%29.md): Registers the pasteboard types the receiver can send and receive in response to service requests.

# servicesMenu (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The app’s Services menu.

## Declaration

```objectivec
@property (strong, nullable) NSMenu * servicesMenu;
```

<a id="Discussion"></a>

## Discussion

This property contains the app’s Services menu or `nil` if that menu has not been created. You can assign a new value to the property to set the Services menu for your app.

## See Also

### Managing the Services Menu

- [registerServicesMenuSendTypes:returnTypes:](registerservicesmenusendtypes%28__returntypes_%29.md): Registers the pasteboard types the receiver can send and receive in response to service requests.
