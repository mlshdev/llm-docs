> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaplayback/ispreparedtoplay](https://developer.apple.com/documentation/mediaplayer/mpmediaplayback/ispreparedtoplay)

# isPreparedToPlay (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value indicating whether a media player is ready to play.

## Declaration

```swift
var isPreparedToPlay: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the media player is ready to begin playing the queued media items.

## See Also

### Starting and stopping playback

- [play()](play%28%29.md): Initiates playback of the current item.
- [pause()](pause%28%29.md): Pauses playback of the current item.
- [stop()](stop%28%29.md): Ends playback of the current item.
- [prepareToPlay()](preparetoplay%28%29.md): Prepares a media player for playback.

# isPreparedToPlay (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value indicating whether a media player is ready to play.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isPreparedToPlay;
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the media player is ready to begin playing the queued media items.

## See Also

### Starting and stopping playback

- [play](play%28%29.md): Initiates playback of the current item.
- [pause](pause%28%29.md): Pauses playback of the current item.
- [stop](stop%28%29.md): Ends playback of the current item.
- [prepareToPlay](preparetoplay%28%29.md): Prepares a media player for playback.
