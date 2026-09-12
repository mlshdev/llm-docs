> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofileplayer/init(playeritem:)](https://developer.apple.com/documentation/watchkit/wkaudiofileplayer/init(playeritem:))

# init(playerItem:) (Swift)

**Framework:** WatchKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Creates and returns a player initialized with the specified player item.

## Declaration

```swift
convenience init(playerItem item: WKAudioFilePlayerItem)
```

## Parameters

- `item`: The player item containing the audio asset to play. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An initialized player object.

## See Also

### Creating a Player

- [replaceCurrentItem(with:)](replacecurrentitem%28with_%29.md): Deprecated. Replaces the current player item with a different one.

# playerWithPlayerItem: (Objective-C)

**Framework:** WatchKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Creates and returns a player initialized with the specified player item.

## Declaration

```objectivec
+ (instancetype) playerWithPlayerItem:(WKAudioFilePlayerItem *) item;
```

## Parameters

- `item`: The player item containing the audio asset to play. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An initialized player object.

## See Also

### Creating a Player

- [replaceCurrentItemWithPlayerItem:](replacecurrentitem%28with_%29.md): Deprecated. Replaces the current player item with a different one.
