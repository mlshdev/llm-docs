> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/preferredsamplerate](https://developer.apple.com/documentation/avfaudio/avaudiosession/preferredsamplerate)

# preferredSampleRate (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The preferred sample rate, in hertz.

## Declaration

```swift
var preferredSampleRate: Double { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property indicates the preferred sample rate set using the [setPreferredSampleRate(\_:)](setpreferredsamplerate%28__%29.md) method.

To determine the actual sample rate, query the [sampleRate](samplerate.md) property.

## See Also

### Configuring sample rate

- [sampleRate](samplerate.md): The current audio sample rate, in hertz.
- [setPreferredSampleRate(\_:)](setpreferredsamplerate%28__%29.md): Sets the preferred sample rate for audio input and output.

# preferredSampleRate (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The preferred sample rate, in hertz.

## Declaration

```objectivec
@property (readonly) double preferredSampleRate;
```

<a id="Discussion"></a>

## Discussion

The value of this property indicates the preferred sample rate set using the [setPreferredSampleRate:error:](setpreferredsamplerate%28__%29.md) method.

To determine the actual sample rate, query the [sampleRate](samplerate.md) property.

## See Also

### Configuring sample rate

- [sampleRate](samplerate.md): The current audio sample rate, in hertz.
- [setPreferredSampleRate:error:](setpreferredsamplerate%28__%29.md): Sets the preferred sample rate for audio input and output.
