> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller/duration](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller/duration)

# duration (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The duration of the movie, measured in seconds.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
var duration: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

If the duration of the movie is not known, the value in this property is `0.0`. If the duration is subsequently determined, this property is updated and a [MPMovieDurationAvailableNotification](../mpmoviedurationavailablenotification.md) notification is posted.

## See Also

### Accessing the movie duration

- [playableDuration](playableduration.md): Deprecated. The amount of currently playable content.

# duration (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The duration of the movie, measured in seconds.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval duration;
```

<a id="Discussion"></a>

## Discussion

If the duration of the movie is not known, the value in this property is `0.0`. If the duration is subsequently determined, this property is updated and a [MPMovieDurationAvailableNotification](../mpmoviedurationavailablenotification.md) notification is posted.

## See Also

### Accessing the movie duration

- [playableDuration](playableduration.md): Deprecated. The amount of currently playable content.
