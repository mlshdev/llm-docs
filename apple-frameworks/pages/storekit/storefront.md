> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/storefront](https://developer.apple.com/documentation/storekit/storefront)

# Storefront

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The region and unique identifier of the App Store storefront for the device.

## Declaration

```swift
struct Storefront
```

## Mentioned In

- [Testing In-App Purchases with sandbox](testing-in-app-purchases-with-sandbox.md)

<a id="overview"></a>

## Overview

In-app products you create through App Store Connect are available for sale in each region with an App Store. You can use the storefront information to determine the customer’s region, and offer in-app products suitable for that region.

You need to maintain your own list of product identifiers and the storefronts where you want to make them available.

> **Note**

>  Don’t save the storefront information with your customer information because storefront information can change at any time. Get the storefront identifier immediately before you display product information or availability in your app. Don’t use storefront information to develop or enhance a customer profile, or to track customers for advertising or marketing purposes.

<a id="Change-the-App-Store-country-or-region-in-the-sandbox-environment"></a>

### Change the App Store country or region in the sandbox environment

When you change the App Store Country or Region in App Store Connect for a Sandbox Apple Account, it changes the storefront in your app. Change the region to test In-App Purchases for different regions in your app. For more information about changing the App Store Country or Region in App Store Connect, see [Test in-app purchases](https://developer.apple.com/help/app-store-connect/test-in-app-purchases/manage-sandbox-apple-account-settings/).

> **Important**

>  To successfully activate a storefront after you change the region in App Store Connect, sign out of the Sandbox Apple Account on the device and sign back in.

## Topics

### Identifying the storefront

- [current](storefront/current.md): The current App Store storefront for product purchases.
- [countryCode](storefront/countrycode.md): The three-letter code that represents the country or region associated with the App Store storefront.
- [id](storefront/id.md): An Apple-defined value that uniquely identifies an App Store storefront.

### Listening for storefront changes

- [updates](storefront/updates.md): The asynchronous sequence that emits storefront information when the system updates the storefront.
- [Storefront.Storefronts](storefront/storefronts.md): An asynchronous sequence that listens for changes to the storefront.

### Getting the currency for the storefront

- [currency](storefront/currency.md): The currency that the storefront uses.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Storefront information

- [current](storefront/current.md): The current App Store storefront for product purchases.
- [updates](storefront/updates.md): The asynchronous sequence that emits storefront information when the system updates the storefront.
