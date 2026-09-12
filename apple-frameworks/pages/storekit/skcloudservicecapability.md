> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skcloudservicecapability](https://developer.apple.com/documentation/storekit/skcloudservicecapability)

# SKCloudServiceCapability (Swift)

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 9.3+ (deprecated in 18.0) · iPadOS 9.3+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 9.3+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

Constants that specify the current capabilities of the customer’s Music library on the device.

> Use MusicSubscription from MusicKit.

## Declaration

```swift
struct SKCloudServiceCapability
```

## Topics

### Initializing

- [init(rawValue:)](skcloudservicecapability/init%28rawvalue_%29.md): Deprecated. Initializes a cloud service capability with the provided raw value.

### Identifying Cloud Service Capabilities

- [musicCatalogPlayback](skcloudservicecapability/musiccatalogplayback.md): Deprecated. The device allows playback of Apple Music catalog tracks.
- [musicCatalogSubscriptionEligible](skcloudservicecapability/musiccatalogsubscriptioneligible.md): Deprecated. The device allows subscription to the Apple Music catalog.
- [addToCloudMusicLibrary](skcloudservicecapability/addtocloudmusiclibrary.md): Deprecated. The device allows tracks to be added to the user’s music library.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Determining capabilities

- [Determining a person’s Apple Music capabilities](determining-a-person-s-apple-music-capabilities.md): Determine which Apple Music capabilities are available on a customer’s device.
- [requestUserToken(forDeveloperToken:completionHandler:)](skcloudservicecontroller/requestusertoken%28fordevelopertoken_completionhandler_%29.md): Deprecated. Returns a user token that you use to access personalized Apple Music content.
- [requestStorefrontCountryCode(completionHandler:)](skcloudservicecontroller/requeststorefrontcountrycode%28completionhandler_%29.md): Deprecated. Gets the country code for the storefront associated with a customer’s iTunes account.
- [requestCapabilities(completionHandler:)](skcloudservicecontroller/requestcapabilities%28completionhandler_%29.md): Deprecated. Gets the current capabilities associated with the Music library on the device.
- [requestStorefrontIdentifier(completionHandler:)](skcloudservicecontroller/requeststorefrontidentifier%28completionhandler_%29.md): Deprecated. Gets the device’s storefront identifier.
- [requestPersonalizationToken(forClientToken:withCompletionHandler:)](skcloudservicecontroller/requestpersonalizationtoken%28forclienttoken_withcompletionhandler_%29.md): Deprecated.

# SKCloudServiceCapability (Objective-C)

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 9.3+ (deprecated in 18.0) · iPadOS 9.3+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 9.3+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

Constants that specify the current capabilities of the customer’s Music library on the device.

> Use MusicSubscription from MusicKit.

## Declaration

```objectivec
enum SKCloudServiceCapability : NSUInteger;
```

## Topics

### Identifying Cloud Service Capabilities

- [SKCloudServiceCapabilityMusicCatalogPlayback](skcloudservicecapability/musiccatalogplayback.md): Deprecated. The device allows playback of Apple Music catalog tracks.
- [SKCloudServiceCapabilityMusicCatalogSubscriptionEligible](skcloudservicecapability/musiccatalogsubscriptioneligible.md): Deprecated. The device allows subscription to the Apple Music catalog.
- [SKCloudServiceCapabilityAddToCloudMusicLibrary](skcloudservicecapability/addtocloudmusiclibrary.md): Deprecated. The device allows tracks to be added to the user’s music library.

### Enumeration Cases

- [SKCloudServiceCapabilityNone](skcloudservicecapability/skcloudservicecapabilitynone.md): Deprecated. The device does not allow playback of Apple Music content or the addition of tracks to the music library.

## See Also

### Determining capabilities

- [Determining a person’s Apple Music capabilities](determining-a-person-s-apple-music-capabilities.md): Determine which Apple Music capabilities are available on a customer’s device.
- [requestUserTokenForDeveloperToken:completionHandler:](skcloudservicecontroller/requestusertoken%28fordevelopertoken_completionhandler_%29.md): Deprecated. Returns a user token that you use to access personalized Apple Music content.
- [requestStorefrontCountryCodeWithCompletionHandler:](skcloudservicecontroller/requeststorefrontcountrycode%28completionhandler_%29.md): Deprecated. Gets the country code for the storefront associated with a customer’s iTunes account.
- [requestCapabilitiesWithCompletionHandler:](skcloudservicecontroller/requestcapabilities%28completionhandler_%29.md): Deprecated. Gets the current capabilities associated with the Music library on the device.
- [requestStorefrontIdentifierWithCompletionHandler:](skcloudservicecontroller/requeststorefrontidentifier%28completionhandler_%29.md): Deprecated. Gets the device’s storefront identifier.
- [requestPersonalizationTokenForClientToken:withCompletionHandler:](skcloudservicecontroller/requestpersonalizationtoken%28forclienttoken_withcompletionhandler_%29.md): Deprecated.
