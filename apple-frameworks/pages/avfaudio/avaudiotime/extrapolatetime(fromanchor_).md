> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiotime/extrapolatetime(fromanchor:)](https://developer.apple.com/documentation/avfaudio/avaudiotime/extrapolatetime(fromanchor:))

# extrapolateTime(fromAnchor:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an audio time object by converting between host time and sample time.

## Declaration

```swift
func extrapolateTime(fromAnchor anchorTime: AVAudioTime) -> AVAudioTime?
```

## Parameters

- `anchorTime`: An audio time instance with a more complete timestamp than that of the receiver (self).

<a id="return-value"></a>

## Return Value

A new [AVAudioTime](../avaudiotime.md) instance.

<a id="Discussion"></a>

## Discussion

If `anchorTime` is an `AVAudioTime` instance where both host time and sample time are valid, and the receiver is another timestamp where only one of the two is valid, this method returns a new `AVAudioTime`. It copies it from the receiver, where the anchor provides additional valid fields.

The `anchorTime` value must have a valid host time and sample time, and self must have sample rate and at least one valid host time or sample time. Otherwise, this method returns `nil`.

```objc
// time0 has a valid audio sample representation, but no host time representation.
AVAudioTime *time0 = [AVAudioTime timeWithSampleTime: 0.0 atRate: 44100.0];
// anchor has a valid host time representation and sample time representation.
AVAudioTime *anchor = [node currentTime];
// fill in  valid host time representation
AVAudioTime *fullTime = [sampleTime extrapolateTimeFromAnchor: sampleTime];
```

## See Also

### Creating an Audio Time Instance

- [init(audioTimeStamp:sampleRate:)](init%28audiotimestamp_samplerate_%29.md): Creates an audio time object with the specified timestamp and sample rate.
- [init(hostTime:)](init%28hosttime_%29.md): Creates an audio time object with the specified host time.
- [init(hostTime:sampleTime:atRate:)](init%28hosttime_sampletime_atrate_%29.md): Creates an audio time object with the specified host time, sample time, and sample rate.
- [init(sampleTime:atRate:)](init%28sampletime_atrate_%29.md): Creates an audio time object with the specified timestamp and sample rate.

# extrapolateTimeFromAnchor: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an audio time object by converting between host time and sample time.

## Declaration

```objectivec
- (AVAudioTime *) extrapolateTimeFromAnchor:(AVAudioTime *) anchorTime;
```

## Parameters

- `anchorTime`: An audio time instance with a more complete timestamp than that of the receiver (self).

<a id="return-value"></a>

## Return Value

A new [AVAudioTime](../avaudiotime.md) instance.

<a id="Discussion"></a>

## Discussion

If `anchorTime` is an `AVAudioTime` instance where both host time and sample time are valid, and the receiver is another timestamp where only one of the two is valid, this method returns a new `AVAudioTime`. It copies it from the receiver, where the anchor provides additional valid fields.

The `anchorTime` value must have a valid host time and sample time, and self must have sample rate and at least one valid host time or sample time. Otherwise, this method returns `nil`.

```objc
// time0 has a valid audio sample representation, but no host time representation.
AVAudioTime *time0 = [AVAudioTime timeWithSampleTime: 0.0 atRate: 44100.0];
// anchor has a valid host time representation and sample time representation.
AVAudioTime *anchor = [node currentTime];
// fill in  valid host time representation
AVAudioTime *fullTime = [sampleTime extrapolateTimeFromAnchor: sampleTime];
```

## See Also

### Creating an Audio Time Instance

- [initWithAudioTimeStamp:sampleRate:](init%28audiotimestamp_samplerate_%29.md): Creates an audio time object with the specified timestamp and sample rate.
- [initWithHostTime:](init%28hosttime_%29.md): Creates an audio time object with the specified host time.
- [initWithHostTime:sampleTime:atRate:](init%28hosttime_sampletime_atrate_%29.md): Creates an audio time object with the specified host time, sample time, and sample rate.
- [initWithSampleTime:atRate:](init%28sampletime_atrate_%29.md): Creates an audio time object with the specified timestamp and sample rate.
- [timeWithAudioTimeStamp:sampleRate:](timewithaudiotimestamp_samplerate_.md): Creates an audio time object with the specified timestamp and sample rate.
- [timeWithHostTime:sampleTime:atRate:](timewithhosttime_sampletime_atrate_.md): Creates an audio time object with the specified host time, sample time, and sample rate.
- [timeWithSampleTime:atRate:](timewithsampletime_atrate_.md): Creates an audio time object with the specified sample time and sample rate.
- [timeWithHostTime:](timewithhosttime_.md): Creates an audio time object with the specified host time.
