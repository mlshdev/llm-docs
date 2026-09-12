> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocodecmagiccookieinfo](https://developer.apple.com/documentation/audiotoolbox/audiocodecmagiccookieinfo)

# AudioCodecMagicCookieInfo (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure holding magic cookie information needed by some codecs.

## Declaration

```swift
struct AudioCodecMagicCookieInfo
```

<a id="overview"></a>

## Overview

This structure is passed as input to the [AudioCodecGetProperty(\_:\_:\_:\_:)](audiocodecgetproperty%28________%29.md) function for the `kAudioCodecPropertyFormatList` property. The first `4 + sizeof(void *)` bytes of the buffer pointed to by the function’s `outPropertyData` parameter contains this structure on input.

## Topics

### Initializers

- [init()](audiocodecmagiccookieinfo/init%28%29.md)
- [init(mMagicCookieSize:mMagicCookie:)](audiocodecmagiccookieinfo/init%28mmagiccookiesize_mmagiccookie_%29.md)

### Instance Properties

- [mMagicCookie](audiocodecmagiccookieinfo/mmagiccookie.md): Generic constant pointer to the magic cookie.
- [mMagicCookieSize](audiocodecmagiccookieinfo/mmagiccookiesize.md): The size of the magic cookie.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Codec Types

- [AudioCodecPrimeInfo](audiocodecprimeinfo.md): A structure specifying the number of leading and trailing empty frames to be inserted.
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

# AudioCodecMagicCookieInfo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure holding magic cookie information needed by some codecs.

## Declaration

```objectivec
struct AudioCodecMagicCookieInfo;
```

<a id="overview"></a>

## Overview

This structure is passed as input to the [AudioCodecGetProperty](audiocodecgetproperty%28________%29.md) function for the `kAudioCodecPropertyFormatList` property. The first `4 + sizeof(void *)` bytes of the buffer pointed to by the function’s `outPropertyData` parameter contains this structure on input.

## Topics

### Instance Properties

- [mMagicCookie](audiocodecmagiccookieinfo/mmagiccookie.md): Generic constant pointer to the magic cookie.
- [mMagicCookieSize](audiocodecmagiccookieinfo/mmagiccookiesize.md): The size of the magic cookie.

## See Also

### Codec Types

- [AudioCodecPrimeInfo](audiocodecprimeinfo.md): A structure specifying the number of leading and trailing empty frames to be inserted.
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
