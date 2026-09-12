> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skstoreproductparametercampaigntoken](https://developer.apple.com/documentation/storekit/skstoreproductparametercampaigntoken)

# SKStoreProductParameterCampaignToken (Swift)

**Framework:** StoreKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 11.0+

The key representing an App Analytics campaign.

## Declaration

```swift
let SKStoreProductParameterCampaignToken: String
```

<a id="Discussion"></a>

## Discussion

The value for this key is an instance of [NSString](../foundation/nsstring.md), containing any 40-byte string.

This token allows you to track the effectiveness of your Affiliate Program link and your App Analytics campaign.

For more information about the Affiliate Program, see the Affiliate Program at [https://apple.com/itunes/affiliates](https://apple.com/itunes/affiliates). For more information about App Store Connect Analytics, see [App Store Connect Developer Guide](https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/About.html#//apple_ref/doc/uid/TP40011225).

## See Also

### Affiliate and Analytics Keys

- [SKStoreProductParameterProductIdentifier](skstoreproductparameterproductidentifier.md): The key representing the product identifier for the promoted product you want the store to display at the top of the page.
- [SKStoreProductParameterAdvertisingPartnerToken](skstoreproductparameteradvertisingpartnertoken.md): The key representing the advertising partner you wish to use for any purchase made through the view controller.
- [SKStoreProductParameterAffiliateToken](skstoreproductparameteraffiliatetoken.md): The key representing the affiliate identifier you wish to use for any purchase made through the view controller.
- [SKStoreProductParameterProviderToken](skstoreproductparameterprovidertoken.md): The key representing the provider token for the developer that created the app specified by the [SKStoreProductParameterITunesItemIdentifier](skstoreproductparameteritunesitemidentifier.md) key.
- [SKStoreProductParameterCustomProductPageIdentifier](skstoreproductparametercustomproductpageidentifier.md): The key that represents the custom product page identifier you want the store to display when you present the view controller.

# SKStoreProductParameterCampaignToken (Objective-C)

**Framework:** StoreKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 11.0+

The key representing an App Analytics campaign.

## Declaration

```objectivec
extern NSString * const SKStoreProductParameterCampaignToken;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an instance of [NSString](../foundation/nsstring.md), containing any 40-byte string.

This token allows you to track the effectiveness of your Affiliate Program link and your App Analytics campaign.

For more information about the Affiliate Program, see the Affiliate Program at [https://apple.com/itunes/affiliates](https://apple.com/itunes/affiliates). For more information about App Store Connect Analytics, see [App Store Connect Developer Guide](https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/About.html#//apple_ref/doc/uid/TP40011225).

## See Also

### Affiliate and Analytics Keys

- [SKStoreProductParameterProductIdentifier](skstoreproductparameterproductidentifier.md): The key representing the product identifier for the promoted product you want the store to display at the top of the page.
- [SKStoreProductParameterAdvertisingPartnerToken](skstoreproductparameteradvertisingpartnertoken.md): The key representing the advertising partner you wish to use for any purchase made through the view controller.
- [SKStoreProductParameterAffiliateToken](skstoreproductparameteraffiliatetoken.md): The key representing the affiliate identifier you wish to use for any purchase made through the view controller.
- [SKStoreProductParameterProviderToken](skstoreproductparameterprovidertoken.md): The key representing the provider token for the developer that created the app specified by the [SKStoreProductParameterITunesItemIdentifier](skstoreproductparameteritunesitemidentifier.md) key.
- [SKStoreProductParameterCustomProductPageIdentifier](skstoreproductparametercustomproductpageidentifier.md): The key that represents the custom product page identifier you want the store to display when you present the view controller.
