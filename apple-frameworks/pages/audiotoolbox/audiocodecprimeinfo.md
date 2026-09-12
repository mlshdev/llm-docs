> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocodecprimeinfo](https://developer.apple.com/documentation/audiotoolbox/audiocodecprimeinfo)

# AudioCodecPrimeInfo (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure specifying the number of leading and trailing empty frames to be inserted.

## Declaration

```swift
struct AudioCodecPrimeInfo
```

## Topics

### Initializers

- [init()](audiocodecprimeinfo/init%28%29.md)
- [init(leadingFrames:trailingFrames:)](audiocodecprimeinfo/init%28leadingframes_trailingframes_%29.md)

### Instance Properties

- [leadingFrames](audiocodecprimeinfo/leadingframes.md): An unsigned integer specifying the number of leading empty frames.
- [trailingFrames](audiocodecprimeinfo/trailingframes.md): An unsigned integer specifying the number of trailing empty frames.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Codec Types

- [AudioCodecMagicCookieInfo](audiocodecmagiccookieinfo.md): A structure holding magic cookie information needed by some codecs.
- [AudioCodec](audiocodec.md): An instance of a Component Manager component.
- [AudioCodecAppendInputBufferListProc](audiocodecappendinputbufferlistproc.md)
- [AudioCodecAppendInputDataProc](audiocodecappendinputdataproc.md)
- [AudioCodecGetPropertyInfoProc](audiocodecgetpropertyinfoproc.md)
- [AudioCodecGetPropertyProc](audiocodecgetpropertyproc.md)
- [AudioCodecInitializeProc](audiocodecinitializeproc.md)
- [AudioCodecProduceOutputBufferListProc](audiocodecproduceoutputbufferlistproc.md)
- [AudioCodecProduceOutputPacketsProc](audiocodecproduceoutputpacketsproc.md)
- [AudioCodecPropertyID](audiocodecpropertyid.md): An integer identifying an audio codec property.
- [AudioCodecResetProc](audiocodecresetproc.md)
- [AudioCodecSetPropertyProc](audiocodecsetpropertyproc.md)
- [AudioCodecUninitializeProc](audiocodecuninitializeproc.md)

# AudioCodecPrimeInfo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure specifying the number of leading and trailing empty frames to be inserted.

## Declaration

```objectivec
typedef struct AudioCodecPrimeInfo { ... } AudioCodecPrimeInfo;
```

## Topics

### Instance Properties

- [leadingFrames](audiocodecprimeinfo/leadingframes.md): An unsigned integer specifying the number of leading empty frames.
- [trailingFrames](audiocodecprimeinfo/trailingframes.md): An unsigned integer specifying the number of trailing empty frames.

## See Also

### Codec Types

- [AudioCodecMagicCookieInfo](audiocodecmagiccookieinfo.md): A structure holding magic cookie information needed by some codecs.
- [AudioCodec](audiocodec.md): An instance of a Component Manager component.
- [AudioCodecAppendInputBufferListProc](audiocodecappendinputbufferlistproc.md)
- [AudioCodecAppendInputDataProc](audiocodecappendinputdataproc.md)
- [AudioCodecGetPropertyInfoProc](audiocodecgetpropertyinfoproc.md)
- [AudioCodecGetPropertyProc](audiocodecgetpropertyproc.md)
- [AudioCodecInitializeProc](audiocodecinitializeproc.md)
- [AudioCodecProduceOutputBufferListProc](audiocodecproduceoutputbufferlistproc.md)
- [AudioCodecProduceOutputPacketsProc](audiocodecproduceoutputpacketsproc.md)
- [AudioCodecPropertyID](audiocodecpropertyid.md): An integer identifying an audio codec property.
- [AudioCodecResetProc](audiocodecresetproc.md)
- [AudioCodecSetPropertyProc](audiocodecsetpropertyproc.md)
- [AudioCodecUninitializeProc](audiocodecuninitializeproc.md)
