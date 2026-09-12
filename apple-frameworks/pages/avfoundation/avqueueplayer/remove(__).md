> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avqueueplayer/remove(_:)](https://developer.apple.com/documentation/avfoundation/avqueueplayer/remove(_:))

# remove(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Removes a given player item from the queue.

## Declaration

```swift
nonisolated func remove(_ item: AVPlayerItem)
```

## Parameters

- `item`: The player item to remove from the queue.

<a id="Discussion"></a>

## Discussion

If the item is currently playing, calling this method has the same effect as calling the [advanceToNextItem()](advancetonextitem%28%29.md) method.

## See Also

### Managing the player queue

- [items()](items%28%29.md): Returns an array of the currently enqueued items.
- [advanceToNextItem()](advancetonextitem%28%29.md): Ends playback of the current item and starts playback of the next item in the player’s queue.
- [canInsert(\_:after:)](caninsert%28__after_%29.md): Returns a Boolean value that indicates whether you can insert a player item into the player’s queue.
- [insert(\_:after:)](insert%28__after_%29.md): Inserts a player item after another player item in the queue.
- [removeAllItems()](removeallitems%28%29.md): Removes all player items from the queue.

# removeItem: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Removes a given player item from the queue.

## Declaration

```objectivec
- (void) removeItem:(AVPlayerItem *) item;
```

## Parameters

- `item`: The player item to remove from the queue.

<a id="Discussion"></a>

## Discussion

If the item is currently playing, calling this method has the same effect as calling the [advanceToNextItem](advancetonextitem%28%29.md) method.

## See Also

### Managing the player queue

- [items](items%28%29.md): Returns an array of the currently enqueued items.
- [advanceToNextItem](advancetonextitem%28%29.md): Ends playback of the current item and starts playback of the next item in the player’s queue.
- [canInsertItem:afterItem:](caninsert%28__after_%29.md): Returns a Boolean value that indicates whether you can insert a player item into the player’s queue.
- [insertItem:afterItem:](insert%28__after_%29.md): Inserts a player item after another player item in the queue.
- [removeAllItems](removeallitems%28%29.md): Removes all player items from the queue.
