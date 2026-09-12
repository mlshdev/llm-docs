> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionos-release-notes/visionos-26_1-release-notes](https://developer.apple.com/documentation/visionos-release-notes/visionos-26_1-release-notes)

# visionOS 26.1 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The visionOS 26.1 SDK provides support for developing apps for Apple Vision Pro devices running visionOS 26.1. The SDK comes bundled with Xcode 26.1, available from the Mac App Store. For information on the compatibility requirements for Xcode 26.1, see [Xcode 26.1 Release Notes](https://developer.apple.com/documentation/Xcode-Release-Notes/xcode-26_1-release-notes).

<a id="Background-Assets"></a>

### Background Assets

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: `AssetPackManager.url(for:)` unexpectedly throws an error when looking up the URL for a locally available asset file.  (157959878) (FB19512759)

<a id="Game-Controller"></a>

### Game Controller

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: The time returned by `GCPressedStateInput.lastPressedStateTimestamp` is not in the correct time domain.  (159124910)

<a id="HealthKit"></a>

### HealthKit

<a id="New-Features"></a>

#### New Features

- HealthKit authorization UI now displays a single Blood Pressure switch to control changes to Systolic and Diastolic Blood Pressure type authorizations. The API is unchanged and apps should request for both types in code.  (153579893)

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: `HKCorrelation` objects of type `.bloodPressure` fail to save with `errorInvalidArgument` HKError code if they don’t have exactly one systolic and one diastolic blood pressure quantity sample its set of objects.  (151889745)

<a id="Logitech-Muse"></a>

### Logitech Muse

<a id="Known-Issues"></a>

#### Known Issues

- Logitech Muse might stop spatial tracking during usage, despite showing as connected in Settings.  (154905373)

  **Workaround:** Turn Bluetooth off and on, power cycle the Logitech Muse, and reboot Vision Pro.
- Setting down Logitech Muse outside of Vision Pro’s field of view might cause Vision Pro to no longer receive pinch inputs from the hand that had been holding Muse.  (160816595)

  **Workaround:** Pick Muse back up and set it down within Vision Pro’s field of view.

<a id="SwiftUI"></a>

### SwiftUI

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: The `navigationLinkIndicatorVisibility` modifier crashes when run on iOS 17, iOS 18 and aligned releases.

  You must recompile your app against the 26.1 SDK to receive this fix.  (158236264) (FB19613386)

## See Also

### visionOS 26

- [visionOS 26.6 Release Notes](visionos-26_6-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [visionOS 26.5 Release Notes](visionos-26_5-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [visionOS 26.4 Release Notes](visionos-26_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [visionOS 26.3 Release Notes](visionos-26_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [visionOS 26.2 Release Notes](visionos-26_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [visionOS 26 Release Notes](visionos-26-release-notes.md): Update your apps to use new features, and test your apps against API changes.
