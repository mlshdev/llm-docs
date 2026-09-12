> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayercontroller/setqueue(with:)-1izmj](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontroller/setqueue(with:)-1izmj)

# setQueue(with:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Set the music player’s playback queue using media items that fit the queue descriptor properties.

## Declaration

```swift
func setQueue(with descriptor: MPMusicPlayerQueueDescriptor)
```

## Parameters

- `descriptor`: A queue descriptor the system uses to add media items to the playback queue.

<a id="Discussion"></a>

## Discussion

To begin playback after establishing a playback queue, call [prepareToPlay()](../mpmediaplayback/preparetoplay%28%29.md).

## See Also

### Setting up a playback queue

- [setQueue(with:)](setqueue%28with_%29-5rii3.md): Sets a music player’s playback queue based on a media query.
- [setQueue(with:)](setqueue%28with_%29-xlwk.md): Sets a music player’s playback queue using a media item collection.
- [setQueue(with:)](setqueue%28with_%29-8x6xb.md): Sets a music player’s playback queue using with media items identified by the store identifiers.

# setQueueWithDescriptor: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Set the music player’s playback queue using media items that fit the queue descriptor properties.

## Declaration

```objectivec
- (void) setQueueWithDescriptor:(MPMusicPlayerQueueDescriptor *) descriptor;
```

## Parameters

- `descriptor`: A queue descriptor the system uses to add media items to the playback queue.

<a id="Discussion"></a>

## Discussion

To begin playback after establishing a playback queue, call [prepareToPlay](../mpmediaplayback/preparetoplay%28%29.md).

## See Also

### Setting up a playback queue

- [setQueueWithQuery:](setqueue%28with_%29-5rii3.md): Sets a music player’s playback queue based on a media query.
- [setQueueWithItemCollection:](setqueue%28with_%29-xlwk.md): Sets a music player’s playback queue using a media item collection.
- [setQueueWithStoreIDs:](setqueue%28with_%29-8x6xb.md): Sets a music player’s playback queue using with media items identified by the store identifiers.
