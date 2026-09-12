> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/canplayfastforward](https://developer.apple.com/documentation/avfoundation/avplayeritem/canplayfastforward)

# canPlayFastForward (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the item can play at fast-forward rates.

## Declaration

```swift
nonisolated var canPlayFastForward: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is `true` when an item can play at rates greater than `2.0`. Every item with a status of [AVPlayerItem.Status.readyToPlay](status-swift.enum/readytoplay.md) plays at rates between `1.0` and `2.0`, inclusive, even when this property is `false`.

## See Also

### Determining playback capabilities

- [canPlayReverse](canplayreverse.md): A Boolean value that indicates whether the item can play in reverse.
- [canPlayFastReverse](canplayfastreverse.md): A Boolean value that indicates whether the item can be quickly reversed.
- [canPlaySlowForward](canplayslowforward.md): A Boolean value that indicates whether the item can play slower than normal.
- [canPlaySlowReverse](canplayslowreverse.md): A Boolean value that indicates whether the item can play slowly backward.

# canPlayFastForward (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the item can play at fast-forward rates.

## Declaration

```objectivec
@property (readonly) BOOL canPlayFastForward;
```

<a id="Discussion"></a>

## Discussion

This property is `true` when an item can play at rates greater than `2.0`. Every item with a status of [AVPlayerItemStatusReadyToPlay](status-swift.enum/readytoplay.md) plays at rates between `1.0` and `2.0`, inclusive, even when this property is `false`.

## See Also

### Determining playback capabilities

- [canPlayReverse](canplayreverse.md): A Boolean value that indicates whether the item can play in reverse.
- [canPlayFastReverse](canplayfastreverse.md): A Boolean value that indicates whether the item can be quickly reversed.
- [canPlaySlowForward](canplayslowforward.md): A Boolean value that indicates whether the item can play slower than normal.
- [canPlaySlowReverse](canplayslowreverse.md): A Boolean value that indicates whether the item can play slowly backward.
