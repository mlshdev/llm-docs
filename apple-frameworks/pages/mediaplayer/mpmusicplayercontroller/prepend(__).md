> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayercontroller/prepend(_:)](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontroller/prepend(_:))

# prepend(\_:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Inserts the media items defined by the queue descriptor into the current queue immediately after the currently playing media item.

## Declaration

```swift
func prepend(_ descriptor: MPMusicPlayerQueueDescriptor)
```

## Parameters

- `descriptor`: A queue descriptor the system uses to prepend media items to the playback queue.

## See Also

### Controlling playback

- [skipToNextItem()](skiptonextitem%28%29.md): Starts playback of the next media item in the playback queue, or if the music player isn’t playing, designates the next media item as the next item to play.
- [skipToBeginning()](skiptobeginning%28%29.md): Restarts playback at the beginning of the currently playing media item.
- [skipToPreviousItem()](skiptopreviousitem%28%29.md): Starts playback of the previous media item in the playback queue, or if the music player isn’t playing, designates the previous media item as the next to play.
- [append(\_:)](append%28__%29.md): Inserts the media items defined by the queue descriptor after the last media item in the current queue.

# prependQueueDescriptor: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Inserts the media items defined by the queue descriptor into the current queue immediately after the currently playing media item.

## Declaration

```objectivec
- (void) prependQueueDescriptor:(MPMusicPlayerQueueDescriptor *) descriptor;
```

## Parameters

- `descriptor`: A queue descriptor the system uses to prepend media items to the playback queue.

## See Also

### Controlling playback

- [skipToNextItem](skiptonextitem%28%29.md): Starts playback of the next media item in the playback queue, or if the music player isn’t playing, designates the next media item as the next item to play.
- [skipToBeginning](skiptobeginning%28%29.md): Restarts playback at the beginning of the currently playing media item.
- [skipToPreviousItem](skiptopreviousitem%28%29.md): Starts playback of the previous media item in the playback queue, or if the music player isn’t playing, designates the previous media item as the next to play.
- [appendQueueDescriptor:](append%28__%29.md): Inserts the media items defined by the queue descriptor after the last media item in the current queue.
