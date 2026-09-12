> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofileplayeritem/setcurrenttime(_:)](https://developer.apple.com/documentation/watchkit/wkaudiofileplayeritem/setcurrenttime(_:))

# setCurrentTime(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.2+ (deprecated in 6.0)

Sets the playback point, measured in seconds, from the beginning of the audio file.

> Use AVFoundation’s AVPlayer and AVQueuePlayer instead

## Declaration

```swift
func setCurrentTime(_ currentTime: TimeInterval)
```

## Parameters

- `currentTime`: The offset of the current playback position, measured in seconds from the start of the sound.

<a id="Discussion"></a>

## Discussion

Use this method to seek a specific point in a sound file or to implement fast-forward and rewind functions.

## See Also

### Managing the Playback Position

- [currentTime](currenttime.md): Deprecated. The current playback point, measured in seconds, from the beginning of the audio file.

# setCurrentTime: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.2+ (deprecated in 6.0)

Sets the playback point, measured in seconds, from the beginning of the audio file.

> Use AVFoundation’s AVPlayer and AVQueuePlayer instead

## Declaration

```objectivec
- (void) setCurrentTime:(NSTimeInterval) currentTime;
```

## Parameters

- `currentTime`: The offset of the current playback position, measured in seconds from the start of the sound.

<a id="Discussion"></a>

## Discussion

Use this method to seek a specific point in a sound file or to implement fast-forward and rewind functions.

## See Also

### Managing the Playback Position

- [currentTime](currenttime.md): Deprecated. The current playback point, measured in seconds, from the beginning of the audio file.
