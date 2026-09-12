> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioformat/isstandard](https://developer.apple.com/documentation/avfaudio/avaudioformat/isstandard)

# isStandard (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the format is in a deinterleaved native-endian float state.

## Declaration

```swift
var isStandard: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This value returns [true](https://developer.apple.com/documentation/swift/true) if the format is [AVAudioCommonFormat.pcmFormatFloat32](../avaudiocommonformat/pcmformatfloat32.md); otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining the Audio Format

- [isInterleaved](isinterleaved.md): A Boolean value that indicates whether the samples mix into one stream.
- [commonFormat](commonformat.md): The common format identifier instance.
- [settings](settings.md): A dictionary that represents the format as a dictionary using audio setting keys.
- [magicCookie](magiccookie.md): An object that contains metadata that encoders and decoders require.

# standard (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the format is in a deinterleaved native-endian float state.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isStandard) BOOL standard;
```

<a id="Discussion"></a>

## Discussion

This value returns [true](https://developer.apple.com/documentation/swift/true) if the format is [AVAudioPCMFormatFloat32](../avaudiocommonformat/pcmformatfloat32.md); otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining the Audio Format

- [interleaved](isinterleaved.md): A Boolean value that indicates whether the samples mix into one stream.
- [commonFormat](commonformat.md): The common format identifier instance.
- [settings](settings.md): A dictionary that represents the format as a dictionary using audio setting keys.
- [magicCookie](magiccookie.md): An object that contains metadata that encoders and decoders require.
