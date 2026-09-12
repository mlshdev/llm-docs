> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_spatialadaptiveqplevel](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_spatialadaptiveqplevel)

# kVTCompressionPropertyKey_SpatialAdaptiveQPLevel (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** macOS 15.0+

A value that controls spatial adaptation of the quantization parameter (QP) based on per-frame statistics.

## Declaration

```swift
let kVTCompressionPropertyKey_SpatialAdaptiveQPLevel: CFString
```

<a id="Discussion"></a>

## Discussion

If set to [kVTQPModulationLevel_Disable](kvtqpmodulationlevel_disable.md), spatial QP adaptation is not applied based on per-frame statistics. If set to [kVTQPModulationLevel_Default](kvtqpmodulationlevel_default.md), video encoder is allowed to apply spatial QP adaptation for each macro block (or coding unit) within a video frame. QP adaptation is based on spatial characteristics of a frame and the level of spatial QP adaptation is decided internally by the rate controller.

## Topics

### Levels

- [kVTQPModulationLevel_Default](kvtqpmodulationlevel_default.md)
- [kVTQPModulationLevel_Disable](kvtqpmodulationlevel_disable.md)

## See Also

### Quantization

- [kVTCompressionPropertyKey_MaxAllowedFrameQP](kvtcompressionpropertykey_maxallowedframeqp.md): The maximum allowed encoded frame QP (Quantization Parameter).
- [kVTCompressionPropertyKey_MinAllowedFrameQP](kvtcompressionpropertykey_minallowedframeqp.md): The minimum allowed encoded frame QP (Quantization Parameter).
- [kVTCompressionPropertyKey_SupportsBaseFrameQP](kvtcompressionpropertykey_supportsbaseframeqp.md): A value that indicates whether the encoder supports base frame QP requests.

# kVTCompressionPropertyKey_SpatialAdaptiveQPLevel (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** macOS 15.0+

A value that controls spatial adaptation of the quantization parameter (QP) based on per-frame statistics.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_SpatialAdaptiveQPLevel;
```

<a id="Discussion"></a>

## Discussion

If set to [kVTQPModulationLevel_Disable](kvtqpmodulationlevel_disable.md), spatial QP adaptation is not applied based on per-frame statistics. If set to [kVTQPModulationLevel_Default](kvtqpmodulationlevel_default.md), video encoder is allowed to apply spatial QP adaptation for each macro block (or coding unit) within a video frame. QP adaptation is based on spatial characteristics of a frame and the level of spatial QP adaptation is decided internally by the rate controller.

## Topics

### Levels

- [kVTQPModulationLevel_Default](kvtqpmodulationlevel_default.md)
- [kVTQPModulationLevel_Disable](kvtqpmodulationlevel_disable.md)

## See Also

### Quantization

- [kVTCompressionPropertyKey_MaxAllowedFrameQP](kvtcompressionpropertykey_maxallowedframeqp.md): The maximum allowed encoded frame QP (Quantization Parameter).
- [kVTCompressionPropertyKey_MinAllowedFrameQP](kvtcompressionpropertykey_minallowedframeqp.md): The minimum allowed encoded frame QP (Quantization Parameter).
- [kVTCompressionPropertyKey_SupportsBaseFrameQP](kvtcompressionpropertykey_supportsbaseframeqp.md): A value that indicates whether the encoder supports base frame QP requests.
