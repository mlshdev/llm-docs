> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerlooper/init(player:templateitem:timerange:)](https://developer.apple.com/documentation/avfoundation/avplayerlooper/init(player:templateitem:timerange:))

# init(player:templateItem:timeRange:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a player looper that continuously plays the specified time range of a player item.

## Declaration

```swift
convenience init(player: AVQueuePlayer, templateItem itemToLoop: AVPlayerItem, timeRange loopRange: CMTimeRange)
```

## Parameters

- `player`: The queue player to use for playback. The player must not be `nil`.
- `itemToLoop`: The player item to loop, which must not be `nil`.
- `loopRange`: The player item time range to loop. Passing a value of [invalid](../../coremedia/cmtimerange/invalid.md) is equivalent to a time range of \[0, player item’s duration\].

<a id="return-value"></a>

## Return Value

An new instance of `AVPlayerLooper`.

<a id="Discussion"></a>

## Discussion

The player item you specify will be used as a *template* to generate at least 3 player item replicas that will be inserted into the specified player’s queue to accomplish the looping playback. As the player item will only be used as a template, and not for actual playback, any changes you make to the player item after initialization will not be reflected in the replicas. If you need to explicitly configure the replica player items, such as adding instances of [AVPlayerItemOutput](../avplayeritemoutput.md) to them, you can access them through the [loopingPlayerItems](loopingplayeritems.md) property.

> **Important**

>  The specified player item’s asset should have its [duration](../avasset/duration.md) property loaded before you initialize this class so that initialization will not be blocked while waiting for the [duration](../avasset/duration.md) to become known. An [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) will be raised if the player item has a duration of 0.

You should not modify the player’s queue while `AVPlayerLooper` is performing looping playback. If you need to perform any additional configuration of the player prior to playback, you should set its [rate](../avplayer/rate.md) to `0.0`, perform the required configuration, and then begin playback once the configuration is complete.

The [CMTimeRange](../../coremedia/cmtimerange.md) you specify will limit each item’s loop iteration to playing within the specified time range. To loop the full duration of the asset, specify a time range value of [invalid](../../coremedia/cmtimerange/invalid.md) for the `timeRange` parameter. Time range looping will be accomplished by seeking to the time range’s start time and setting player item’s [forwardPlaybackEndTime](../avplayeritem/forwardplaybackendtime.md) property on the looping item replicas.

> **Important**

>  An [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) will be raised if the time range you specify has a duration of 0 or is not contained within the time range of the template player item.

## See Also

### Creating a player looper

- [init(player:templateItem:timeRange:existingItemsOrdering:)](init%28player_templateitem_timerange_existingitemsordering_%29.md): Creates a player looper that continuously plays the full duration of a player item while adhering to the specified ordering of existing items in the queue.
- [init(player:templateItem:)](init%28player_templateitem_%29.md): Creates a player looper that continuously plays the full duration of a player item.

# initWithPlayer:templateItem:timeRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a player looper that continuously plays the specified time range of a player item.

## Declaration

```objectivec
- (instancetype) initWithPlayer:(AVQueuePlayer *) player templateItem:(AVPlayerItem *) itemToLoop timeRange:(CMTimeRange) loopRange;
```

## Parameters

- `player`: The queue player to use for playback. The player must not be `nil`.
- `itemToLoop`: The player item to loop, which must not be `nil`.
- `loopRange`: The player item time range to loop. Passing a value of [kCMTimeRangeInvalid](../../coremedia/cmtimerange/invalid.md) is equivalent to a time range of \[0, player item’s duration\].

<a id="return-value"></a>

## Return Value

An new instance of `AVPlayerLooper`.

<a id="Discussion"></a>

## Discussion

The player item you specify will be used as a *template* to generate at least 3 player item replicas that will be inserted into the specified player’s queue to accomplish the looping playback. As the player item will only be used as a template, and not for actual playback, any changes you make to the player item after initialization will not be reflected in the replicas. If you need to explicitly configure the replica player items, such as adding instances of [AVPlayerItemOutput](../avplayeritemoutput.md) to them, you can access them through the [loopingPlayerItems](loopingplayeritems.md) property.

> **Important**

>  The specified player item’s asset should have its [duration](../avasset/duration.md) property loaded before you initialize this class so that initialization will not be blocked while waiting for the [duration](../avasset/duration.md) to become known. An [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) will be raised if the player item has a duration of 0.

You should not modify the player’s queue while `AVPlayerLooper` is performing looping playback. If you need to perform any additional configuration of the player prior to playback, you should set its [rate](../avplayer/rate.md) to `0.0`, perform the required configuration, and then begin playback once the configuration is complete.

The [CMTimeRange](../../coremedia/cmtimerange.md) you specify will limit each item’s loop iteration to playing within the specified time range. To loop the full duration of the asset, specify a time range value of [kCMTimeRangeInvalid](../../coremedia/cmtimerange/invalid.md) for the `timeRange` parameter. Time range looping will be accomplished by seeking to the time range’s start time and setting player item’s [forwardPlaybackEndTime](../avplayeritem/forwardplaybackendtime.md) property on the looping item replicas.

> **Important**

>  An [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) will be raised if the time range you specify has a duration of 0 or is not contained within the time range of the template player item.

## See Also

### Creating a player looper

- [initWithPlayer:templateItem:timeRange:existingItemsOrdering:](init%28player_templateitem_timerange_existingitemsordering_%29.md): Creates a player looper that continuously plays the full duration of a player item while adhering to the specified ordering of existing items in the queue.
- [playerLooperWithPlayer:templateItem:](init%28player_templateitem_%29.md): Creates a player looper that continuously plays the full duration of a player item.
- [playerLooperWithPlayer:templateItem:timeRange:](playerlooperwithplayer_templateitem_timerange_.md): Returns player looper that continuously plays the specified time range of a player item.
