> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioformat/magiccookie](https://developer.apple.com/documentation/avfaudio/avaudioformat/magiccookie)

# magicCookie (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An object that contains metadata that encoders and decoders require.

## Declaration

```swift
var magicCookie: Data? { get set }
```

<a id="Discussion"></a>

## Discussion

Encoders produce a `magicCookie` object, and some decoders require it to decode properly.

## See Also

### Determining the Audio Format

- [isInterleaved](isinterleaved.md): A Boolean value that indicates whether the samples mix into one stream.
- [isStandard](isstandard.md): A Boolean value that indicates whether the format is in a deinterleaved native-endian float state.
- [commonFormat](commonformat.md): The common format identifier instance.
- [settings](settings.md): A dictionary that represents the format as a dictionary using audio setting keys.

# magicCookie (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An object that contains metadata that encoders and decoders require.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSData * magicCookie;
```

<a id="Discussion"></a>

## Discussion

Encoders produce a `magicCookie` object, and some decoders require it to decode properly.

## See Also

### Determining the Audio Format

- [interleaved](isinterleaved.md): A Boolean value that indicates whether the samples mix into one stream.
- [standard](isstandard.md): A Boolean value that indicates whether the format is in a deinterleaved native-endian float state.
- [commonFormat](commonformat.md): The common format identifier instance.
- [settings](settings.md): A dictionary that represents the format as a dictionary using audio setting keys.
