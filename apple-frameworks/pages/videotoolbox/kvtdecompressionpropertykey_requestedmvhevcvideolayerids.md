> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtdecompressionpropertykey_requestedmvhevcvideolayerids](https://developer.apple.com/documentation/videotoolbox/kvtdecompressionpropertykey_requestedmvhevcvideolayerids)

# kVTDecompressionPropertyKey_RequestedMVHEVCVideoLayerIDs (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Requests multi-image decoding of specific MV-HEVC video layers.

## Declaration

```swift
let kVTDecompressionPropertyKey_RequestedMVHEVCVideoLayerIDs: CFString
```

<a id="Discussion"></a>

## Discussion

This property is specific to MV-HEVC. The use of it requires you to use the [VTDecompressionSessionSetMultiImageCallback](vtdecompressionsessionsetmultiimagecallback.md) function to install a callback capable of receiving [CMTaggedBufferGroupRef](../coremedia/cmtaggedbuffergroupref.md) objects in response to multi-image frame decode requests.

MV-HEVC video layer IDs not in this list don’t need to be output, and the decoder may skip decoding them if not otherwise necessary.

The property is NULL by default. If this property is NULL, MV-HEVC ignores layers other than the base layer.

> **Note**

>  In multiview decompression, a single video sample contains a single frame (with one PTS) that the system decodes to produce multiple images.

# kVTDecompressionPropertyKey_RequestedMVHEVCVideoLayerIDs (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Requests multi-image decoding of specific MV-HEVC video layers.

## Declaration

```objectivec
extern CFStringRef const kVTDecompressionPropertyKey_RequestedMVHEVCVideoLayerIDs;
```

<a id="Discussion"></a>

## Discussion

This property is specific to MV-HEVC. The use of it requires you to use the [VTDecompressionSessionSetMultiImageCallback](vtdecompressionsessionsetmultiimagecallback.md) function to install a callback capable of receiving [CMTaggedBufferGroupRef](../coremedia/cmtaggedbuffergroupref.md) objects in response to multi-image frame decode requests.

MV-HEVC video layer IDs not in this list don’t need to be output, and the decoder may skip decoding them if not otherwise necessary.

The property is NULL by default. If this property is NULL, MV-HEVC ignores layers other than the base layer.

> **Note**

>  In multiview decompression, a single video sample contains a single frame (with one PTS) that the system decodes to produce multiple images.
