> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtdecodeframeoptionkey_contentanalyzercroprectangle](https://developer.apple.com/documentation/videotoolbox/kvtdecodeframeoptionkey_contentanalyzercroprectangle)

# kVTDecodeFrameOptionKey_ContentAnalyzerCropRectangle (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
let kVTDecodeFrameOptionKey_ContentAnalyzerCropRectangle: CFString
```

<a id="discussion"></a>

## Discussion

CGRect within the image to be used for content analysis, cropped before applying rotation.

This value specifies a rectangle within the original frame that should be used for content analysis. The cropping is applied before any rotation specified by kVTDecodeFrameOptionKey_ContentAnalyzerRotation. The value should be a CFDictionary representing a CGRect created using CGRectCreateDictionaryRepresentation(). This key is not used unless you have attached a `SCVideoStreamAnalyzer` to the decompression session.

## See Also

### Per-Frame Decoder Options

- [kVTDecodeFrameOptionKey_ContentAnalyzerRotation](kvtdecodeframeoptionkey_contentanalyzerrotation.md)

# kVTDecodeFrameOptionKey_ContentAnalyzerCropRectangle (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
extern CFStringRef const kVTDecodeFrameOptionKey_ContentAnalyzerCropRectangle;
```

<a id="discussion"></a>

## Discussion

CGRect within the image to be used for content analysis, cropped before applying rotation.

This value specifies a rectangle within the original frame that should be used for content analysis. The cropping is applied before any rotation specified by kVTDecodeFrameOptionKey_ContentAnalyzerRotation. The value should be a CFDictionary representing a CGRect created using CGRectCreateDictionaryRepresentation(). This key is not used unless you have attached a `SCVideoStreamAnalyzer` to the decompression session.

## See Also

### Per-Frame Decoder Options

- [kVTDecodeFrameOptionKey_ContentAnalyzerRotation](kvtdecodeframeoptionkey_contentanalyzerrotation.md)
