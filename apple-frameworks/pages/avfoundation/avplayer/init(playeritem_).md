> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayer/init(playeritem:)

# init(playerItem:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a new player to play the specified player item.

## Declaration

```swift
nonisolated init(playerItem item: AVPlayerItem?)
```

## Parameters

- `item`: The player item to play.

<a id="return-value"></a>

## Return Value

A new player initialized to play `item`.

## See Also

### Creating a player

- [init(url:)](init%28url_%29-87cxx.md): Creates a new player to play a single audiovisual resource referenced by a given URL.
- [init()](init%28%29.md): Creates a player object.

# initWithPlayerItem: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a new player to play the specified player item.

## Declaration

```objectivec
- (instancetype) initWithPlayerItem:(AVPlayerItem *) item;
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
- [playerWithPlayerItem:](playerwithplayeritem_.md): Returns a new player initialized to play the specified player item.
- [init](init%28%29.md): Creates a player object.
