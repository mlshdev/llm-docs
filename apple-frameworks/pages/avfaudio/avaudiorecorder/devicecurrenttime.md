> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiorecorder/devicecurrenttime](https://developer.apple.com/documentation/avfaudio/avaudiorecorder/devicecurrenttime)

# deviceCurrentTime (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

The time, in seconds, of the host audio device.

## Declaration

```swift
var deviceCurrentTime: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

Use this property value to schedule audio recording using the [record(atTime:)](record%28attime_%29.md) and [record(atTime:forDuration:)](record%28attime_forduration_%29.md) methods.

## See Also

### Accessing recorder timing

- [currentTime](currenttime.md): The time, in seconds, since the beginning of the recording.

# deviceCurrentTime (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

The time, in seconds, of the host audio device.

## Declaration

```objectivec
@property (readonly) NSTimeInterval deviceCurrentTime;
```

<a id="Discussion"></a>

## Discussion

Use this property value to schedule audio recording using the [recordAtTime:](record%28attime_%29.md) and [recordAtTime:forDuration:](record%28attime_forduration_%29.md) methods.

## See Also

### Accessing recorder timing

- [currentTime](currenttime.md): The time, in seconds, since the beginning of the recording.
