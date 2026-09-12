> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioformat/commonformat](https://developer.apple.com/documentation/avfaudio/avaudioformat/commonformat)

# commonFormat (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The common format identifier instance.

## Declaration

```swift
var commonFormat: AVAudioCommonFormat { get }
```

## See Also

### Determining the Audio Format

- [isInterleaved](isinterleaved.md): A Boolean value that indicates whether the samples mix into one stream.
- [isStandard](isstandard.md): A Boolean value that indicates whether the format is in a deinterleaved native-endian float state.
- [settings](settings.md): A dictionary that represents the format as a dictionary using audio setting keys.
- [magicCookie](magiccookie.md): An object that contains metadata that encoders and decoders require.

# commonFormat (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The common format identifier instance.

## Declaration

```objectivec
@property (nonatomic, readonly) AVAudioCommonFormat commonFormat;
```

## See Also

### Determining the Audio Format

- [interleaved](isinterleaved.md): A Boolean value that indicates whether the samples mix into one stream.
- [standard](isstandard.md): A Boolean value that indicates whether the format is in a deinterleaved native-endian float state.
- [settings](settings.md): A dictionary that represents the format as a dictionary using audio setting keys.
- [magicCookie](magiccookie.md): An object that contains metadata that encoders and decoders require.
