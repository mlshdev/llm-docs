> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/kmevideodecoderobjectnamekey](https://developer.apple.com/documentation/mediaextension/kmevideodecoderobjectnamekey)

# kMEVideoDecoderObjectNameKey (Swift)

**Framework:** MediaExtension  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

A user-readable string describing the decoder.

## Declaration

```swift
var kMEVideoDecoderObjectNameKey: String { get }
```

<a id="discussion"></a>

## Discussion

This string is used internally for uniquely identifying video decoders and possibly for debug logging but is typically not visible to users.

## See Also

### Property list keys

- [kMEVideoDecoderClassImplementationIDKey](kmevideodecoderclassimplementationidkey.md): The unique identifier for the video decoder.
- [kMERAWProcessorExtensionPointName](kmerawprocessorextensionpointname.md): The extension point name for RAW processors.
- [kMEVideoDecoderCodecInfoKey](kmevideodecodercodecinfokey.md): An array of one or more dictionaries describing the codecs that the decoder supports.
- [kMEVideoDecoderCodecTypeKey](kmevideodecodercodectypekey.md): A string describing the four-character code of the codec that the decoder supports.
- [kMEVideoDecoderCodecNameKey](kmevideodecodercodecnamekey.md): A user-readable string describing the name of the codec format.

# kMEVideoDecoderObjectNameKey (Objective-C)

**Framework:** MediaExtension  
**Kind:** Macro  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

A user-readable string describing the decoder.

## Declaration

```objectivec
#define kMEVideoDecoderObjectNameKey
```

<a id="discussion"></a>

## Discussion

This string is used internally for uniquely identifying video decoders and possibly for debug logging but is typically not visible to users.

## See Also

### Property list keys

- [kMEVideoDecoderClassImplementationIDKey](kmevideodecoderclassimplementationidkey.md): The unique identifier for the video decoder.
- [kMERAWProcessorExtensionPointName](kmerawprocessorextensionpointname.md): The extension point name for RAW processors.
- [kMEVideoDecoderCodecInfoKey](kmevideodecodercodecinfokey.md): An array of one or more dictionaries describing the codecs that the decoder supports.
- [kMEVideoDecoderCodecTypeKey](kmevideodecodercodectypekey.md): A string describing the four-character code of the codec that the decoder supports.
- [kMEVideoDecoderCodecNameKey](kmevideodecodercodecnamekey.md): A user-readable string describing the name of the codec format.
