> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofilequeueplayer/removeitem(_:)](https://developer.apple.com/documentation/watchkit/wkaudiofilequeueplayer/removeitem(_:))

# removeItem(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Removes the specified item from the queue.

## Declaration

```swift
func removeItem(_ item: WKAudioFilePlayerItem)
```

## Parameters

- `item`: The player item to remove.

<a id="Discussion"></a>

## Discussion

If `item` is currently playing, the queue stops playback of item before removing it. It then begins playing the next item in the queue.

## See Also

### Managing Items

- [items](items.md): Deprecated. The array of queued items.
- [advanceToNextItem()](advancetonextitem%28%29.md): Deprecated. Ends playback of the current item and begins playing the next item in the queue.
- [appendItem(\_:)](appenditem%28__%29.md): Deprecated. Adds the specified item to the end of the queue.
- [removeAllItems()](removeallitems%28%29.md): Deprecated. Removes all items from the queue.

# removeItem: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Removes the specified item from the queue.

## Declaration

```objectivec
- (void) removeItem:(WKAudioFilePlayerItem *) item;
```

## Parameters

- `item`: The player item to remove.

<a id="Discussion"></a>

## Discussion

If `item` is currently playing, the queue stops playback of item before removing it. It then begins playing the next item in the queue.

## See Also

### Managing Items

- [items](items.md): Deprecated. The array of queued items.
- [advanceToNextItem](advancetonextitem%28%29.md): Deprecated. Ends playback of the current item and begins playing the next item in the queue.
- [appendItem:](appenditem%28__%29.md): Deprecated. Adds the specified item to the end of the queue.
- [removeAllItems](removeallitems%28%29.md): Deprecated. Removes all items from the queue.
