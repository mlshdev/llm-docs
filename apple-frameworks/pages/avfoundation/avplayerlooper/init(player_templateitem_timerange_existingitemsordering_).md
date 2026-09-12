> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerlooper/init(player:templateitem:timerange:existingitemsordering:)](https://developer.apple.com/documentation/avfoundation/avplayerlooper/init(player:templateitem:timerange:existingitemsordering:))

# init(player:templateItem:timeRange:existingItemsOrdering:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a player looper that continuously plays the full duration of a player item while adhering to the specified ordering of existing items in the queue.

## Declaration

```swift
init(player: AVQueuePlayer, templateItem itemToLoop: AVPlayerItem, timeRange loopRange: CMTimeRange, existingItemsOrdering itemOrdering: AVPlayerLooper.ItemOrdering)
```

## Parameters

- `player`: A queue player to control playback.
- `itemToLoop`: A player item to loop.
- `loopRange`: The player item time range to loop. Passing a value of [invalid](../../coremedia/cmtimerange/invalid.md) is equivalent to a time range of \[0, player item’s duration\].
- `itemOrdering`: A value that indicates whether the looper inserts replica items before or after existing items in the specified queue player.

<a id="Discussion"></a>

## Discussion

The player looper doesn’t use the player item you specify for playback, and instead uses it as a template to create at least three player item replicas that it uses for looping playback. Because the looper only uses the player item as a template, any changes that you make to it after initialization aren’t reflected in the looping playback.

> **Important**

>  Load the [duration](../avpartialasyncproperty/duration.md) value of a player item’s asset before passing the item to the looper to prevent blocking the calling thread until the duration is known.

## Topics

### Item ordering

- [AVPlayerLooper.ItemOrdering](itemordering.md): Constants that define the ordering of items in a player looper.

## See Also

### Creating a player looper

- [init(player:templateItem:)](init%28player_templateitem_%29.md): Creates a player looper that continuously plays the full duration of a player item.
- [init(player:templateItem:timeRange:)](init%28player_templateitem_timerange_%29.md): Creates a player looper that continuously plays the specified time range of a player item.

# initWithPlayer:templateItem:timeRange:existingItemsOrdering: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a player looper that continuously plays the full duration of a player item while adhering to the specified ordering of existing items in the queue.

## Declaration

```objectivec
- (instancetype) initWithPlayer:(AVQueuePlayer *) player templateItem:(AVPlayerItem *) itemToLoop timeRange:(CMTimeRange) loopRange existingItemsOrdering:(AVPlayerLooperItemOrdering) itemOrdering;
```

## Parameters

- `player`: A queue player to control playback.
- `itemToLoop`: A player item to loop.
- `loopRange`: The player item time range to loop. Passing a value of [kCMTimeRangeInvalid](../../coremedia/cmtimerange/invalid.md) is equivalent to a time range of \[0, player item’s duration\].
- `itemOrdering`: A value that indicates whether the looper inserts replica items before or after existing items in the specified queue player.

<a id="Discussion"></a>

## Discussion

The player looper doesn’t use the player item you specify for playback, and instead uses it as a template to create at least three player item replicas that it uses for looping playback. Because the looper only uses the player item as a template, any changes that you make to it after initialization aren’t reflected in the looping playback.

> **Important**

>  Load the [duration](../avpartialasyncproperty/duration.md) value of a player item’s asset before passing the item to the looper to prevent blocking the calling thread until the duration is known.

## Topics

### Item ordering

- [AVPlayerLooperItemOrdering](itemordering.md): Constants that define the ordering of items in a player looper.

## See Also

### Creating a player looper

- [playerLooperWithPlayer:templateItem:](init%28player_templateitem_%29.md): Creates a player looper that continuously plays the full duration of a player item.
- [initWithPlayer:templateItem:timeRange:](init%28player_templateitem_timerange_%29.md): Creates a player looper that continuously plays the specified time range of a player item.
- [playerLooperWithPlayer:templateItem:timeRange:](playerlooperwithplayer_templateitem_timerange_.md): Returns player looper that continuously plays the specified time range of a player item.
