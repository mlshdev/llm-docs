> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayercontroller/skiptonextitem()](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontroller/skiptonextitem())

# skipToNextItem() (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Starts playback of the next media item in the playback queue, or if the music player isn’t playing, designates the next media item as the next item to play.

## Declaration

```swift
func skipToNextItem()
```

<a id="Discussion"></a>

## Discussion

Calling this method when already at the last item in the playback queue ends playback.

## See Also

### Related Documentation

- [nowPlayingItem](nowplayingitem.md): The currently-playing media item, or the media item in a queue that you designated to begin playback with.

### Controlling playback

- [skipToBeginning()](skiptobeginning%28%29.md): Restarts playback at the beginning of the currently playing media item.
- [skipToPreviousItem()](skiptopreviousitem%28%29.md): Starts playback of the previous media item in the playback queue, or if the music player isn’t playing, designates the previous media item as the next to play.
- [append(\_:)](append%28__%29.md): Inserts the media items defined by the queue descriptor after the last media item in the current queue.
- [prepend(\_:)](prepend%28__%29.md): Inserts the media items defined by the queue descriptor into the current queue immediately after the currently playing media item.

# skipToNextItem (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Starts playback of the next media item in the playback queue, or if the music player isn’t playing, designates the next media item as the next item to play.

## Declaration

```objectivec
- (void) skipToNextItem;
```

<a id="Discussion"></a>

## Discussion

Calling this method when already at the last item in the playback queue ends playback.

## See Also

### Related Documentation

- [nowPlayingItem](nowplayingitem.md): The currently-playing media item, or the media item in a queue that you designated to begin playback with.

### Controlling playback

- [skipToBeginning](skiptobeginning%28%29.md): Restarts playback at the beginning of the currently playing media item.
- [skipToPreviousItem](skiptopreviousitem%28%29.md): Starts playback of the previous media item in the playback queue, or if the music player isn’t playing, designates the previous media item as the next to play.
- [appendQueueDescriptor:](append%28__%29.md): Inserts the media items defined by the queue descriptor after the last media item in the current queue.
- [prependQueueDescriptor:](prepend%28__%29.md): Inserts the media items defined by the queue descriptor into the current queue immediately after the currently playing media item.
