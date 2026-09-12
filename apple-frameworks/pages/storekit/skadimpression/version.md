> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skadimpression/version](https://developer.apple.com/documentation/storekit/skadimpression/version)

# version (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+

The version of the SKAdNetwork API.

## Declaration

```swift
var version: String { get set }
```

## Mentioned In

- [Generating the signature to validate view-through ads](../generating-the-signature-to-validate-view-through-ads.md)
- [Identifying the parameters in install-validation postbacks](../identifying-the-parameters-in-install-validation-postbacks.md)

<a id="Discussion"></a>

## Discussion

Set this instance property to the SKAdNetwork version you’re using to sign the view-through ad impression. View-through ads are available starting in version 2.2. For more information about versions and availability, see [SKAdNetwork release notes](../skadnetwork-release-notes.md).

## See Also

### Creating a signature

- [init(sourceAppStoreItemIdentifier:advertisedAppStoreItemIdentifier:adNetworkIdentifier:adCampaignIdentifier:adImpressionIdentifier:timestamp:signature:version:)](init%28sourceappstoreitemidentifier_advertisedappstoreitemidentifier_adnetworkidentifier_adcampaignidentifier_adimpressionidentifier_timestamp_signature_version_%29.md): Creates an ad impression object using the supplied values.
- [adNetworkIdentifier](adnetworkidentifier.md): A string that represents the advertising network’s unique identifier.
- [sourceIdentifier](sourceidentifier.md): A four-digit integer that ad networks define to represent the ad campaign.
- [adCampaignIdentifier](adcampaignidentifier.md): A number that represents the advertising network’s campaign.
- [advertisedAppStoreItemIdentifier](advertisedappstoreitemidentifier.md): The App Store ID of the app that the ad impression advertises.
- [adImpressionIdentifier](adimpressionidentifier.md): A random value to use for added security.
- [sourceAppStoreItemIdentifier](sourceappstoreitemidentifier.md): The App Store ID of the app that displays the ad.
- [timestamp](timestamp.md): A number that represents the UNIX time, in milliseconds, of the ad impression.

# version (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+

The version of the SKAdNetwork API.

## Declaration

```objectivec
@property (nonatomic, strong) NSString * version;
```

## Mentioned In

- [Generating the signature to validate view-through ads](../generating-the-signature-to-validate-view-through-ads.md)
- [Identifying the parameters in install-validation postbacks](../identifying-the-parameters-in-install-validation-postbacks.md)

<a id="Discussion"></a>

## Discussion

Set this instance property to the SKAdNetwork version you’re using to sign the view-through ad impression. View-through ads are available starting in version 2.2. For more information about versions and availability, see [SKAdNetwork release notes](../skadnetwork-release-notes.md).

## See Also

### Creating a signature

- [initWithSourceAppStoreItemIdentifier:advertisedAppStoreItemIdentifier:adNetworkIdentifier:adCampaignIdentifier:adImpressionIdentifier:timestamp:signature:version:](init%28sourceappstoreitemidentifier_advertisedappstoreitemidentifier_adnetworkidentifier_adcampaignidentifier_adimpressionidentifier_timestamp_signature_version_%29.md): Creates an ad impression object using the supplied values.
- [adNetworkIdentifier](adnetworkidentifier.md): A string that represents the advertising network’s unique identifier.
- [sourceIdentifier](sourceidentifier.md): A four-digit integer that ad networks define to represent the ad campaign.
- [adCampaignIdentifier](adcampaignidentifier.md): A number that represents the advertising network’s campaign.
- [advertisedAppStoreItemIdentifier](advertisedappstoreitemidentifier.md): The App Store ID of the app that the ad impression advertises.
- [adImpressionIdentifier](adimpressionidentifier.md): A random value to use for added security.
- [sourceAppStoreItemIdentifier](sourceappstoreitemidentifier.md): The App Store ID of the app that displays the ad.
- [timestamp](timestamp.md): A number that represents the UNIX time, in milliseconds, of the ad impression.
