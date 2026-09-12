> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvos-release-notes/tvos-13_3-release-notes](https://developer.apple.com/documentation/tvos-release-notes/tvos-13_3-release-notes)

# tvOS 13.3 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="overview"></a>

## Overview

The tvOS 13.3 SDK provides support for developing tvOS apps for Apple TV devices running tvOS 13.3. The SDK comes bundled with Xcode 11.3 available from the Mac App Store. For information on the compatibility requirements for Xcode 11.3, see [Xcode 11.3 Release Notes](https://developer.apple.com/documentation/xcode-release-notes/xcode-11_3-release-notes).

<a id="Networking"></a>

### Networking

<a id="New-Features"></a>

#### New Features

- Certain top-level domains (TLDs) such as `.dev` and `.app` are now in the Foundation [URLSession](../foundation/urlsession.md) and [NSURLConnection](../foundation/nsurlconnection.md) HTTP Strict Transport Security (HSTS) preload list. An app which uses [URLSession](../foundation/urlsession.md) to visit a matching URL will always navigate to the URL as `https://`, and never as cleartext `http://`. See the [HTTP Strict Transport Security (HSTS) Specification](https://tools.ietf.org/html/rfc6797) for more information about HSTS. (56247242)

## See Also

### tvOS 13

- [tvOS 13.4.8 Release Notes](tvos-13_4_8-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 13.4.5 Release Notes](tvos-13_4_5-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 13.4 Release Notes](tvos-13_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 13.3.1 Release Notes](tvos-13_3_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 13.2 Release Notes](tvos-13_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 13 Release Notes](tvos-13-release-notes.md): Update your apps to use new features, and test your apps against API changes.
