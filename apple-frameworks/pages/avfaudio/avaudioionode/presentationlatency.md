> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioionode/presentationlatency](https://developer.apple.com/documentation/avfaudio/avaudioionode/presentationlatency)

# presentationLatency (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The presentation or hardware latency, applicable when rendering to or from an audio device.

## Declaration

```swift
var presentationLatency: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This corresponds to `kAudioDevicePropertyLatency` and `kAudioStreamPropertyLatency`. For more information, see `AudioHardwareBase.h` in `CoreAudio.Framework`.

# presentationLatency (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The presentation or hardware latency, applicable when rendering to or from an audio device.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval presentationLatency;
```

<a id="Discussion"></a>

## Discussion

This corresponds to `kAudioDevicePropertyLatency` and `kAudioStreamPropertyLatency`. For more information, see `AudioHardwareBase.h` in `CoreAudio.Framework`.
