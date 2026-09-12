> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayer/devicecurrenttime](https://developer.apple.com/documentation/avfaudio/avaudioplayer/devicecurrenttime)

# deviceCurrentTime (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The time value, in seconds, of the audio output device’s clock.

## Declaration

```swift
var deviceCurrentTime: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property increases monotonically while an audio player is playing or is in a paused state. If you connect more than one audio player to the audio output device, the time continues incrementing while at least one of the players is playing or is in a paused state. If the audio output device has no connected audio players that are either playing or are in a paused state, device time reverts to `0.0`.

## See Also

### Accessing device information

- [currentDevice](currentdevice.md): The unique identifier of the current audio player.

# deviceCurrentTime (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The time value, in seconds, of the audio output device’s clock.

## Declaration

```objectivec
@property (readonly) NSTimeInterval deviceCurrentTime;
```

<a id="Discussion"></a>

## Discussion

The value of this property increases monotonically while an audio player is playing or is in a paused state. If you connect more than one audio player to the audio output device, the time continues incrementing while at least one of the players is playing or is in a paused state. If the audio output device has no connected audio players that are either playing or are in a paused state, device time reverts to `0.0`.

## See Also

### Accessing device information

- [currentDevice](currentdevice.md): The unique identifier of the current audio player.
