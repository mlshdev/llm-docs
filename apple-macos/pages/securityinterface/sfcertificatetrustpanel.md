> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificatetrustpanel](https://developer.apple.com/documentation/securityinterface/sfcertificatetrustpanel)

# SFCertificateTrustPanel (Swift)

**Framework:** Security Interface  
**Kind:** Class  
**Availability:** macOS 10.3+

A panel or sheet that lets the user edit the trust settings in any of the certificates in a certificate chain.

## Declaration

```swift
class SFCertificateTrustPanel
```

<a id="overview"></a>

## Overview

The following figure shows an example of a certificate trust panel.

![Certificate trust panel](https://developer.apple.com/images/com.apple.securityinterface/media-1965607.jpg)

You can use this class to enable a user to make trust decisions when one or more certificates required for an operation are invalid or cannot be verified.

To display a certificate in a panel or sheet without editable trust settings, use the [SFCertificatePanel](sfcertificatepanel.md) class. To display certificates in a custom view, use the [SFCertificateView](sfcertificateview.md) class.

## Topics

### Returning a Shared Certificate Trust Panel Object

- [shared()](sfcertificatetrustpanel/shared%28%29.md): Returns a fully initialized, singleton certificate trust panel object.

### Displaying a Sheet or Panel

- [beginSheet(for:modalDelegate:didEnd:contextInfo:trust:message:)](sfcertificatetrustpanel/beginsheet%28for_modaldelegate_didend_contextinfo_trust_message_%29.md): Displays a modal sheet that shows the results of a certificate trust evaluation and that allows the user to edit trust settings.
- [runModal(for:message:)](sfcertificatetrustpanel/runmodal%28for_message_%29.md): Displays a modal panel that shows the results of a certificate trust evaluation and that allows the user to edit trust settings.

### Controlling the Appearance of a Certificate Trust Panel

- [informativeText()](sfcertificatetrustpanel/informativetext%28%29.md): Returns the (optional) informative text currently displayed in the panel.
- [setInformativeText(\_:)](sfcertificatetrustpanel/setinformativetext%28__%29.md): Sets the (optional) informative text displayed in the panel.

## Relationships

### Inherits From

- [SFCertificatePanel](sfcertificatepanel.md)

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
- [SFCertificatePanel](sfcertificatepanel.md): A panel or sheet that displays one or more certificates.
- [SFCertificateView](sfcertificateview.md): A view that displays the contents of a certificate, with options to display certificate details, display trust settings, and allow users to edit a certificate’s trust settings.
- [SFChooseIdentityPanel](sfchooseidentitypanel.md): A panel or sheet containing a list of identities that a user can choose from.
- [SFChooseIdentityTableCellView](sfchooseidentitytablecellview.md)
- [SFKeychainSavePanel](sfkeychainsavepanel.md): A panel or sheet that allows the user to create a keychain.
- [SFKeychainSettingsPanel](sfkeychainsettingspanel.md): A panel or sheet that allows users to change their keychain settings.

# SFCertificateTrustPanel (Objective-C)

**Framework:** Security Interface  
**Kind:** Class  
**Availability:** macOS 10.3+

A panel or sheet that lets the user edit the trust settings in any of the certificates in a certificate chain.

## Declaration

```objectivec
@interface SFCertificateTrustPanel : SFCertificatePanel
```

<a id="overview"></a>

## Overview

The following figure shows an example of a certificate trust panel.

![Certificate trust panel](https://developer.apple.com/images/com.apple.securityinterface/media-1965607.jpg)

You can use this class to enable a user to make trust decisions when one or more certificates required for an operation are invalid or cannot be verified.

To display a certificate in a panel or sheet without editable trust settings, use the [SFCertificatePanel](sfcertificatepanel.md) class. To display certificates in a custom view, use the [SFCertificateView](sfcertificateview.md) class.

## Topics

### Returning a Shared Certificate Trust Panel Object

- [sharedCertificateTrustPanel](sfcertificatetrustpanel/shared%28%29.md): Returns a fully initialized, singleton certificate trust panel object.

### Displaying a Sheet or Panel

- [beginSheetForWindow:modalDelegate:didEndSelector:contextInfo:trust:message:](sfcertificatetrustpanel/beginsheet%28for_modaldelegate_didend_contextinfo_trust_message_%29.md): Displays a modal sheet that shows the results of a certificate trust evaluation and that allows the user to edit trust settings.
- [runModalForTrust:message:](sfcertificatetrustpanel/runmodal%28for_message_%29.md): Displays a modal panel that shows the results of a certificate trust evaluation and that allows the user to edit trust settings.

### Controlling the Appearance of a Certificate Trust Panel

- [informativeText](sfcertificatetrustpanel/informativetext%28%29.md): Returns the (optional) informative text currently displayed in the panel.
- [setInformativeText:](sfcertificatetrustpanel/setinformativetext%28__%29.md): Sets the (optional) informative text displayed in the panel.

## Relationships

### Inherits From

- [SFCertificatePanel](sfcertificatepanel.md)

## See Also

### Classes

- [SFAuthorizationPluginView](sfauthorizationpluginview.md): Allows authorization plug-in developers to create a custom view their plug-in can display.
- [SFAuthorizationView](sfauthorizationview.md): The class responsible for displaying a lock icon that can be used to indicate that a user interface has restricted access.
- [SFCertificatePanel](sfcertificatepanel.md): A panel or sheet that displays one or more certificates.
- [SFCertificateView](sfcertificateview.md): A view that displays the contents of a certificate, with options to display certificate details, display trust settings, and allow users to edit a certificate’s trust settings.
- [SFChooseIdentityPanel](sfchooseidentitypanel.md): A panel or sheet containing a list of identities that a user can choose from.
- [SFChooseIdentityTableCellView](sfchooseidentitytablecellview.md)
- [SFKeychainSavePanel](sfkeychainsavepanel.md): A panel or sheet that allows the user to create a keychain.
- [SFKeychainSettingsPanel](sfkeychainsettingspanel.md): A panel or sheet that allows users to change their keychain settings.
