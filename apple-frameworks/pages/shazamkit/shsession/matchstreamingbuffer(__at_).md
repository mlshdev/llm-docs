> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shsession/matchstreamingbuffer(_:at:)](https://developer.apple.com/documentation/shazamkit/shsession/matchstreamingbuffer(_:at:))

# matchStreamingBuffer(\_:at:) (Swift)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Converts the audio in the buffer to a signature, and searches the reference signatures in the session catalog.

## Declaration

```swift
func matchStreamingBuffer(_ buffer: AVAudioPCMBuffer, at time: AVAudioTime?)
```

## Parameters

- `buffer`: An audio buffer.
- `time`: The start time of the audio to use for generating the signatures.

<a id="Discussion"></a>

## Discussion

This method continues to generate signatures and perform searches until the audio in the buffer stops, which may result in multiple calls to the [delegate](delegate.md).

The audio buffer must be in one of the supported formats. For the list of the supported audio formats, see [append(\_:at:)](../shsignaturegenerator/append%28__at_%29.md).

To use the microphone as input for the buffer, see [Matching audio using the built-in microphone](../matching-audio-using-the-built-in-microphone.md).

> **Note**

>  You must use the audio format of the first call to this method in the current session in all subsequent calls for the session.

## See Also

### Making a match

- [match(\_:)](match%28__%29.md): Searches for the query signature in the reference signatures that the session catalog contains.
- [Matching audio using the built-in microphone](../matching-audio-using-the-built-in-microphone.md): Use the audio stream from the microphone as the source for a ShazamKit session.

# matchStreamingBuffer:atTime: (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Converts the audio in the buffer to a signature, and searches the reference signatures in the session catalog.

## Declaration

```objectivec
- (void) matchStreamingBuffer:(AVAudioPCMBuffer *) buffer atTime:(AVAudioTime *) time;
```

## Parameters

- `buffer`: An audio buffer.
- `time`: The start time of the audio to use for generating the signatures.

<a id="Discussion"></a>

## Discussion

This method continues to generate signatures and perform searches until the audio in the buffer stops, which may result in multiple calls to the [delegate](delegate.md).

The audio buffer must be in one of the supported formats. For the list of the supported audio formats, see [appendBuffer:atTime:error:](../shsignaturegenerator/append%28__at_%29.md).

To use the microphone as input for the buffer, see [Matching audio using the built-in microphone](../matching-audio-using-the-built-in-microphone.md).

> **Note**

>  You must use the audio format of the first call to this method in the current session in all subsequent calls for the session.

## See Also

### Making a match

- [matchSignature:](match%28__%29.md): Searches for the query signature in the reference signatures that the session catalog contains.
- [Matching audio using the built-in microphone](../matching-audio-using-the-built-in-microphone.md): Use the audio stream from the microphone as the source for a ShazamKit session.
