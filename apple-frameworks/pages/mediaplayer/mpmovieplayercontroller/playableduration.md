> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller/playableduration](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller/playableduration)

# playableDuration (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The amount of currently playable content.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
var playableDuration: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

For progressively downloaded network content, this property reflects the amount of content that can be played now.

## See Also

### Accessing the movie duration

- [duration](duration.md): Deprecated. The duration of the movie, measured in seconds.

# playableDuration (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The amount of currently playable content.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval playableDuration;
```

<a id="Discussion"></a>

## Discussion

For progressively downloaded network content, this property reflects the amount of content that can be played now.

## See Also

### Accessing the movie duration

- [duration](duration.md): Deprecated. The duration of the movie, measured in seconds.
