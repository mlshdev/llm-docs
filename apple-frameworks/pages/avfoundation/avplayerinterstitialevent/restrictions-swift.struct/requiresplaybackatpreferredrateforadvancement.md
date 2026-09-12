> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialevent/restrictions-swift.struct/requiresplaybackatpreferredrateforadvancement](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/restrictions-swift.struct/requiresplaybackatpreferredrateforadvancement)

# requiresPlaybackAtPreferredRateForAdvancement (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A restriction that indicates the event doesn’t allow advancing the current time within an interstitial item.

## Declaration

```swift
static var requiresPlaybackAtPreferredRateForAdvancement: AVPlayerInterstitialEvent.Restrictions { get }
```

## See Also

### Configure

- [constrainsSeekingForwardInPrimaryContent](constrainsseekingforwardinprimarycontent.md): A restriction that indicates the event doesn’t allow seeking forward within an interstitial item.

# AVPlayerInterstitialEventRestrictionRequiresPlaybackAtPreferredRateForAdvancement (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A restriction that indicates the event doesn’t allow advancing the current time within an interstitial item.

## Declaration

```objectivec
AVPlayerInterstitialEventRestrictionRequiresPlaybackAtPreferredRateForAdvancement
```

## See Also

### Configure

- [AVPlayerInterstitialEventRestrictionConstrainsSeekingForwardInPrimaryContent](constrainsseekingforwardinprimarycontent.md): A restriction that indicates the event doesn’t allow seeking forward within an interstitial item.
- [AVPlayerInterstitialEventRestrictionDefaultPolicy](../../avplayerinterstitialeventrestrictions/avplayerinterstitialeventrestrictiondefaultpolicy.md): The default restriction policy.
- [AVPlayerInterstitialEventRestrictionNone](../../avplayerinterstitialeventrestrictions/avplayerinterstitialeventrestrictionnone.md): A value that indicates no restrictions on playback of primary or interstitial content.
