> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skstoreproductparameteradnetworkversion](https://developer.apple.com/documentation/storekit/skstoreproductparameteradnetworkversion)

# SKStoreProductParameterAdNetworkVersion (Swift)

**Framework:** StoreKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+

The key that represents the version of the ad network API.

## Declaration

```swift
let SKStoreProductParameterAdNetworkVersion: String
```

## Mentioned In

- [Generating the signature to validate StoreKit-rendered ads](generating-the-signature-to-validate-storekit-rendered-ads.md)
- [Identifying the parameters in install-validation postbacks](identifying-the-parameters-in-install-validation-postbacks.md)

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSString](../foundation/nsstring.md). Set this key to version number “`4.0`”, “`3.0`”, “`2.2"`, `“2.1"`, or `"2.0"`. Use the highest available version whenever possible. For version availability, see [SKAdNetwork release notes](skadnetwork-release-notes.md).

Ad networks use this key and the other [Ad network install-validation keys](ad-network-install-validation-keys.md) when signing ads. For more information, see [Generating the signature to validate StoreKit-rendered ads](generating-the-signature-to-validate-storekit-rendered-ads.md).

## See Also

### Required keys for SKAdNetwork 2 and later

- [SKStoreProductParameterAdNetworkSourceAppStoreIdentifier](skstoreproductparameteradnetworksourceappstoreidentifier.md): The key that represents the App Store ID of the app that displays the ad.

# SKStoreProductParameterAdNetworkVersion (Objective-C)

**Framework:** StoreKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+

The key that represents the version of the ad network API.

## Declaration

```objectivec
extern NSString * const SKStoreProductParameterAdNetworkVersion;
```

## Mentioned In

- [Generating the signature to validate StoreKit-rendered ads](generating-the-signature-to-validate-storekit-rendered-ads.md)
- [Identifying the parameters in install-validation postbacks](identifying-the-parameters-in-install-validation-postbacks.md)

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSString](../foundation/nsstring.md). Set this key to version number “`4.0`”, “`3.0`”, “`2.2"`, `“2.1"`, or `"2.0"`. Use the highest available version whenever possible. For version availability, see [SKAdNetwork release notes](skadnetwork-release-notes.md).

Ad networks use this key and the other [Ad network install-validation keys](ad-network-install-validation-keys.md) when signing ads. For more information, see [Generating the signature to validate StoreKit-rendered ads](generating-the-signature-to-validate-storekit-rendered-ads.md).

## See Also

### Required keys for SKAdNetwork 2 and later

- [SKStoreProductParameterAdNetworkSourceAppStoreIdentifier](skstoreproductparameteradnetworksourceappstoreidentifier.md): The key that represents the App Store ID of the app that displays the ad.
