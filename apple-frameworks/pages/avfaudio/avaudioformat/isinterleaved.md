> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioformat/isinterleaved](https://developer.apple.com/documentation/avfaudio/avaudioformat/isinterleaved)

# isInterleaved (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the samples mix into one stream.

## Declaration

```swift
var isInterleaved: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This value is only valid for PCM formats.

## See Also

### Determining the Audio Format

- [isStandard](isstandard.md): A Boolean value that indicates whether the format is in a deinterleaved native-endian float state.
- [commonFormat](commonformat.md): The common format identifier instance.
- [settings](settings.md): A dictionary that represents the format as a dictionary using audio setting keys.
- [magicCookie](magiccookie.md): An object that contains metadata that encoders and decoders require.

# interleaved (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the samples mix into one stream.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isInterleaved) BOOL interleaved;
```

<a id="Discussion"></a>

## Discussion

This value is only valid for PCM formats.

## See Also

### Determining the Audio Format

- [standard](isstandard.md): A Boolean value that indicates whether the format is in a deinterleaved native-endian float state.
- [commonFormat](commonformat.md): The common format identifier instance.
- [settings](settings.md): A dictionary that represents the format as a dictionary using audio setting keys.
- [magicCookie](magiccookie.md): An object that contains metadata that encoders and decoders require.
