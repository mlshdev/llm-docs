> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/macos-release-notes/macos-14_3-release-notes](https://developer.apple.com/documentation/macos-release-notes/macos-14_3-release-notes)

# macOS Sonoma 14.3 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The macOS 14.2 SDK provides support to develop apps for Mac computers running Sonoma 14.3. The SDK comes bundled with Xcode 15.1, available from the Mac App Store. For information on the compatibility requirements for Xcode 15.1, see [Xcode 15.1 Release Notes](https://developer.apple.com/documentation/Xcode-Release-Notes/xcode-15_1-release-notes).

<a id="AppKit"></a>

### AppKit

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Resolves a performance issue where partial update causes the entire NSView to be redrawn.  (113028520)

<a id="Automatic-Assessment-Configuration"></a>

### Automatic Assessment Configuration

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixes an issue where the Mac can lose its internet connection during Automatic Assessment Configuration due to DHCP lease expiration.  (111437675)

<a id="Notifications"></a>

### Notifications

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Resolved an issue where WebPush notifications fail to deliver after restart.  (118134672)

<a id="StoreKit"></a>

### StoreKit

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Resolved an issue where APIs which provide Transaction values would unexpectedly fail when the purchase price of the transaction is a very large number.  (118883880)

<a id="Virtualization"></a>

### Virtualization

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Resolved an issue where virtualized macOS Monterey guest fails to boot after installing software update.  (111970030)

## See Also

### macOS 14

- [macOS Sonoma 14.6 Release Notes](macos-14_6-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Sonoma 14.5 Release Notes](macos-14_5-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Sonoma 14.4 Release Notes](macos-14_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Sonoma 14.2 Release Notes](macos-14_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Sonoma 14.1 Release Notes](macos-14_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Sonoma 14 Release Notes](macos-14-release-notes.md): Update your apps to use new features, and test your apps against API changes.
