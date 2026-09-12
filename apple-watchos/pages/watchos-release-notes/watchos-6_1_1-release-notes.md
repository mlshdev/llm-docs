> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchos-release-notes/watchos-6_1_1-release-notes](https://developer.apple.com/documentation/watchos-release-notes/watchos-6_1_1-release-notes)

# watchOS 6.1.1 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="overview"></a>

## Overview

The watchOS 6.1.1 SDK provides support for developing watchOS apps for Apple Watch devices running watchOS 6.1.1. The SDK comes bundled with Xcode 11.3 available from the Mac App Store. For information on the compatibility requirements for Xcode 11.3, see [Xcode 11.3 Release Notes](https://developer.apple.com/documentation/xcode-release-notes/xcode-11_3-release-notes).

<a id="Networking"></a>

### Networking

<a id="New-Features"></a>

#### New Features

- Certain top-level domains (TLDs) such as `.dev` and `.app` are now in the Foundation [URLSession](https://developer.apple.com/documentation/foundation/urlsession) and [NSURLConnection](https://developer.apple.com/documentation/foundation/nsurlconnection) HTTP Strict Transport Security (HSTS) preload list. An app which uses [URLSession](https://developer.apple.com/documentation/foundation/urlsession) to visit a matching URL will always navigate to the URL as `https://`, and never as cleartext `http://`. See the [HTTP Strict Transport Security (HSTS) Specification](https://tools.ietf.org/html/rfc6797) for more information about HSTS. (56247242)

## See Also

### watchOS 6

- [watchOS 6.2.8 Release Notes](watchos-6_2_8-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 6.2.5 Release Notes](watchos-6_2_5-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 6.2 Release Notes](watchos-6_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 6.1.2 Release Notes](watchos-6_1_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 6.1 Release Notes](watchos-6_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 6 Release Notes](watchos-6-release-notes.md): Update your apps to use new features, and test your apps against API changes.
