> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skcloudservicecapability/musiccatalogsubscriptioneligible](https://developer.apple.com/documentation/storekit/skcloudservicecapability/musiccatalogsubscriptioneligible)

# musicCatalogSubscriptionEligible (Swift)

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 10.1+ (deprecated in 18.0) · iPadOS 10.1+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 10.1+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

The device allows subscription to the Apple Music catalog.

> Use the canBecomeSubscriber property of MusicSubscription from MusicKit.

## Declaration

```swift
static var musicCatalogSubscriptionEligible: SKCloudServiceCapability { get }
```

## Mentioned In

- [Determining a person’s Apple Music capabilities](../determining-a-person-s-apple-music-capabilities.md)
- [Offering Apple Music Subscription in Your App](../offering-apple-music-subscription-in-your-app.md)

## See Also

### Identifying Cloud Service Capabilities

- [musicCatalogPlayback](musiccatalogplayback.md): Deprecated. The device allows playback of Apple Music catalog tracks.
- [addToCloudMusicLibrary](addtocloudmusiclibrary.md): Deprecated. The device allows tracks to be added to the user’s music library.

# SKCloudServiceCapabilityMusicCatalogSubscriptionEligible (Objective-C)

**Framework:** StoreKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.1+ (deprecated in 18.0) · iPadOS 10.1+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 10.1+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

The device allows subscription to the Apple Music catalog.

> Use the canBecomeSubscriber property of MusicSubscription from MusicKit.

## Declaration

```objectivec
SKCloudServiceCapabilityMusicCatalogSubscriptionEligible
```

## Mentioned In

- [Determining a person’s Apple Music capabilities](../determining-a-person-s-apple-music-capabilities.md)
- [Offering Apple Music Subscription in Your App](../offering-apple-music-subscription-in-your-app.md)

## See Also

### Identifying Cloud Service Capabilities

- [SKCloudServiceCapabilityMusicCatalogPlayback](musiccatalogplayback.md): Deprecated. The device allows playback of Apple Music catalog tracks.
- [SKCloudServiceCapabilityAddToCloudMusicLibrary](addtocloudmusiclibrary.md): Deprecated. The device allows tracks to be added to the user’s music library.
