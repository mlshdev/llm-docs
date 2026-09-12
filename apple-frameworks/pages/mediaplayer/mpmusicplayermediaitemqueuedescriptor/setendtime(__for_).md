> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayermediaitemqueuedescriptor/setendtime(_:for:)](https://developer.apple.com/documentation/mediaplayer/mpmusicplayermediaitemqueuedescriptor/setendtime(_:for:))

# setEndTime(\_:for:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

The time the designated media item is to stop playing.

## Declaration

```swift
func setEndTime(_ endTime: TimeInterval, for mediaItem: MPMediaItem)
```

## Parameters

- `endTime`: The [TimeInterval](../../foundation/timeinterval.md) describing when the media item stops playing.
- `mediaItem`: The media item in the queue that has a changed end time.

## See Also

### Setting start and end times

- [setStartTime(\_:for:)](setstarttime%28__for_%29.md): The time the designated media item is to start playing.

# setEndTime:forItem: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

The time the designated media item is to stop playing.

## Declaration

```objectivec
- (void) setEndTime:(NSTimeInterval) endTime forItem:(MPMediaItem *) mediaItem;
```

## Parameters

- `endTime`: The [NSTimeInterval](../../foundation/timeinterval.md) describing when the media item stops playing.
- `mediaItem`: The media item in the queue that has a changed end time.

## See Also

### Setting start and end times

- [setStartTime:forItem:](setstarttime%28__for_%29.md): The time the designated media item is to start playing.
