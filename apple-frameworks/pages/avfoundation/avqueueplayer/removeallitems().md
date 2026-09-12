> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avqueueplayer/removeallitems()](https://developer.apple.com/documentation/avfoundation/avqueueplayer/removeallitems())

# removeAllItems() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Removes all player items from the queue.

## Declaration

```swift
nonisolated func removeAllItems()
```

<a id="Discussion"></a>

## Discussion

Calling this method removes all currently enqueued player items and stops playback.

## See Also

### Managing the player queue

- [items()](items%28%29.md): Returns an array of the currently enqueued items.
- [advanceToNextItem()](advancetonextitem%28%29.md): Ends playback of the current item and starts playback of the next item in the player’s queue.
- [canInsert(\_:after:)](caninsert%28__after_%29.md): Returns a Boolean value that indicates whether you can insert a player item into the player’s queue.
- [insert(\_:after:)](insert%28__after_%29.md): Inserts a player item after another player item in the queue.
- [remove(\_:)](remove%28__%29.md): Removes a given player item from the queue.

# removeAllItems (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Removes all player items from the queue.

## Declaration

```objectivec
- (void) removeAllItems;
```

<a id="Discussion"></a>

## Discussion

Calling this method removes all currently enqueued player items and stops playback.

## See Also

### Managing the player queue

- [items](items%28%29.md): Returns an array of the currently enqueued items.
- [advanceToNextItem](advancetonextitem%28%29.md): Ends playback of the current item and starts playback of the next item in the player’s queue.
- [canInsertItem:afterItem:](caninsert%28__after_%29.md): Returns a Boolean value that indicates whether you can insert a player item into the player’s queue.
- [insertItem:afterItem:](insert%28__after_%29.md): Inserts a player item after another player item in the queue.
- [removeItem:](remove%28__%29.md): Removes a given player item from the queue.
