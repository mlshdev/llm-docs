> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocodecappendinputdataproc](https://developer.apple.com/documentation/audiotoolbox/audiocodecappendinputdataproc)

# AudioCodecAppendInputDataProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
typealias AudioCodecAppendInputDataProc = (UnsafeMutableRawPointer, UnsafeRawPointer, UnsafeMutablePointer<UInt32>, UnsafeMutablePointer<UInt32>, UnsafePointer<AudioStreamPacketDescription>?) -> OSStatus
```

## See Also

### Codec Types

- [AudioCodecMagicCookieInfo](audiocodecmagiccookieinfo.md): A structure holding magic cookie information needed by some codecs.
- [AudioCodecPrimeInfo](audiocodecprimeinfo.md): A structure specifying the number of leading and trailing empty frames to be inserted.
- [AudioCodec](audiocodec.md): An instance of a Component Manager component.
- [AudioCodecAppendInputBufferListProc](audiocodecappendinputbufferlistproc.md)
- [AudioCodecGetPropertyInfoProc](audiocodecgetpropertyinfoproc.md)
- [AudioCodecGetPropertyProc](audiocodecgetpropertyproc.md)
- [AudioCodecInitializeProc](audiocodecinitializeproc.md)
- [AudioCodecProduceOutputBufferListProc](audiocodecproduceoutputbufferlistproc.md)
- [AudioCodecProduceOutputPacketsProc](audiocodecproduceoutputpacketsproc.md)
- [AudioCodecPropertyID](audiocodecpropertyid.md): An integer identifying an audio codec property.
- [AudioCodecResetProc](audiocodecresetproc.md)
- [AudioCodecSetPropertyProc](audiocodecsetpropertyproc.md)
- [AudioCodecUninitializeProc](audiocodecuninitializeproc.md)

# AudioCodecAppendInputDataProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
typedef int (*)(void *, const void *, unsigned int *, unsigned int *, const struct AudioStreamPacketDescription *) AudioCodecAppendInputDataProc;
```

## See Also

### Codec Types

- [AudioCodecMagicCookieInfo](audiocodecmagiccookieinfo.md): A structure holding magic cookie information needed by some codecs.
- [AudioCodecPrimeInfo](audiocodecprimeinfo.md): A structure specifying the number of leading and trailing empty frames to be inserted.
- [AudioCodec](audiocodec.md): An instance of a Component Manager component.
- [AudioCodecAppendInputBufferListProc](audiocodecappendinputbufferlistproc.md)
- [AudioCodecGetPropertyInfoProc](audiocodecgetpropertyinfoproc.md)
- [AudioCodecGetPropertyProc](audiocodecgetpropertyproc.md)
- [AudioCodecInitializeProc](audiocodecinitializeproc.md)
- [AudioCodecProduceOutputBufferListProc](audiocodecproduceoutputbufferlistproc.md)
- [AudioCodecProduceOutputPacketsProc](audiocodecproduceoutputpacketsproc.md)
- [AudioCodecPropertyID](audiocodecpropertyid.md): An integer identifying an audio codec property.
- [AudioCodecResetProc](audiocodecresetproc.md)
- [AudioCodecSetPropertyProc](audiocodecsetpropertyproc.md)
- [AudioCodecUninitializeProc](audiocodecuninitializeproc.md)
