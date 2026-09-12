> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shsignaturegenerator/append(_:at:)](https://developer.apple.com/documentation/shazamkit/shsignaturegenerator/append(_:at:))

# append(\_:at:) (Swift)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Adds audio to the generator.

## Declaration

```swift
func append(_ buffer: AVAudioPCMBuffer, at time: AVAudioTime?) throws
```

## Parameters

- `buffer`: The audio data to append to the signature generator.
- `time`: The time position of the start of the audio buffer in the full audio you use to generate the signature.

## Mentioned In

- [Generating a signature from an audio buffer](../generating-a-signature-from-an-audio-buffer.md)

<a id="Discussion"></a>

## Discussion

Using noncontiguous audio may result in a lower-quality signature.

The audio must be PCM at one of these rates:

- `48000` hertz
- `44100` hertz
- `32000` hertz
- `16000` hertz

## See Also

### Generating a signature from audio

- [signature()](signature%28%29.md): Converts the audio buffer into a signature.
- [Generating a signature from an audio buffer](../generating-a-signature-from-an-audio-buffer.md): Create a signature from an audio file or the microphone for a reference track in a custom catalog, or for matching tracks in a catalog.

# appendBuffer:atTime:error: (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Adds audio to the generator.

## Declaration

```objectivec
- (BOOL) appendBuffer:(AVAudioPCMBuffer *) buffer atTime:(AVAudioTime *) time error:(NSError **) error;
```

## Parameters

- `buffer`: The audio data to append to the signature generator.
- `time`: The time position of the start of the audio buffer in the full audio you use to generate the signature.
- `error`: The error that occurs; otherwise, `nil`.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## Mentioned In

- [Generating a signature from an audio buffer](../generating-a-signature-from-an-audio-buffer.md)

<a id="Discussion"></a>

## Discussion

Using noncontiguous audio may result in a lower-quality signature.

The audio must be PCM at one of these rates:

- `48000` hertz
- `44100` hertz
- `32000` hertz
- `16000` hertz

## See Also

### Generating a signature from audio

- [signature](signature%28%29.md): Converts the audio buffer into a signature.
- [Generating a signature from an audio buffer](../generating-a-signature-from-an-audio-buffer.md): Create a signature from an audio file or the microphone for a reference track in a custom catalog, or for matching tracks in a catalog.
