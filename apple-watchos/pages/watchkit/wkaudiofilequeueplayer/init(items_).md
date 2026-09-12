> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofilequeueplayer/init(items:)](https://developer.apple.com/documentation/watchkit/wkaudiofilequeueplayer/init(items:))

# init(items:) (Swift)

**Framework:** WatchKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Creates and returns a player initialized with an array of items.

## Declaration

```swift
convenience init(items: [WKAudioFilePlayerItem])
```

## Parameters

- `items`: An array of [WKAudioFilePlayerItem](../wkaudiofileplayeritem.md) objects representing the assets to play. The order of the objects queue corresponds to the playback order of the assets.

<a id="return-value"></a>

## Return Value

An initialized player object.

<a id="Discussion"></a>

## Discussion

The contents of the `items` property represent the initial items to play but you may add items to this queue later.

# queuePlayerWithItems: (Objective-C)

**Framework:** WatchKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Creates and returns a player initialized with an array of items.

## Declaration

```objectivec
+ (instancetype) queuePlayerWithItems:(NSArray<WKAudioFilePlayerItem *> *) items;
```

## Parameters

- `items`: An array of [WKAudioFilePlayerItem](../wkaudiofileplayeritem.md) objects representing the assets to play. The order of the objects queue corresponds to the playback order of the assets.

<a id="return-value"></a>

## Return Value

An initialized player object.

<a id="Discussion"></a>

## Discussion

The contents of the `items` property represent the initial items to play but you may add items to this queue later.
