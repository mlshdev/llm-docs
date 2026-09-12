> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skadimpression/init(sourceappstoreitemidentifier:advertisedappstoreitemidentifier:adnetworkidentifier:adcampaignidentifier:adimpressionidentifier:timestamp:signature:version:)](https://developer.apple.com/documentation/storekit/skadimpression/init(sourceappstoreitemidentifier:advertisedappstoreitemidentifier:adnetworkidentifier:adcampaignidentifier:adimpressionidentifier:timestamp:signature:version:))

# init(sourceAppStoreItemIdentifier:advertisedAppStoreItemIdentifier:adNetworkIdentifier:adCampaignIdentifier:adImpressionIdentifier:timestamp:signature:version:) (Swift)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+

Creates an ad impression object using the supplied values.

## Declaration

```swift
init(sourceAppStoreItemIdentifier: NSNumber, advertisedAppStoreItemIdentifier: NSNumber, adNetworkIdentifier: String, adCampaignIdentifier: NSNumber, adImpressionIdentifier: String, timestamp: NSNumber, signature: String, version: String)
```

## See Also

### Creating a signature

- [version](version.md): The version of the SKAdNetwork API.
- [adNetworkIdentifier](adnetworkidentifier.md): A string that represents the advertising network’s unique identifier.
- [sourceIdentifier](sourceidentifier.md): A four-digit integer that ad networks define to represent the ad campaign.
- [adCampaignIdentifier](adcampaignidentifier.md): A number that represents the advertising network’s campaign.
- [advertisedAppStoreItemIdentifier](advertisedappstoreitemidentifier.md): The App Store ID of the app that the ad impression advertises.
- [adImpressionIdentifier](adimpressionidentifier.md): A random value to use for added security.
- [sourceAppStoreItemIdentifier](sourceappstoreitemidentifier.md): The App Store ID of the app that displays the ad.
- [timestamp](timestamp.md): A number that represents the UNIX time, in milliseconds, of the ad impression.

# initWithSourceAppStoreItemIdentifier:advertisedAppStoreItemIdentifier:adNetworkIdentifier:adCampaignIdentifier:adImpressionIdentifier:timestamp:signature:version: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+

Creates an ad impression object using the supplied values.

## Declaration

```objectivec
- (instancetype) initWithSourceAppStoreItemIdentifier:(NSNumber *) sourceAppStoreItemIdentifier advertisedAppStoreItemIdentifier:(NSNumber *) advertisedAppStoreItemIdentifier adNetworkIdentifier:(NSString *) adNetworkIdentifier adCampaignIdentifier:(NSNumber *) adCampaignIdentifier adImpressionIdentifier:(NSString *) adImpressionIdentifier timestamp:(NSNumber *) timestamp signature:(NSString *) signature version:(NSString *) version;
```

## See Also

### Creating a signature

- [version](version.md): The version of the SKAdNetwork API.
- [adNetworkIdentifier](adnetworkidentifier.md): A string that represents the advertising network’s unique identifier.
- [sourceIdentifier](sourceidentifier.md): A four-digit integer that ad networks define to represent the ad campaign.
- [adCampaignIdentifier](adcampaignidentifier.md): A number that represents the advertising network’s campaign.
- [advertisedAppStoreItemIdentifier](advertisedappstoreitemidentifier.md): The App Store ID of the app that the ad impression advertises.
- [adImpressionIdentifier](adimpressionidentifier.md): A random value to use for added security.
- [sourceAppStoreItemIdentifier](sourceappstoreitemidentifier.md): The App Store ID of the app that displays the ad.
- [timestamp](timestamp.md): A number that represents the UNIX time, in milliseconds, of the ad impression.
