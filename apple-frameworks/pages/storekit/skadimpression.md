> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skadimpression](https://developer.apple.com/documentation/storekit/skadimpression)

# SKAdImpression (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+

A class that defines an ad impression for a view-through ad.

## Declaration

```swift
class SKAdImpression
```

## Mentioned In

- [Generating the signature to validate view-through ads](generating-the-signature-to-validate-view-through-ads.md)
- [Signing and providing ads](signing-and-providing-ads.md)
- [SKAdNetwork 2.2 release notes](skadnetwork-2-2-release-notes.md)

<a id="overview"></a>

## Overview

Create a `SKAdImpression` instance when you’re preparing to present a view-through ad. In the instance, you set:

- Values known to you, including your ad network ID, the App Store IDs of the source app and the advertised app, and the version.
- A value you determine – the campaign ID.
- Values you generate, including the timestamp, a nonce (ad-impression identifier), and the cryptographic signature.

For information about generating the cryptographic signature, see [Generating the signature to validate view-through ads](generating-the-signature-to-validate-view-through-ads.md).

Use your `SKAdImpression` instance when you call [startImpression(\_:completionHandler:)](skadnetwork/startimpression%28__completionhandler_%29.md) to begin presenting your view-through ad. Use the same instance when you call [endImpression(\_:completionHandler:)](skadnetwork/endimpression%28__completionhandler_%29.md) to end the ad presentation.

## Topics

### Providing a signature

- [signature](skadimpression/signature.md): The advertising network’s cryptographic signature for the ad impression.

### Creating a signature

- [init(sourceAppStoreItemIdentifier:advertisedAppStoreItemIdentifier:adNetworkIdentifier:adCampaignIdentifier:adImpressionIdentifier:timestamp:signature:version:)](skadimpression/init%28sourceappstoreitemidentifier_advertisedappstoreitemidentifier_adnetworkidentifier_adcampaignidentifier_adimpressionidentifier_timestamp_signature_version_%29.md): Creates an ad impression object using the supplied values.
- [version](skadimpression/version.md): The version of the SKAdNetwork API.
- [adNetworkIdentifier](skadimpression/adnetworkidentifier.md): A string that represents the advertising network’s unique identifier.
- [sourceIdentifier](skadimpression/sourceidentifier.md): A four-digit integer that ad networks define to represent the ad campaign.
- [adCampaignIdentifier](skadimpression/adcampaignidentifier.md): A number that represents the advertising network’s campaign.
- [advertisedAppStoreItemIdentifier](skadimpression/advertisedappstoreitemidentifier.md): The App Store ID of the app that the ad impression advertises.
- [adImpressionIdentifier](skadimpression/adimpressionidentifier.md): A random value to use for added security.
- [sourceAppStoreItemIdentifier](skadimpression/sourceappstoreitemidentifier.md): The App Store ID of the app that displays the ad.
- [timestamp](skadimpression/timestamp.md): A number that represents the UNIX time, in milliseconds, of the ad impression.

### Describing ads

- [adType](skadimpression/adtype.md): The type of the ad.
- [adDescription](skadimpression/addescription.md): A human-readable description of the ad.
- [adPurchaserName](skadimpression/adpurchasername.md): The name of the entity that purchased the ad.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Ad impressions and installation validations

- [Understanding AdAttributionKit and SKAdNetwork interoperability](https://developer.apple.com/documentation/adattributionkit/adattributionkit-skadnetwork-interoperability): Learn how attribution APIs interact to deliver ad impressions.
- [SKAdNetwork](skadnetwork.md): A class that validates advertisement-driven app installations.

# SKAdImpression (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+

A class that defines an ad impression for a view-through ad.

## Declaration

```objectivec
@interface SKAdImpression : NSObject
```

## Mentioned In

- [Generating the signature to validate view-through ads](generating-the-signature-to-validate-view-through-ads.md)
- [Signing and providing ads](signing-and-providing-ads.md)
- [SKAdNetwork 2.2 release notes](skadnetwork-2-2-release-notes.md)

<a id="overview"></a>

## Overview

Create a `SKAdImpression` instance when you’re preparing to present a view-through ad. In the instance, you set:

- Values known to you, including your ad network ID, the App Store IDs of the source app and the advertised app, and the version.
- A value you determine – the campaign ID.
- Values you generate, including the timestamp, a nonce (ad-impression identifier), and the cryptographic signature.

For information about generating the cryptographic signature, see [Generating the signature to validate view-through ads](generating-the-signature-to-validate-view-through-ads.md).

Use your `SKAdImpression` instance when you call [startImpression:completionHandler:](skadnetwork/startimpression%28__completionhandler_%29.md) to begin presenting your view-through ad. Use the same instance when you call [endImpression:completionHandler:](skadnetwork/endimpression%28__completionhandler_%29.md) to end the ad presentation.

## Topics

### Providing a signature

- [signature](skadimpression/signature.md): The advertising network’s cryptographic signature for the ad impression.

### Creating a signature

- [initWithSourceAppStoreItemIdentifier:advertisedAppStoreItemIdentifier:adNetworkIdentifier:adCampaignIdentifier:adImpressionIdentifier:timestamp:signature:version:](skadimpression/init%28sourceappstoreitemidentifier_advertisedappstoreitemidentifier_adnetworkidentifier_adcampaignidentifier_adimpressionidentifier_timestamp_signature_version_%29.md): Creates an ad impression object using the supplied values.
- [version](skadimpression/version.md): The version of the SKAdNetwork API.
- [adNetworkIdentifier](skadimpression/adnetworkidentifier.md): A string that represents the advertising network’s unique identifier.
- [sourceIdentifier](skadimpression/sourceidentifier.md): A four-digit integer that ad networks define to represent the ad campaign.
- [adCampaignIdentifier](skadimpression/adcampaignidentifier.md): A number that represents the advertising network’s campaign.
- [advertisedAppStoreItemIdentifier](skadimpression/advertisedappstoreitemidentifier.md): The App Store ID of the app that the ad impression advertises.
- [adImpressionIdentifier](skadimpression/adimpressionidentifier.md): A random value to use for added security.
- [sourceAppStoreItemIdentifier](skadimpression/sourceappstoreitemidentifier.md): The App Store ID of the app that displays the ad.
- [timestamp](skadimpression/timestamp.md): A number that represents the UNIX time, in milliseconds, of the ad impression.

### Describing ads

- [adType](skadimpression/adtype.md): The type of the ad.
- [adDescription](skadimpression/addescription.md): A human-readable description of the ad.
- [adPurchaserName](skadimpression/adpurchasername.md): The name of the entity that purchased the ad.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Ad impressions and installation validations

- [SKAdNetwork](skadnetwork.md): A class that validates advertisement-driven app installations.
