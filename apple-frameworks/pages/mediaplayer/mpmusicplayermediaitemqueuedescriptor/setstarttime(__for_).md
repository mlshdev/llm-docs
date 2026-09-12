> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayermediaitemqueuedescriptor/setstarttime(_:for:)](https://developer.apple.com/documentation/mediaplayer/mpmusicplayermediaitemqueuedescriptor/setstarttime(_:for:))

# setStartTime(\_:for:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

The time the designated media item is to start playing.

## Declaration

```swift
func setStartTime(_ startTime: TimeInterval, for mediaItem: MPMediaItem)
```

## Parameters

- `startTime`: The [TimeInterval](../../foundation/timeinterval.md) describing when the media item starts playing.
- `mediaItem`: The media item in the queue that has a changed start time.

## See Also

### Setting start and end times

- [setEndTime(\_:for:)](setendtime%28__for_%29.md): The time the designated media item is to stop playing.

# setStartTime:forItem: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

The time the designated media item is to start playing.

## Declaration

```objectivec
- (void) setStartTime:(NSTimeInterval) startTime forItem:(MPMediaItem *) mediaItem;
```

## Parameters

- `startTime`: The [NSTimeInterval](../../foundation/timeinterval.md) describing when the media item starts playing.
- `mediaItem`: The media item in the queue that has a changed start time.

## See Also

### Setting start and end times

- [setEndTime:forItem:](setendtime%28__for_%29.md): The time the designated media item is to stop playing.
