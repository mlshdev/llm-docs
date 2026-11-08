> Snapshot-pinned source payload for Apple watchOS snapshot-057e837b5f7a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchos-release-notes/watchos-27_3-release-notes

# watchOS 27.3 Beta Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The watchOS 27.3 SDK provides support to develop watchOS apps for Apple Watch devices running watchOS 27.3 beta. The SDK comes bundled with Xcode 27.3. For information on the compatibility requirements for Xcode 27.3, see [Xcode 27.3 Release Notes](https://developer.apple.com/documentation/Xcode-Release-Notes/xcode-27_3-release-notes).

<a id="StoreKit-Testing-in-Xcode"></a>

### StoreKit Testing in Xcode

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Making an in-app purchase for a subscription that is a member of a subscription bundle incorrectly allows the user to unbundle instead of throwing an error. (186018916)

<a id="Known-Issues"></a>

#### Known Issues

- When you launch an app that uses `SKTestSession` for the first time, some StoreKit Test API calls might hang. (186670057) (FB24651858)

  **Workaround:** Set a StoreKit configuration file in your scheme’s run options, then rerun the tests.

## See Also

### watchOS 27

- [watchOS 27.2 Release Notes](watchos-27_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [watchOS 27 Release Notes](watchos-27-release-notes.md): Update your apps to use new features, and test your apps against API changes.
