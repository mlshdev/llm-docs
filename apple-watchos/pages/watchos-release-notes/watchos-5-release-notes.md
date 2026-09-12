> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchos-release-notes/watchos-5-release-notes](https://developer.apple.com/documentation/watchos-release-notes/watchos-5-release-notes)

# watchOS 5 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="overview"></a>

## Overview

The watchOS 5 SDK provides support for developing watchOS apps for Apple Watch devices running watchOS 5. For information about new features in watchOS 5, see [What’s New in watchOS](https://developer.apple.com/watchos/whats-new/). The SDK comes bundled with Xcode 10 available from the Mac App Store. For information about Xcode 10, see [Xcode 10 Release Notes](https://developer.apple.com/documentation/xcode-release-notes/xcode-10-release-notes).

<a id="Networking"></a>

### Networking

<a id="New-Features"></a>

#### New Features

- The [URLSession](https://developer.apple.com/documentation/foundation/urlsession) HTTP/2 implementation has been updated to support HTTP/2 connection reuse per RFC 7540 Section 9.1.1. This requires an HTTP/2 server to present a certificate which covers more than one server hostname. The certificate may use the Subject Alternative Name extension or wildcarded domain names. In addition, [URLSession](https://developer.apple.com/documentation/foundation/urlsession) requires name resolution to resolve the different hostnames to the same IP address. [URLSession](https://developer.apple.com/documentation/foundation/urlsession) might reuse HTTP/2 connections across different domain names when these conditions are satisfied. (37507838)

<a id="Deprecations"></a>

#### Deprecations

- The `ftp://` and `file://` URL schemes for Proxy Automatic Configuration (PAC) are deprecated. HTTP and HTTPS are the only supported URL schemes for PAC. This affects all PAC configurations including, but not limited to, configurations set via Settings, System Preferences, profiles, and [URLSession](https://developer.apple.com/documentation/foundation/urlsession) APIs such as [connectionProxyDictionary](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/connectionproxydictionary), and [CFNetworkExecuteProxyAutoConfigurationURL(\_:\_:\_:\_:)](https://developer.apple.com/documentation/cfnetwork/cfnetworkexecuteproxyautoconfigurationurl%28_:_:_:_:%29). (37811761)

<a id="WatchKit"></a>

### WatchKit

<a id="New-Features"></a>

#### New Features

- The tint color of a [WKInterfaceVolumeControl](../watchkit/wkinterfacevolumecontrol.md) can now be set by calling the [setTintColor(\_:)](../watchkit/wkinterfacevolumecontrol/settintcolor%28__%29.md) method. (40565782)

<a id="Deprecations"></a>

#### Deprecations

- The [updateUserActivity(\_:userInfo:webpageURL:)](../watchkit/wkinterfacecontroller/updateuseractivity%28__userinfo_webpageurl_%29.md) method doesn’t properly register activities. Use [update(\_:)](../watchkit/wkinterfacecontroller/update%28__%29.md) instead. (39840960)
- The [didReceive(\_:withCompletion:)](../watchkit/wkusernotificationinterfacecontroller/didreceive%28__withcompletion_%29.md) method doesn’t receive grouped updates for threaded notifications. Use [didReceive(\_:)](../watchkit/wkusernotificationinterfacecontroller/didreceive%28__%29.md) instead.

## See Also

### watchOS 5

- [watchOS 5.3 Release Notes](watchos-5_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 5.1.3 Release Notes](watchos-5_1_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 5.1 Release Notes](watchos-5_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
