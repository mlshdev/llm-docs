> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerlooper/init(player:templateitem:)](https://developer.apple.com/documentation/avfoundation/avplayerlooper/init(player:templateitem:))

# init(player:templateItem:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a player looper that continuously plays the full duration of a player item.

## Declaration

```swift
convenience init(player: AVQueuePlayer, templateItem itemToLoop: AVPlayerItem)
```

## Parameters

- `player`: The queue player to use for playback. The player must not be `nil`.
- `itemToLoop`: The player item to loop, which must not be `nil`.

<a id="return-value"></a>

## Return Value

An new instance of `AVPlayerLooper`.

<a id="Discussion"></a>

## Discussion

Creating an instance of this class using this method is equivalent to calling [init(player:templateItem:timeRange:)](init%28player_templateitem_timerange_%29.md) and passing a value of [invalid](../../coremedia/cmtimerange/invalid.md) for the `timeRange` parameter.

## See Also

### Creating a player looper

- [init(player:templateItem:timeRange:existingItemsOrdering:)](init%28player_templateitem_timerange_existingitemsordering_%29.md): Creates a player looper that continuously plays the full duration of a player item while adhering to the specified ordering of existing items in the queue.
- [init(player:templateItem:timeRange:)](init%28player_templateitem_timerange_%29.md): Creates a player looper that continuously plays the specified time range of a player item.

# playerLooperWithPlayer:templateItem: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a player looper that continuously plays the full duration of a player item.

## Declaration

```objectivec
+ (instancetype) playerLooperWithPlayer:(AVQueuePlayer *) player templateItem:(AVPlayerItem *) itemToLoop;
```

## Parameters

- `player`: The queue player to use for playback. The player must not be `nil`.
- `itemToLoop`: The player item to loop, which must not be `nil`.

<a id="return-value"></a>

## Return Value

An new instance of `AVPlayerLooper`.

<a id="Discussion"></a>

## Discussion

Creating an instance of this class using this method is equivalent to calling [initWithPlayer:templateItem:timeRange:](init%28player_templateitem_timerange_%29.md) and passing a value of [kCMTimeRangeInvalid](../../coremedia/cmtimerange/invalid.md) for the `timeRange` parameter.

## See Also

### Creating a player looper

- [initWithPlayer:templateItem:timeRange:existingItemsOrdering:](init%28player_templateitem_timerange_existingitemsordering_%29.md): Creates a player looper that continuously plays the full duration of a player item while adhering to the specified ordering of existing items in the queue.
- [initWithPlayer:templateItem:timeRange:](init%28player_templateitem_timerange_%29.md): Creates a player looper that continuously plays the specified time range of a player item.
- [playerLooperWithPlayer:templateItem:timeRange:](playerlooperwithplayer_templateitem_timerange_.md): Returns player looper that continuously plays the specified time range of a player item.
