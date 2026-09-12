> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/skincludeconsumableinapppurchasehistory](https://developer.apple.com/documentation/bundleresources/information-property-list/skincludeconsumableinapppurchasehistory)

# SKIncludeConsumableInAppPurchaseHistory

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A Boolean value that determines whether StoreKit includes finished consumable In-App Purchases in transaction information.

## Details

`SKIncludeConsumableInAppPurchaseHistory`

<a id="Discussion"></a>

## Discussion

By default, this value is `false`. When it’s `false`, StoreKit doesn’t return finished consumables (unless refunded or revoked) in the transaction information from the following APIs:

- The [all](../../storekit/transaction/all.md) sequence in [Transaction](../../storekit/transaction.md), which returns the customer’s transaction history for your app
- The [latest(for:)](../../storekit/transaction/latest%28for_%29.md) in [Transaction](../../storekit/transaction.md), which returns the customer’s most recent transaction for a specific product
- The [latestTransaction](../../storekit/product/latesttransaction.md) in [Product](../../storekit/product.md), which provides the customer’s most recent transaction for the product

When you set this value to `true`, StoreKit includes all In-App Purchase transactions — including all finished consumables — in the transaction information when you use the [all](../../storekit/transaction/all.md), [latest(for:)](../../storekit/transaction/latest%28for_%29.md), and [latestTransaction](../../storekit/product/latesttransaction.md) APIs.

> **Warning**

>  Before you set [SKIncludeConsumableInAppPurchaseHistory](skincludeconsumableinapppurchasehistory.md) to `true`, be sure you have a way to reconcile a customer’s consumable transactions on your server, not only on the device. For example, store a transaction’s unique transaction identifier, [id](../../storekit/transaction/id.md), along with its finish state to avoid unintentionally delivering content multiple times if the customer reinstalls the app. Use [unfinished](../../storekit/transaction/unfinished.md) to get and process unfinished transactions.

## See Also

### StoreKit

- [SKAdNetworkItems](skadnetworkitems.md): An array of dictionaries containing a list of ad network IDs.
- [SKExternalLinkAccount](skexternallinkaccount.md): A dictionary that contains localized URLs to an external website for account creation or management.
- [SKExternalPurchase](skexternalpurchase.md): A string array of country codes that indicates your app supports external purchases.
- [SKExternalPurchaseCustomLinkRegions](skexternalpurchasecustomlinkregions.md): An array of country code strings that indicate the regions where your app supports custom links for the communication and promotion of offers.
- [SKExternalPurchaseLink](skexternalpurchaselink.md): A dictionary that contains URLs to websites where people using your app can make external purchases for supported regions.
- [SKExternalPurchaseMultiLink](skexternalpurchasemultilink.md): A dictionary that contains an array of URLs to websites where people using your app can make external purchases.
- [SKExternalPurchaseLinkStreamingRegions](skexternalpurchaselinkstreamingregions.md): A list of country codes that indicate the regions where your music-streaming app communicates and promotes offers.
