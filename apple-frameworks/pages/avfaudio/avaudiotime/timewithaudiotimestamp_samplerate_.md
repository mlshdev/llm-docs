> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiotime/timewithaudiotimestamp:samplerate:](https://developer.apple.com/documentation/avfaudio/avaudiotime/timewithaudiotimestamp:samplerate:)

# timeWithAudioTimeStamp:sampleRate:

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an audio time object with the specified timestamp and sample rate.

## Declaration

```objectivec
+ (instancetype) timeWithAudioTimeStamp:(const AudioTimeStamp *) ts sampleRate:(double) sampleRate;
```

## Parameters

- `ts`: The timestamp.
- `sampleRate`: The sample rate.

<a id="return-value"></a>

## Return Value

A new [AVAudioTime](../avaudiotime.md) instance.

## See Also

### Creating an Audio Time Instance

- [initWithAudioTimeStamp:sampleRate:](init%28audiotimestamp_samplerate_%29.md): Creates an audio time object with the specified timestamp and sample rate.
- [initWithHostTime:](init%28hosttime_%29.md): Creates an audio time object with the specified host time.
- [initWithHostTime:sampleTime:atRate:](init%28hosttime_sampletime_atrate_%29.md): Creates an audio time object with the specified host time, sample time, and sample rate.
- [initWithSampleTime:atRate:](init%28sampletime_atrate_%29.md): Creates an audio time object with the specified timestamp and sample rate.
- [timeWithHostTime:sampleTime:atRate:](timewithhosttime_sampletime_atrate_.md): Creates an audio time object with the specified host time, sample time, and sample rate.
- [timeWithSampleTime:atRate:](timewithsampletime_atrate_.md): Creates an audio time object with the specified sample time and sample rate.
- [timeWithHostTime:](timewithhosttime_.md): Creates an audio time object with the specified host time.
- [extrapolateTimeFromAnchor:](extrapolatetime%28fromanchor_%29.md): Creates an audio time object by converting between host time and sample time.
