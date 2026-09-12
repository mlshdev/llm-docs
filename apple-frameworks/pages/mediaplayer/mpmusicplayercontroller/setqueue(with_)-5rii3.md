> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayercontroller/setqueue(with:)-5rii3](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontroller/setqueue(with:)-5rii3)

# setQueue(with:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets a music player’s playback queue based on a media query.

## Declaration

```swift
func setQueue(with query: MPMediaQuery)
```

## Parameters

- `query`: A media query that specifies the collection of media items that you want as the playback queue. See [MPMediaQuery](../mpmediaquery.md) for a description of query types and how to create them.

<a id="Discussion"></a>

## Discussion

To begin playback after establishing a playback queue, call [prepareToPlay()](../mpmediaplayback/preparetoplay%28%29.md).

## See Also

### Setting up a playback queue

- [setQueue(with:)](setqueue%28with_%29-xlwk.md): Sets a music player’s playback queue using a media item collection.
- [setQueue(with:)](setqueue%28with_%29-8x6xb.md): Sets a music player’s playback queue using with media items identified by the store identifiers.
- [setQueue(with:)](setqueue%28with_%29-1izmj.md): Set the music player’s playback queue using media items that fit the queue descriptor properties.

# setQueueWithQuery: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets a music player’s playback queue based on a media query.

## Declaration

```objectivec
- (void) setQueueWithQuery:(MPMediaQuery *) query;
```

## Parameters

- `query`: A media query that specifies the collection of media items that you want as the playback queue. See [MPMediaQuery](../mpmediaquery.md) for a description of query types and how to create them.

<a id="Discussion"></a>

## Discussion

To begin playback after establishing a playback queue, call [prepareToPlay](../mpmediaplayback/preparetoplay%28%29.md).

## See Also

### Setting up a playback queue

- [setQueueWithItemCollection:](setqueue%28with_%29-xlwk.md): Sets a music player’s playback queue using a media item collection.
- [setQueueWithStoreIDs:](setqueue%28with_%29-8x6xb.md): Sets a music player’s playback queue using with media items identified by the store identifiers.
- [setQueueWithDescriptor:](setqueue%28with_%29-1izmj.md): Set the music player’s playback queue using media items that fit the queue descriptor properties.
