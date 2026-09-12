> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofilequeueplayer/advancetonextitem()](https://developer.apple.com/documentation/watchkit/wkaudiofilequeueplayer/advancetonextitem())

# advanceToNextItem() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Ends playback of the current item and begins playing the next item in the queue.

## Declaration

```swift
func advanceToNextItem()
```

<a id="Discussion"></a>

## Discussion

The method removes the current item from the queue before beginning playback of the next item.

## See Also

### Managing Items

- [items](items.md): Deprecated. The array of queued items.
- [appendItem(\_:)](appenditem%28__%29.md): Deprecated. Adds the specified item to the end of the queue.
- [removeItem(\_:)](removeitem%28__%29.md): Deprecated. Removes the specified item from the queue.
- [removeAllItems()](removeallitems%28%29.md): Deprecated. Removes all items from the queue.

# advanceToNextItem (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Ends playback of the current item and begins playing the next item in the queue.

## Declaration

```objectivec
- (void) advanceToNextItem;
```

<a id="Discussion"></a>

## Discussion

The method removes the current item from the queue before beginning playback of the next item.

## See Also

### Managing Items

- [items](items.md): Deprecated. The array of queued items.
- [appendItem:](appenditem%28__%29.md): Deprecated. Adds the specified item to the end of the queue.
- [removeItem:](removeitem%28__%29.md): Deprecated. Removes the specified item from the queue.
- [removeAllItems](removeallitems%28%29.md): Deprecated. Removes all items from the queue.
