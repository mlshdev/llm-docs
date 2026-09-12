> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/macos-release-notes/macos-13_2-release-notes](https://developer.apple.com/documentation/macos-release-notes/macos-13_2-release-notes)

# macOS Ventura 13.2 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The macOS 13.1 SDK provides support to develop apps for Mac computers running macOS Ventura 13.2. The SDK comes bundled with Xcode 14.2, available from the Mac App Store. For information on the compatibility requirements for Xcode 14.2, see [Xcode 14.2 Release Notes](https://developer.apple.com/documentation/xcode-release-notes/xcode-14_2-release-notes).

<a id="ServiceManagement"></a>

### ServiceManagement

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed a regression in Ventura 13.1 that prevented daemons from being registered with SMAppService. Also fixed, toggling items on or off in Login Items may cause items to be ungrouped or deleted. (102938063)

<a id="SwiftUI"></a>

### SwiftUI

<a id="New-Feature"></a>

#### New Feature

- Applications written using Swift App Lifecycle can now support scriptable application properties and elements.  Use `@NSApplicationDelegateAdaptor` to bridge to your custom application delegate, then implement `application(_:delegateHandlesKey:)` and the necessary KVC accessors as described in [application(\_:delegateHandlesKey:)](../appkit/nsapplicationdelegate/application%28__delegatehandleskey_%29.md) and [Implementing a Scriptable Application](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_implement/SAppsImplement.html#//apple_ref/doc/uid/20000037-BBCJEEEC). (102218233)

## See Also

### macOS 13

- [macOS Ventura 13.5 Release Notes](macos-13_5-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Ventura 13.4 Release Notes](macos-13_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Ventura 13.3 Release Notes](macos-13_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Ventura 13.1 Release Notes](macos-13_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Ventura 13 Release Notes](macos-13-release-notes.md): Update your apps to use new features, and test your apps against API changes.
