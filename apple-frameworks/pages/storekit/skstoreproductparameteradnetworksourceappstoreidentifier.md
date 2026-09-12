> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skstoreproductparameteradnetworksourceappstoreidentifier](https://developer.apple.com/documentation/storekit/skstoreproductparameteradnetworksourceappstoreidentifier)

# SKStoreProductParameterAdNetworkSourceAppStoreIdentifier (Swift)

**Framework:** StoreKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+

The key that represents the App Store ID of the app that displays the ad.

## Declaration

```swift
let SKStoreProductParameterAdNetworkSourceAppStoreIdentifier: String
```

## Mentioned In

- [Generating the signature to validate StoreKit-rendered ads](generating-the-signature-to-validate-storekit-rendered-ads.md)
- [Identifying the parameters in install-validation postbacks](identifying-the-parameters-in-install-validation-postbacks.md)
- [Verifying an install-validation postback](verifying-an-install-validation-postback.md)

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../foundation/nsnumber.md). Provide the App Store item identifier of the app that’s displaying the ad.

During testing, if you’re using a development-signed build to display the ads and not an app from App Store, use `0` as the item identifier.

## See Also

### Required keys for SKAdNetwork 2 and later

- [SKStoreProductParameterAdNetworkVersion](skstoreproductparameteradnetworkversion.md): The key that represents the version of the ad network API.

# SKStoreProductParameterAdNetworkSourceAppStoreIdentifier (Objective-C)

**Framework:** StoreKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+

The key that represents the App Store ID of the app that displays the ad.

## Declaration

```objectivec
extern NSString * const SKStoreProductParameterAdNetworkSourceAppStoreIdentifier;
```

## Mentioned In

- [Generating the signature to validate StoreKit-rendered ads](generating-the-signature-to-validate-storekit-rendered-ads.md)
- [Identifying the parameters in install-validation postbacks](identifying-the-parameters-in-install-validation-postbacks.md)
- [Verifying an install-validation postback](verifying-an-install-validation-postback.md)

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../foundation/nsnumber.md). Provide the App Store item identifier of the app that’s displaying the ad.

During testing, if you’re using a development-signed build to display the ads and not an app from App Store, use `0` as the item identifier.

## See Also

### Required keys for SKAdNetwork 2 and later

- [SKStoreProductParameterAdNetworkVersion](skstoreproductparameteradnetworkversion.md): The key that represents the version of the ad network API.
