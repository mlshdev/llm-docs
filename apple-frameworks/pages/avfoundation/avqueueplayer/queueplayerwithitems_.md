> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avqueueplayer/queueplayerwithitems:](https://developer.apple.com/documentation/avfoundation/avqueueplayer/queueplayerwithitems:)

# queuePlayerWithItems:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns an object that plays a queue of items.

## Declaration

```objectivec
+ (instancetype) queuePlayerWithItems:(NSArray<AVPlayerItem *> *) items;
```

## Parameters

- `items`: An array of [AVPlayerItem](../avplayeritem.md) objects with which to initially populate the player’s queue.

<a id="return-value"></a>

## Return Value

A new queue player.

## See Also

### Creating a queue player

- [initWithItems:](init%28items_%29.md): Creates an object that plays a queue of items.
