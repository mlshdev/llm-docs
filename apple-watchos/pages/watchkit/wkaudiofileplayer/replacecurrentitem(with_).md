> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofileplayer/replacecurrentitem(with:)](https://developer.apple.com/documentation/watchkit/wkaudiofileplayer/replacecurrentitem(with:))

# replaceCurrentItem(with:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Replaces the current player item with a different one.

## Declaration

```swift
func replaceCurrentItem(with item: WKAudioFilePlayerItem?)
```

## Parameters

- `item`: The player item whose contents you want to play.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override it to implement support for swapping out the current player item for a new one.

## See Also

### Creating a Player

- [init(playerItem:)](init%28playeritem_%29.md): Deprecated. Creates and returns a player initialized with the specified player item.

# replaceCurrentItemWithPlayerItem: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Replaces the current player item with a different one.

## Declaration

```objectivec
- (void) replaceCurrentItemWithPlayerItem:(WKAudioFilePlayerItem *) item;
```

## Parameters

- `item`: The player item whose contents you want to play.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override it to implement support for swapping out the current player item for a new one.

## See Also

### Creating a Player

- [playerWithPlayerItem:](init%28playeritem_%29.md): Deprecated. Creates and returns a player initialized with the specified player item.
