> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/appstore](https://developer.apple.com/documentation/storekit/appstore)

# AppStore

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Interactions with the App Store, such as managing subscriptions, verifying devices, authorizing payments, synchronizing transactions, getting the environment, and more.

## Declaration

```swift
enum AppStore
```

<a id="overview"></a>

## Overview

Use these static functions and variables to perform tasks like showing the manage subscriptions sheet, getting the device verification ID, determining whether users can make purchases, and more.

## Topics

### Checking the environment

- [AppStore.Environment](appstore/environment.md): Constants that represent the App Store server environment.

### Checking payment setup

- [canMakePayments](appstore/canmakepayments.md): A Boolean value that indicates whether the person can make purchases.

### Checking current age rating

- [ageRatingCode](appstore/ageratingcode.md): The current age rating code for your app.

### Verifying devices

- [deviceVerificationID](appstore/deviceverificationid.md): The device verification identifier to use to verify whether signed information is valid for the current device.

### Getting the platform

- [AppStore.Platform](appstore/platform.md): Values that represent Apple platforms.

### Managing subscriptions

- [showManageSubscriptions(in:)](appstore/showmanagesubscriptions%28in_%29.md): Presents the App Store sheet for managing subscriptions.
- [showManageSubscriptions(in:subscriptionGroupID:)](appstore/showmanagesubscriptions%28in_subscriptiongroupid_%29.md): Presents the App Store sheet for managing subscriptions for a subscription group.

### Requesting reviews

- [RequestReviewAction](requestreviewaction.md): An instance that tells StoreKit to request an App Store rating or review, if appropriate.
- [requestReview(in:)](appstore/requestreview%28in_%29-1q8qs.md): Tells StoreKit to request an App Store rating or review from the user, if appropriate, using the specified scene.
- [requestReview(in:)](appstore/requestreview%28in_%29-4r0y9.md): Tells StoreKit to request an App Store rating or review from the user, if appropriate, using the specified view controller.

### Presenting the offer code redemption sheet

- [Supporting offer codes in your app](supporting-offer-codes-in-your-app.md): Enable customers to redeem offer codes through the App Store or within your app.
- [presentOfferCodeRedeemSheet(from:options:)](appstore/presentoffercoderedeemsheet%28from_options_%29-89agc.md): Presents a sheet that enables users to redeem subscription offer codes that you configure in App Store Connect.
- [offerCodeRedemption(options:isPresented:onCompletion:)](https://developer.apple.com/documentation/swiftui/view/offercoderedemption%28options:ispresented:oncompletion:%29): Presents a sheet that enables customers to redeem offer codes that you configure in App Store Connect.

### Restoring purchases

- [sync()](appstore/sync%28%29.md): Synchronizes your app’s transaction information and subscription status with information from the App Store.

### Merchandising

- [AppStoreMerchandisingKind](appstoremerchandisingkind.md)

### Deprecated

- [presentOfferCodeRedeemSheet(in:)](appstore/presentoffercoderedeemsheet%28in_%29.md): Deprecated. Displays a sheet in the window scene that enables customers to redeem an offer code that you configure in App Store Connect.
- [offerCodeRedemption(isPresented:onCompletion:)](https://developer.apple.com/documentation/swiftui/view/offercoderedemption%28ispresented:oncompletion:%29): Deprecated.
- [presentOfferCodeRedeemSheet(from:)](appstore/presentoffercoderedeemsheet%28from_%29.md): Deprecated. Displays a sheet in the view that enables customers to redeem an offer code that you configure in App Store Connect.

### Type Methods

- [presentMerchandising(\_:from:)](appstore/presentmerchandising%28__from_%29-8bblo.md): Display a merchandising view.
- [presentMerchandising(\_:from:)](appstore/presentmerchandising%28__from_%29-hkrd.md): Display a merchandising view.
- [presentOfferCodeRedeemSheet(from:options:)](appstore/presentoffercoderedeemsheet%28from_options_%29-gj8m.md): Presents a sheet that enables users to redeem subscription offer codes that you configure in App Store Connect.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### App Store interactions

- [AppTransaction](apptransaction.md): Information that represents the customer’s purchase of the app, cryptographically signed by the App Store.
