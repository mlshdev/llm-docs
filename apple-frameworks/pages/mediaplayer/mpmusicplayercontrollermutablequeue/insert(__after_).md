> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayercontrollermutablequeue/insert(_:after:)](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontrollermutablequeue/insert(_:after:))

# insert(\_:after:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Inserts a modified queue after the designated media item.

## Declaration

```swift
func insert(_ queueDescriptor: MPMusicPlayerQueueDescriptor, after afterItem: MPMediaItem?)
```

## Parameters

- `queueDescriptor`: A queue descriptor the system uses to insert media items in the playback queue.
- `afterItem`: The media item before the insertion point for the modified queue.

## See Also

### Adding and removing items

- [remove(\_:)](remove%28__%29.md): Removes a media item from the music player’s queue.

# insertQueueDescriptor:afterItem: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Inserts a modified queue after the designated media item.

## Declaration

```objectivec
- (void) insertQueueDescriptor:(MPMusicPlayerQueueDescriptor *) queueDescriptor afterItem:(MPMediaItem *) afterItem;
```

## Parameters

- `queueDescriptor`: A queue descriptor the system uses to insert media items in the playback queue.
- `afterItem`: The media item before the insertion point for the modified queue.

## See Also

### Adding and removing items

- [removeItem:](remove%28__%29.md): Removes a media item from the music player’s queue.
