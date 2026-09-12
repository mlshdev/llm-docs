> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfkeychainsettingspanel](https://developer.apple.com/documentation/securityinterface/sfkeychainsettingspanel)

# SFKeychainSettingsPanel (Swift)

**Framework:** Security Interface  
**Kind:** Class  
**Availability:** macOS 10.3+

A panel or sheet that allows users to change their keychain settings.

## Declaration

```swift
class SFKeychainSettingsPanel
```

<a id="overview"></a>

## Overview

Keychain settings include:

- Lock after a set period of inactivity
- Lock on sleep
- Synchronize using .Mac

The following figure shows an example of a keychain settings panel.

![Keychain settings panel](https://developer.apple.com/images/com.apple.securityinterface/media-1965595.png)

For more information, see [Keychain Services Programming Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/keychainServConcepts/01introduction/introduction.html#//apple_ref/doc/uid/TP30000897).

## Topics

### Returning a shared keychain save panel object

- [shared()](sfkeychainsettingspanel/shared%28%29.md): Returns a shared keychain settings panel object.

### Displaying a sheet or panel

- [beginSheet(for:modalDelegate:didEnd:contextInfo:settings:keychain:)](sfkeychainsettingspanel/beginsheet%28for_modaldelegate_didend_contextinfo_settings_keychain_%29.md): Displays a sheet that allows users to change keychain settings.
- [runModal(for:keychain:)](sfkeychainsettingspanel/runmodal%28for_keychain_%29.md): Displays a panel that allows users to change keychain settings.

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
- [SFChooseIdentityPanel](sfchooseidentitypanel.md): A panel or sheet containing a list of identities that a user can choose from.
- [SFChooseIdentityTableCellView](sfchooseidentitytablecellview.md)
- [SFKeychainSavePanel](sfkeychainsavepanel.md): A panel or sheet that allows the user to create a keychain.

# SFKeychainSettingsPanel (Objective-C)

**Framework:** Security Interface  
**Kind:** Class  
**Availability:** macOS 10.3+

A panel or sheet that allows users to change their keychain settings.

## Declaration

```objectivec
@interface SFKeychainSettingsPanel : NSPanel
```

<a id="overview"></a>

## Overview

Keychain settings include:

- Lock after a set period of inactivity
- Lock on sleep
- Synchronize using .Mac

The following figure shows an example of a keychain settings panel.

![Keychain settings panel](https://developer.apple.com/images/com.apple.securityinterface/media-1965595.png)

For more information, see [Keychain Services Programming Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/keychainServConcepts/01introduction/introduction.html#//apple_ref/doc/uid/TP30000897).

## Topics

### Returning a shared keychain save panel object

- [sharedKeychainSettingsPanel](sfkeychainsettingspanel/shared%28%29.md): Returns a shared keychain settings panel object.

### Displaying a sheet or panel

- [beginSheetForWindow:modalDelegate:didEndSelector:contextInfo:settings:keychain:](sfkeychainsettingspanel/beginsheet%28for_modaldelegate_didend_contextinfo_settings_keychain_%29.md): Displays a sheet that allows users to change keychain settings.
- [runModalForSettings:keychain:](sfkeychainsettingspanel/runmodal%28for_keychain_%29.md): Displays a panel that allows users to change keychain settings.

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
- [SFChooseIdentityPanel](sfchooseidentitypanel.md): A panel or sheet containing a list of identities that a user can choose from.
- [SFChooseIdentityTableCellView](sfchooseidentitytablecellview.md)
- [SFKeychainSavePanel](sfkeychainsavepanel.md): A panel or sheet that allows the user to create a keychain.
