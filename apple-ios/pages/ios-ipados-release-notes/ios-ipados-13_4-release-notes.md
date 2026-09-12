> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/ios-ipados-release-notes/ios-ipados-13_4-release-notes](https://developer.apple.com/documentation/ios-ipados-release-notes/ios-ipados-13_4-release-notes)

# iOS & iPadOS 13.4 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="overview"></a>

## Overview

The iOS & iPadOS 13.4 SDK provides support to develop apps for iPhone, iPad, and iPod touch devices running iOS & iPadOS 13.4. The SDK comes bundled with Xcode 11.4, available from the Mac App Store. For information on the compatibility requirements for Xcode 11.4, see [Xcode 11.4 Release Notes](https://developer.apple.com/documentation/xcode-release-notes/xcode-11_4-release-notes).

<a id="General"></a>

### General

<a id="Known-Issues"></a>

#### Known Issues

- To install iOS 13.4 using the Restore Image, first install Xcode 11.4.

<a id="Keyboard"></a>

### Keyboard

<a id="New-Features"></a>

#### New Features

- QuickType Keyboard now supports predictive input for Arabic.
- QuickType Keyboard now supports Live Conversion for Japanese and Chinese (Zhuyin).
- QuickType Keyboard now supports Swiss German layout for 12.9-inch iPad layout.

<a id="Resolved-Issues"></a>

#### Resolved Issues

- 12.9-inch iPad layouts for several languages now match the hardware keyboard layouts.

<a id="Location-Services"></a>

### Location Services

<a id="New-Features"></a>

#### New Features

- When an app requests Always authorization for the first time after having previously been authorized for While Using the App, the device immediately presents the location authorization prompt. (57106235)

<a id="Photos"></a>

### Photos

<a id="New-Features"></a>

#### New Features

- New keyboard shortcuts are available in Photos on iPadOS, which create quick navigation between Tabs, Search, and Create Albums. While in full-screen mode, you can also delete, duplicate, and enter Edit mode using a keyboard. (57195967)

<a id="RealityKit"></a>

### RealityKit

<a id="Known-Issues"></a>

#### Known Issues

- After updating to iOS & iPadOS 13.4, you won’t be able to synchronize scenes with peers using earlier versions of RealityKit, due to a fundamental change in the physics system. If two peers running a [MultipeerConnectivityService](https://developer.apple.com/documentation/realitykit/multipeerconnectivityservice) have incompatible versions, they will remain connected in the underlying [MCSession](https://developer.apple.com/documentation/multipeerconnectivity/mcsession), but won’t synchronize scenes. iOS & iPadOS 13.4 adds a new [NetworkCompatibilityToken](https://developer.apple.com/documentation/realitykit/networkcompatibilitytoken) class so a host can avoid inviting incompatible clients to its [MCSession](https://developer.apple.com/documentation/multipeerconnectivity/mcsession). Please see the [NetworkCompatibilityToken](https://developer.apple.com/documentation/realitykit/networkcompatibilitytoken) documentation for additional details. (59262764)

<a id="SwiftUI"></a>

### SwiftUI

<a id="New-Features"></a>

#### New Features

- When using a [NavigationView](https://developer.apple.com/documentation/swiftui/navigationview) with multiple columns, the navigation bar now shows a control to toggle the columns. (49074511)
- The `onDrag` and `onDrop` modifiers are now available on iOS. (49661347)

<a id="Resolved-Issues"></a>

#### Resolved Issues

- [safeAreaInsets](https://developer.apple.com/documentation/swiftui/geometryproxy/safeareainsets) in navigation and tab views now extend to the top edge as expected. If you previously used `edgesIgnoringSafeArea(_:)` as a workaround, it should now be removed. (52851281)

## See Also

### iOS & iPadOS 13

- [iOS & iPadOS 13.7 Release Notes](ios-ipados-13_7-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 13.6 Release Notes](ios-ipados-13_6-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 13.5 Release Notes](ios-ipados-13_5-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 13.3.1 Release Notes](ios-ipados-13_3_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 13.3 Release Notes](ios-ipados-13_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 13.2 Release Notes](ios-ipados-13_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 13.1 Release Notes](ios-ipados-13_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS 13 Release Notes](ios-13-release-notes.md): Update your apps to use new features, and test your apps against API changes.
