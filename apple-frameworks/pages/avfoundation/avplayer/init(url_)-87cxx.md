> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/init(url:)-87cxx](https://developer.apple.com/documentation/avfoundation/avplayer/init(url:)-87cxx)

# init(url:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a new player to play a single audiovisual resource referenced by a given URL.

## Declaration

```swift
nonisolated init(url URL: URL)
```

## Parameters

- `URL`: A URL that identifies an audiovisual resource.

<a id="return-value"></a>

## Return Value

A new player instance initialized to play the audiovisual resource specified by `URL`.

<a id="Discussion"></a>

## Discussion

This method implicitly creates an [AVPlayerItem](../avplayeritem.md) object. You can get the player item using [currentItem](currentitem.md).

## See Also

### Creating a player

- [init(playerItem:)](init%28playeritem_%29.md): Creates a new player to play the specified player item.
- [init()](init%28%29.md): Creates a player object.

# initWithURL: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a new player to play a single audiovisual resource referenced by a given URL.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL;
```

## Parameters

- `URL`: A URL that identifies an audiovisual resource.

<a id="return-value"></a>

## Return Value

A new player instance initialized to play the audiovisual resource specified by `URL`.

<a id="Discussion"></a>

## Discussion

This method implicitly creates an [AVPlayerItem](../avplayeritem.md) object. You can get the player item using [currentItem](currentitem.md).

## See Also

### Creating a player

- [playerWithURL:](playerwithurl_.md): Returns a new player to play a single audiovisual resource referenced by a given URL.
- [playerWithPlayerItem:](playerwithplayeritem_.md): Returns a new player initialized to play the specified player item.
- [initWithPlayerItem:](init%28playeritem_%29.md): Creates a new player to play the specified player item.
- [init](init%28%29.md): Creates a player object.
