> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofilequeueplayer/items](https://developer.apple.com/documentation/watchkit/wkaudiofilequeueplayer/items)

# items (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

The array of queued items.

## Declaration

```swift
var items: [WKAudioFilePlayerItem] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the array of queued [WKAudioFilePlayerItem](../wkaudiofileplayeritem.md) objects. The initial contents of this array are set at initialization time but you may add or remove items using the methods of this class.

## See Also

### Managing Items

- [advanceToNextItem()](advancetonextitem%28%29.md): Deprecated. Ends playback of the current item and begins playing the next item in the queue.
- [appendItem(\_:)](appenditem%28__%29.md): Deprecated. Adds the specified item to the end of the queue.
- [removeItem(\_:)](removeitem%28__%29.md): Deprecated. Removes the specified item from the queue.
- [removeAllItems()](removeallitems%28%29.md): Deprecated. Removes all items from the queue.

# items (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

The array of queued items.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<WKAudioFilePlayerItem *> * items;
```

<a id="Discussion"></a>

## Discussion

This property contains the array of queued [WKAudioFilePlayerItem](../wkaudiofileplayeritem.md) objects. The initial contents of this array are set at initialization time but you may add or remove items using the methods of this class.

## See Also

### Managing Items

- [advanceToNextItem](advancetonextitem%28%29.md): Deprecated. Ends playback of the current item and begins playing the next item in the queue.
- [appendItem:](appenditem%28__%29.md): Deprecated. Adds the specified item to the end of the queue.
- [removeItem:](removeitem%28__%29.md): Deprecated. Removes the specified item from the queue.
- [removeAllItems](removeallitems%28%29.md): Deprecated. Removes all items from the queue.
