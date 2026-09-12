> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/playerwithplayeritem:](https://developer.apple.com/documentation/avfoundation/avplayer/playerwithplayeritem:)

# playerWithPlayerItem:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a new player initialized to play the specified player item.

## Declaration

```objectivec
+ (instancetype) playerWithPlayerItem:(AVPlayerItem *) item;
```

## Parameters

- `item`: The player item to play.

<a id="return-value"></a>

## Return Value

A new player initialized to play `item`.

## See Also

### Creating a player

- [playerWithURL:](playerwithurl_.md): Returns a new player to play a single audiovisual resource referenced by a given URL.
- [initWithURL:](init%28url_%29-87cxx.md): Creates a new player to play a single audiovisual resource referenced by a given URL.
- [initWithPlayerItem:](init%28playeritem_%29.md): Creates a new player to play the specified player item.
- [init](init%28%29.md): Creates a player object.
