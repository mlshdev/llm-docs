> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface](https://developer.apple.com/documentation/securityinterface)

# Security Interface

**Interface languages:** Swift, Objective-C

**Framework:** Security Interface  
**Kind:** Framework  
**Availability:** macOS 10.3+

Provide user interface elements for security features such as authorization, access to digital certificates, and access to items in keychains.

<a id="overview"></a>

## Overview

> **Note**

>  This document was previously titled *Security Objective-C API*. The documentation for the SFAuthorization class is now in a separate document, [Security Foundation](securityfoundation.md).

The Security Interface framework is a set of Objective-C classes that provide user interface elements for programs that implement security features such as authorization, access to digital certificates, and access to items in keychains.

## Topics

### Classes

- [SFAuthorizationPluginView](securityinterface/sfauthorizationpluginview.md): Allows authorization plug-in developers to create a custom view their plug-in can display.
- [SFAuthorizationView](securityinterface/sfauthorizationview.md): The class responsible for displaying a lock icon that can be used to indicate that a user interface has restricted access.
- [SFCertificatePanel](securityinterface/sfcertificatepanel.md): A panel or sheet that displays one or more certificates.
- [SFCertificateTrustPanel](securityinterface/sfcertificatetrustpanel.md): A panel or sheet that lets the user edit the trust settings in any of the certificates in a certificate chain.
- [SFCertificateView](securityinterface/sfcertificateview.md): A view that displays the contents of a certificate, with options to display certificate details, display trust settings, and allow users to edit a certificate’s trust settings.
- [SFChooseIdentityPanel](securityinterface/sfchooseidentitypanel.md): A panel or sheet containing a list of identities that a user can choose from.
- [SFChooseIdentityTableCellView](securityinterface/sfchooseidentitytablecellview.md)
- [SFKeychainSavePanel](securityinterface/sfkeychainsavepanel.md): A panel or sheet that allows the user to create a keychain.
- [SFKeychainSettingsPanel](securityinterface/sfkeychainsettingspanel.md): A panel or sheet that allows users to change their keychain settings.

### Reference

- [SFAuthorizationViewState](securityinterface/sfauthorizationviewstate.md): Defines the current state of the authorization view.
- [SFButtonType](securityinterface/sfbuttontype.md): These constants define the button types used by authorization plug-ins.
- [SFViewType](securityinterface/sfviewtype.md): These constants define the view type requested by the authorization plug-in.
- [SecurityInterface Constants](securityinterface/securityinterface-constants.md): Constants in the SecurityInterface framework.
- [SecurityInterface Data Types](securityinterface/securityinterface-data-types.md): Data types found in the Security Interface framework.
- [SecurityInterface Enumerations](securityinterface/securityinterface-enumerations.md)
