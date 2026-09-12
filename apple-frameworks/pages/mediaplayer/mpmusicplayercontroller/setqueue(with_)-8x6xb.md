> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayercontroller/setqueue(with:)-8x6xb](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontroller/setqueue(with:)-8x6xb)

# setQueue(with:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Sets a music player’s playback queue using with media items identified by the store identifiers.

## Declaration

```swift
func setQueue(with storeIDs: [String])
```

## Parameters

- `storeIDs`: An array of store identifiers associated with the media items to add to the queue.

<a id="Discussion"></a>

## Discussion

To begin playback after establishing a playback queue, call [prepareToPlay()](../mpmediaplayback/preparetoplay%28%29.md).

## See Also

### Setting up a playback queue

- [setQueue(with:)](setqueue%28with_%29-5rii3.md): Sets a music player’s playback queue based on a media query.
- [setQueue(with:)](setqueue%28with_%29-xlwk.md): Sets a music player’s playback queue using a media item collection.
- [setQueue(with:)](setqueue%28with_%29-1izmj.md): Set the music player’s playback queue using media items that fit the queue descriptor properties.

# setQueueWithStoreIDs: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Sets a music player’s playback queue using with media items identified by the store identifiers.

## Declaration

```objectivec
- (void) setQueueWithStoreIDs:(NSArray<NSString *> *) storeIDs;
```

## Parameters

- `storeIDs`: An array of store identifiers associated with the media items to add to the queue.

<a id="Discussion"></a>

## Discussion

To begin playback after establishing a playback queue, call [prepareToPlay](../mpmediaplayback/preparetoplay%28%29.md).

## See Also

### Setting up a playback queue

- [setQueueWithQuery:](setqueue%28with_%29-5rii3.md): Sets a music player’s playback queue based on a media query.
- [setQueueWithItemCollection:](setqueue%28with_%29-xlwk.md): Sets a music player’s playback queue using a media item collection.
- [setQueueWithDescriptor:](setqueue%28with_%29-1izmj.md): Set the music player’s playback queue using media items that fit the queue descriptor properties.
