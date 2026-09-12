> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialeventrestrictions/avplayerinterstitialeventrestrictiondefaultpolicy](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventrestrictions/avplayerinterstitialeventrestrictiondefaultpolicy)

# AVPlayerInterstitialEventRestrictionDefaultPolicy

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The default restriction policy.

## Declaration

```objectivec
AVPlayerInterstitialEventRestrictionDefaultPolicy
```

<a id="Discussion"></a>

## Discussion

By default, an event imposes no restrictions.

## See Also

### Configure

- [AVPlayerInterstitialEventRestrictionConstrainsSeekingForwardInPrimaryContent](../avplayerinterstitialevent/restrictions-swift.struct/constrainsseekingforwardinprimarycontent.md): A restriction that indicates the event doesn’t allow seeking forward within an interstitial item.
- [AVPlayerInterstitialEventRestrictionRequiresPlaybackAtPreferredRateForAdvancement](../avplayerinterstitialevent/restrictions-swift.struct/requiresplaybackatpreferredrateforadvancement.md): A restriction that indicates the event doesn’t allow advancing the current time within an interstitial item.
- [AVPlayerInterstitialEventRestrictionNone](avplayerinterstitialeventrestrictionnone.md): A value that indicates no restrictions on playback of primary or interstitial content.
