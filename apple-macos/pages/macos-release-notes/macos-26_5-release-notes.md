> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/macos-release-notes/macos-26_5-release-notes](https://developer.apple.com/documentation/macos-release-notes/macos-26_5-release-notes)

# macOS Tahoe 26.5 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The macOS 26.5 SDK provides support to develop apps for Mac computers running Tahoe 26.5. The SDK comes bundled with Xcode 26.5, available from the Mac App Store. For information on the compatibility requirements for Xcode 26.5, see [Xcode 26.5 Release Notes](https://developer.apple.com/documentation/Xcode-Release-Notes/xcode-26_5-release-notes).

<a id="StoreKit"></a>

### StoreKit

<a id="New-Features"></a>

#### New Features

- You can read pricing information for subscriptions that have a monthly with 12-month commitment billing plan configuration in App Store Connect or StoreKit Testing in Xcode through the new `PricingTerms` model on `SubscriptionInfo.pricingTerms`.  (150388310)
- You can specify the billing plan type to use for subscriptions that have a monthly with 12-month commitment billing plan configuration using the new `billingPlanType` `PurchaseOption`.  (150388542)
- Read customer entitlement metadata for subscriptions purchased with a monthly billing plan type through the new `CommitmentInfo` data model on `Transaction` and `SubscriptionRenewalInfo`.  (150388746)
- When you import both StoreKit and SwiftUI, you can merchandise the monthly billing plan configuration for subscriptions that have a monthly with 12-month commitment billing plan using built-in styles through the new `preferredSubscriptionPricingTerms(_:) API`.  (150389069)

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

### macOS 26

- [macOS Tahoe 26.6 Release Notes](macos-26_6-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Tahoe 26.4 Release Notes](macos-26_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Tahoe 26.3 Release Notes](macos-26_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Tahoe 26.2 Release Notes](macos-26_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Tahoe 26.1 Release Notes](macos-26_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [macOS Tahoe 26 Release Notes](macos-26-release-notes.md): Update your apps to use new features, and test your apps against API changes.
