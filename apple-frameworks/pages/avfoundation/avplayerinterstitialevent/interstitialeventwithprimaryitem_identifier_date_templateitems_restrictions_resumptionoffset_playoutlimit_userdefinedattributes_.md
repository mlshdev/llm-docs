> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialevent/interstitialeventwithprimaryitem:identifier:date:templateitems:restrictions:resumptionoffset:playoutlimit:userdefinedattributes:](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/interstitialeventwithprimaryitem:identifier:date:templateitems:restrictions:resumptionoffset:playoutlimit:userdefinedattributes:)

# interstitialEventWithPrimaryItem:identifier:date:templateItems:restrictions:resumptionOffset:playoutLimit:userDefinedAttributes:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · watchOS 8.0+ (deprecated in 11.0)

Creates an interstitial event, with user-defined attributes, for the specified date.

> Use [interstitialEventWithPrimaryItem:date:](init%28primaryitem_date_%29.md) instead.

## Declaration

```objectivec
+ (instancetype) interstitialEventWithPrimaryItem:(AVPlayerItem *) primaryItem identifier:(NSString *) identifier date:(NSDate *) date templateItems:(NSArray<AVPlayerItem *> *) templateItems restrictions:(AVPlayerInterstitialEventRestrictions) restrictions resumptionOffset:(CMTime) resumptionOffset playoutLimit:(CMTime) playoutLimit userDefinedAttributes:(NSDictionary *) userDefinedAttributes;
```

## Parameters

- `primaryItem`: The player item that represents the primary content. The item must contain an [AVAsset](../avasset.md) that provides intrinsic mappings from its timeline to real-time dates.
- `identifier`: An external identifier for the event.
- `date`: A date within the date range of the primary item that playback of interstitial content begins.
- `templateItems`: An array of player item configurations to use as templates for player items that play interstitial content.
- `restrictions`: Restrictions on access to playback controls during the event.
- `resumptionOffset`: The time offset for resuming playback of the primary content after interstital content finishes. You can specify a definite time, or specify [kCMTimeIndefinite](../../coremedia/cmtime/indefinite.md) to indicate that the effective resumption time offset needs to align with time elapsed during interstitial playback.
- `playoutLimit`: The time offset from the beginning of the interstitial when interstitial playback needs to end, if interstitial assets are longer. Pass a positive numeric value, or [kCMTimeInvalid](../../coremedia/cmtime/invalid.md) to indicate no playout limit.
- `userDefinedAttributes`: Custom attributes to add to the event.

## See Also

### Creating an event

- [interstitialEventWithPrimaryItem:time:](init%28primaryitem_time_%29.md): Creates an interstitial event for the specified time.
- [interstitialEventWithPrimaryItem:date:](init%28primaryitem_date_%29.md): Creates an interstitial event for the specified date.
- [interstitialEventWithPrimaryItem:identifier:time:templateItems:restrictions:resumptionOffset:playoutLimit:userDefinedAttributes:](interstitialeventwithprimaryitem_identifier_time_templateitems_restrictions_resumptionoffset_playoutlimit_userdefinedattributes_.md): Deprecated. Creates an interstitial event, with user-defined attributes, for the specified time.
