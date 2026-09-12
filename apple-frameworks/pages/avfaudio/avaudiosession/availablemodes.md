> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/availablemodes](https://developer.apple.com/documentation/avfaudio/avaudiosession/availablemodes)

# availableModes (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The audio session modes available on the device.

## Declaration

```swift
var availableModes: [AVAudioSession.Mode] { get }
```

<a id="Discussion"></a>

## Discussion

Not every device supports every audio session mode. For example, the [videoRecording](mode-swift.struct/videorecording.md) mode isn’t available on a device that doesn’t support video recording.

Query this property to determine if the mode you’d like to use is available on the current device.

## See Also

### Inspecting mode configuration

- [mode](mode-swift.property.md): The current audio session’s mode.
- [AVAudioSession.Mode](mode-swift.struct.md): Audio session mode identifiers.

# availableModes (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The audio session modes available on the device.

## Declaration

```objectivec
@property (readonly) NSArray<NSString *> * availableModes;
```

<a id="Discussion"></a>

## Discussion

Not every device supports every audio session mode. For example, the [AVAudioSessionModeVideoRecording](mode-swift.struct/videorecording.md) mode isn’t available on a device that doesn’t support video recording.

Query this property to determine if the mode you’d like to use is available on the current device.

## See Also

### Inspecting mode configuration

- [mode](mode-swift.property.md): The current audio session’s mode.
- [AVAudioSessionMode](mode-swift.struct.md): Audio session mode identifiers.
