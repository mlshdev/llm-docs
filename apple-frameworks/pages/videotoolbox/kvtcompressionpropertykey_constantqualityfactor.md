> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_constantqualityfactor](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_constantqualityfactor)

# kVTCompressionPropertyKey_ConstantQualityFactor (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
let kVTCompressionPropertyKey_ConstantQualityFactor: CFString
```

<a id="discussion"></a>

## Discussion

Requires the encoder to maintain consistent quality by specifying a target constant quality factor in the range of 0.0 to 1.0.

In contrast to cases where kVTCompressionPropertyKey_Quality will cause the quantization parameter to adhere to a fixed value, this property is designed for consistent visual quality with or without bitrate limit constraints. 0.0 is the lowest quality and 1.0 implies the highest quality possible.

# kVTCompressionPropertyKey_ConstantQualityFactor (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_ConstantQualityFactor;
```

<a id="discussion"></a>

## Discussion

Requires the encoder to maintain consistent quality by specifying a target constant quality factor in the range of 0.0 to 1.0.

In contrast to cases where kVTCompressionPropertyKey_Quality will cause the quantization parameter to adhere to a fixed value, this property is designed for consistent visual quality with or without bitrate limit constraints. 0.0 is the lowest quality and 1.0 implies the highest quality possible.
