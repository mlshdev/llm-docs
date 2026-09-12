> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofilequeueplayer/appenditem(_:)](https://developer.apple.com/documentation/watchkit/wkaudiofilequeueplayer/appenditem(_:))

# appendItem(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Adds the specified item to the end of the queue.

## Declaration

```swift
func appendItem(_ item: WKAudioFilePlayerItem)
```

## Parameters

- `item`: The player item to add to the queue.

## See Also

### Managing Items

- [items](items.md): Deprecated. The array of queued items.
- [advanceToNextItem()](advancetonextitem%28%29.md): Deprecated. Ends playback of the current item and begins playing the next item in the queue.
- [removeItem(\_:)](removeitem%28__%29.md): Deprecated. Removes the specified item from the queue.
- [removeAllItems()](removeallitems%28%29.md): Deprecated. Removes all items from the queue.

# appendItem: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Adds the specified item to the end of the queue.

## Declaration

```objectivec
- (void) appendItem:(WKAudioFilePlayerItem *) item;
```

## Parameters

- `item`: The player item to add to the queue.

## See Also

### Managing Items

- [items](items.md): Deprecated. The array of queued items.
- [advanceToNextItem](advancetonextitem%28%29.md): Deprecated. Ends playback of the current item and begins playing the next item in the queue.
- [removeItem:](removeitem%28__%29.md): Deprecated. Removes the specified item from the queue.
- [removeAllItems](removeallitems%28%29.md): Deprecated. Removes all items from the queue.
