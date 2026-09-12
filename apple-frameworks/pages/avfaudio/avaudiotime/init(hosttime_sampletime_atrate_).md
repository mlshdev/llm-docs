> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiotime/init(hosttime:sampletime:atrate:)](https://developer.apple.com/documentation/avfaudio/avaudiotime/init(hosttime:sampletime:atrate:))

# init(hostTime:sampleTime:atRate:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an audio time object with the specified host time, sample time, and sample rate.

## Declaration

```swift
init(hostTime: UInt64, sampleTime: AVAudioFramePosition, atRate sampleRate: Double)
```

## Parameters

- `hostTime`: The host time.
- `sampleTime`: The sample time.
- `sampleRate`: The sample rate.

<a id="return-value"></a>

## Return Value

A new [AVAudioTime](../avaudiotime.md) instance.

## See Also

### Creating an Audio Time Instance

- [init(audioTimeStamp:sampleRate:)](init%28audiotimestamp_samplerate_%29.md): Creates an audio time object with the specified timestamp and sample rate.
- [init(hostTime:)](init%28hosttime_%29.md): Creates an audio time object with the specified host time.
- [init(sampleTime:atRate:)](init%28sampletime_atrate_%29.md): Creates an audio time object with the specified timestamp and sample rate.
- [extrapolateTime(fromAnchor:)](extrapolatetime%28fromanchor_%29.md): Creates an audio time object by converting between host time and sample time.

# initWithHostTime:sampleTime:atRate: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an audio time object with the specified host time, sample time, and sample rate.

## Declaration

```objectivec
- (instancetype) initWithHostTime:(uint64_t) hostTime sampleTime:(AVAudioFramePosition) sampleTime atRate:(double) sampleRate;
```

## Parameters

- `hostTime`: The host time.
- `sampleTime`: The sample time.
- `sampleRate`: The sample rate.

<a id="return-value"></a>

## Return Value

A new [AVAudioTime](../avaudiotime.md) instance.

## See Also

### Creating an Audio Time Instance

- [initWithAudioTimeStamp:sampleRate:](init%28audiotimestamp_samplerate_%29.md): Creates an audio time object with the specified timestamp and sample rate.
- [initWithHostTime:](init%28hosttime_%29.md): Creates an audio time object with the specified host time.
- [initWithSampleTime:atRate:](init%28sampletime_atrate_%29.md): Creates an audio time object with the specified timestamp and sample rate.
- [timeWithAudioTimeStamp:sampleRate:](timewithaudiotimestamp_samplerate_.md): Creates an audio time object with the specified timestamp and sample rate.
- [timeWithHostTime:sampleTime:atRate:](timewithhosttime_sampletime_atrate_.md): Creates an audio time object with the specified host time, sample time, and sample rate.
- [timeWithSampleTime:atRate:](timewithsampletime_atrate_.md): Creates an audio time object with the specified sample time and sample rate.
- [timeWithHostTime:](timewithhosttime_.md): Creates an audio time object with the specified host time.
- [extrapolateTimeFromAnchor:](extrapolatetime%28fromanchor_%29.md): Creates an audio time object by converting between host time and sample time.
