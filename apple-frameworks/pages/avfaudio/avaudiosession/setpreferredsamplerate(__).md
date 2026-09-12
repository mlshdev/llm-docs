> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setpreferredsamplerate(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setpreferredsamplerate(_:))

# setPreferredSampleRate(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Sets the preferred sample rate for audio input and output.

## Declaration

```swift
func setPreferredSampleRate(_ sampleRate: Double) throws
```

## Parameters

- `sampleRate`: The hardware sample rate to use. The available range is device dependent and is typically from 8000 through 48000 hertz.

<a id="Discussion"></a>

## Discussion

This method requests a change to the input and output audio sample rate. To see the effect of this change, use the [sampleRate](samplerate.md) property.

You can set a preferred sample rate before or after activating the audio session.

## See Also

### Configuring sample rate

- [sampleRate](samplerate.md): The current audio sample rate, in hertz.
- [preferredSampleRate](preferredsamplerate.md): The preferred sample rate, in hertz.

# setPreferredSampleRate:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Sets the preferred sample rate for audio input and output.

## Declaration

```objectivec
- (BOOL) setPreferredSampleRate:(double) sampleRate error:(NSError **) outError;
```

## Parameters

- `sampleRate`: The hardware sample rate to use. The available range is device dependent and is typically from 8000 through 48000 hertz.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a request was successfully made, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method requests a change to the input and output audio sample rate. To see the effect of this change, use the [sampleRate](samplerate.md) property.

You can set a preferred sample rate before or after activating the audio session.

## See Also

### Configuring sample rate

- [sampleRate](samplerate.md): The current audio sample rate, in hertz.
- [preferredSampleRate](preferredsamplerate.md): The preferred sample rate, in hertz.
