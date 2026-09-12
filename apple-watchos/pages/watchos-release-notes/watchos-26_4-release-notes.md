> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchos-release-notes/watchos-26_4-release-notes](https://developer.apple.com/documentation/watchos-release-notes/watchos-26_4-release-notes)

# watchOS 26.4 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The watchOS 26.4 SDK provides support to develop watchOS apps for Apple Watch devices running watchOS 26.4. The SDK comes bundled with Xcode 26.4, available from the Mac App Store. For information on the compatibility requirements for Xcode 26.4, see [Xcode 26.4 Release Notes](https://developer.apple.com/documentation/Xcode-Release-Notes/xcode-26_4-release-notes).

<a id="Address-Sanitizer"></a>

### Address Sanitizer

<a id="Known-Issues"></a>

#### Known Issues

- Address Sanitizer and Thread Sanitizer might hang on macOS 26.4, iOS 26.4, tvOS 26.4, watchOS 26.4, and visionOS 26.4 when building with Xcode 26.3 or older.  (171762808)

  **Workaround:** Use Xcode 26.4 when testing applications with Address Sanitizer or Thread Sanitizer.

<a id="Apple-Maps"></a>

### Apple Maps

<a id="Known-Issues"></a>

#### Known Issues

- Directions might fail to load on Watch when the companion iPhone is connected.  (168923852)

  **Workaround:** Start directions from the companion iPhone.

<a id="Movement-Disorder-API"></a>

### Movement Disorder API

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: The Movement Disorder API has enhanced analytics around database access errors.  (129771567)

<a id="Networking"></a>

### Networking

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Multiple processes leak `CFRunLoopSource` objects when Automatic proxy configuration (PAC) or Auto proxy discovery are configured.

  For clients of the `CFNetworkExecuteProxyAutoConfigurationURL` and `CFNetworkExecuteProxyAutoConfigurationScript` API, please check to make sure your process is not working around the leak by overreleasing the `CFRunLoopSourceRef` returned by those functions or the `CFArrayRef` and `CFErrorRef` passed to the completion.  (166839810) (FB21376045)

<a id="StoreKit"></a>

### StoreKit

<a id="New-Features"></a>

#### New Features

- New fields [revocationType](https://developer.apple.com/documentation/storekit/transaction/revocationtype-swift.property) and [revocationPercentage](https://developer.apple.com/documentation/storekit/transaction/revocationpercentage) have been added to [Transaction](https://developer.apple.com/documentation/storekit/transaction).  (148858551)

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Purchase Intents might not be emitted from the intents sequence when the app is launched from the background.  (168958783) (FB21767675)

<a id="SwiftUI"></a>

### SwiftUI

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: SwiftUI does not surface the latest `.userActivity` as the current user activity.  (163136831)

<a id="Workout"></a>

### Workout

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: When you start a workout with Workout Buddy enabled, the timer might appear to be delayed by a few seconds before it starts counting.  (169030068)

## See Also

### watchOS 26

- [watchOS 26.6 Release Notes](watchos-26_6-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 26.5 Release Notes](watchos-26_5-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 26.3 Release Notes](watchos-26_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 26.2 Release Notes](watchos-26_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 26.1 Release Notes](watchos-26_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 26 Release Notes](watchos-26-release-notes.md): Update your apps to use new features, and test your apps against API changes.
