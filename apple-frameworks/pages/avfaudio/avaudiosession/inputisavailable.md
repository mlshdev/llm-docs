> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/inputisavailable](https://developer.apple.com/documentation/avfaudio/avaudiosession/inputisavailable)

# inputIsAvailable (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

A Boolean value that indicates whether a hardware audio input path is available.

> Use [isInputAvailable](isinputavailable.md) instead.

## Declaration

```swift
var inputIsAvailable: Bool { get }
```

## See Also

### Inspecting audio hardware

- [currentHardwareInputNumberOfChannels](currenthardwareinputnumberofchannels.md): Deprecated. The number of audio hardware input channels.
- [currentHardwareOutputNumberOfChannels](currenthardwareoutputnumberofchannels.md): Deprecated. The number of audio hardware output channels.
- [currentHardwareSampleRate](currenthardwaresamplerate.md): Deprecated. The audio hardware sample rate, in hertz.
- [preferredHardwareSampleRate](preferredhardwaresamplerate.md): Deprecated. The preferred hardware sample rate, in hertz.
- [setPreferredHardwareSampleRate(\_:)](setpreferredhardwaresamplerate%28__%29.md): Deprecated. Sets the preferred hardware sample rate for input and output.

# inputIsAvailable (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 6.0) · iPadOS 3.0+ (deprecated in 6.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

A Boolean value that indicates whether a hardware audio input path is available.

> Use [inputAvailable](isinputavailable.md) instead.

## Declaration

```objectivec
@property (readonly) BOOL inputIsAvailable;
```

## See Also

### Inspecting audio hardware

- [currentHardwareInputNumberOfChannels](currenthardwareinputnumberofchannels.md): Deprecated. The number of audio hardware input channels.
- [currentHardwareOutputNumberOfChannels](currenthardwareoutputnumberofchannels.md): Deprecated. The number of audio hardware output channels.
- [currentHardwareSampleRate](currenthardwaresamplerate.md): Deprecated. The audio hardware sample rate, in hertz.
- [preferredHardwareSampleRate](preferredhardwaresamplerate.md): Deprecated. The preferred hardware sample rate, in hertz.
- [setPreferredHardwareSampleRate:error:](setpreferredhardwaresamplerate%28__%29.md): Deprecated. Sets the preferred hardware sample rate for input and output.
