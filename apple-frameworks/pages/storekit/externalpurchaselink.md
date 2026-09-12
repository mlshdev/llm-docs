> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/externalpurchaselink](https://developer.apple.com/documentation/storekit/externalpurchaselink)

# ExternalPurchaseLink

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

An enumeration that enables qualifying apps to offer external purchase links.

## Declaration

```swift
enum ExternalPurchaseLink
```

<a id="overview"></a>

## Overview

This functionality is only available to apps with the [com.apple.developer.storekit.external-purchase-link](../bundleresources/entitlements/com.apple.developer.storekit.external-purchase-link.md) entitlement.

For more information, see:

- [Communication and promotion of offers on the App Store in the EU](https://developer.apple.com/support/communication-and-promotion-of-offers-on-the-app-store-in-the-eu/)
- [Distributing dating apps in the Netherlands](https://developer.apple.com/support/storekit-external-entitlement/)
- [Distributing apps in Russia that provide an external purchase link](https://developer.apple.com/contact/request/storekit-external-entitlement-ru/)
- [Distributing music streaming apps in the EEA that provide an external purchase link](https://developer.apple.com/support/music-streaming-services-entitlement-eea/)

> **Note**

>  You must check [canMakePayments](appstore/canmakepayments.md) before calling the External Purchase APIs. If [canMakePayments](appstore/canmakepayments.md) is `false`, don’t call the [ExternalPurchaseLink](externalpurchaselink.md) or [ExternalPurchase](externalpurchase.md) APIs.

## Topics

### Getting multiple external purchase links

- [SKExternalPurchaseMultiLink](../bundleresources/information-property-list/skexternalpurchasemultilink.md): A dictionary that contains an array of URLs to websites where people using your app can make external purchases.
- [eligibleURLs](externalpurchaselink/eligibleurls.md): An array of external purchase links for the current storefront that the app configured and from which it chooses.
- [open(url:)](externalpurchaselink/open%28url_%29.md): Presents a continuation sheet that enables people to choose whether your app shows the indicated URL link for external purchases.

### Getting a single external purchase link

- [SKExternalPurchaseLink](../bundleresources/information-property-list/skexternalpurchaselink.md): A dictionary that contains URLs to websites where people using your app can make external purchases for supported regions.
- [canOpen](externalpurchaselink/canopen.md): A Boolean value that indicates whether the app can successfully open the configured external purchase link in the current App Store storefront.
- [open()](externalpurchaselink/open%28%29.md): Presents a continuation sheet that enables people to choose whether your app shows its link for external purchases.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Implementing single and multiple external purchase links in the European Economic Area (EEA) and Russia

- [com.apple.developer.storekit.external-purchase-link](../bundleresources/entitlements/com.apple.developer.storekit.external-purchase-link.md): A Boolean value that indicates whether your app can include a link that directs people to a website to make an external purchase.
- [SKExternalPurchaseMultiLink](../bundleresources/information-property-list/skexternalpurchasemultilink.md): A dictionary that contains an array of URLs to websites where people using your app can make external purchases.
- [SKExternalPurchaseLink](../bundleresources/information-property-list/skexternalpurchaselink.md): A dictionary that contains URLs to websites where people using your app can make external purchases for supported regions.
