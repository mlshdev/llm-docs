> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcode-release-notes/xcode-14_3_1-release-notes](https://developer.apple.com/documentation/xcode-release-notes/xcode-14_3_1-release-notes)

# Xcode 14.3.1 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

Xcode 14.3.1 includes Swift 5.8.1 and SDKs for iOS 16.4, iPadOS 16.4, tvOS 16.4, watchOS 9.4, and macOS Ventura 13.3. The Xcode 14.3.1 release supports on-device debugging in iOS 11 and later, tvOS 11 and later, and watchOS 4 and later. Xcode 14.3.1 requires a Mac running macOS Ventura 13.0 or later.

<a id="General"></a>

### General

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: When targeting devices running iOS 13, apps built with Xcode 14.3 and using Objective-C protocols from Swift, sometimes crash at launch. (108930834)

<a id="Asset-Catalogs"></a>

### Asset Catalogs

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: iOS app icons, including alternate app icons, weren’t correctly populating `Info.plist` entries for iPad. This made alternate app icons specified using Single Size erroneously unavailable on iPad at runtime. (108955499)

<a id="Playgrounds"></a>

### Playgrounds

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Playground live views weren’t updating correctly after making changes to the Playground code. (108413386)
- Fixed: Xcode could crash on macOS 13.3 when adding a new page to a playground. (108952884)

<a id="Swift"></a>

### Swift

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Applications using Swift Concurrency could crash when run on a specific OS version:

  - macOS 12.0 up to (but not including) macOS 12.1
  - iOS 15.0 up to (but not including) iOS 15.2
  - tvOS 15.0 up to (but not including) tvOS 15.2
  - watchOS 8.0 up to (but not including) watchOS 8.3

  Earlier and later OS versions weren’t affected. (108837762)

<a id="Swift-Packages"></a>

### Swift Packages

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Custom commands implemented by package plugins aren’t being shown in the context menu for Xcode projects. (108953641)

## See Also

### Xcode 14

- [Xcode 14.3 Release Notes](xcode-14_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [Xcode 14.2 Release Notes](xcode-14_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [Xcode 14.1 Release Notes](xcode-14_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [Xcode 14.0.1 Release Notes](xcode-14_0_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [Xcode 14 Release Notes](xcode-14-release-notes.md): Update your apps to use new features, and test your apps against API changes.
