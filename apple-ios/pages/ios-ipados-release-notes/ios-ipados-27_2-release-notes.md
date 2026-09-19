> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/ios-ipados-release-notes/ios-ipados-27_2-release-notes

# iOS & iPadOS 27.2 Beta Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The iOS & iPadOS 27.2 SDK provides support to develop apps for iPhone and iPad running iOS & iPadOS 27.2 beta. The SDK comes bundled with Xcode 27.2, available from the Mac App Store. For information on the compatibility requirements for Xcode 27.2, see [Xcode 27.2 Release Notes](https://developer.apple.com/documentation/Xcode-Release-Notes/xcode-27_2-release-notes).

<a id="App-Tracking-Transparency"></a>

### App Tracking Transparency

<a id="New-Features"></a>

#### New Features

- `AppTrackingTransparency` ([ATT](https://developer.apple.com/documentation/apptrackingtransparency)) now supports an alternative expanded prompt and re-prompting on a yearly basis for EU users. The alternative prompt is required for users in France, Germany, Italy, Poland, and Romania. (179504171)

<a id="Health"></a>

### Health

<a id="Known-Issues"></a>

#### Known Issues

- Personalized summaries may not generate as expected in the Insights tab. (186964423)

<a id="Shortcuts"></a>

### Shortcuts

<a id="Known-Issues"></a>

#### Known Issues

- Describe a Shortcut might fail with the error “Something went wrong. Try again later.” (187499433)

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

### iOS & iPadOS 27

- [iOS & iPadOS 27 Release Notes](ios-ipados-27-release-notes.md): Update your apps to use new features, and test your apps against API changes.
