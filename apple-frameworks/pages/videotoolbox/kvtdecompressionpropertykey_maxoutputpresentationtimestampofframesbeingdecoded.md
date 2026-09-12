> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtdecompressionpropertykey_maxoutputpresentationtimestampofframesbeingdecoded](https://developer.apple.com/documentation/videotoolbox/kvtdecompressionpropertykey_maxoutputpresentationtimestampofframesbeingdecoded)

# kVTDecompressionPropertyKey_MaxOutputPresentationTimeStampOfFramesBeingDecoded (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The maximum output presentation timestamp of the frames currently being decoded.

## Declaration

```swift
let kVTDecompressionPropertyKey_MaxOutputPresentationTimeStampOfFramesBeingDecoded: CFString
```

<a id="Discussion"></a>

## Discussion

This value may change asynchronously as frames are output.

## See Also

### Asynchronous State

- [kVTDecompressionPropertyKey_MinOutputPresentationTimeStampOfFramesBeingDecoded](kvtdecompressionpropertykey_minoutputpresentationtimestampofframesbeingdecoded.md): The minimum output presentation timestamp of the frames currently being decoded.
- [kVTDecompressionPropertyKey_NumberOfFramesBeingDecoded](kvtdecompressionpropertykey_numberofframesbeingdecoded.md): Returns the number of frames currently being decoded.

# kVTDecompressionPropertyKey_MaxOutputPresentationTimeStampOfFramesBeingDecoded (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The maximum output presentation timestamp of the frames currently being decoded.

## Declaration

```objectivec
extern CFStringRef const kVTDecompressionPropertyKey_MaxOutputPresentationTimeStampOfFramesBeingDecoded;
```

<a id="Discussion"></a>

## Discussion

This value may change asynchronously as frames are output.

## See Also

### Asynchronous State

- [kVTDecompressionPropertyKey_MinOutputPresentationTimeStampOfFramesBeingDecoded](kvtdecompressionpropertykey_minoutputpresentationtimestampofframesbeingdecoded.md): The minimum output presentation timestamp of the frames currently being decoded.
- [kVTDecompressionPropertyKey_NumberOfFramesBeingDecoded](kvtdecompressionpropertykey_numberofframesbeingdecoded.md): Returns the number of frames currently being decoded.
