> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionos-release-notes/visionos-27_2-release-notes

# visionOS 27.2 Beta Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The visionOS 27.2 SDK provides support to develop apps for Apple Vision Pro devices running visionOS 27.2 beta. The SDK comes bundled with Xcode 27.2, available from the Mac App Store. For information on the compatibility requirements for Xcode 27.2, see [Xcode 27.2 Release Notes](https://developer.apple.com/documentation/Xcode-Release-Notes/xcode-27_2-release-notes).

<a id="Quick-Look"></a>

### Quick Look

<a id="Known-Issues"></a>

#### Known Issues

- 3D objects opened from Safari might reposition unexpectedly when you move them. (187035825)

<a id="StoreKit-Testing-in-Xcode"></a>

### StoreKit Testing in Xcode

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Intro offer eligibility does not reset immediately after calling `SKTestSession.clearTransactions()`. (183933307) (FB24137836)
- Fixed: Changing the storefront or locale using `SKTestSession` doesn’t propagate through `Storefront.updates`. (184155259)
- Fixed: Failed purchases using `SKTestSession` might display error dialogs even when `dialogsDisabled` is set to true. (184255116)

<a id="Known-Issues"></a>

#### Known Issues

- Making a purchase in-app for a subscription that is a member of a subscription bundle incorrectly allows the user to unbundle instead of throwing an error. (186018916)

## See Also

### visionOS 27

- [visionOS 27 Release Notes](visionos-27-release-notes.md): Update your apps to use new features, and test your apps against API changes.
