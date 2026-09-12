> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/macos-release-notes/macos-26_1-release-notes](https://developer.apple.com/documentation/macos-release-notes/macos-26_1-release-notes)

# macOS Tahoe 26.1 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The macOS 26.1 SDK provides support to develop apps for Mac computers running Tahoe 26.1. The SDK comes bundled with Xcode 26.1, available from the Mac App Store. For information on the compatibility requirements for Xcode 26.1, see [Xcode 26.1 Release Notes](https://developer.apple.com/documentation/Xcode-Release-Notes/xcode-26_1-release-notes).

<a id="Apple-TV-app"></a>

### Apple TV app

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: In Apple TV app on macOS, the Search bar is missing.   (159419539)

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
- Fixed: Game controller input might be delayed when many tasks are submitted to the default global concurrent queue.  (159163570)
- Fixed: Non-UI processes might not receive game controller input after setting `GCController. shouldMonitorBackgroundEvents` to `true`.  (160974748) (FB20307654)

<a id="sudo"></a>

### sudo

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: There are now added security checks when loading the `/etc/sudoers` configuration and `/etc/sudoers.d` folder. When the owner is not set to `root`, the configuration is ignored and sudo might not work.  (155330149) (FB18698477)

<a id="SwiftUI"></a>

### SwiftUI

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: The `navigationLinkIndicatorVisibility` modifier crashes when run on iOS 17, iOS 18 and aligned releases.

  You must recompile your app against the 26.1 SDK to receive this fix.  (158236264) (FB19613386)

<a id="Virtualization"></a>

### Virtualization

<a id="Known-Issues"></a>

#### Known Issues

- The serial number published for the virtual machine is 0, which prevents iCloud and related applications from functioning correctly.  (163294564)

## See Also

### macOS 26

- [macOS Tahoe 26.6 Release Notes](macos-26_6-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Tahoe 26.5 Release Notes](macos-26_5-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Tahoe 26.4 Release Notes](macos-26_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Tahoe 26.3 Release Notes](macos-26_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Tahoe 26.2 Release Notes](macos-26_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Tahoe 26 Release Notes](macos-26-release-notes.md): Update your apps to use new features, and test your apps against API changes.
