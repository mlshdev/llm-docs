> Snapshot-pinned source payload for Apple watchOS snapshot-4bff84466040; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchos-release-notes/watchos-27_2-release-notes

# watchOS 27.2 Beta Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The watchOS 27.2 SDK provides support to develop watchOS apps for Apple Watch devices running watchOS 27.2 beta. The SDK comes bundled with Xcode 27.2, available from the Mac App Store. For information on the compatibility requirements for Xcode 27.2, see [Xcode 27.2 Release Notes](https://developer.apple.com/documentation/Xcode-Release-Notes/xcode-27_2-release-notes).

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

### watchOS 27

- [watchOS 27 Release Notes](watchos-27-release-notes.md): Update your apps to use new features, and test your apps against API changes.
