> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_mvhevcleftandrightviewids](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_mvhevcleftandrightviewids)

# kVTCompressionPropertyKey_MVHEVCLeftAndRightViewIDs (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Specifies which view identifier corresponds to the left eye and right eye.

## Declaration

```swift
let kVTCompressionPropertyKey_MVHEVCLeftAndRightViewIDs: CFString
```

<a id="Discussion"></a>

## Discussion

This property is specific to MV-HEVC.

The property value is an array containing two view identifiers as numbers. The first value corresponds to the left eye and the second value corresponds to the right. The system incorporates the view identifiers into the 3D Reference Displays Info SEI message.

The property is NULL by default.

## See Also

### Multiview Compression

- [kVTCompressionPropertyKey_MVHEVCVideoLayerIDs](kvtcompressionpropertykey_mvhevcvideolayerids.md): The identifiers of the video layers to encode in a multiview encoding operation.
- [kVTCompressionPropertyKey_MVHEVCViewIDs](kvtcompressionpropertykey_mvhevcviewids.md): The identifiers of the views corresponding to the video layers in a multiview encoding operation.

# kVTCompressionPropertyKey_MVHEVCLeftAndRightViewIDs (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Specifies which view identifier corresponds to the left eye and right eye.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_MVHEVCLeftAndRightViewIDs;
```

<a id="Discussion"></a>

## Discussion

This property is specific to MV-HEVC.

The property value is an array containing two view identifiers as numbers. The first value corresponds to the left eye and the second value corresponds to the right. The system incorporates the view identifiers into the 3D Reference Displays Info SEI message.

The property is NULL by default.

## See Also

### Multiview Compression

- [kVTCompressionPropertyKey_MVHEVCVideoLayerIDs](kvtcompressionpropertykey_mvhevcvideolayerids.md): The identifiers of the video layers to encode in a multiview encoding operation.
- [kVTCompressionPropertyKey_MVHEVCViewIDs](kvtcompressionpropertykey_mvhevcviewids.md): The identifiers of the views corresponding to the video layers in a multiview encoding operation.
