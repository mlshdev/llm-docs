> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shsignaturegenerator/signature()](https://developer.apple.com/documentation/shazamkit/shsignaturegenerator/signature())

# signature() (Swift)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Converts the audio buffer into a signature.

## Declaration

```swift
func signature() -> SHSignature
```

<a id="return-value"></a>

## Return Value

A signature that ShazamKit generates from the audio buffer.

## See Also

### Generating a signature from audio

- [append(\_:at:)](append%28__at_%29.md): Adds audio to the generator.
- [Generating a signature from an audio buffer](../generating-a-signature-from-an-audio-buffer.md): Create a signature from an audio file or the microphone for a reference track in a custom catalog, or for matching tracks in a catalog.

# signature (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Converts the audio buffer into a signature.

## Declaration

```objectivec
- (SHSignature *) signature;
```

<a id="return-value"></a>

## Return Value

A signature that ShazamKit generates from the audio buffer.

## See Also

### Generating a signature from audio

- [appendBuffer:atTime:error:](append%28__at_%29.md): Adds audio to the generator.
- [Generating a signature from an audio buffer](../generating-a-signature-from-an-audio-buffer.md): Create a signature from an audio file or the microphone for a reference track in a custom catalog, or for matching tracks in a catalog.
