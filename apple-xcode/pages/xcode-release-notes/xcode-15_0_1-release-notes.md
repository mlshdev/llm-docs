> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcode-release-notes/xcode-15_0_1-release-notes](https://developer.apple.com/documentation/xcode-release-notes/xcode-15_0_1-release-notes)

# Xcode 15.0.1 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

Xcode 15.0.1 includes SDKs for iOS 17, iPadOS 17, tvOS 17, watchOS 10, and macOS Sonoma. The Xcode 15.0.1 release supports on-device debugging in iOS 12 and later, tvOS 12 and later, and watchOS 4 and later. Xcode 15.0.1 requires a Mac running macOS Ventura 13.5 or later.

<a id="General"></a>

### General

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Executing Unit/UI tests from Xcode on the iOS Simulator takes an extended time to launch on first run of the suite. (115187363)  (110330776) (FB12237092)

<a id="Known-Issues"></a>

#### Known Issues

- Xcode 15 is unable to connect wirelessly for development with devices running iOS and tvOS versions older than 16.7.  (116591034)

  **Workaround:** Connect iOS devices running affected OS versions to the Mac using a USB cable.

<a id="Instruments"></a>

### Instruments

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Leaks instrument never detects leaks.  (116020104)

<a id="Interface-Builder"></a>

### Interface Builder

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed issue that caused Interface Builder documents using custom App fonts to load incorrect font at runtime.  (116019276)

<a id="Test-Report"></a>

### Test Report

<a id="Known-Issues"></a>

#### Known Issues

- Test Report may present a screenshot or screen recording attachment that is unaccessible  (112145122)

## See Also

### Xcode 15

- [Xcode 15.4 Release Notes](xcode-15_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [Xcode 15.3 Release Notes](xcode-15_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [Xcode 15.2 Release Notes](xcode-15_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [Xcode 15.1 Release Notes](xcode-15_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [Xcode 15 Release Notes](xcode-15-release-notes.md): Update your apps to use new features, and test your apps against API changes.
