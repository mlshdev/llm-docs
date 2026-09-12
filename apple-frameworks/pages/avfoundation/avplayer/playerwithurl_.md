> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/playerwithurl:](https://developer.apple.com/documentation/avfoundation/avplayer/playerwithurl:)

# playerWithURL:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a new player to play a single audiovisual resource referenced by a given URL.

## Declaration

```objectivec
+ (instancetype) playerWithURL:(NSURL *) URL;
```

## Parameters

- `URL`: A URL that identifies an audiovisual resource.

<a id="return-value"></a>

## Return Value

A new player initialized to play the audiovisual resource specified by `URL`.

<a id="Discussion"></a>

## Discussion

This method implicitly creates an [AVPlayerItem](../avplayeritem.md) object. You can get the player item using [currentItem](currentitem.md).

## See Also

### Creating a player

- [initWithURL:](init%28url_%29-87cxx.md): Creates a new player to play a single audiovisual resource referenced by a given URL.
- [playerWithPlayerItem:](playerwithplayeritem_.md): Returns a new player initialized to play the specified player item.
- [initWithPlayerItem:](init%28playeritem_%29.md): Creates a new player to play the specified player item.
- [init](init%28%29.md): Creates a player object.
