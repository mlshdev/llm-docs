> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayercontrollermutablequeue/remove(_:)](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontrollermutablequeue/remove(_:))

# remove(\_:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Removes a media item from the music player’s queue.

## Declaration

```swift
func remove(_ item: MPMediaItem)
```

## Parameters

- `item`: The media item to remove from the queue.

## See Also

### Adding and removing items

- [insert(\_:after:)](insert%28__after_%29.md): Inserts a modified queue after the designated media item.

# removeItem: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Removes a media item from the music player’s queue.

## Declaration

```objectivec
- (void) removeItem:(MPMediaItem *) item;
```

## Parameters

- `item`: The media item to remove from the queue.

## See Also

### Adding and removing items

- [insertQueueDescriptor:afterItem:](insert%28__after_%29.md): Inserts a modified queue after the designated media item.
