> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/macos-release-notes/macos-14_1-release-notes](https://developer.apple.com/documentation/macos-release-notes/macos-14_1-release-notes)

# macOS Sonoma 14.1 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The macOS 14 SDK provides support to develop apps for Mac computers running Sonoma 14.1. The SDK comes bundled with Xcode 15, available from the Mac App Store. For information on the compatibility requirements for Xcode 15, see [Xcode 15 Release Notes](https://developer.apple.com/documentation/Xcode-Release-Notes/xcode-15-release-notes).

<a id="Remote-Widgets"></a>

### Remote Widgets

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Remote Widgets might render blank on mismatched iOS and macOS releases.  (115436466)

<a id="Wallet"></a>

### Wallet

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Some event ticket passes might fail to ingest into Wallet when added from a website on a Mac.  (115216417)

<a id="WidgetKit"></a>

### WidgetKit

<a id="Known-Issues"></a>

#### Known Issues

- In widgets `Text(_:style:)` doesn’t animate its content by default.  (107582710)

  **Workaround:** To explicitly request an animation, use the `View.contentTransition(_:)` modifier.

<a id="iPhone-12-in-France"></a>

### iPhone 12 in France

<a id="Notes"></a>

#### Notes

- Updates the iPhone 12 for users in France to accommodate a test protocol for Specific Absorption Rate (SAR) testing. For more information, visit this website: [https://support.apple.com/kb/HT213923](https://support.apple.com/kb/HT213923)  (116601274)

## See Also

### macOS 14

- [macOS Sonoma 14.6 Release Notes](macos-14_6-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Sonoma 14.5 Release Notes](macos-14_5-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Sonoma 14.4 Release Notes](macos-14_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Sonoma 14.3 Release Notes](macos-14_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Sonoma 14.2 Release Notes](macos-14_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Sonoma 14 Release Notes](macos-14-release-notes.md): Update your apps to use new features, and test your apps against API changes.
