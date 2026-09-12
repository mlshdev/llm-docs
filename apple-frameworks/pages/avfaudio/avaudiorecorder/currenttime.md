> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiorecorder/currenttime](https://developer.apple.com/documentation/avfaudio/avaudiorecorder/currenttime)

# currentTime (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

The time, in seconds, since the beginning of the recording.

## Declaration

```swift
var currentTime: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `0` when you call it on a stopped audio recorder.

## See Also

### Accessing recorder timing

- [deviceCurrentTime](devicecurrenttime.md): The time, in seconds, of the host audio device.

# currentTime (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

The time, in seconds, since the beginning of the recording.

## Declaration

```objectivec
@property (readonly) NSTimeInterval currentTime;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `0` when you call it on a stopped audio recorder.

## See Also

### Accessing recorder timing

- [deviceCurrentTime](devicecurrenttime.md): The time, in seconds, of the host audio device.
