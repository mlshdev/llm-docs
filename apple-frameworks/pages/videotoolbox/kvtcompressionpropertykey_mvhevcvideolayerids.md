> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_mvhevcvideolayerids](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_mvhevcvideolayerids)

# kVTCompressionPropertyKey_MVHEVCVideoLayerIDs (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The identifiers of the video layers to encode in a multiview encoding operation.

## Declaration

```swift
let kVTCompressionPropertyKey_MVHEVCVideoLayerIDs: CFString
```

<a id="Discussion"></a>

## Discussion

This property is specific to MV-HEVC.

Specifying layer ID values advises the encoder to expect [CMTaggedBufferGroupRef](../coremedia/cmtaggedbuffergroupref.md) objects with specific [CMTag](../coremedia/cmtag-swift.class.md) values that reference them.

The default value is `NULL`.

## See Also

### Multiview Compression

- [kVTCompressionPropertyKey_MVHEVCLeftAndRightViewIDs](kvtcompressionpropertykey_mvhevcleftandrightviewids.md): Specifies which view identifier corresponds to the left eye and right eye.
- [kVTCompressionPropertyKey_MVHEVCViewIDs](kvtcompressionpropertykey_mvhevcviewids.md): The identifiers of the views corresponding to the video layers in a multiview encoding operation.

# kVTCompressionPropertyKey_MVHEVCVideoLayerIDs (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The identifiers of the video layers to encode in a multiview encoding operation.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_MVHEVCVideoLayerIDs;
```

<a id="Discussion"></a>

## Discussion

This property is specific to MV-HEVC.

Specifying layer ID values advises the encoder to expect [CMTaggedBufferGroupRef](../coremedia/cmtaggedbuffergroupref.md) objects with specific [CMTag](../coremedia/cmtag-swift.class.md) values that reference them.

The default value is `NULL`.

## See Also

### Multiview Compression

- [kVTCompressionPropertyKey_MVHEVCLeftAndRightViewIDs](kvtcompressionpropertykey_mvhevcleftandrightviewids.md): Specifies which view identifier corresponds to the left eye and right eye.
- [kVTCompressionPropertyKey_MVHEVCViewIDs](kvtcompressionpropertykey_mvhevcviewids.md): The identifiers of the views corresponding to the video layers in a multiview encoding operation.
