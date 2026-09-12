> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/ios-ipados-release-notes/ios-ipados-18_4-release-notes](https://developer.apple.com/documentation/ios-ipados-release-notes/ios-ipados-18_4-release-notes)

# iOS & iPadOS 18.4 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The iOS & iPadOS 18.4 SDK provides support to develop apps for iPhone and iPad running iOS & iPadOS 18.4. The SDK comes bundled with Xcode 16.3, available from the Mac App Store. For information on the compatibility requirements for Xcode 16.3, see [Xcode 16.3 Release Notes](https://developer.apple.com/documentation/Xcode-Release-Notes/xcode-16_3-release-notes).

<a id="AdAttributionKit"></a>

### AdAttributionKit

<a id="New-Features"></a>

#### New Features

- [AdAttributionKit](https://developer.apple.com/documentation/AdAttributionKit) now supports Overlapping Conversions, which enables advertisers to have multiple simultaneous re-engagement conversions. The system provides a conversion tag as the value of the re-engagement URL parameter. You can pass the conversion tag into the updateConversionValue API to update the specific conversion.  (136100247)
- New [AdAttributionKit](https://developer.apple.com/documentation/AdAttributionKit) testability for advertised apps is in iOS Settings \> Developer \> Ad Attribution Testing. You can now create and interact with development postbacks for your app in iOS Settings, instead of requiring a separate publisher app to sign and show ads for your app. If your app is built with Xcode, you can now create development postbacks for your app in iOS Settings, replacing the need for your app to first be distributed in the App Store or alternative app marketplace.  (136704392)

<a id="Apple-Intelligence"></a>

### Apple Intelligence

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: For languages other than English (US), Apple Intelligence support requires Siri to be enabled.  (144092696)
- Fixed: After restoring iOS 18.4 or iPadOS 18.4, some Apple Intelligence features might not be available or you might see “Downloading support…”.  (145117473)
- Fixed: Some Apple Intelligence features are unavailable until device is rebooted.  (145431408)

<a id="Apple-Vision-Pro-app"></a>

### Apple Vision Pro app

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: On iOS 18.4 beta 1, the Apple Vision Pro app launches with a black screen if downloaded from the App Store. Upgrade to iOS 18.4 beta 2 and newer, and the app will launch as expected.  (146814396)

<a id="hvf"></a>

### hvf

<a id="Known-Issues"></a>

#### Known Issues

- Availability checking is disabled for C APIs in hvf.  (147323772)

  **Workaround:** To enable availability checking, add this ahead of any headers:

  ```
   #define BUILD_FOR_APPLE_SDK 1
  ```

<a id="libxml2"></a>

### libxml2

<a id="Deprecations"></a>

#### Deprecations

- The custom allocation API for libxml2 is deprecated starting in macOS Sequoia 15.4, iOS 18.4, tvOS 18.4, visionOS 2.4, and tvOS 18.4.  If this API is not used, no changes are required.  If this API is currently used, make changes to call `malloc()` instead of `xmlMalloc()` or `xmlMallocAtomic()`; call `realloc()` instead of `xmlRealloc()`; call `free()` instead of `xmlFree()` and call `strdup()` instead of `xmlMemStrdup()`.  Stop calling `xmlMemSetup()`, `xmlMemGet()`, `xmlGcMemSetup()` and `xmlGcMemGet()` to set custom allocation functions.  Do not set global variables `xmlMalloc`, `xmlMallocAtomic`, `xmlRealloc`, `xmlFree`, and `xmlMemStrdup`.  Internally, libxml2 and libxslt will now use the system allocator instead of this API, so do not rely on these libraries using the custom allocation API.  (138404994)

<a id="Nearby-Interaction"></a>

### Nearby Interaction

<a id="New-Features"></a>

#### New Features

- Apps with an active Live Activity can now use Nearby Interaction in the background to perform Ultra Wideband ranging.  (141170262)

<a id="Notifications"></a>

### Notifications

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Scrolling through Notifications might cause them to flicker or collapse momentarily.  (142497254)

<a id="Simulator"></a>

### Simulator

<a id="Known-Issues"></a>

#### Known Issues

- Safari Extensions do not appear in iOS or visionOS simulator.  (147511062)

<a id="Siri"></a>

### Siri

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: In non-English languages, some Siri suggestions might fail to complete successfully.  (143407922)

<a id="StoreKit"></a>

### StoreKit

<a id="New-Features"></a>

#### New Features

- New StoreKit APIs support [Advanced Commerce API](https://developer.apple.com/in-app-purchase/advanced-commerce-api/) in-app purchases.  (118528943)
- By using the new purchase option API `introductoryOfferEligibility(compactJWS:)`, you can now set a preference for whether an introductory offer should be redeemed during a purchase. This API requires you to sign a payload on your server in order to either apply the offer (even if the customer is not eligible) or block it.  (136152740)
- New properties `appTransactionID`, `originalPlatform`, and `period` are now available in [AppTransaction](https://developer.apple.com/documentation/storekit/apptransaction), [Transaction](https://developer.apple.com/documentation/storekit/transaction), [Transaction.Offer](https://developer.apple.com/documentation/storekit/transaction/offer-swift.struct), and [Product.SubscriptionInfo.RenewalInfo](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo).  (136395697)
- The `Platform` symbol used by originalPlatform in AppTransaction has been moved to `AppStore.Platform`.  (143632084)
- The introductory offer eligibility preference API in PurchaseOption has been renamed to `introductoryOfferEligibility(compactJWS:)`.  (143905053)
- `watchOS` is removed as an option in the AppStore.Platform API. `watchOS` is now combined with `iOS`.  (145578780)

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: StoreKit helper application quits with NSCocoaErrorDomain error 4097 during a purchase.  (140317005) (FB15907723)
- Fixed: StoreKit APIs might return errors from the StoreKit 2 domain during a purchase.  (144191684)

<a id="Known-Issues"></a>

#### Known Issues

- Calling `isEligibleForIntroOffer(for:)` will return false if there is no user account signed in.  (146119524)

  **Workaround:** The user should sign in with their App Store account to request introductory offer eligibility.

<a id="Deprecations"></a>

#### Deprecations

- [Transaction.currentEntitlement(for:)](https://developer.apple.com/documentation/storekit/transaction/currententitlement%28for:%29) is now deprecated. This API returns the latest transaction that entitles the user to a product, which may not include transactions originated for family shared subscriptions. Use the `Transaction.currentEntitlements(for:)` method to get all the transactions that entitle the user to a product.  (138320205)

<a id="SwiftUI"></a>

### SwiftUI

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: A color set by the `tint(_:)` modifier does not override the tint color of buttons in that view’s confirmation dialogs and alerts.  (138774306)
- Fixed: For apps compiled against iOS 18.4 beta, applying `defaultVisibility(.hidden)` to customizable toolbar items does not hide the item by default on iOS.  (139815290)
- Fixed: When NavigationStack or NavigationSplitView content updates, the environment is not invalidated unless properties in the environment have changed.  (139855826)
- Fixed: `.onPreferenceChange` modifier’s closure argument is required to be `@Sendable`. This might cause concurrency diagnostics that’s unnecessary if the closure needs to access main actor-isolated values. This particular closure shouldn’t have to be this restrictive.  (145238570)

<a id="System-Calls"></a>

### System Calls

<a id="New-Features"></a>

#### New Features

- fileport_makeport(2) and fileport_makefd(2) are now APIs with manual pages.  (66571768) (FB8270900)

<a id="UIWritingToolsCoordinator"></a>

### UIWritingToolsCoordinator

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: The two optional delegate methods intended for multiple container support are not available.  (136619485)
- Fixed: The delegate method `-writingToolsCoordinator:requestsRangeInContextWithIdentifierForPoint:completion:` does not support asynchronous use of the completion block.  (136824869)
- Fixed: The delegate receives more calls to `-writingToolsCoordinator:selectRanges:inContext:completion:` than necessary.  (138868937)
- Fixed: In iOS 18.4 beta, UIWritingToolsCoordinatorDelegate method `-writingToolsCoordinator:requestsRangeInContextWithIdentifierForPoint:completion:` is marked as optional will not be called.  (139544247)

<a id="URLSession"></a>

### URLSession

<a id="New-Features"></a>

#### New Features

- To enable the new HTTP loading mode, set `usesClassicLoadingMode` to false on URLSessionConfiguration. The new loading mode will become the default in a future release.  (89390075)

<a id="Wi-Fi-Calling"></a>

### Wi-Fi Calling

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: Wi-Fi Calling might not work for US cellular customers on iOS 18.4 beta.  (144450317)

<a id="Writing-Tools"></a>

### Writing Tools

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed: After generating a list, key point, table, or summary in the pop-over, selecting “Replace” results in an error message.  (145186545)

## See Also

### iOS & iPadOS 18

- [iOS & iPadOS 18.6 Release Notes](ios-ipados-18_6-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 18.5 Release Notes](ios-ipados-18_5-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 18.3 Release Notes](ios-ipados-18_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 18.2 Release Notes](ios-ipados-18_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 18.1 Release Notes](ios-ipados-18_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [iOS & iPadOS 18 Release Notes](ios-ipados-18-release-notes.md): Update your apps to use new features, and test your apps against API changes.
