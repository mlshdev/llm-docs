> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioformat/settings](https://developer.apple.com/documentation/avfaudio/avaudioformat/settings)

# settings (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary that represents the format as a dictionary using audio setting keys.

## Declaration

```swift
var settings: [String : Any] { get }
```

<a id="Discussion"></a>

## Discussion

The settings dictionary doesn’t support all formats that [AudioStreamBasicDescription](../../coreaudiotypes/audiostreambasicdescription.md) represents (the underlying implementation), in which case, this property returns `nil`.

## See Also

### Determining the Audio Format

- [isInterleaved](isinterleaved.md): A Boolean value that indicates whether the samples mix into one stream.
- [isStandard](isstandard.md): A Boolean value that indicates whether the format is in a deinterleaved native-endian float state.
- [commonFormat](commonformat.md): The common format identifier instance.
- [magicCookie](magiccookie.md): An object that contains metadata that encoders and decoders require.

# settings (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary that represents the format as a dictionary using audio setting keys.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary<NSString *,id> * settings;
```

<a id="Discussion"></a>

## Discussion

The settings dictionary doesn’t support all formats that [AudioStreamBasicDescription](../../coreaudiotypes/audiostreambasicdescription.md) represents (the underlying implementation), in which case, this property returns `nil`.

## See Also

### Determining the Audio Format

- [interleaved](isinterleaved.md): A Boolean value that indicates whether the samples mix into one stream.
- [standard](isstandard.md): A Boolean value that indicates whether the format is in a deinterleaved native-endian float state.
- [commonFormat](commonformat.md): The common format identifier instance.
- [magicCookie](magiccookie.md): An object that contains metadata that encoders and decoders require.
