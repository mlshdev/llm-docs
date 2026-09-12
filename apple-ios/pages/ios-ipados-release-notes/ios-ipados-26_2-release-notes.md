> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/ios-ipados-release-notes/ios-ipados-26_2-release-notes](https://developer.apple.com/documentation/ios-ipados-release-notes/ios-ipados-26_2-release-notes)

# iOS & iPadOS 26.2 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The iOS & iPadOS 26.2 SDK provides support to develop apps for iPhone and iPad running iOS & iPadOS 26.2. The SDK comes bundled with Xcode 26.2, available from the Mac App Store. For information on the compatibility requirements for Xcode 26.2, see [Xcode 26.2 Release Notes](https://developer.apple.com/documentation/Xcode-Release-Notes/xcode-26_2-release-notes).

<a id="AirDrop"></a>

### AirDrop

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Devices set to “Everyone” on 26.2 beta 1 are not discoverable by devices on 26.2 beta 2.  (163636875)

<a id="DeclaredAgeRange-API"></a>

### DeclaredAgeRange API

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Usage of the following symbols within the DeclaredAgeRange framework will cause a runtime crash. You must recompile your app against the 26.2 SDK to receive this fix. 

  - `AgeRangeService.isEligibleForAgeFeatures`
  - `AgeRangeService.AgeRangeDeclaration.checkedByOtherMethod`
  - `AgeRangeService.AgeRangeDeclaration.guardianCheckedByOtherMethod`
  - `AgeRangeService.AgeRangeDeclaration.governmentIDChecked`
  - `AgeRangeService.AgeRangeDeclaration.guardianGovernmentIDChecked`
  - `AgeRangeService.AgeRangeDeclaration.paymentChecked`
  - `AgeRangeService.AgeRangeDeclaration.guardianPaymentChecked`  (165248390) (FB21121092)

<a id="HealthKit"></a>

### HealthKit

<a id="New-Features"></a>

#### New Features

- Hypertension notifications are now available for reading with a new API. Your app can now request authorization for `HKCategoryTypeIdentifierHypertensionEvent` to read notifications resulting from the Hypertension Notifications Feature on Apple Watch.  (153344834)

<a id="Instruments"></a>

### Instruments

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: The Allocations instrument sometimes fails to report reference counting operations for native Swift types.  (163080666)

<a id="PermissionKit-API"></a>

### PermissionKit API

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: PermissionKit Significant App Update API is not testable in sandbox.  (163601229)

<a id="StoreKit"></a>

### StoreKit

<a id="New-Features"></a>

#### New Features

- [AppStore.ageRatingCode](https://developer.apple.com/documentation/storekit/appstore/ageratingcode) API provides the current age rating code for your app. Use this property to fetch the age rating and compare it with the last known rating to check for changes.  (160960740)

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: An issue prevents the purchase of a subscription using a win-back offer when testing with StoreKit Testing in Xcode.  (162357552) (FB20604848)
- Fixed: `SubscriptionStatus.all` returning old `SubscriptionStatus` after a subscription change.  (163505178)

<a id="TLS"></a>

### TLS

<a id="Known-Issues"></a>

#### Known Issues

- The default TLS Client Hello has been modified. If your app or website communicates with servers configured with strict bot-detection or security policies that only allow traffic with known TLS fingerprints, then users might be unable to login or perform other actions.

  TLS Client Hellos are expected to change across releases as Apple works to offer the most secure TLS options. Servers should adopt resilient and adaptable bot-detection policies that can handle changes in TLS Client Hellos. Overly restrictive policies can cause difficult to triage disruptions to user experience.  (163151032)

<a id="Watch-Face-Gallery"></a>

### Watch Face Gallery

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Watch Face Gallery text is in English only.  (164187878)

## See Also

### iOS & iPadOS 26

- [iOS & iPadOS 26.6 Release Notes](ios-ipados-26_6-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 26.5 Release Notes](ios-ipados-26_5-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 26.4 Release Notes](ios-ipados-26_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 26.3 Release Notes](ios-ipados-26_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 26.1 Release Notes](ios-ipados-26_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 26 Release Notes](ios-ipados-26-release-notes.md): Update your apps to use new features, and test your apps against API changes.
