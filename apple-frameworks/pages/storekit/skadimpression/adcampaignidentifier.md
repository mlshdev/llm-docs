> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skadimpression/adcampaignidentifier](https://developer.apple.com/documentation/storekit/skadimpression/adcampaignidentifier)

# adCampaignIdentifier (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+

A number that represents the advertising network’s campaign.

## Declaration

```swift
var adCampaignIdentifier: NSNumber { get set }
```

## Mentioned In

- [Generating the signature to validate view-through ads](../generating-the-signature-to-validate-view-through-ads.md)
- [Identifying the parameters in install-validation postbacks](../identifying-the-parameters-in-install-validation-postbacks.md)

<a id="Discussion"></a>

## Discussion

Ad networks set their own campaign identifiers, which must be an integer `>=1` and `<=100.`

## See Also

### Creating a signature

- [init(sourceAppStoreItemIdentifier:advertisedAppStoreItemIdentifier:adNetworkIdentifier:adCampaignIdentifier:adImpressionIdentifier:timestamp:signature:version:)](init%28sourceappstoreitemidentifier_advertisedappstoreitemidentifier_adnetworkidentifier_adcampaignidentifier_adimpressionidentifier_timestamp_signature_version_%29.md): Creates an ad impression object using the supplied values.
- [version](version.md): The version of the SKAdNetwork API.
- [adNetworkIdentifier](adnetworkidentifier.md): A string that represents the advertising network’s unique identifier.
- [sourceIdentifier](sourceidentifier.md): A four-digit integer that ad networks define to represent the ad campaign.
- [advertisedAppStoreItemIdentifier](advertisedappstoreitemidentifier.md): The App Store ID of the app that the ad impression advertises.
- [adImpressionIdentifier](adimpressionidentifier.md): A random value to use for added security.
- [sourceAppStoreItemIdentifier](sourceappstoreitemidentifier.md): The App Store ID of the app that displays the ad.
- [timestamp](timestamp.md): A number that represents the UNIX time, in milliseconds, of the ad impression.

# adCampaignIdentifier (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+

A number that represents the advertising network’s campaign.

## Declaration

```objectivec
@property (nonatomic, strong) NSNumber * adCampaignIdentifier;
```

## Mentioned In

- [Generating the signature to validate view-through ads](../generating-the-signature-to-validate-view-through-ads.md)
- [Identifying the parameters in install-validation postbacks](../identifying-the-parameters-in-install-validation-postbacks.md)

<a id="Discussion"></a>

## Discussion

Ad networks set their own campaign identifiers, which must be an integer `>=1` and `<=100.`

## See Also

### Creating a signature

- [initWithSourceAppStoreItemIdentifier:advertisedAppStoreItemIdentifier:adNetworkIdentifier:adCampaignIdentifier:adImpressionIdentifier:timestamp:signature:version:](init%28sourceappstoreitemidentifier_advertisedappstoreitemidentifier_adnetworkidentifier_adcampaignidentifier_adimpressionidentifier_timestamp_signature_version_%29.md): Creates an ad impression object using the supplied values.
- [version](version.md): The version of the SKAdNetwork API.
- [adNetworkIdentifier](adnetworkidentifier.md): A string that represents the advertising network’s unique identifier.
- [sourceIdentifier](sourceidentifier.md): A four-digit integer that ad networks define to represent the ad campaign.
- [advertisedAppStoreItemIdentifier](advertisedappstoreitemidentifier.md): The App Store ID of the app that the ad impression advertises.
- [adImpressionIdentifier](adimpressionidentifier.md): A random value to use for added security.
- [sourceAppStoreItemIdentifier](sourceappstoreitemidentifier.md): The App Store ID of the app that displays the ad.
- [timestamp](timestamp.md): A number that represents the UNIX time, in milliseconds, of the ad impression.
