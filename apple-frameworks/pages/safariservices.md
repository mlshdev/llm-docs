> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices](https://developer.apple.com/documentation/safariservices)

# Safari Services (Swift)

**Framework:** Safari Services  
**Kind:** Framework  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · visionOS 1.0+

Enable web views and services in your app.

<a id="overview"></a>

## Overview

Use the Safari Services framework to integrate Safari behaviors into your iOS or macOS app, or to extend the behavior of Safari.

You can:

- Provide a user interface that is almost identical to the user interface that the Safari app provides. Users can browse the web in this view and then return to your app’s content. This view is more consistent with the Safari user interface than implementing your own custom browsing solution and can be done using fewer lines of code. (iOS)
- Add items to the user’s Safari Reading List. (iOS)
- Convert your existing Chrome, Firefox, or Edge extensions into a Safari web extension, or create a new Safari web extension that can work in other browsers. (iOS and macOS)
- Determine from your app whether your content blocker extension is loaded, and if it is, tell it to refresh its contents. (iOS and macOS)
- Implement Safari app extensions. Determine from your app whether a Safari app extension is loaded. (macOS)
- Allow the user to share cookies and website data between an app and Safari for a single sign-on (SSO) experience with  [ASWebAuthenticationSession](authenticationservices/aswebauthenticationsession.md).

## Topics

### Safari web extensions

- [Safari web extensions](safariservices/safari-web-extensions.md): Create web extensions that work in Safari and other browsers.

### Content blockers

- [Creating a content blocker](safariservices/creating-a-content-blocker.md): Create a content blocker for Safari in Xcode.
- [SFContentBlockerManager](safariservices/sfcontentblockermanager.md): A class that your app uses to interact with a content blocker extension.
- [SFContentBlockerState](safariservices/sfcontentblockerstate.md): The state of a content blocker extension.

### Safari app extensions

- [Safari app extensions](safariservices/safari-app-extensions.md): Learn how Safari app extensions extend the web-browsing experience in Safari by leveraging web technologies and native code.
- [SFSafariExtension](safariservices/sfsafariextension.md): A proxy for the Safari extension.
- [SFSafariApplication](safariservices/sfsafariapplication.md): A proxy for the Safari app.
- [SFSafariWindow](safariservices/sfsafariwindow.md): A proxy for a Safari window.
- [SFSafariPage](safariservices/sfsafaripage.md): A proxy for a Safari webpage.
- [SFSafariTab](safariservices/sfsafaritab.md): A proxy for a tab in a Safari window.

### Safari content in your app

- [Importing data exported from Safari](safariservices/importing-data-exported-from-safari.md): Transfer bookmarks, saved passwords, and other information between browsers.
- [SFSafariViewController](safariservices/sfsafariviewcontroller.md): An object that provides a visible standard interface for browsing the web.
- [SFAuthenticationSession.CompletionHandler](safariservices/sfauthenticationsession/completionhandler.md): The completion handler for an authentication session when the user cancels or finishes the login.
- [SFSafariSettings](safariservices/sfsafarisettings.md): A class that provides your app access to several of Safari’s settings options.

### Associated domains

- [Supporting associated domains](https://developer.apple.com/documentation/xcode/supporting-associated-domains): Connect your app and a website to provide both a native app and a browser experience.
- [SFUniversalLink](safariservices/sfuniversallink.md): An object that provides browsers with the ability to discover associations between an app and a website.
- [Associated Domains Entitlement](bundleresources/entitlements/com.apple.developer.associated-domains.md): The associated domains for specific services, such as shared web credentials, universal links, and App Clips.

### Availability

- [SFSafariServicesAvailable(\_:)](safariservices/sfsafariservicesavailable%28__%29.md): Indicates whether a given version of Safari services is available.
- [SFSafariServicesVersion](safariservices/sfsafariservicesversion.md): The version of Safari services.

### Safari Reading List

- [SSReadingList](safariservices/ssreadinglist.md): An object for adding items to a user’s Safari Reading List.
- [SSReadingListErrorDomain](safariservices/ssreadinglisterrordomain.md): The domain for Safari Reading List errors.
- [SSReadingListError.Code](safariservices/ssreadinglisterror/code.md): Messages that describe a Safari Reading List error.
- [SSReadingListError](safariservices/ssreadinglisterror.md): A Safari Reading List error.

### Home Screen bookmarks

- [SFAddToHomeScreenActivityItem](safariservices/sfaddtohomescreenactivityitem.md): A protocol that describes a bookmark someone can add to their Home Screen.

### Miscellaneous errors

- [SFError](safariservices/sferror.md): A content blocker or Safari app extension error.
- [SFError.Code](safariservices/sferror/code.md): Messages that describe a content blocker or Safari app extension error.
- [SFErrorDomain](safariservices/sferrordomain.md): The domain for content blocker or Safari app extension errors.

### Deprecated

- [Deprecated symbols](safariservices/deprecated-symbols.md): Review unsupported symbols and their replacements.

### Variables

- [SFSafariSettingsErrorDomain](safariservices/sfsafarisettingserrordomain.md)

### Enumerations

- [SFSafariSettingsError](safariservices/sfsafarisettingserror.md)

# Safari Services (Objective-C)

**Framework:** Safari Services  
**Kind:** Framework  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · visionOS 1.0+

Enable web views and services in your app.

<a id="overview"></a>

## Overview

Use the Safari Services framework to integrate Safari behaviors into your iOS or macOS app, or to extend the behavior of Safari.

You can:

- Provide a user interface that is almost identical to the user interface that the Safari app provides. Users can browse the web in this view and then return to your app’s content. This view is more consistent with the Safari user interface than implementing your own custom browsing solution and can be done using fewer lines of code. (iOS)
- Add items to the user’s Safari Reading List. (iOS)
- Convert your existing Chrome, Firefox, or Edge extensions into a Safari web extension, or create a new Safari web extension that can work in other browsers. (iOS and macOS)
- Determine from your app whether your content blocker extension is loaded, and if it is, tell it to refresh its contents. (iOS and macOS)
- Implement Safari app extensions. Determine from your app whether a Safari app extension is loaded. (macOS)
- Allow the user to share cookies and website data between an app and Safari for a single sign-on (SSO) experience with  [ASWebAuthenticationSession](authenticationservices/aswebauthenticationsession.md).

## Topics

### Safari web extensions

- [Safari web extensions](safariservices/safari-web-extensions.md): Create web extensions that work in Safari and other browsers.

### Content blockers

- [Creating a content blocker](safariservices/creating-a-content-blocker.md): Create a content blocker for Safari in Xcode.
- [SFContentBlockerManager](safariservices/sfcontentblockermanager.md): A class that your app uses to interact with a content blocker extension.
- [SFContentBlockerState](safariservices/sfcontentblockerstate.md): The state of a content blocker extension.

### Safari app extensions

- [Safari app extensions](safariservices/safari-app-extensions.md): Learn how Safari app extensions extend the web-browsing experience in Safari by leveraging web technologies and native code.
- [SFSafariExtension](safariservices/sfsafariextension.md): A proxy for the Safari extension.
- [SFSafariApplication](safariservices/sfsafariapplication.md): A proxy for the Safari app.
- [SFSafariWindow](safariservices/sfsafariwindow.md): A proxy for a Safari window.
- [SFSafariPage](safariservices/sfsafaripage.md): A proxy for a Safari webpage.
- [SFSafariTab](safariservices/sfsafaritab.md): A proxy for a tab in a Safari window.

### Safari content in your app

- [Importing data exported from Safari](safariservices/importing-data-exported-from-safari.md): Transfer bookmarks, saved passwords, and other information between browsers.
- [SFSafariViewController](safariservices/sfsafariviewcontroller.md): An object that provides a visible standard interface for browsing the web.
- [SFAuthenticationCompletionHandler](safariservices/sfauthenticationsession/completionhandler.md): The completion handler for an authentication session when the user cancels or finishes the login.
- [SFSafariSettings](safariservices/sfsafarisettings.md): A class that provides your app access to several of Safari’s settings options.

### Associated domains

- [Supporting associated domains](https://developer.apple.com/documentation/xcode/supporting-associated-domains): Connect your app and a website to provide both a native app and a browser experience.
- [SFUniversalLink](safariservices/sfuniversallink.md): An object that provides browsers with the ability to discover associations between an app and a website.
- [Associated Domains Entitlement](bundleresources/entitlements/com.apple.developer.associated-domains.md): The associated domains for specific services, such as shared web credentials, universal links, and App Clips.

### Availability

- [SFSafariServicesVersion](safariservices/sfsafariservicesversion.md): The version of Safari services.

### Safari Reading List

- [SSReadingList](safariservices/ssreadinglist.md): An object for adding items to a user’s Safari Reading List.
- [SSReadingListErrorDomain](safariservices/ssreadinglisterrordomain.md): The domain for Safari Reading List errors.
- [SSReadingListErrorCode](safariservices/ssreadinglisterror/code.md): Messages that describe a Safari Reading List error.

### Home Screen bookmarks

- [SFAddToHomeScreenActivityItem](safariservices/sfaddtohomescreenactivityitem.md): A protocol that describes a bookmark someone can add to their Home Screen.

### Miscellaneous errors

- [SFErrorCode](safariservices/sferror/code.md): Messages that describe a content blocker or Safari app extension error.
- [SFErrorDomain](safariservices/sferrordomain.md): The domain for content blocker or Safari app extension errors.

### Deprecated

- [Deprecated symbols](safariservices/deprecated-symbols.md): Review unsupported symbols and their replacements.

### Variables

- [SFSafariSettingsErrorDomain](safariservices/sfsafarisettingserrordomain.md)

### Macros

- [SF_AVAILABLE_MAC_SAFARI](safariservices/sf_available_mac_safari.md)
- [SF_AVAILABLE_MAC_SAFARI_10_0](safariservices/sf_available_mac_safari_10_0.md)
- [SF_AVAILABLE_MAC_SAFARI_10_1](safariservices/sf_available_mac_safari_10_1.md)
- [SF_AVAILABLE_MAC_SAFARI_11_0](safariservices/sf_available_mac_safari_11_0.md)
- [SF_AVAILABLE_MAC_SAFARI_11_1](safariservices/sf_available_mac_safari_11_1.md)
- [SF_AVAILABLE_MAC_SAFARI_12_0](safariservices/sf_available_mac_safari_12_0.md)
- [SF_AVAILABLE_MAC_SAFARI_12_1](safariservices/sf_available_mac_safari_12_1.md)
- [SF_AVAILABLE_MAC_SAFARI_13_0](safariservices/sf_available_mac_safari_13_0.md)
- [SF_AVAILABLE_MAC_SAFARI_14_0](safariservices/sf_available_mac_safari_14_0.md)
- [SF_AVAILABLE_MAC_SAFARI_17_0](safariservices/sf_available_mac_safari_17_0.md)
- [SF_AVAILABLE_MAC_SAFARI_18_4](safariservices/sf_available_mac_safari_18_4.md)
- [SF_AVAILABLE_MAC_SAFARI_27_0](safariservices/sf_available_mac_safari_27_0.md)
- [SF_CLASS_AVAILABLE_MAC_SAFARI](safariservices/sf_class_available_mac_safari.md)
- [SF_CLASS_AVAILABLE_MAC_SAFARI_10_0](safariservices/sf_class_available_mac_safari_10_0.md)
- [SF_CLASS_AVAILABLE_MAC_SAFARI_10_1](safariservices/sf_class_available_mac_safari_10_1.md)
- [SF_CLASS_AVAILABLE_MAC_SAFARI_11_0](safariservices/sf_class_available_mac_safari_11_0.md)
- [SF_CLASS_AVAILABLE_MAC_SAFARI_11_1](safariservices/sf_class_available_mac_safari_11_1.md)
- [SF_CLASS_AVAILABLE_MAC_SAFARI_12_0](safariservices/sf_class_available_mac_safari_12_0.md)
- [SF_CLASS_AVAILABLE_MAC_SAFARI_12_1](safariservices/sf_class_available_mac_safari_12_1.md)
- [SF_CLASS_AVAILABLE_MAC_SAFARI_13_0](safariservices/sf_class_available_mac_safari_13_0.md)
- [SF_CLASS_AVAILABLE_MAC_SAFARI_14_0](safariservices/sf_class_available_mac_safari_14_0.md)
- [SF_CLASS_AVAILABLE_MAC_SAFARI_17_0](safariservices/sf_class_available_mac_safari_17_0.md)
- [SF_CLASS_AVAILABLE_MAC_SAFARI_18_4](safariservices/sf_class_available_mac_safari_18_4.md)
- [SF_CLASS_AVAILABLE_MAC_SAFARI_27_0](safariservices/sf_class_available_mac_safari_27_0.md)
- [SF_DEPRECATED_MAC_SAFARI](safariservices/sf_deprecated_mac_safari.md)
- [SF_DEPRECATED_MAC_SAFARI_10_0_11_0](safariservices/sf_deprecated_mac_safari_10_0_11_0.md)
- [SF_ENUM_AVAILABLE_MAC_SAFARI](safariservices/sf_enum_available_mac_safari.md)
- [SF_ENUM_AVAILABLE_MAC_SAFARI_10_0](safariservices/sf_enum_available_mac_safari_10_0.md)
- [SF_ENUM_AVAILABLE_MAC_SAFARI_10_1](safariservices/sf_enum_available_mac_safari_10_1.md)
- [SF_ENUM_AVAILABLE_MAC_SAFARI_11_0](safariservices/sf_enum_available_mac_safari_11_0.md)
- [SF_ENUM_AVAILABLE_MAC_SAFARI_11_1](safariservices/sf_enum_available_mac_safari_11_1.md)
- [SF_ENUM_AVAILABLE_MAC_SAFARI_12_0](safariservices/sf_enum_available_mac_safari_12_0.md)
- [SF_ENUM_AVAILABLE_MAC_SAFARI_12_1](safariservices/sf_enum_available_mac_safari_12_1.md)
- [SF_ENUM_AVAILABLE_MAC_SAFARI_13_0](safariservices/sf_enum_available_mac_safari_13_0.md)
- [SF_ENUM_AVAILABLE_MAC_SAFARI_14_0](safariservices/sf_enum_available_mac_safari_14_0.md)
- [SF_ENUM_AVAILABLE_MAC_SAFARI_17_0](safariservices/sf_enum_available_mac_safari_17_0.md)
- [SF_ENUM_AVAILABLE_MAC_SAFARI_18_4](safariservices/sf_enum_available_mac_safari_18_4.md)
- [SF_ENUM_AVAILABLE_MAC_SAFARI_27_0](safariservices/sf_enum_available_mac_safari_27_0.md)
- [SF_EXTERN](safariservices/sf_extern.md)

### Enumerations

- [SFSafariSettingsError](safariservices/sfsafarisettingserror.md)
