> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationpluginview](https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview)

# SFAuthorizationPluginView (Swift)

**Framework:** Security Interface  
**Kind:** Class  
**Availability:** macOS 10.3+

Allows authorization plug-in developers to create a custom view their plug-in can display.

## Declaration

```swift
class SFAuthorizationPluginView
```

<a id="overview"></a>

## Overview

If you’re developing an authorization plug-in, you can subclass the [SFAuthorizationPluginView](sfauthorizationpluginview.md) class to create views that provide a custom user interface for your plug-in. By subclassing the [SFAuthorizationPluginView](sfauthorizationpluginview.md) class, you avoid changing or duplicating the Apple-provided authentication or login window dialogs to display your custom view.

To instantiate your [SFAuthorizationPluginView](sfauthorizationpluginview.md) subclass, you need the callbacks structure containing entry points to the Security Server that you receive in your plug-in’s [AuthorizationPluginCreate](https://developer.apple.com/documentation/security/authorizationplugincreate) function and the authorization engine handle you receive in your plug-in’s [MechanismCreate](https://developer.apple.com/documentation/security/authorizationplugininterface/mechanismcreate) function.

Your custom subclass of [SFAuthorizationPluginView](sfauthorizationpluginview.md) must override the following methods:

- [buttonPressed(\_:)](sfauthorizationpluginview/buttonpressed%28__%29.md)
- [view(for:)](sfauthorizationpluginview/view%28for_%29.md)

## Topics

### Initializing an SFAuthorizationPluginView Object

- [init(callbacks:andEngineRef:)](sfauthorizationpluginview/init%28callbacks_andengineref_%29.md): Initializes a new authorization plug-in view with the specified callbacks and authorization engine handle.

### Getting Instance Information

- [callbacks()](sfauthorizationpluginview/callbacks%28%29.md): Returns the authorization callbacks structure with which this instance was initialized.
- [engineRef()](sfauthorizationpluginview/engineref%28%29.md): Returns the authorization engine handle with which this instance was initialized.
- [lastError()](sfauthorizationpluginview/lasterror%28%29.md): Returns the last error that occurred during evaluation.

### Responding to User Actions

- [buttonPressed(\_:)](sfauthorizationpluginview/buttonpressed%28__%29.md): Tells the authorization plug-in that the user pressed a button in the custom view.
- [view(for:)](sfauthorizationpluginview/view%28for_%29.md): Returns the appropriate view object for the specified view type.

### Configuring the User Interface

- [didActivate()](sfauthorizationpluginview/didactivate%28%29.md): Tells the authorization plug-in when its user interface has become active.
- [didDeactivate()](sfauthorizationpluginview/diddeactivate%28%29.md): Tells the authorization plug-in that its user interface has been deactivated.
- [willActivate(withUser:)](sfauthorizationpluginview/willactivate%28withuser_%29.md): Tells the authorization plug-in that its user interface is about to be made active by the Apple-provided Security Agent.

### Setting Up the Keyboard Loop

- [firstKeyView()](sfauthorizationpluginview/firstkeyview%28%29.md): Returns the first view in the keyboard loop of the view.
- [firstResponder()](sfauthorizationpluginview/firstresponder%28%29.md): Returns the view that should get focus for keyboard events.
- [lastKeyView()](sfauthorizationpluginview/lastkeyview%28%29.md): Returns the last view in the keyboard loop of the view.

### Enabling and Disabling Controls

- [setEnabled(\_:)](sfauthorizationpluginview/setenabled%28__%29.md): Enables or disables the controls in the authorization plug-in’s view.

### Communicating with the Authorization Plug-in

- [display()](sfauthorizationpluginview/display%28%29.md): Displays the user interface provided by the authorization plug-in view subclass.
- [setButton(\_:enabled:)](sfauthorizationpluginview/setbutton%28__enabled_%29.md): Enables or disables a button in the authorization plug-in’s user interface.
- [update()](sfauthorizationpluginview/update%28%29.md): Tells the authorization plug-in to get and display the appropriate view in the authorization plug-in’s user interface.

### Constants

- [SFButtonType](sfbuttontype.md): These constants define the button types used by authorization plug-ins.
- [SFViewType](sfviewtype.md): These constants define the view type requested by the authorization plug-in.
- [Exceptions](exceptions.md): Exceptions thrown by the `SFAuthorizationPluginView` class

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Classes

- [SFAuthorizationView](sfauthorizationview.md): The class responsible for displaying a lock icon that can be used to indicate that a user interface has restricted access.
- [SFCertificatePanel](sfcertificatepanel.md): A panel or sheet that displays one or more certificates.
- [SFCertificateTrustPanel](sfcertificatetrustpanel.md): A panel or sheet that lets the user edit the trust settings in any of the certificates in a certificate chain.
- [SFCertificateView](sfcertificateview.md): A view that displays the contents of a certificate, with options to display certificate details, display trust settings, and allow users to edit a certificate’s trust settings.
- [SFChooseIdentityPanel](sfchooseidentitypanel.md): A panel or sheet containing a list of identities that a user can choose from.
- [SFChooseIdentityTableCellView](sfchooseidentitytablecellview.md)
- [SFKeychainSavePanel](sfkeychainsavepanel.md): A panel or sheet that allows the user to create a keychain.
- [SFKeychainSettingsPanel](sfkeychainsettingspanel.md): A panel or sheet that allows users to change their keychain settings.

# SFAuthorizationPluginView (Objective-C)

**Framework:** Security Interface  
**Kind:** Class  
**Availability:** macOS 10.3+

Allows authorization plug-in developers to create a custom view their plug-in can display.

## Declaration

```objectivec
@interface SFAuthorizationPluginView : NSObject
```

<a id="overview"></a>

## Overview

If you’re developing an authorization plug-in, you can subclass the [SFAuthorizationPluginView](sfauthorizationpluginview.md) class to create views that provide a custom user interface for your plug-in. By subclassing the [SFAuthorizationPluginView](sfauthorizationpluginview.md) class, you avoid changing or duplicating the Apple-provided authentication or login window dialogs to display your custom view.

To instantiate your [SFAuthorizationPluginView](sfauthorizationpluginview.md) subclass, you need the callbacks structure containing entry points to the Security Server that you receive in your plug-in’s [AuthorizationPluginCreate](https://developer.apple.com/documentation/security/authorizationplugincreate) function and the authorization engine handle you receive in your plug-in’s [MechanismCreate](https://developer.apple.com/documentation/security/authorizationplugininterface/mechanismcreate) function.

Your custom subclass of [SFAuthorizationPluginView](sfauthorizationpluginview.md) must override the following methods:

- [buttonPressed:](sfauthorizationpluginview/buttonpressed%28__%29.md)
- [viewForType:](sfauthorizationpluginview/view%28for_%29.md)

## Topics

### Initializing an SFAuthorizationPluginView Object

- [initWithCallbacks:andEngineRef:](sfauthorizationpluginview/init%28callbacks_andengineref_%29.md): Initializes a new authorization plug-in view with the specified callbacks and authorization engine handle.

### Getting Instance Information

- [callbacks](sfauthorizationpluginview/callbacks%28%29.md): Returns the authorization callbacks structure with which this instance was initialized.
- [engineRef](sfauthorizationpluginview/engineref%28%29.md): Returns the authorization engine handle with which this instance was initialized.
- [lastError](sfauthorizationpluginview/lasterror%28%29.md): Returns the last error that occurred during evaluation.

### Responding to User Actions

- [buttonPressed:](sfauthorizationpluginview/buttonpressed%28__%29.md): Tells the authorization plug-in that the user pressed a button in the custom view.
- [viewForType:](sfauthorizationpluginview/view%28for_%29.md): Returns the appropriate view object for the specified view type.

### Configuring the User Interface

- [didActivate](sfauthorizationpluginview/didactivate%28%29.md): Tells the authorization plug-in when its user interface has become active.
- [didDeactivate](sfauthorizationpluginview/diddeactivate%28%29.md): Tells the authorization plug-in that its user interface has been deactivated.
- [willActivateWithUser:](sfauthorizationpluginview/willactivate%28withuser_%29.md): Tells the authorization plug-in that its user interface is about to be made active by the Apple-provided Security Agent.

### Setting Up the Keyboard Loop

- [firstKeyView](sfauthorizationpluginview/firstkeyview%28%29.md): Returns the first view in the keyboard loop of the view.
- [firstResponder](sfauthorizationpluginview/firstresponder%28%29.md): Returns the view that should get focus for keyboard events.
- [lastKeyView](sfauthorizationpluginview/lastkeyview%28%29.md): Returns the last view in the keyboard loop of the view.

### Enabling and Disabling Controls

- [setEnabled:](sfauthorizationpluginview/setenabled%28__%29.md): Enables or disables the controls in the authorization plug-in’s view.

### Communicating with the Authorization Plug-in

- [displayView](sfauthorizationpluginview/display%28%29.md): Displays the user interface provided by the authorization plug-in view subclass.
- [setButton:enabled:](sfauthorizationpluginview/setbutton%28__enabled_%29.md): Enables or disables a button in the authorization plug-in’s user interface.
- [updateView](sfauthorizationpluginview/update%28%29.md): Tells the authorization plug-in to get and display the appropriate view in the authorization plug-in’s user interface.

### Constants

- [SFButtonType](sfbuttontype.md): These constants define the button types used by authorization plug-ins.
- [SFViewType](sfviewtype.md): These constants define the view type requested by the authorization plug-in.
- [Exceptions](exceptions.md): Exceptions thrown by the `SFAuthorizationPluginView` class

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Classes

- [SFAuthorizationView](sfauthorizationview.md): The class responsible for displaying a lock icon that can be used to indicate that a user interface has restricted access.
- [SFCertificatePanel](sfcertificatepanel.md): A panel or sheet that displays one or more certificates.
- [SFCertificateTrustPanel](sfcertificatetrustpanel.md): A panel or sheet that lets the user edit the trust settings in any of the certificates in a certificate chain.
- [SFCertificateView](sfcertificateview.md): A view that displays the contents of a certificate, with options to display certificate details, display trust settings, and allow users to edit a certificate’s trust settings.
- [SFChooseIdentityPanel](sfchooseidentitypanel.md): A panel or sheet containing a list of identities that a user can choose from.
- [SFChooseIdentityTableCellView](sfchooseidentitytablecellview.md)
- [SFKeychainSavePanel](sfkeychainsavepanel.md): A panel or sheet that allows the user to create a keychain.
- [SFKeychainSettingsPanel](sfkeychainsettingspanel.md): A panel or sheet that allows users to change their keychain settings.
