> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_mvhevcviewids](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_mvhevcviewids)

# kVTCompressionPropertyKey_MVHEVCViewIDs (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The identifiers of the views corresponding to the video layers in a multiview encoding operation.

## Declaration

```swift
let kVTCompressionPropertyKey_MVHEVCViewIDs: CFString
```

<a id="Discussion"></a>

## Discussion

This property is specific to MV-HEVC.

The entries in the specified array should be in the same order and have the same count as the value specified in [kVTCompressionPropertyKey_MVHEVCVideoLayerIDs](kvtcompressionpropertykey_mvhevcvideolayerids.md).

The default value is `NULL`.

## See Also

### Multiview Compression

- [kVTCompressionPropertyKey_MVHEVCLeftAndRightViewIDs](kvtcompressionpropertykey_mvhevcleftandrightviewids.md): Specifies which view identifier corresponds to the left eye and right eye.
- [kVTCompressionPropertyKey_MVHEVCVideoLayerIDs](kvtcompressionpropertykey_mvhevcvideolayerids.md): The identifiers of the video layers to encode in a multiview encoding operation.

# kVTCompressionPropertyKey_MVHEVCViewIDs (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The identifiers of the views corresponding to the video layers in a multiview encoding operation.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_MVHEVCViewIDs;
```

<a id="Discussion"></a>

## Discussion

This property is specific to MV-HEVC.

The entries in the specified array should be in the same order and have the same count as the value specified in [kVTCompressionPropertyKey_MVHEVCVideoLayerIDs](kvtcompressionpropertykey_mvhevcvideolayerids.md).

The default value is `NULL`.

## See Also

### Multiview Compression

- [kVTCompressionPropertyKey_MVHEVCLeftAndRightViewIDs](kvtcompressionpropertykey_mvhevcleftandrightviewids.md): Specifies which view identifier corresponds to the left eye and right eye.
- [kVTCompressionPropertyKey_MVHEVCVideoLayerIDs](kvtcompressionpropertykey_mvhevcvideolayerids.md): The identifiers of the video layers to encode in a multiview encoding operation.
