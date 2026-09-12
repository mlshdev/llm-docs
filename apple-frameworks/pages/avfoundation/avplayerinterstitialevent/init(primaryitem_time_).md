> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialevent/init(primaryitem:time:)](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/init(primaryitem:time:))

# init(primaryItem:time:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates an interstitial event for the specified time.

## Declaration

```swift
convenience init(primaryItem: AVPlayerItem, time: CMTime)
```

## Parameters

- `primaryItem`: A player item that provides the primary playback content. It defines the timeline during which an interstitial event occurs. The item must have an asset that provides an intrinsic mapping from its timeline to real-time dates.
- `time`: A time within the timeline of the primary item at which to temporarily suspend playback of primary content, and play interstitial content instead.

## See Also

### Creating an event

- [init(primaryItem:date:)](init%28primaryitem_date_%29.md): Creates an interstitial event for the specified date.
- [init(primaryItem:identifier:time:templateItems:restrictions:resumptionOffset:playoutLimit:userDefinedAttributes:)](init%28primaryitem_identifier_time_templateitems_restrictions_resumptionoffset_playoutlimit_userdefinedattributes_%29.md): Creates an interstitial event, with user-defined attributes, for the specified time.
- [init(primaryItem:identifier:date:templateItems:restrictions:resumptionOffset:playoutLimit:userDefinedAttributes:)](init%28primaryitem_identifier_date_templateitems_restrictions_resumptionoffset_playoutlimit_userdefinedattributes_%29.md): Creates an interstitial event, with user-defined attributes, for the specified date.

# interstitialEventWithPrimaryItem:time: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates an interstitial event for the specified time.

## Declaration

```objectivec
+ (instancetype) interstitialEventWithPrimaryItem:(AVPlayerItem *) primaryItem time:(CMTime) time;
```

## Parameters

- `primaryItem`: A player item that provides the primary playback content. It defines the timeline during which an interstitial event occurs. The item must have an asset that provides an intrinsic mapping from its timeline to real-time dates.
- `time`: A time within the timeline of the primary item at which to temporarily suspend playback of primary content, and play interstitial content instead.

## See Also

### Creating an event

- [interstitialEventWithPrimaryItem:date:](init%28primaryitem_date_%29.md): Creates an interstitial event for the specified date.
- [interstitialEventWithPrimaryItem:identifier:time:templateItems:restrictions:resumptionOffset:playoutLimit:userDefinedAttributes:](interstitialeventwithprimaryitem_identifier_time_templateitems_restrictions_resumptionoffset_playoutlimit_userdefinedattributes_.md): Deprecated. Creates an interstitial event, with user-defined attributes, for the specified time.
- [interstitialEventWithPrimaryItem:identifier:date:templateItems:restrictions:resumptionOffset:playoutLimit:userDefinedAttributes:](interstitialeventwithprimaryitem_identifier_date_templateitems_restrictions_resumptionoffset_playoutlimit_userdefinedattributes_.md): Deprecated. Creates an interstitial event, with user-defined attributes, for the specified date.
