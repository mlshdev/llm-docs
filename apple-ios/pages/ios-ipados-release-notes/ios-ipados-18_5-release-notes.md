> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/ios-ipados-release-notes/ios-ipados-18_5-release-notes](https://developer.apple.com/documentation/ios-ipados-release-notes/ios-ipados-18_5-release-notes)

# iOS & iPadOS 18.5 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The iOS & iPadOS 18.5 SDK provides support to develop apps for iPhone and iPad running iOS & iPadOS 18.5. The SDK comes bundled with Xcode 16.4, available from the Mac App Store. For information on the compatibility requirements for Xcode 16.4, see [Xcode 16.4 Release Notes](https://developer.apple.com/documentation/Xcode-Release-Notes/xcode-16_4-release-notes).

<a id="Apple-Vision-Pro-app"></a>

### Apple Vision Pro app

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: On iOS 18.4 beta 1, the Apple Vision Pro app launches with a black screen if downloaded from the App Store. Upgrade to iOS 18.4 beta 2 and newer, and the app will launch as expected.  (146814396)

<a id="Broadcast-Extensions"></a>

### Broadcast Extensions

<a id="New-Features"></a>

#### New Features

- Broadcast extensions now have a higher per-process memory limit. This should enable capturing & streaming content at higher quality, if the system resources are available.  (144104867)

<a id="hvf"></a>

### hvf

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Availability checking is disabled for C APIs in hvf.  (148385341)

<a id="Security"></a>

### Security

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Some enterprise apps might not launch. If you experienced this issue on iOS 18 or later, uninstall all enterprise apps from the device and reinstall them.  (147965052)

<a id="Siri"></a>

### Siri

<a id="Known-Issues"></a>

#### Known Issues

- Siri requests to play a song in Apple Music might fail across multiple platforms.  (149392508)

<a id="StoreKit"></a>

### StoreKit

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Calling `isEligibleForIntroOffer(for:)` will return false if there is no user account signed in.  (146119524)

<a id="Writing-Tools"></a>

### Writing Tools

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Resolved an issue where the attributes in the NSAttributedString passed in `writingToolsCoordinator(_:replace:in:proposedText:reason:animationParameters:completion:)` (or its companion async form) are stripped when an `NSWritingToolsCoordinator` or `UIWritingToolsCoordinator` has `resultOptions` set to `[.plainText]`. The attributes are no longer stripped but instead use the same attributes as were included by the delegate in the `NSAttributedString` returned in `writingToolsCoordinator(_:requestsContextsFor:completion:)` (or its companion async form).  (144105888)

## See Also

### iOS & iPadOS 18

- [iOS & iPadOS 18.6 Release Notes](ios-ipados-18_6-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 18.4 Release Notes](ios-ipados-18_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 18.3 Release Notes](ios-ipados-18_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 18.2 Release Notes](ios-ipados-18_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 18.1 Release Notes](ios-ipados-18_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 18 Release Notes](ios-ipados-18-release-notes.md): Update your apps to use new features, and test your apps against API changes.
