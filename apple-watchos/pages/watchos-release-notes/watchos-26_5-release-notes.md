> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchos-release-notes/watchos-26_5-release-notes](https://developer.apple.com/documentation/watchos-release-notes/watchos-26_5-release-notes)

# watchOS 26.5 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The watchOS 26.5 SDK provides support to develop watchOS apps for Apple Watch devices running watchOS 26.5. The SDK comes bundled with Xcode 26.5, available from the Mac App Store. For information on the compatibility requirements for Xcode 26.5, see [Xcode 26.5 Release Notes](https://developer.apple.com/documentation/Xcode-Release-Notes/xcode-26_5-release-notes).

<a id="StoreKit"></a>

### StoreKit

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: The App Version field in the ASN.1 app receipt might contain the string “null” instead of the expected version number.  (171614522) (FB22114908)
- Fixed: `Transaction.currentEntitlements` might be empty if a customer has an active subscription when the device’s system calendar is set to a non-Gregorian format.  (173415174)

<a id="StoreKit-Testing-in-Xcode"></a>

### StoreKit Testing in Xcode

<a id="Known-Issues"></a>

#### Known Issues

- An issue prevents StoreKit Testing in Xcode from observing changes made to subscription prices.  (175848494) (FB22647785)

<a id="StoreKitTest"></a>

### StoreKitTest

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: An issue preventing SKTestSession from using the selected StoreKit configuration during unit tests, resulting in failed test actions.  (172583218) (FB22237318)

## See Also

### watchOS 26

- [watchOS 26.6 Release Notes](watchos-26_6-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 26.4 Release Notes](watchos-26_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 26.3 Release Notes](watchos-26_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 26.2 Release Notes](watchos-26_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 26.1 Release Notes](watchos-26_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 26 Release Notes](watchos-26-release-notes.md): Update your apps to use new features, and test your apps against API changes.
