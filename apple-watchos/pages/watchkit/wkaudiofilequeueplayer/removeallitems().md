> Snapshot-pinned source payload for Apple watchOS snapshot-4bff84466040; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkaudiofilequeueplayer/removeallitems()

# removeAllItems() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Removes all items from the queue.

## Declaration

```swift
func removeAllItems()
```

<a id="Discussion"></a>

## Discussion

This method has the side effect of stopping playback.

## See Also

### Managing Items

- [items](items.md): Deprecated. The array of queued items.
- [advanceToNextItem()](advancetonextitem%28%29.md): Deprecated. Ends playback of the current item and begins playing the next item in the queue.
- [appendItem(\_:)](appenditem%28__%29.md): Deprecated. Adds the specified item to the end of the queue.
- [removeItem(\_:)](removeitem%28__%29.md): Deprecated. Removes the specified item from the queue.

# removeAllItems (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Removes all items from the queue.

## Declaration

```objectivec
- (void) removeAllItems;
```

<a id="Discussion"></a>

## Discussion

This method has the side effect of stopping playback.

## See Also

### Managing Items

- [items](items.md): Deprecated. The array of queued items.
- [advanceToNextItem](advancetonextitem%28%29.md): Deprecated. Ends playback of the current item and begins playing the next item in the queue.
- [appendItem:](appenditem%28__%29.md): Deprecated. Adds the specified item to the end of the queue.
- [removeItem:](removeitem%28__%29.md): Deprecated. Removes the specified item from the queue.
