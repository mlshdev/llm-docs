> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/video-decoder-property-list-dictionary](https://developer.apple.com/documentation/mediaextension/video-decoder-property-list-dictionary)

# Video decoder property list dictionary

**Interface languages:** Swift, Objective-C

**Framework:** MediaExtension  
**Kind:** API Collection

Include a property list dictionary to describe a video decoder.

<a id="overview"></a>

## Overview

A MediaExtension video decoder needs to include an `EXAppExtensionAttributes` dictionary in its `Info.plist` file that contains the following keys and values:

- [kMEVideoDecoderClassImplementationIDKey](kmevideodecoderclassimplementationidkey.md): The identifier for the decoder. Format similarly to the bundle identifier.
- `EXExtensionPointIdentifier`: The extension point name for video decoders. Set to the value for [kMEVideoDecoderExtensionPointName](kmevideodecoderextensionpointname.md).
- `EXPrincipalClass`: The name of the video decoder factory class that conforms to the [MEVideoDecoderExtension](mevideodecoderextension.md) protocol.
- [kMEVideoDecoderObjectNameKey](kmevideodecoderobjectnamekey.md): A user-readable string that describes the codec format. This string is used for uniquely identifying video decoders and possibly for debug logging but is typically not visible to users.
- [kMEVideoDecoderCodecInfoKey](kmevideodecodercodecinfokey.md): An array of one or more dictionaries describing the formats that the video decoder supports. Each dictionary must include the following keys:

  - [kMEVideoDecoderCodecTypeKey](kmevideodecodercodectypekey.md): A string describing the four-character code of the codec associated with the video decoder. Each string should be exactly four characters long and use ASCII character set encoding.
  - [kMEVideoDecoderCodecNameKey](kmevideodecodercodecnamekey.md): A user-readable string describing the name of the codec format. This string might be displayed as format information for the video track in a player application.

## Topics

### Property list keys

- [kMEVideoDecoderClassImplementationIDKey](kmevideodecoderclassimplementationidkey.md): The unique identifier for the video decoder.
- [kMEVideoDecoderExtensionPointName](kmevideodecoderextensionpointname.md): The extension point name for video decoders.
- [kMEVideoDecoderObjectNameKey](kmevideodecoderobjectnamekey.md): A user-readable string describing the decoder.
- [kMEVideoDecoderCodecInfoKey](kmevideodecodercodecinfokey.md): An array of one or more dictionaries describing the codecs that the decoder supports.
- [kMEVideoDecoderCodecTypeKey](kmevideodecodercodectypekey.md): A string describing the four-character code of the codec that the decoder supports.
- [kMEVideoDecoderCodecNameKey](kmevideodecodercodecnamekey.md): A user-readable string describing the name of the codec format.

## See Also

### Video decoders

- [MEVideoDecoder](mevideodecoder.md): A protocol that defines the requirements for a video decoder.
- [MEVideoDecoderExtension](mevideodecoderextension.md): A protocol that defines a factory to create new video decoders for a codec type that the extension implements.
- [MEDecodeFrameOptions](medecodeframeoptions.md): An object that guides the video decoder operation on a per-frame basis.
- [MEVideoDecoderPixelBufferManager](mevideodecoderpixelbuffermanager.md): Describes pixel buffer requirements and creates new pixel buffers.
- [Video decoder entitlement](video-decoder-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension video decoder.
