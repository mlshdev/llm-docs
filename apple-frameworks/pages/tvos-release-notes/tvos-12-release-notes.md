> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvos-release-notes/tvos-12-release-notes](https://developer.apple.com/documentation/tvos-release-notes/tvos-12-release-notes)

# tvOS 12 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="overview"></a>

## Overview

The tvOS 12 SDK provides support for developing tvOS apps for Apple TV devices running tvOS 12. For information about new features in tvOS 12, see [What’s New in tvOS](https://developer.apple.com/tvos/whats-new/). The SDK comes bundled with Xcode 10 available from the Mac App Store. For information about Xcode 10, see [Xcode 10 Release Notes](https://developer.apple.com/documentation/xcode-release-notes/xcode-10-release-notes).

<a id="Dolby-Atmos"></a>

### Dolby Atmos

<a id="New-Features"></a>

#### New Features

- Some iTunes Store movies are now available with Dolby Atmos. If you encounter any issues when playing Atmos-capable titles, file a bug that includes a [sysdiagnose](https://developer.apple.com/bug-reporting/profiles-and-logs/?platform=tvos&name=sysdiagnose) and a detailed description of your development hardware configuration.

<a id="Network-Based-Device-Pairing"></a>

### Network-Based Device Pairing

<a id="Known-Issues"></a>

#### Known Issues

- PIN pairing with a remote Apple TV might not successfully establish the connection on the first attempt. (40228498)

  **Workaround:** Exit and reenter the Remotes and Devices pairing screen on Apple TV, then reattempt the pair request in Xcode.

<a id="URLSession"></a>

### URLSession

<a id="New-Features"></a>

#### New Features

- The [URLSession](../foundation/urlsession.md) HTTP/2 implementation has been updated to support HTTP/2 connection reuse per RFC 7540 Section 9.1.1. This requires an HTTP/2 server to present a certificate which covers more than one server hostname. The certificate may use the Subject Alternative Name extension or wildcarded domain names. In addition, [URLSession](../foundation/urlsession.md) requires name resolution to resolve the different hostnames to the same IP address. [URLSession](../foundation/urlsession.md) might reuse HTTP/2 connections across different domain names when these conditions are satisfied. (37507838)

<a id="Deprecations"></a>

#### Deprecations

- The `ftp://` and `file://` URL schemes for Proxy Automatic Configuration (PAC) are deprecated. HTTP and HTTPS are the only supported URL schemes for PAC. This affects all PAC configurations including, but not limited to, configurations set via Settings, System Preferences, profiles, and [URLSession](../foundation/urlsession.md) APIs such as [connectionProxyDictionary](../foundation/urlsessionconfiguration/connectionproxydictionary.md), and [CFNetworkExecuteProxyAutoConfigurationURL(\_:\_:\_:\_:)](../cfnetwork/cfnetworkexecuteproxyautoconfigurationurl%28________%29.md). (37811761)

<a id="On-Demand-Resources"></a>

### On-Demand Resources

<a id="Known-Issues"></a>

#### Known Issues

- The new build system in Xcode doesn’t support On Demand Resources (ODR). (31508570)

  **Workaround:** Use the legacy build system for projects requiring ODR (File \> Project/Workspace Settings).

## See Also

### tvOS 12

- [tvOS 12.4 Release Notes](tvos-12_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 12.2 Release Notes](tvos-12_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 12.1.2 Release Notes](tvos-12_1_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 12.1.1 Release Notes](tvos-12_1_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
