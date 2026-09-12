> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/macos-release-notes/macos-15_5-release-notes](https://developer.apple.com/documentation/macos-release-notes/macos-15_5-release-notes)

# macOS Sequoia 15.5 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The macOS 15.5 SDK provides support to develop apps for Mac computers running Sequoia 15.5. The SDK comes bundled with Xcode 16.4, available from the Mac App Store. For information on the compatibility requirements for Xcode 16.4, see [Xcode 16.4 Release Notes](https://developer.apple.com/documentation/Xcode-Release-Notes/xcode-16_4-release-notes).

<a id="Finder"></a>

### Finder

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Network shares containing large amounts of data are incorrectly enumerated.  (148408379)

<a id="hvf"></a>

### hvf

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Availability checking is disabled for C APIs in hvf.  (148385341)

<a id="Pro-Display-Calibrator"></a>

### Pro Display Calibrator

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Customizing display calibration using the Pro Display Calibrator causes a system reboot on 14-inch and 16-inch M4 MacBook Pros.  (148038484)

<a id="Service-Management"></a>

### Service Management

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed an issue preventing apps from registering helper executables on macOS.  (147420361) (FB16933413)

<a id="StoreKit"></a>

### StoreKit

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Calling `isEligibleForIntroOffer(for:)` will return false if there is no user account signed in.  (146119524)

## See Also

### macOS 15

- [macOS Sequoia 15.6 Release Notes](macos-15_6-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Sequoia 15.4 Release Notes](macos-15_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Sequoia 15.3 Release Notes](macos-15_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Sequoia 15.2 Release Notes](macos-15_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Sequoia 15.1 Release Notes](macos-15_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Sequoia 15 Release Notes](macos-15-release-notes.md): Update your apps to use new features, and test your apps against API changes.
