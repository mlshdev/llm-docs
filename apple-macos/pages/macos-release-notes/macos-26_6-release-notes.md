> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/macos-release-notes/macos-26_6-release-notes](https://developer.apple.com/documentation/macos-release-notes/macos-26_6-release-notes)

# macOS Tahoe 26.6 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The macOS 26.6 SDK provides support to develop apps for Mac computers running macOS Tahoe 26.6. The SDK comes bundled with Xcode 26.6, available from the Mac App Store. For information on the compatibility requirements for Xcode 26.6, see [Xcode 26.6 Release Notes](https://developer.apple.com/documentation/Xcode-Release-Notes/xcode-26_6-release-notes).

<a id="CoreStorage"></a>

### CoreStorage

<a id="Deprecations"></a>

#### Deprecations

- Encrypted HFS+ (CoreStorage) is deprecated and will not be supported in macOS 28. If you use Encrypted HFS+ backups on external drives, begin backing up to encrypted APFS-formatted external drives instead.  (175892336)

<a id="Ecosystem"></a>

### Ecosystem

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: macOS deprecation notifications incorrectly identify a host app as Intel-only when a system plugin loader, such as a Color Picker or Print Dialog Extension, loads x86 code into the host process.  (174841181) (FB22512943)

<a id="HealthKit"></a>

### HealthKit

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Temporally-weighted average statistics queries for discrete quantity types such as Resting Heart Rate may return erroneously high values when samples overlap in time.  (178157672)

<a id="Messages"></a>

### Messages

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: HDR screenshots might appear garbled when sent in Messages.  (180859837)

## See Also

### macOS 26

- [macOS Tahoe 26.5 Release Notes](macos-26_5-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Tahoe 26.4 Release Notes](macos-26_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Tahoe 26.3 Release Notes](macos-26_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Tahoe 26.2 Release Notes](macos-26_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Tahoe 26.1 Release Notes](macos-26_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Tahoe 26 Release Notes](macos-26-release-notes.md): Update your apps to use new features, and test your apps against API changes.
