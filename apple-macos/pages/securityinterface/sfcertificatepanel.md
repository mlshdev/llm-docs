> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificatepanel](https://developer.apple.com/documentation/securityinterface/sfcertificatepanel)

# SFCertificatePanel (Swift)

**Framework:** Security Interface  
**Kind:** Class  
**Availability:** macOS 10.3+

A panel or sheet that displays one or more certificates.

## Declaration

```swift
class SFCertificatePanel
```

<a id="overview"></a>

## Overview

The following figure shows an example of a certificate panel.

![Certificate panel](https://developer.apple.com/images/com.apple.securityinterface/media-1965612.jpg)

An [SFCertificatePanel](sfcertificatepanel.md) can optionally display all of the certificates in a certificate chain.

This class displays certificate details, but not trust settings. To display a certificate with editable trust settings in a panel or sheet, use the [SFCertificateTrustPanel](sfcertificatetrustpanel.md) class. To display certificates in a custom view, use the [SFCertificateView](sfcertificateview.md) class.

Note that for macOS 10.4 and later, this class displays the evaluation status for each certificate. You can modify how the certificates are evaluated by calling the [setPolicies(\_:)](sfcertificatepanel/setpolicies%28__%29.md) method.

## Topics

### Returning a Shared Certificate Panel Object

- [shared()](sfcertificatepanel/shared%28%29.md): Returns a fully initialized, singleton certificate panel object.

### Providing Help

- [setHelpAnchor(\_:)](sfcertificatepanel/sethelpanchor%28__%29.md): Sets the help anchor string for the sheet or modal panel.
- [setShowsHelp(\_:)](sfcertificatepanel/setshowshelp%28__%29.md): Displays a Help button in the sheet or panel.
- [helpAnchor()](sfcertificatepanel/helpanchor%28%29.md): Returns the current help anchor string for the sheet or panel.
- [showsHelp()](sfcertificatepanel/showshelp%28%29.md): Indicates whether the help button is currently set to be displayed.

### Customizing the Appearance of the Sheet or Panel

- [setAlternateButtonTitle(\_:)](sfcertificatepanel/setalternatebuttontitle%28__%29.md): Customizes the title of the alternate button.
- [setDefaultButtonTitle(\_:)](sfcertificatepanel/setdefaultbuttontitle%28__%29.md): Customizes the title of the default button.
- [setPolicies(\_:)](sfcertificatepanel/setpolicies%28__%29.md): Specifies one or more policies that apply to the displayed certificates.
- [policies()](sfcertificatepanel/policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificates.

### Displaying a Sheet or Panel

- [beginSheet(for:modalDelegate:didEnd:contextInfo:certificates:showGroup:)](sfcertificatepanel/beginsheet%28for_modaldelegate_didend_contextinfo_certificates_showgroup_%29.md): Displays one or more certificates in a modal sheet.
- [beginSheet(for:modalDelegate:didEnd:contextInfo:trust:showGroup:)](sfcertificatepanel/beginsheet%28for_modaldelegate_didend_contextinfo_trust_showgroup_%29.md): Displays a certificate chain in a modal sheet.
- [certificateView()](sfcertificatepanel/certificateview%28%29.md): Returns the certificate view for the modal panel.
- [runModal(for:showGroup:)](sfcertificatepanel/runmodal%28for_showgroup_%29.md): Displays a certificate chain in a modal panel.
- [runModal(forCertificates:showGroup:)](sfcertificatepanel/runmodal%28forcertificates_showgroup_%29.md): Displays one or more specified certificates in a modal panel.

### Delegate method for providing help

- [certificatePanelShowHelp(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/certificatepanelshowhelp%28_:%29): Implements custom help behavior for the modal panel.

## Relationships

### Inherits From

- [NSPanel](../appkit/nspanel.md)

### Inherited By

- [SFCertificateTrustPanel](sfcertificatetrustpanel.md)

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
- [NSMenuItemValidation](../appkit/nsmenuitemvalidation.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](../appkit/nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](../appkit/nstouchbarprovider.md)
- [NSUserActivityRestoring](../appkit/nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](../appkit/nsuserinterfaceitemidentification.md)
- [NSUserInterfaceValidations](../appkit/nsuserinterfacevalidations.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Classes

- [SFAuthorizationPluginView](sfauthorizationpluginview.md): Allows authorization plug-in developers to create a custom view their plug-in can display.
- [SFAuthorizationView](sfauthorizationview.md): The class responsible for displaying a lock icon that can be used to indicate that a user interface has restricted access.
- [SFCertificateTrustPanel](sfcertificatetrustpanel.md): A panel or sheet that lets the user edit the trust settings in any of the certificates in a certificate chain.
- [SFCertificateView](sfcertificateview.md): A view that displays the contents of a certificate, with options to display certificate details, display trust settings, and allow users to edit a certificate’s trust settings.
- [SFChooseIdentityPanel](sfchooseidentitypanel.md): A panel or sheet containing a list of identities that a user can choose from.
- [SFChooseIdentityTableCellView](sfchooseidentitytablecellview.md)
- [SFKeychainSavePanel](sfkeychainsavepanel.md): A panel or sheet that allows the user to create a keychain.
- [SFKeychainSettingsPanel](sfkeychainsettingspanel.md): A panel or sheet that allows users to change their keychain settings.

# SFCertificatePanel (Objective-C)

**Framework:** Security Interface  
**Kind:** Class  
**Availability:** macOS 10.3+

A panel or sheet that displays one or more certificates.

## Declaration

```objectivec
@interface SFCertificatePanel : NSPanel
```

<a id="overview"></a>

## Overview

The following figure shows an example of a certificate panel.

![Certificate panel](https://developer.apple.com/images/com.apple.securityinterface/media-1965612.jpg)

An [SFCertificatePanel](sfcertificatepanel.md) can optionally display all of the certificates in a certificate chain.

This class displays certificate details, but not trust settings. To display a certificate with editable trust settings in a panel or sheet, use the [SFCertificateTrustPanel](sfcertificatetrustpanel.md) class. To display certificates in a custom view, use the [SFCertificateView](sfcertificateview.md) class.

Note that for macOS 10.4 and later, this class displays the evaluation status for each certificate. You can modify how the certificates are evaluated by calling the [setPolicies:](sfcertificatepanel/setpolicies%28__%29.md) method.

## Topics

### Returning a Shared Certificate Panel Object

- [sharedCertificatePanel](sfcertificatepanel/shared%28%29.md): Returns a fully initialized, singleton certificate panel object.

### Providing Help

- [setHelpAnchor:](sfcertificatepanel/sethelpanchor%28__%29.md): Sets the help anchor string for the sheet or modal panel.
- [setShowsHelp:](sfcertificatepanel/setshowshelp%28__%29.md): Displays a Help button in the sheet or panel.
- [helpAnchor](sfcertificatepanel/helpanchor%28%29.md): Returns the current help anchor string for the sheet or panel.
- [showsHelp](sfcertificatepanel/showshelp%28%29.md): Indicates whether the help button is currently set to be displayed.

### Customizing the Appearance of the Sheet or Panel

- [setAlternateButtonTitle:](sfcertificatepanel/setalternatebuttontitle%28__%29.md): Customizes the title of the alternate button.
- [setDefaultButtonTitle:](sfcertificatepanel/setdefaultbuttontitle%28__%29.md): Customizes the title of the default button.
- [setPolicies:](sfcertificatepanel/setpolicies%28__%29.md): Specifies one or more policies that apply to the displayed certificates.
- [policies](sfcertificatepanel/policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificates.

### Displaying a Sheet or Panel

- [beginSheetForWindow:modalDelegate:didEndSelector:contextInfo:certificates:showGroup:](sfcertificatepanel/beginsheet%28for_modaldelegate_didend_contextinfo_certificates_showgroup_%29.md): Displays one or more certificates in a modal sheet.
- [beginSheetForWindow:modalDelegate:didEndSelector:contextInfo:trust:showGroup:](sfcertificatepanel/beginsheet%28for_modaldelegate_didend_contextinfo_trust_showgroup_%29.md): Displays a certificate chain in a modal sheet.
- [certificateView](sfcertificatepanel/certificateview%28%29.md): Returns the certificate view for the modal panel.
- [runModalForTrust:showGroup:](sfcertificatepanel/runmodal%28for_showgroup_%29.md): Displays a certificate chain in a modal panel.
- [runModalForCertificates:showGroup:](sfcertificatepanel/runmodal%28forcertificates_showgroup_%29.md): Displays one or more specified certificates in a modal panel.

### Delegate method for providing help

- [certificatePanelShowHelp:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/certificatepanelshowhelp%28_:%29): Implements custom help behavior for the modal panel.

## Relationships

### Inherits From

- [NSPanel](../appkit/nspanel.md)

### Inherited By

- [SFCertificateTrustPanel](sfcertificatetrustpanel.md)

## See Also

### Classes

- [SFAuthorizationPluginView](sfauthorizationpluginview.md): Allows authorization plug-in developers to create a custom view their plug-in can display.
- [SFAuthorizationView](sfauthorizationview.md): The class responsible for displaying a lock icon that can be used to indicate that a user interface has restricted access.
- [SFCertificateTrustPanel](sfcertificatetrustpanel.md): A panel or sheet that lets the user edit the trust settings in any of the certificates in a certificate chain.
- [SFCertificateView](sfcertificateview.md): A view that displays the contents of a certificate, with options to display certificate details, display trust settings, and allow users to edit a certificate’s trust settings.
- [SFChooseIdentityPanel](sfchooseidentitypanel.md): A panel or sheet containing a list of identities that a user can choose from.
- [SFChooseIdentityTableCellView](sfchooseidentitytablecellview.md)
- [SFKeychainSavePanel](sfkeychainsavepanel.md): A panel or sheet that allows the user to create a keychain.
- [SFKeychainSettingsPanel](sfkeychainsettingspanel.md): A panel or sheet that allows users to change their keychain settings.
