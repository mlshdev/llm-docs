> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avqueueplayer/advancetonextitem()](https://developer.apple.com/documentation/avfoundation/avqueueplayer/advancetonextitem())

# advanceToNextItem() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Ends playback of the current item and starts playback of the next item in the player’s queue.

## Declaration

```swift
nonisolated func advanceToNextItem()
```

<a id="Discussion"></a>

## Discussion

Calling this method also removes the current item from the play queue.

## See Also

### Managing the player queue

- [items()](items%28%29.md): Returns an array of the currently enqueued items.
- [canInsert(\_:after:)](caninsert%28__after_%29.md): Returns a Boolean value that indicates whether you can insert a player item into the player’s queue.
- [insert(\_:after:)](insert%28__after_%29.md): Inserts a player item after another player item in the queue.
- [remove(\_:)](remove%28__%29.md): Removes a given player item from the queue.
- [removeAllItems()](removeallitems%28%29.md): Removes all player items from the queue.

# advanceToNextItem (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Ends playback of the current item and starts playback of the next item in the player’s queue.

## Declaration

```objectivec
- (void) advanceToNextItem;
```

<a id="Discussion"></a>

## Discussion

Calling this method also removes the current item from the play queue.

## See Also

### Managing the player queue

- [items](items%28%29.md): Returns an array of the currently enqueued items.
- [canInsertItem:afterItem:](caninsert%28__after_%29.md): Returns a Boolean value that indicates whether you can insert a player item into the player’s queue.
- [insertItem:afterItem:](insert%28__after_%29.md): Inserts a player item after another player item in the queue.
- [removeItem:](remove%28__%29.md): Removes a given player item from the queue.
- [removeAllItems](removeallitems%28%29.md): Removes all player items from the queue.
