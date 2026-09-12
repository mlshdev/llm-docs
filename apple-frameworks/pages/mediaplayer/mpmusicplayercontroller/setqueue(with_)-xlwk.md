> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayercontroller/setqueue(with:)-xlwk](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontroller/setqueue(with:)-xlwk)

# setQueue(with:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets a music player’s playback queue using a media item collection.

## Declaration

```swift
func setQueue(with itemCollection: MPMediaItemCollection)
```

## Parameters

- `itemCollection`: A media item collection that you want as the playback queue. See [MPMediaItemCollection](../mpmediaitemcollection.md) for a description of media item collections and how to use them.

<a id="Discussion"></a>

## Discussion

To begin playback after establishing a playback queue, call [prepareToPlay()](../mpmediaplayback/preparetoplay%28%29.md).

## See Also

### Setting up a playback queue

- [setQueue(with:)](setqueue%28with_%29-5rii3.md): Sets a music player’s playback queue based on a media query.
- [setQueue(with:)](setqueue%28with_%29-8x6xb.md): Sets a music player’s playback queue using with media items identified by the store identifiers.
- [setQueue(with:)](setqueue%28with_%29-1izmj.md): Set the music player’s playback queue using media items that fit the queue descriptor properties.

# setQueueWithItemCollection: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets a music player’s playback queue using a media item collection.

## Declaration

```objectivec
- (void) setQueueWithItemCollection:(MPMediaItemCollection *) itemCollection;
```

## Parameters

- `itemCollection`: A media item collection that you want as the playback queue. See [MPMediaItemCollection](../mpmediaitemcollection.md) for a description of media item collections and how to use them.

<a id="Discussion"></a>

## Discussion

To begin playback after establishing a playback queue, call [prepareToPlay](../mpmediaplayback/preparetoplay%28%29.md).

## See Also

### Setting up a playback queue

- [setQueueWithQuery:](setqueue%28with_%29-5rii3.md): Sets a music player’s playback queue based on a media query.
- [setQueueWithStoreIDs:](setqueue%28with_%29-8x6xb.md): Sets a music player’s playback queue using with media items identified by the store identifiers.
- [setQueueWithDescriptor:](setqueue%28with_%29-1izmj.md): Set the music player’s playback queue using media items that fit the queue descriptor properties.
