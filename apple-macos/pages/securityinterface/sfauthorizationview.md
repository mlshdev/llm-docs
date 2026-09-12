> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationview](https://developer.apple.com/documentation/securityinterface/sfauthorizationview)

# SFAuthorizationView (Swift)

**Framework:** Security Interface  
**Kind:** Class  
**Availability:** macOS 10.3+

The class responsible for displaying a lock icon that can be used to indicate that a user interface has restricted access.

## Declaration

```swift
class SFAuthorizationView
```

<a id="overview"></a>

## Overview

The lock appears locked when the user must be authorized and appears open when the user has been authorized. The closed and open lock icons of the authorization view are shown in the following figure.

![Authorization view lock icon](https://developer.apple.com/images/com.apple.securityinterface/media-1965610.gif)

When you add an authorization view as a custom view to a window or dialog box, you must initialize it before it displays correctly. To initialize the view, use the [setString(\_:)](sfauthorizationview/setstring%28__%29.md) method to create a default rights structure (containing a prompt string) or the [setAuthorizationRights(\_:)](sfauthorizationview/setauthorizationrights%28__%29.md) method to specify a rights structure. You must also either specify automatic updates ([setAutoupdate(\_:)](sfauthorizationview/setautoupdate%28__%29.md) or [setAutoupdate(\_:interval:)](sfauthorizationview/setautoupdate%28__interval_%29.md)) or perform a manual update ([updateStatus(\_:)](sfauthorizationview/updatestatus%28__%29.md)) to set the lock icon to its initial state.

You can implement delegate methods that are invoked when the authorization view changes state. You can optionally implement the delegate methods to obtain the state of the authorization object when you are using an authorization view.

When the user clicks a locked authorization view icon, the Security Server displays an authentication dialog (to request a user name and password, for example). When the user provides the requested credentials, the lock icon unlocks and the user is considered preauthorized to perform the functions specified by the authorization rights structure. You can call the [updateStatus(\_:)](sfauthorizationview/updatestatus%28__%29.md) method to determine whether the user has been preauthorized: this method returns [true](https://developer.apple.com/documentation/swift/true) if the view is in the unlocked state, otherwise [false](https://developer.apple.com/documentation/swift/false). Before committing changes or performing actions that require authorization, you should check the user’s authorization again, even if they are preauthorized.

The default behavior of this view is to preauthorize rights; if this is not possible it unlocks and waits for authorization to be checked when explicitly required.

## Topics

### Setting up the authorization view

- [setString(\_:)](sfauthorizationview/setstring%28__%29.md): Sets the requested-right string to use with the default authorization rights set.
- [setAuthorizationRights(\_:)](sfauthorizationview/setauthorizationrights%28__%29.md): Sets the authorization rights for this view.
- [setAutoupdate(\_:)](sfauthorizationview/setautoupdate%28__%29.md): Sets the authorization view to update itself automatically.
- [setAutoupdate(\_:interval:)](sfauthorizationview/setautoupdate%28__interval_%29.md): Sets the authorization view to update itself at a specific interval.
- [setFlags(\_:)](sfauthorizationview/setflags%28__%29.md): Sets the current authorization flags for the view.
- [setEnabled(\_:)](sfauthorizationview/setenabled%28__%29.md): Sets the current state of the authorization view.

### Setting and getting the delegate for the view

- [setDelegate(\_:)](sfauthorizationview/setdelegate%28__%29.md): Sets the delegate for this authorization view.
- [delegate()](sfauthorizationview/delegate%28%29.md): Returns the delegate for this view.

### Updating the view

- [updateStatus(\_:)](sfauthorizationview/updatestatus%28__%29.md): Manually updates the authorization view.

### Getting information about the authorization view

- [authorization()](sfauthorizationview/authorization%28%29.md): Returns the authorization object associated with this view.
- [authorizationRights()](sfauthorizationview/authorizationrights%28%29.md): Returns the authorization rights for this view.
- [authorizationState()](sfauthorizationview/authorizationstate%28%29.md): Returns the current state of the authorization view.
- [isEnabled()](sfauthorizationview/isenabled%28%29.md): Indicates whether the authorization view is enabled ([true](https://developer.apple.com/documentation/swift/true)) or disabled ([false](https://developer.apple.com/documentation/swift/false)).

### Setting the authorization state

- [authorize(\_:)](sfauthorizationview/authorize%28__%29.md): Attempts to unlock the lock icon in the view.
- [deauthorize(\_:)](sfauthorizationview/deauthorize%28__%29.md): Sets the authorization state to unauthorized and locks the lock icon in the view.

### Delegate methods

- [authorizationViewShouldDeauthorize(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/authorizationviewshoulddeauthorize%28_:%29): Sent to the delegate when a user clicks the open lock icon.
- [authorizationViewCreatedAuthorization(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/authorizationviewcreatedauthorization%28_:%29): Sent to the delegate to indicate the authorization object has been created or changed.
- [authorizationViewDidAuthorize(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/authorizationviewdidauthorize%28_:%29): Sent to the delegate to indicate the user was authorized and the authorization view was changed to unlocked.
- [authorizationViewDidDeauthorize(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/authorizationviewdiddeauthorize%28_:%29): Sent to the delegate to indicate the user was deauthorized and the authorization view was changed to locked.
- [authorizationViewDidHide(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/authorizationviewdidhide%28_:%29): Sent to the delegate to indicate that the view’s visibility has changed.
- [authorizationViewReleasedAuthorization(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/authorizationviewreleasedauthorization%28_:%29): Sent to the delegate to indicate that deauthorization is about to occur.

### Constants

- [SFAuthorizationViewState](sfauthorizationviewstate.md): Defines the current state of the authorization view.

## Relationships

### Inherits From

- [NSView](../appkit/nsview.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](../appkit/nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](../appkit/nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](../appkit/nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](../appkit/nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](../appkit/nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](../appkit/nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](../appkit/nstouchbarprovider.md)
- [NSUserActivityRestoring](../appkit/nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](../appkit/nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Classes

- [SFAuthorizationPluginView](sfauthorizationpluginview.md): Allows authorization plug-in developers to create a custom view their plug-in can display.
- [SFCertificatePanel](sfcertificatepanel.md): A panel or sheet that displays one or more certificates.
- [SFCertificateTrustPanel](sfcertificatetrustpanel.md): A panel or sheet that lets the user edit the trust settings in any of the certificates in a certificate chain.
- [SFCertificateView](sfcertificateview.md): A view that displays the contents of a certificate, with options to display certificate details, display trust settings, and allow users to edit a certificate’s trust settings.
- [SFChooseIdentityPanel](sfchooseidentitypanel.md): A panel or sheet containing a list of identities that a user can choose from.
- [SFChooseIdentityTableCellView](sfchooseidentitytablecellview.md)
- [SFKeychainSavePanel](sfkeychainsavepanel.md): A panel or sheet that allows the user to create a keychain.
- [SFKeychainSettingsPanel](sfkeychainsettingspanel.md): A panel or sheet that allows users to change their keychain settings.

# SFAuthorizationView (Objective-C)

**Framework:** Security Interface  
**Kind:** Class  
**Availability:** macOS 10.3+

The class responsible for displaying a lock icon that can be used to indicate that a user interface has restricted access.

## Declaration

```objectivec
@interface SFAuthorizationView : NSView
```

<a id="overview"></a>

## Overview

The lock appears locked when the user must be authorized and appears open when the user has been authorized. The closed and open lock icons of the authorization view are shown in the following figure.

![Authorization view lock icon](https://developer.apple.com/images/com.apple.securityinterface/media-1965610.gif)

When you add an authorization view as a custom view to a window or dialog box, you must initialize it before it displays correctly. To initialize the view, use the [setString:](sfauthorizationview/setstring%28__%29.md) method to create a default rights structure (containing a prompt string) or the [setAuthorizationRights:](sfauthorizationview/setauthorizationrights%28__%29.md) method to specify a rights structure. You must also either specify automatic updates ([setAutoupdate:](sfauthorizationview/setautoupdate%28__%29.md) or [setAutoupdate:interval:](sfauthorizationview/setautoupdate%28__interval_%29.md)) or perform a manual update ([updateStatus:](sfauthorizationview/updatestatus%28__%29.md)) to set the lock icon to its initial state.

You can implement delegate methods that are invoked when the authorization view changes state. You can optionally implement the delegate methods to obtain the state of the authorization object when you are using an authorization view.

When the user clicks a locked authorization view icon, the Security Server displays an authentication dialog (to request a user name and password, for example). When the user provides the requested credentials, the lock icon unlocks and the user is considered preauthorized to perform the functions specified by the authorization rights structure. You can call the [updateStatus:](sfauthorizationview/updatestatus%28__%29.md) method to determine whether the user has been preauthorized: this method returns [true](https://developer.apple.com/documentation/swift/true) if the view is in the unlocked state, otherwise [false](https://developer.apple.com/documentation/swift/false). Before committing changes or performing actions that require authorization, you should check the user’s authorization again, even if they are preauthorized.

The default behavior of this view is to preauthorize rights; if this is not possible it unlocks and waits for authorization to be checked when explicitly required.

## Topics

### Setting up the authorization view

- [setString:](sfauthorizationview/setstring%28__%29.md): Sets the requested-right string to use with the default authorization rights set.
- [setAuthorizationRights:](sfauthorizationview/setauthorizationrights%28__%29.md): Sets the authorization rights for this view.
- [setAutoupdate:](sfauthorizationview/setautoupdate%28__%29.md): Sets the authorization view to update itself automatically.
- [setAutoupdate:interval:](sfauthorizationview/setautoupdate%28__interval_%29.md): Sets the authorization view to update itself at a specific interval.
- [setFlags:](sfauthorizationview/setflags%28__%29.md): Sets the current authorization flags for the view.
- [setEnabled:](sfauthorizationview/setenabled%28__%29.md): Sets the current state of the authorization view.

### Setting and getting the delegate for the view

- [setDelegate:](sfauthorizationview/setdelegate%28__%29.md): Sets the delegate for this authorization view.
- [delegate](sfauthorizationview/delegate%28%29.md): Returns the delegate for this view.

### Updating the view

- [updateStatus:](sfauthorizationview/updatestatus%28__%29.md): Manually updates the authorization view.

### Getting information about the authorization view

- [authorization](sfauthorizationview/authorization%28%29.md): Returns the authorization object associated with this view.
- [authorizationRights](sfauthorizationview/authorizationrights%28%29.md): Returns the authorization rights for this view.
- [authorizationState](sfauthorizationview/authorizationstate%28%29.md): Returns the current state of the authorization view.
- [isEnabled](sfauthorizationview/isenabled%28%29.md): Indicates whether the authorization view is enabled ([true](https://developer.apple.com/documentation/swift/true)) or disabled ([false](https://developer.apple.com/documentation/swift/false)).

### Setting the authorization state

- [authorize:](sfauthorizationview/authorize%28__%29.md): Attempts to unlock the lock icon in the view.
- [deauthorize:](sfauthorizationview/deauthorize%28__%29.md): Sets the authorization state to unauthorized and locks the lock icon in the view.

### Delegate methods

- [authorizationViewShouldDeauthorize:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/authorizationviewshoulddeauthorize%28_:%29): Sent to the delegate when a user clicks the open lock icon.
- [authorizationViewCreatedAuthorization:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/authorizationviewcreatedauthorization%28_:%29): Sent to the delegate to indicate the authorization object has been created or changed.
- [authorizationViewDidAuthorize:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/authorizationviewdidauthorize%28_:%29): Sent to the delegate to indicate the user was authorized and the authorization view was changed to unlocked.
- [authorizationViewDidDeauthorize:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/authorizationviewdiddeauthorize%28_:%29): Sent to the delegate to indicate the user was deauthorized and the authorization view was changed to locked.
- [authorizationViewDidHide:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/authorizationviewdidhide%28_:%29): Sent to the delegate to indicate that the view’s visibility has changed.
- [authorizationViewReleasedAuthorization:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/authorizationviewreleasedauthorization%28_:%29): Sent to the delegate to indicate that deauthorization is about to occur.

### Constants

- [SFAuthorizationViewState](sfauthorizationviewstate.md): Defines the current state of the authorization view.

## Relationships

### Inherits From

- [NSView](../appkit/nsview.md)

## See Also

### Classes

- [SFAuthorizationPluginView](sfauthorizationpluginview.md): Allows authorization plug-in developers to create a custom view their plug-in can display.
- [SFCertificatePanel](sfcertificatepanel.md): A panel or sheet that displays one or more certificates.
- [SFCertificateTrustPanel](sfcertificatetrustpanel.md): A panel or sheet that lets the user edit the trust settings in any of the certificates in a certificate chain.
- [SFCertificateView](sfcertificateview.md): A view that displays the contents of a certificate, with options to display certificate details, display trust settings, and allow users to edit a certificate’s trust settings.
- [SFChooseIdentityPanel](sfchooseidentitypanel.md): A panel or sheet containing a list of identities that a user can choose from.
- [SFChooseIdentityTableCellView](sfchooseidentitytablecellview.md)
- [SFKeychainSavePanel](sfkeychainsavepanel.md): A panel or sheet that allows the user to create a keychain.
- [SFKeychainSettingsPanel](sfkeychainsettingspanel.md): A panel or sheet that allows users to change their keychain settings.
