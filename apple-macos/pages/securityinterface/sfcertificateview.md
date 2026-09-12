> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificateview](https://developer.apple.com/documentation/securityinterface/sfcertificateview)

# SFCertificateView (Swift)

**Framework:** Security Interface  
**Kind:** Class  
**Availability:** macOS 10.3+

A view that displays the contents of a certificate, with options to display certificate details, display trust settings, and allow users to edit a certificate’s trust settings.

## Declaration

```swift
class SFCertificateView
```

<a id="overview"></a>

## Overview

The following figure shows a certificate view that includes editable trust settings and certificate details.

![Certificate view](https://developer.apple.com/images/com.apple.securityinterface/media-1965608.jpg)

## Topics

### Specifying the Certificate to Display

- [setCertificate(\_:)](sfcertificateview/setcertificate%28__%29.md): Specifies the certificate that’s displayed in the view.

### Customizing the Appearance and Behavior of the View

- [setDetailsDisclosed(\_:)](sfcertificateview/setdetailsdisclosed%28__%29.md): Sets whether the certificate details subview is disclosed.
- [setDisplayDetails(\_:)](sfcertificateview/setdisplaydetails%28__%29.md): Specifies whether the user can see the certificate details.
- [setDisplayTrust(\_:)](sfcertificateview/setdisplaytrust%28__%29.md): Specifies whether the user can see the certificate’s trust settings.
- [setEditableTrust(\_:)](sfcertificateview/seteditabletrust%28__%29.md): Specifies whether the user can edit the certificate’s trust settings.
- [setPolicies(\_:)](sfcertificateview/setpolicies%28__%29.md): Specifies the policies to use when evaluating this certificate’s status.
- [setPoliciesDisclosed(\_:)](sfcertificateview/setpoliciesdisclosed%28__%29.md): Specifies whether the trust policy settings subview is disclosed.

### Getting Information About the View

- [certificate()](sfcertificateview/certificate%28%29.md): Returns the certificate currently displayed in the view.
- [detailsDisplayed()](sfcertificateview/detailsdisplayed%28%29.md): Indicates if the view currently shows the certificate’s details.
- [detailsDisclosed()](sfcertificateview/detailsdisclosed%28%29.md): Returns whether the view currently shows the certificate’s details.
- [isTrustDisplayed()](sfcertificateview/istrustdisplayed%28%29.md): Indicates if the view currently shows the certificate’s trust settings.
- [isEditable()](sfcertificateview/iseditable%28%29.md): Indicates if the view allows the user to edit the certificate’s trust.
- [policies()](sfcertificateview/policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificate.
- [policiesDisclosed()](sfcertificateview/policiesdisclosed%28%29.md): Returns whether the trust policy subview is disclosed.

### Saving User Trust Settings

- [saveTrustSettings()](sfcertificateview/savetrustsettings%28%29.md): Saves the user’s current trust settings for the displayed certificate.

### Constants

- [Notifications](notifications.md): Notifications sent by this class.

## Relationships

### Inherits From

- [NSVisualEffectView](../appkit/nsvisualeffectview.md)

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
- [SFAuthorizationView](sfauthorizationview.md): The class responsible for displaying a lock icon that can be used to indicate that a user interface has restricted access.
- [SFCertificatePanel](sfcertificatepanel.md): A panel or sheet that displays one or more certificates.
- [SFCertificateTrustPanel](sfcertificatetrustpanel.md): A panel or sheet that lets the user edit the trust settings in any of the certificates in a certificate chain.
- [SFChooseIdentityPanel](sfchooseidentitypanel.md): A panel or sheet containing a list of identities that a user can choose from.
- [SFChooseIdentityTableCellView](sfchooseidentitytablecellview.md)
- [SFKeychainSavePanel](sfkeychainsavepanel.md): A panel or sheet that allows the user to create a keychain.
- [SFKeychainSettingsPanel](sfkeychainsettingspanel.md): A panel or sheet that allows users to change their keychain settings.

# SFCertificateView (Objective-C)

**Framework:** Security Interface  
**Kind:** Class  
**Availability:** macOS 10.3+

A view that displays the contents of a certificate, with options to display certificate details, display trust settings, and allow users to edit a certificate’s trust settings.

## Declaration

```objectivec
@interface SFCertificateView : NSVisualEffectView
```

<a id="overview"></a>

## Overview

The following figure shows a certificate view that includes editable trust settings and certificate details.

![Certificate view](https://developer.apple.com/images/com.apple.securityinterface/media-1965608.jpg)

## Topics

### Specifying the Certificate to Display

- [setCertificate:](sfcertificateview/setcertificate%28__%29.md): Specifies the certificate that’s displayed in the view.

### Customizing the Appearance and Behavior of the View

- [setDetailsDisclosed:](sfcertificateview/setdetailsdisclosed%28__%29.md): Sets whether the certificate details subview is disclosed.
- [setDisplayDetails:](sfcertificateview/setdisplaydetails%28__%29.md): Specifies whether the user can see the certificate details.
- [setDisplayTrust:](sfcertificateview/setdisplaytrust%28__%29.md): Specifies whether the user can see the certificate’s trust settings.
- [setEditableTrust:](sfcertificateview/seteditabletrust%28__%29.md): Specifies whether the user can edit the certificate’s trust settings.
- [setPolicies:](sfcertificateview/setpolicies%28__%29.md): Specifies the policies to use when evaluating this certificate’s status.
- [setPoliciesDisclosed:](sfcertificateview/setpoliciesdisclosed%28__%29.md): Specifies whether the trust policy settings subview is disclosed.

### Getting Information About the View

- [certificate](sfcertificateview/certificate%28%29.md): Returns the certificate currently displayed in the view.
- [detailsDisplayed](sfcertificateview/detailsdisplayed%28%29.md): Indicates if the view currently shows the certificate’s details.
- [detailsDisclosed](sfcertificateview/detailsdisclosed%28%29.md): Returns whether the view currently shows the certificate’s details.
- [isTrustDisplayed](sfcertificateview/istrustdisplayed%28%29.md): Indicates if the view currently shows the certificate’s trust settings.
- [isEditable](sfcertificateview/iseditable%28%29.md): Indicates if the view allows the user to edit the certificate’s trust.
- [policies](sfcertificateview/policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificate.
- [policiesDisclosed](sfcertificateview/policiesdisclosed%28%29.md): Returns whether the trust policy subview is disclosed.

### Saving User Trust Settings

- [saveTrustSettings](sfcertificateview/savetrustsettings%28%29.md): Saves the user’s current trust settings for the displayed certificate.

### Constants

- [Notifications](notifications.md): Notifications sent by this class.

## Relationships

### Inherits From

- [NSVisualEffectView](../appkit/nsvisualeffectview.md)

## See Also

### Classes

- [SFAuthorizationPluginView](sfauthorizationpluginview.md): Allows authorization plug-in developers to create a custom view their plug-in can display.
- [SFAuthorizationView](sfauthorizationview.md): The class responsible for displaying a lock icon that can be used to indicate that a user interface has restricted access.
- [SFCertificatePanel](sfcertificatepanel.md): A panel or sheet that displays one or more certificates.
- [SFCertificateTrustPanel](sfcertificatetrustpanel.md): A panel or sheet that lets the user edit the trust settings in any of the certificates in a certificate chain.
- [SFChooseIdentityPanel](sfchooseidentitypanel.md): A panel or sheet containing a list of identities that a user can choose from.
- [SFChooseIdentityTableCellView](sfchooseidentitytablecellview.md)
- [SFKeychainSavePanel](sfkeychainsavepanel.md): A panel or sheet that allows the user to create a keychain.
- [SFKeychainSettingsPanel](sfkeychainsettingspanel.md): A panel or sheet that allows users to change their keychain settings.
