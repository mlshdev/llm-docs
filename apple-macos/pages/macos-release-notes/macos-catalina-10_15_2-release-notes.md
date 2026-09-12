> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/macos-release-notes/macos-catalina-10_15_2-release-notes](https://developer.apple.com/documentation/macos-release-notes/macos-catalina-10_15_2-release-notes)

# macOS Catalina 10.15.2 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="overview"></a>

## Overview

The macOS 10.15.2 SDK provides support for developing apps for Macs running macOS Catalina 10.15.2. The SDK comes bundled with Xcode 11.3 available from the Mac App Store. For information on the compatibility requirements for Xcode 11.3, see [Xcode 11.3 Release Notes](https://developer.apple.com/documentation/xcode-release-notes/xcode-11_3-release-notes).

<a id="Networking"></a>

### Networking

<a id="New-Features"></a>

#### New Features

- Certain top-level domains (TLDs) such as `.dev` and `.app` are now in the Foundation [URLSession](https://developer.apple.com/documentation/foundation/urlsession) and [NSURLConnection](https://developer.apple.com/documentation/foundation/nsurlconnection) HTTP Strict Transport Security (HSTS) preload list. An app which uses [URLSession](https://developer.apple.com/documentation/foundation/urlsession) to visit a matching URL will always navigate to the URL as `https://`, and never as cleartext `http://`. See the [HTTP Strict Transport Security (HSTS) Specification](https://tools.ietf.org/html/rfc6797) for more information about HSTS. (56247242)

## See Also

### macOS 10.15

- [macOS Catalina 10.15.6 Release Notes](macos-catalina-10_15_6-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Catalina 10.15.5 Release Notes](macos-catalina-10_15_5-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Catalina 10.15.4 Release Notes](macos-catalina-10_15_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Catalina 10.15.3 Release Notes](macos-catalina-10_15_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Catalina 10.15.1 Release Notes](macos-catalina-10_15_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Catalina 10.15 Release Notes](macos-catalina-10_15-release-notes.md): Update your apps to use new features, and test your apps against API changes.
