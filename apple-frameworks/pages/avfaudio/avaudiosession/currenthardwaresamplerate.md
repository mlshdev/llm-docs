> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/currenthardwaresamplerate](https://developer.apple.com/documentation/avfaudio/avaudiosession/currenthardwaresamplerate)

# currentHardwareSampleRate (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The audio hardware sample rate, in hertz.

> Use [sampleRate](samplerate.md) instead

## Declaration

```swift
var currentHardwareSampleRate: Double { get }
```

<a id="Discussion"></a>

## Discussion

Obtain the value of this property after activating your audio session. After successful activation, the value of this property doesn’t change while your session remains active.

## See Also

### Inspecting audio hardware

- [currentHardwareInputNumberOfChannels](currenthardwareinputnumberofchannels.md): Deprecated. The number of audio hardware input channels.
- [currentHardwareOutputNumberOfChannels](currenthardwareoutputnumberofchannels.md): Deprecated. The number of audio hardware output channels.
- [inputIsAvailable](inputisavailable.md): Deprecated. A Boolean value that indicates whether a hardware audio input path is available.
- [preferredHardwareSampleRate](preferredhardwaresamplerate.md): Deprecated. The preferred hardware sample rate, in hertz.
- [setPreferredHardwareSampleRate(\_:)](setpreferredhardwaresamplerate%28__%29.md): Deprecated. Sets the preferred hardware sample rate for input and output.

# currentHardwareSampleRate (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 6.0) · iPadOS 3.0+ (deprecated in 6.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The audio hardware sample rate, in hertz.

> Use [sampleRate](samplerate.md) instead

## Declaration

```objectivec
@property (readonly) double currentHardwareSampleRate;
```

<a id="Discussion"></a>

## Discussion

Obtain the value of this property after activating your audio session. After successful activation, the value of this property doesn’t change while your session remains active.

## See Also

### Inspecting audio hardware

- [currentHardwareInputNumberOfChannels](currenthardwareinputnumberofchannels.md): Deprecated. The number of audio hardware input channels.
- [currentHardwareOutputNumberOfChannels](currenthardwareoutputnumberofchannels.md): Deprecated. The number of audio hardware output channels.
- [inputIsAvailable](inputisavailable.md): Deprecated. A Boolean value that indicates whether a hardware audio input path is available.
- [preferredHardwareSampleRate](preferredhardwaresamplerate.md): Deprecated. The preferred hardware sample rate, in hertz.
- [setPreferredHardwareSampleRate:error:](setpreferredhardwaresamplerate%28__%29.md): Deprecated. Sets the preferred hardware sample rate for input and output.
