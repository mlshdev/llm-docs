> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/safari-release-notes/safari-12_1-release-notes](https://developer.apple.com/documentation/safari-release-notes/safari-12_1-release-notes)

# Safari 12.1 Release Notes

**Kind:** Article

Released March 25, 2019 — Version 12.1 (14607.1.40)

<a id="Overview"></a>

## Overview

Safari 12.1 ships with iOS 12.2 and macOS 10.14.4. It’s also available for macOS 10.13.6 and 10.12.6.

New features of Safari 12.1 include:

- **Dark Mode for the Web.** The ability to enable color scheme customizations for websites while in Dark Mode.
- **Intelligent Tracking Prevention.** New permission requirements for third-party cookies and new limits for long-term tracking.

<a id="General"></a>

### General

<a id="New-Features"></a>

#### New Features

- Updated the push notification prompt for Safari on macOS to require a user gesture.

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Updated the behavior of websites saved to the home screen on iOS to pause in the background instead of relaunching each time.

<a id="Authentication-and-Passwords"></a>

### Authentication and Passwords

<a id="New-Features"></a>

#### New Features

- Updated Password AutoFill to sign in automatically to websites after filling in the credentials.

<a id="Security-and-Privacy"></a>

### Security and Privacy

<a id="New-Features"></a>

#### New Features

- Added warnings displayed to the user when loading insecure pages in both Safari and in [SFSafariViewController](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller).
- Added Motion & Orientation settings on iOS to enable the [DeviceMotionEvent](../webkitjs/devicemotionevent.md) and [DeviceOrientationEvent](../webkitjs/deviceorientationevent.md) events.
- Removed support for the expired Do Not Track standard to prevent potential use as a fingerprinting variable.
- Updated the link behavior for `"target=_blank"` to include `rel="noopener" implicitly`.

<a id="Intelligent-Tracking-Prevention"></a>

### Intelligent Tracking Prevention

<a id="New-Features"></a>

#### New Features

- Removed support for partitioned cookies for domains with cross-site tracking capabilities. The Storage Access API now provides third-party access to cookies.
- Improved Intelligent Tracking Prevention to limit long-term tracking based on client-side first-party cookies and to verify partitioned cache entries.

<a id="Web-API"></a>

### Web API

<a id="New-Features"></a>

#### New Features

- Added a `supported-color-schemes` meta tag to indicate a website supports `light` and `dark` color schemes.
- Added support for the Intersection Observer API, which detects the intersection of visible elements relative to other elements. Elements include the viewport of the top-level document.
- Added support for the Web Share API to invoke the native share dialog provided by the system.
- Added support for `<input type="color">`.
- Added support for the `<datalist>` element.

<a id="Payment-Request-API"></a>

### Payment Request API

<a id="New-Features"></a>

#### New Features

- Added support for granular errors.
- Added support in Wallet & Apple Pay preferences for using the default contact information for the shipping address, email, and phone. On iOS, set preferences in the Transaction Defaults category in Settings \> Wallet & Apple Pay. On Mac, set preferences in System Preferences \> Wallet & Apple Pay \> Contacts and Shipping.
- Added support for the default addresses and contacts configured in the Contacts and Shipping in the Wallet system preferences on iOS and macOS.
- Added support for special fields for Japan including `phoneticName`, [subLocality](../applepayontheweb/applepaypaymentcontact/sublocality.md), and [subAdministrativeArea](../applepayontheweb/applepaypaymentcontact/subadministrativearea.md).

<a id="CSS-and-Text"></a>

### CSS and Text

<a id="New-Features"></a>

#### New Features

- Added support for the CSS media queries `prefers-color-scheme: light` and `prefers-color-scheme: dark`.
- Added support for CSS rules to customize text decorations like underlines and dashed underlines.
- Added support for new `rgb()` color functions from the CSS Color 4 specification.

<a id="Media"></a>

### Media

<a id="New-Features"></a>

#### New Features

- Added support for H.264 simulcast and VP8 in WebRTC to improve support for multi-party video conferencing.
- Enabled cross-browser Encrypted Media Extensions (EME) by adding APIs without the `webkit` prefix.

<a id="Safari-App-Extension-API"></a>

### Safari App Extension API

<a id="New-Features"></a>

#### New Features

- Added [getAllWindows(completionHandler:)](https://developer.apple.com/documentation/safariservices/sfsafariapplication/getallwindows%28completionhandler:%29) and [getAllTabs(completionHandler:)](https://developer.apple.com/documentation/safariservices/sfsafariwindow/getalltabs%28completionhandler:%29) for iterating over all open windows and tabs.
- Added [getContainingTab(completionHandler:)](https://developer.apple.com/documentation/safariservices/sfsafaripage/getcontainingtab%28completionhandler:%29) and [getContainingWindow(completionHandler:)](https://developer.apple.com/documentation/safariservices/sfsafaritab/getcontainingwindow%28completionhandler:%29) access to the containing tab and window objects.
- Added a `close` method to [SFSafariWindow](https://developer.apple.com/documentation/safariservices/sfsafariwindow) and [SFSafariTab](https://developer.apple.com/documentation/safariservices/sfsafaritab) for closing windows and tabs.
- Added [navigate(to:)](https://developer.apple.com/documentation/safariservices/sfsafaritab/navigate%28to:%29) for changing the URL of a tab.
- Added [getScreenshotOfVisibleArea(completionHandler:)](https://developer.apple.com/documentation/safariservices/sfsafaripage/getscreenshotofvisiblearea%28completionhandler:%29) for taking a screenshot of the visible contents of a page.
- Added [showPopover()](https://developer.apple.com/documentation/safariservices/sfsafaritoolbaritem/showpopover%28%29) and [dismissPopover()](https://developer.apple.com/documentation/safariservices/sfsafariextensionviewcontroller/dismisspopover%28%29) for showing and dismissing extension popovers.
- Added [getBaseURI(completionHandler:)](https://developer.apple.com/documentation/safariservices/sfsafariextension/getbaseuri%28completionhandler:%29) for retrieving the base URI in the app extension process.
- Improved support for navigating backwards and forwards.

<a id="Web-Inspector-and-Tools"></a>

### Web Inspector and Tools

<a id="New-Features"></a>

#### New Features

- Added support for multiple selection of DOM tree nodes and of entries in the Cookies table.
- Improved styles editing with multiple selection support.
- Updated Timelines to include media events.

## See Also

### Version 12

- [Safari 12 Release Notes](safari-12-release-notes.md): Released September 17, 2018 — Version 12 (14606.1.36)
