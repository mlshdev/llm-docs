> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skadimpression/adimpressionidentifier](https://developer.apple.com/documentation/storekit/skadimpression/adimpressionidentifier)

# adImpressionIdentifier (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+

A random value to use for added security.

## Declaration

```swift
var adImpressionIdentifier: String { get set }
```

## Mentioned In

- [Generating the signature to validate view-through ads](../generating-the-signature-to-validate-view-through-ads.md)

<a id="Discussion"></a>

## Discussion

Ad networks set the value of this property to a random value (nonce) at the time of the ad impression.

> **Important**

>  When you generate [signature](signature.md), which is the signature value, you must sign the [adImpressionIdentifier](adimpressionidentifier.md) as an all-lowercase UUID string representation.

## See Also

### Creating a signature

- [init(sourceAppStoreItemIdentifier:advertisedAppStoreItemIdentifier:adNetworkIdentifier:adCampaignIdentifier:adImpressionIdentifier:timestamp:signature:version:)](init%28sourceappstoreitemidentifier_advertisedappstoreitemidentifier_adnetworkidentifier_adcampaignidentifier_adimpressionidentifier_timestamp_signature_version_%29.md): Creates an ad impression object using the supplied values.
- [version](version.md): The version of the SKAdNetwork API.
- [adNetworkIdentifier](adnetworkidentifier.md): A string that represents the advertising network’s unique identifier.
- [sourceIdentifier](sourceidentifier.md): A four-digit integer that ad networks define to represent the ad campaign.
- [adCampaignIdentifier](adcampaignidentifier.md): A number that represents the advertising network’s campaign.
- [advertisedAppStoreItemIdentifier](advertisedappstoreitemidentifier.md): The App Store ID of the app that the ad impression advertises.
- [sourceAppStoreItemIdentifier](sourceappstoreitemidentifier.md): The App Store ID of the app that displays the ad.
- [timestamp](timestamp.md): A number that represents the UNIX time, in milliseconds, of the ad impression.

# adImpressionIdentifier (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+

A random value to use for added security.

## Declaration

```objectivec
@property (nonatomic, strong) NSString * adImpressionIdentifier;
```

## Mentioned In

- [Generating the signature to validate view-through ads](../generating-the-signature-to-validate-view-through-ads.md)

<a id="Discussion"></a>

## Discussion

Ad networks set the value of this property to a random value (nonce) at the time of the ad impression.

> **Important**

>  When you generate [signature](signature.md), which is the signature value, you must sign the [adImpressionIdentifier](adimpressionidentifier.md) as an all-lowercase UUID string representation.

## See Also

### Creating a signature

- [initWithSourceAppStoreItemIdentifier:advertisedAppStoreItemIdentifier:adNetworkIdentifier:adCampaignIdentifier:adImpressionIdentifier:timestamp:signature:version:](init%28sourceappstoreitemidentifier_advertisedappstoreitemidentifier_adnetworkidentifier_adcampaignidentifier_adimpressionidentifier_timestamp_signature_version_%29.md): Creates an ad impression object using the supplied values.
- [version](version.md): The version of the SKAdNetwork API.
- [adNetworkIdentifier](adnetworkidentifier.md): A string that represents the advertising network’s unique identifier.
- [sourceIdentifier](sourceidentifier.md): A four-digit integer that ad networks define to represent the ad campaign.
- [adCampaignIdentifier](adcampaignidentifier.md): A number that represents the advertising network’s campaign.
- [advertisedAppStoreItemIdentifier](advertisedappstoreitemidentifier.md): The App Store ID of the app that the ad impression advertises.
- [sourceAppStoreItemIdentifier](sourceappstoreitemidentifier.md): The App Store ID of the app that displays the ad.
- [timestamp](timestamp.md): A number that represents the UNIX time, in milliseconds, of the ad impression.
