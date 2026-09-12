> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setpreferredhardwaresamplerate(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setpreferredhardwaresamplerate(_:))

# setPreferredHardwareSampleRate(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Sets the preferred hardware sample rate for input and output.

> Use [setPreferredSampleRate(\_:)](setpreferredsamplerate%28__%29.md) instead.

## Declaration

```swift
func setPreferredHardwareSampleRate(_ sampleRate: Double) throws
```

## Parameters

- `sampleRate`: The hardware sample rate you want to use. The available range for hardware sample rate is device dependent.

## See Also

### Inspecting audio hardware

- [currentHardwareInputNumberOfChannels](currenthardwareinputnumberofchannels.md): Deprecated. The number of audio hardware input channels.
- [currentHardwareOutputNumberOfChannels](currenthardwareoutputnumberofchannels.md): Deprecated. The number of audio hardware output channels.
- [currentHardwareSampleRate](currenthardwaresamplerate.md): Deprecated. The audio hardware sample rate, in hertz.
- [inputIsAvailable](inputisavailable.md): Deprecated. A Boolean value that indicates whether a hardware audio input path is available.
- [preferredHardwareSampleRate](preferredhardwaresamplerate.md): Deprecated. The preferred hardware sample rate, in hertz.

# setPreferredHardwareSampleRate:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 6.0) · iPadOS 3.0+ (deprecated in 6.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Sets the preferred hardware sample rate for input and output.

> Use [setPreferredSampleRate:error:](setpreferredsamplerate%28__%29.md) instead.

## Declaration

```objectivec
- (BOOL) setPreferredHardwareSampleRate:(double) sampleRate error:(NSError **) outError;
```

## Parameters

- `sampleRate`: The hardware sample rate you want to use. The available range for hardware sample rate is device dependent.
- `outError`: On input, a pointer to an error object. If an error occurs, framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) on success or [false](https://developer.apple.com/documentation/swift/false) on failure.

## See Also

### Inspecting audio hardware

- [currentHardwareInputNumberOfChannels](currenthardwareinputnumberofchannels.md): Deprecated. The number of audio hardware input channels.
- [currentHardwareOutputNumberOfChannels](currenthardwareoutputnumberofchannels.md): Deprecated. The number of audio hardware output channels.
- [currentHardwareSampleRate](currenthardwaresamplerate.md): Deprecated. The audio hardware sample rate, in hertz.
- [inputIsAvailable](inputisavailable.md): Deprecated. A Boolean value that indicates whether a hardware audio input path is available.
- [preferredHardwareSampleRate](preferredhardwaresamplerate.md): Deprecated. The preferred hardware sample rate, in hertz.
