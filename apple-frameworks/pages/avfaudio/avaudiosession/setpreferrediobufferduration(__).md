> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setpreferrediobufferduration(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setpreferrediobufferduration(_:))

# setPreferredIOBufferDuration(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Sets the preferred audio I/O buffer duration.

## Declaration

```swift
func setPreferredIOBufferDuration(_ duration: TimeInterval) throws
```

## Parameters

- `duration`: The audio I/O buffer duration, in seconds, that you want to use.

<a id="Discussion"></a>

## Discussion

This method requests a change to the I/O buffer duration. To determine whether the change has taken effect, use the [ioBufferDuration](iobufferduration.md) property.

The audio I/O buffer duration is the number of seconds for a single audio input/output cycle. For example, with an I/O buffer duration of 0.005 s, on each audio I/O cycle:

- You receive 0.005 s of audio if obtaining input.
- You must provide 0.005 s of audio if providing output.

The typical maximum I/O buffer duration is 0.093 seconds (corresponding to 4,096 sample frames at a sample rate of 44.1 kHz). The minimum I/O buffer duration is at least 0.005 seconds (256 frames) but might be lower depending on the hardware in use.

You can set a preferred I/O buffer duration before or after activating the audio session.

## See Also

### Configuring I/O buffer duration

- [ioBufferDuration](iobufferduration.md): The current I/O buffer duration, in seconds.
- [preferredIOBufferDuration](preferrediobufferduration.md): The preferred I/O buffer duration, in seconds.

# setPreferredIOBufferDuration:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Sets the preferred audio I/O buffer duration.

## Declaration

```objectivec
- (BOOL) setPreferredIOBufferDuration:(NSTimeInterval) duration error:(NSError **) outError;
```

## Parameters

- `duration`: The audio I/O buffer duration, in seconds, that you want to use.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a request was successfully made, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method requests a change to the I/O buffer duration. To determine whether the change has taken effect, use the [IOBufferDuration](iobufferduration.md) property.

The audio I/O buffer duration is the number of seconds for a single audio input/output cycle. For example, with an I/O buffer duration of 0.005 s, on each audio I/O cycle:

- You receive 0.005 s of audio if obtaining input.
- You must provide 0.005 s of audio if providing output.

The typical maximum I/O buffer duration is 0.093 seconds (corresponding to 4,096 sample frames at a sample rate of 44.1 kHz). The minimum I/O buffer duration is at least 0.005 seconds (256 frames) but might be lower depending on the hardware in use.

You can set a preferred I/O buffer duration before or after activating the audio session.

## See Also

### Configuring I/O buffer duration

- [IOBufferDuration](iobufferduration.md): The current I/O buffer duration, in seconds.
- [preferredIOBufferDuration](preferrediobufferduration.md): The preferred I/O buffer duration, in seconds.
