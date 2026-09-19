> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaextension/kmevideodecoderextensionpointname

# kMEVideoDecoderExtensionPointName (Swift)

**Framework:** MediaExtension  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

The extension point name for video decoders.

## Declaration

```swift
var kMEVideoDecoderExtensionPointName: String { get }
```

<a id="Discussion"></a>

## Discussion

The value for this string is `com.apple.mediaextension.videodecoder`.

## See Also

### Property list keys

- [kMEVideoDecoderClassImplementationIDKey](kmevideodecoderclassimplementationidkey.md): The unique identifier for the video decoder.
- [kMEVideoDecoderObjectNameKey](kmevideodecoderobjectnamekey.md): A user-readable string describing the decoder.
- [kMEVideoDecoderCodecInfoKey](kmevideodecodercodecinfokey.md): An array of one or more dictionaries describing the codecs that the decoder supports.
- [kMEVideoDecoderCodecTypeKey](kmevideodecodercodectypekey.md): A string describing the four-character code of the codec that the decoder supports.
- [kMEVideoDecoderCodecNameKey](kmevideodecodercodecnamekey.md): A user-readable string describing the name of the codec format.

# kMEVideoDecoderExtensionPointName (Objective-C)

**Framework:** MediaExtension  
**Kind:** Macro  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

The extension point name for video decoders.

## Declaration

```objectivec
#define kMEVideoDecoderExtensionPointName
```

<a id="Discussion"></a>

## Discussion

The value for this string is `com.apple.mediaextension.videodecoder`.

## See Also

### Property list keys

- [kMEVideoDecoderClassImplementationIDKey](kmevideodecoderclassimplementationidkey.md): The unique identifier for the video decoder.
- [kMEVideoDecoderObjectNameKey](kmevideodecoderobjectnamekey.md): A user-readable string describing the decoder.
- [kMEVideoDecoderCodecInfoKey](kmevideodecodercodecinfokey.md): An array of one or more dictionaries describing the codecs that the decoder supports.
- [kMEVideoDecoderCodecTypeKey](kmevideodecodercodectypekey.md): A string describing the four-character code of the codec that the decoder supports.
- [kMEVideoDecoderCodecNameKey](kmevideodecodercodecnamekey.md): A user-readable string describing the name of the codec format.
