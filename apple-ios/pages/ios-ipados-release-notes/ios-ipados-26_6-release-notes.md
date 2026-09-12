> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/ios-ipados-release-notes/ios-ipados-26_6-release-notes](https://developer.apple.com/documentation/ios-ipados-release-notes/ios-ipados-26_6-release-notes)

# iOS & iPadOS 26.6 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The iOS & iPadOS 26.6 SDK provides support to develop apps for iPhone and iPad running iOS & iPadOS 26.6. The SDK comes bundled with Xcode 26.6, available from the Mac App Store. For information on the compatibility requirements for Xcode 26.6, see [Xcode 26.6 Release Notes](https://developer.apple.com/documentation/Xcode-Release-Notes/xcode-26_6-release-notes).

<a id="HealthKit"></a>

### HealthKit

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Authorization screen not displaying when requesting `HKQuantityTypeIdentifierBloodPressureDiastolic` or `HKQuantityTypeIdentifierBloodPressureSystolic`.  (177652061)
- Fixed: Temporally-weighted average statistics queries for discrete quantity types such as Resting Heart Rate may return erroneously high values when samples overlap in time.  (178157672)

<a id="Messages"></a>

### Messages

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: HDR screenshots might appear garbled when sent in Messages.  (180859837)

<a id="Object-Capture"></a>

### Object Capture

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Capture and reconstruction might fail.  (175324303)

<a id="Stickers"></a>

### Stickers

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: You might be unable to create new stickers or see existing stickers when sticker data becomes corrupted. This prevents you from using stickers, and the issue can persist to other devices when synced via iCloud.  (163377768)

<a id="StoreKit"></a>

### StoreKit

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: `SKTestSessions` does not properly connect to the test environment when using Simulator, causing test actions to fail.  (174738526) (FB22500243)

<a id="Updates"></a>

### Updates

<a id="Known-Issues"></a>

#### Known Issues

- Software updates performed over cellular will not proceed. (185768684)

  **Workaround:** Update using Wi-Fi or a computer.

## See Also

### iOS & iPadOS 26

- [iOS & iPadOS 26.5 Release Notes](ios-ipados-26_5-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 26.4 Release Notes](ios-ipados-26_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 26.3 Release Notes](ios-ipados-26_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 26.2 Release Notes](ios-ipados-26_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 26.1 Release Notes](ios-ipados-26_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 26 Release Notes](ios-ipados-26-release-notes.md): Update your apps to use new features, and test your apps against API changes.
