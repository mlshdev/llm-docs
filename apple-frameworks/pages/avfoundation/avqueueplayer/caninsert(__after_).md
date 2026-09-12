> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avqueueplayer/caninsert(_:after:)](https://developer.apple.com/documentation/avfoundation/avqueueplayer/caninsert(_:after:))

# canInsert(\_:after:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a Boolean value that indicates whether you can insert a player item into the player’s queue.

## Declaration

```swift
nonisolated func canInsert(_ item: AVPlayerItem, after afterItem: AVPlayerItem?) -> Bool
```

## Parameters

- `item`: The player item to insert.
- `afterItem`: The player item in the queue to follow. Pass `nil` to test if you can append the item to the queue.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `item` can be appended to the queue, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Adding the same item to a player at more than one position in the queue isn’t supported.

## See Also

### Managing the player queue

- [items()](items%28%29.md): Returns an array of the currently enqueued items.
- [advanceToNextItem()](advancetonextitem%28%29.md): Ends playback of the current item and starts playback of the next item in the player’s queue.
- [insert(\_:after:)](insert%28__after_%29.md): Inserts a player item after another player item in the queue.
- [remove(\_:)](remove%28__%29.md): Removes a given player item from the queue.
- [removeAllItems()](removeallitems%28%29.md): Removes all player items from the queue.

# canInsertItem:afterItem: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a Boolean value that indicates whether you can insert a player item into the player’s queue.

## Declaration

```objectivec
- (BOOL) canInsertItem:(AVPlayerItem *) item afterItem:(AVPlayerItem *) afterItem;
```

## Parameters

- `item`: The player item to insert.
- `afterItem`: The player item in the queue to follow. Pass `nil` to test if you can append the item to the queue.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `item` can be appended to the queue, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Adding the same item to a player at more than one position in the queue isn’t supported.

## See Also

### Managing the player queue

- [items](items%28%29.md): Returns an array of the currently enqueued items.
- [advanceToNextItem](advancetonextitem%28%29.md): Ends playback of the current item and starts playback of the next item in the player’s queue.
- [insertItem:afterItem:](insert%28__after_%29.md): Inserts a player item after another player item in the queue.
- [removeItem:](remove%28__%29.md): Removes a given player item from the queue.
- [removeAllItems](removeallitems%28%29.md): Removes all player items from the queue.
