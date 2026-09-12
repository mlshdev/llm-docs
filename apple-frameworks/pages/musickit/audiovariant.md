> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/audiovariant](https://developer.apple.com/documentation/musickit/audiovariant)

# AudioVariant

**Framework:** MusicKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Variants that indicate the quality of audio available for an item.

## Declaration

```swift
enum AudioVariant
```

## Topics

### Enumeration Cases

- [AudioVariant.dolbyAtmos](audiovariant/dolbyatmos.md): Dolby Atmos is an immersive audio experience that surrounds you with sound from all sides, including above.
- [AudioVariant.dolbyAudio](audiovariant/dolbyaudio.md): Dolby Audio is a surround sound format that includes Dolby 5.1 and 7.1.
- [AudioVariant.highResolutionLossless](audiovariant/highresolutionlossless.md): Hi-Res Lossless uses Apple Lossless Audio Codec (ALAC) for bit-for-bit accuracy up to 24-bit/192 kHz.
- [AudioVariant.lossless](audiovariant/lossless.md): Lossless uses Apple Lossless Audio Codec (ALAC) for bit-for-bit accuracy up to 24-bit/48 kHz.
- [AudioVariant.lossyStereo](audiovariant/lossystereo.md): Lossy stereo uses compression used to store sound data.
- [AudioVariant.spatialAudio](audiovariant/spatialaudio.md): Spatial audio is a fallback mode if the content is Dolby Atmos or Dolby Audio, but hardware capabilities don’t support them.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
