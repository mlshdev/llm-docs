> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfkeychainsavepanel](https://developer.apple.com/documentation/securityinterface/sfkeychainsavepanel)

# SFKeychainSavePanel (Swift)

**Framework:** Security Interface  
**Kind:** Class  
**Availability:** macOS 10.3+

A panel or sheet that allows the user to create a keychain.

## Declaration

```swift
class SFKeychainSavePanel
```

<a id="overview"></a>

## Overview

The following figure shows an example of a keychain save panel.

![Keychain save panel](https://developer.apple.com/images/com.apple.securityinterface/media-1965598.gif)

## Topics

### Returning a Shared Keychain Save Panel Object

- [shared()](sfkeychainsavepanel/shared%28%29.md): Returns a shared keychain save panel object.

### Displaying a Sheet or Panel

- [setPassword(\_:)](sfkeychainsavepanel/setpassword%28__%29.md): Specifies the password for the keychain that will be created.
- [beginSheet(forDirectory:file:modalFor:modalDelegate:didEnd:contextInfo:)](sfkeychainsavepanel/beginsheet%28fordirectory_file_modalfor_modaldelegate_didend_contextinfo_%29.md): Displays a sheet that allows a user to create a new keychain.
- [runModal(forDirectory:file:)](sfkeychainsavepanel/runmodal%28fordirectory_file_%29.md): Displays a panel that allows a user to create a new keychain.

### Returning Information from the Sheet or Panel

- [error()](sfkeychainsavepanel/error%28%29.md): Returns the last error encountered by the keychain save panel.
- [keychain()](sfkeychainsavepanel/keychain%28%29.md): Returns the keychain created by the keychain save panel.

## Relationships

### Inherits From

- [NSSavePanel](../appkit/nssavepanel.md)

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
- [SFChooseIdentityPanel](sfchooseidentitypanel.md): A panel or sheet containing a list of identities that a user can choose from.
- [SFChooseIdentityTableCellView](sfchooseidentitytablecellview.md)
- [SFKeychainSettingsPanel](sfkeychainsettingspanel.md): A panel or sheet that allows users to change their keychain settings.

# SFKeychainSavePanel (Objective-C)

**Framework:** Security Interface  
**Kind:** Class  
**Availability:** macOS 10.3+

A panel or sheet that allows the user to create a keychain.

## Declaration

```objectivec
@interface SFKeychainSavePanel : NSSavePanel
```

<a id="overview"></a>

## Overview

The following figure shows an example of a keychain save panel.

![Keychain save panel](https://developer.apple.com/images/com.apple.securityinterface/media-1965598.gif)

## Topics

### Returning a Shared Keychain Save Panel Object

- [sharedKeychainSavePanel](sfkeychainsavepanel/shared%28%29.md): Returns a shared keychain save panel object.

### Displaying a Sheet or Panel

- [setPassword:](sfkeychainsavepanel/setpassword%28__%29.md): Specifies the password for the keychain that will be created.
- [beginSheetForDirectory:file:modalForWindow:modalDelegate:didEndSelector:contextInfo:](sfkeychainsavepanel/beginsheet%28fordirectory_file_modalfor_modaldelegate_didend_contextinfo_%29.md): Displays a sheet that allows a user to create a new keychain.
- [runModalForDirectory:file:](sfkeychainsavepanel/runmodal%28fordirectory_file_%29.md): Displays a panel that allows a user to create a new keychain.

### Returning Information from the Sheet or Panel

- [error](sfkeychainsavepanel/error%28%29.md): Returns the last error encountered by the keychain save panel.
- [keychain](sfkeychainsavepanel/keychain%28%29.md): Returns the keychain created by the keychain save panel.

## Relationships

### Inherits From

- [NSSavePanel](../appkit/nssavepanel.md)

## See Also

### Classes

- [SFAuthorizationPluginView](sfauthorizationpluginview.md): Allows authorization plug-in developers to create a custom view their plug-in can display.
- [SFAuthorizationView](sfauthorizationview.md): The class responsible for displaying a lock icon that can be used to indicate that a user interface has restricted access.
- [SFCertificatePanel](sfcertificatepanel.md): A panel or sheet that displays one or more certificates.
- [SFCertificateTrustPanel](sfcertificatetrustpanel.md): A panel or sheet that lets the user edit the trust settings in any of the certificates in a certificate chain.
- [SFCertificateView](sfcertificateview.md): A view that displays the contents of a certificate, with options to display certificate details, display trust settings, and allow users to edit a certificate’s trust settings.
- [SFChooseIdentityPanel](sfchooseidentitypanel.md): A panel or sheet containing a list of identities that a user can choose from.
- [SFChooseIdentityTableCellView](sfchooseidentitytablecellview.md)
- [SFKeychainSettingsPanel](sfkeychainsettingspanel.md): A panel or sheet that allows users to change their keychain settings.
