> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfchooseidentitypanel](https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel)

# SFChooseIdentityPanel (Swift)

**Framework:** Security Interface  
**Kind:** Class  
**Availability:** macOS 10.3+

A panel or sheet containing a list of identities that a user can choose from.

## Declaration

```swift
class SFChooseIdentityPanel
```

<a id="overview"></a>

## Overview

An identity is a digital certificate together with its associated private key. This class also allows the user to display the contents of any certificate in the list.

The following figure shows an example of a choose identity panel.

![Choose identity panel](https://developer.apple.com/images/com.apple.securityinterface/media-1965600.jpg)

## Topics

### Returning a Shared Certificate Panel Object

- [shared()](sfchooseidentitypanel/shared%28%29.md): Returns a fully initialized, singleton choose identity panel object.

### Providing Help

- [setHelpAnchor(\_:)](sfchooseidentitypanel/sethelpanchor%28__%29.md): Sets the help anchor string for the sheet or modal panel.
- [setShowsHelp(\_:)](sfchooseidentitypanel/setshowshelp%28__%29.md): Displays a Help button in the sheet or panel.
- [helpAnchor()](sfchooseidentitypanel/helpanchor%28%29.md): Returns the current help anchor string for the sheet or panel.
- [showsHelp()](sfchooseidentitypanel/showshelp%28%29.md): Indicates whether the help button is currently set to be displayed.

### Customizing the Appearance of the Sheet or Panel

- [setAlternateButtonTitle(\_:)](sfchooseidentitypanel/setalternatebuttontitle%28__%29.md): Customizes the title of the alternate button.
- [setDefaultButtonTitle(\_:)](sfchooseidentitypanel/setdefaultbuttontitle%28__%29.md): Customizes the title of the default button.
- [setPolicies(\_:)](sfchooseidentitypanel/setpolicies%28__%29.md): Specifies one or more policies that apply to the displayed certificates.
- [policies()](sfchooseidentitypanel/policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificates.
- [informativeText()](sfchooseidentitypanel/informativetext%28%29.md): Returns the informative text currently displayed in the panel.
- [setInformativeText(\_:)](sfchooseidentitypanel/setinformativetext%28__%29.md): Sets the optional informative text displayed in the panel.

### Displaying a Sheet or Panel

- [beginSheet(for:modalDelegate:didEnd:contextInfo:identities:message:)](sfchooseidentitypanel/beginsheet%28for_modaldelegate_didend_contextinfo_identities_message_%29.md): Displays a list of identities in a modal sheet from which the user can select an identity.
- [runModal(forIdentities:message:)](sfchooseidentitypanel/runmodal%28foridentities_message_%29.md): Displays a list of identities in a modal panel.

### Getting Identity Information from a Sheet or Panel

- [identity()](sfchooseidentitypanel/identity%28%29.md): Returns the identity that the user chose in the panel or sheet.

### Working with Domains

- [domain()](sfchooseidentitypanel/domain%28%29.md): Returns the domain that will be associated with the chosen identity.
- [setDomain(\_:)](sfchooseidentitypanel/setdomain%28__%29.md): Sets an optional domain in which the identity is to be used.

### Delegate methods for providing help

- [chooseIdentityPanelShowHelp(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/chooseidentitypanelshowhelp%28_:%29): Implements custom help behavior for the modal panel.

## Relationships

### Inherits From

- [NSPanel](../appkit/nspanel.md)

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
- [SFCertificateTrustPanel](sfcertificatetrustpanel.md): A panel or sheet that lets the user edit the trust settings in any of the certificates in a certificate chain.
- [SFCertificateView](sfcertificateview.md): A view that displays the contents of a certificate, with options to display certificate details, display trust settings, and allow users to edit a certificate’s trust settings.
- [SFChooseIdentityTableCellView](sfchooseidentitytablecellview.md)
- [SFKeychainSavePanel](sfkeychainsavepanel.md): A panel or sheet that allows the user to create a keychain.
- [SFKeychainSettingsPanel](sfkeychainsettingspanel.md): A panel or sheet that allows users to change their keychain settings.

# SFChooseIdentityPanel (Objective-C)

**Framework:** Security Interface  
**Kind:** Class  
**Availability:** macOS 10.3+

A panel or sheet containing a list of identities that a user can choose from.

## Declaration

```objectivec
@interface SFChooseIdentityPanel : NSPanel
```

<a id="overview"></a>

## Overview

An identity is a digital certificate together with its associated private key. This class also allows the user to display the contents of any certificate in the list.

The following figure shows an example of a choose identity panel.

![Choose identity panel](https://developer.apple.com/images/com.apple.securityinterface/media-1965600.jpg)

## Topics

### Returning a Shared Certificate Panel Object

- [sharedChooseIdentityPanel](sfchooseidentitypanel/shared%28%29.md): Returns a fully initialized, singleton choose identity panel object.

### Providing Help

- [setHelpAnchor:](sfchooseidentitypanel/sethelpanchor%28__%29.md): Sets the help anchor string for the sheet or modal panel.
- [setShowsHelp:](sfchooseidentitypanel/setshowshelp%28__%29.md): Displays a Help button in the sheet or panel.
- [helpAnchor](sfchooseidentitypanel/helpanchor%28%29.md): Returns the current help anchor string for the sheet or panel.
- [showsHelp](sfchooseidentitypanel/showshelp%28%29.md): Indicates whether the help button is currently set to be displayed.

### Customizing the Appearance of the Sheet or Panel

- [setAlternateButtonTitle:](sfchooseidentitypanel/setalternatebuttontitle%28__%29.md): Customizes the title of the alternate button.
- [setDefaultButtonTitle:](sfchooseidentitypanel/setdefaultbuttontitle%28__%29.md): Customizes the title of the default button.
- [setPolicies:](sfchooseidentitypanel/setpolicies%28__%29.md): Specifies one or more policies that apply to the displayed certificates.
- [policies](sfchooseidentitypanel/policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificates.
- [informativeText](sfchooseidentitypanel/informativetext%28%29.md): Returns the informative text currently displayed in the panel.
- [setInformativeText:](sfchooseidentitypanel/setinformativetext%28__%29.md): Sets the optional informative text displayed in the panel.

### Displaying a Sheet or Panel

- [beginSheetForWindow:modalDelegate:didEndSelector:contextInfo:identities:message:](sfchooseidentitypanel/beginsheet%28for_modaldelegate_didend_contextinfo_identities_message_%29.md): Displays a list of identities in a modal sheet from which the user can select an identity.
- [runModalForIdentities:message:](sfchooseidentitypanel/runmodal%28foridentities_message_%29.md): Displays a list of identities in a modal panel.

### Getting Identity Information from a Sheet or Panel

- [identity](sfchooseidentitypanel/identity%28%29.md): Returns the identity that the user chose in the panel or sheet.

### Working with Domains

- [domain](sfchooseidentitypanel/domain%28%29.md): Returns the domain that will be associated with the chosen identity.
- [setDomain:](sfchooseidentitypanel/setdomain%28__%29.md): Sets an optional domain in which the identity is to be used.

### Delegate methods for providing help

- [chooseIdentityPanelShowHelp:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/chooseidentitypanelshowhelp%28_:%29): Implements custom help behavior for the modal panel.

## Relationships

### Inherits From

- [NSPanel](../appkit/nspanel.md)

## See Also

### Classes

- [SFAuthorizationPluginView](sfauthorizationpluginview.md): Allows authorization plug-in developers to create a custom view their plug-in can display.
- [SFAuthorizationView](sfauthorizationview.md): The class responsible for displaying a lock icon that can be used to indicate that a user interface has restricted access.
- [SFCertificatePanel](sfcertificatepanel.md): A panel or sheet that displays one or more certificates.
- [SFCertificateTrustPanel](sfcertificatetrustpanel.md): A panel or sheet that lets the user edit the trust settings in any of the certificates in a certificate chain.
- [SFCertificateView](sfcertificateview.md): A view that displays the contents of a certificate, with options to display certificate details, display trust settings, and allow users to edit a certificate’s trust settings.
- [SFChooseIdentityTableCellView](sfchooseidentitytablecellview.md)
- [SFKeychainSavePanel](sfkeychainsavepanel.md): A panel or sheet that allows the user to create a keychain.
- [SFKeychainSettingsPanel](sfkeychainsettingspanel.md): A panel or sheet that allows users to change their keychain settings.
