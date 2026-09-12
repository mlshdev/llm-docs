> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtdecompressionpropertykey_numberofframesbeingdecoded](https://developer.apple.com/documentation/videotoolbox/kvtdecompressionpropertykey_numberofframesbeingdecoded)

# kVTDecompressionPropertyKey_NumberOfFramesBeingDecoded (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Returns the number of frames currently being decoded.

## Declaration

```swift
let kVTDecompressionPropertyKey_NumberOfFramesBeingDecoded: CFString
```

<a id="Discussion"></a>

## Discussion

This number may decrease asynchronously as frames are output.

## See Also

### Asynchronous State

- [kVTDecompressionPropertyKey_MaxOutputPresentationTimeStampOfFramesBeingDecoded](kvtdecompressionpropertykey_maxoutputpresentationtimestampofframesbeingdecoded.md): The maximum output presentation timestamp of the frames currently being decoded.
- [kVTDecompressionPropertyKey_MinOutputPresentationTimeStampOfFramesBeingDecoded](kvtdecompressionpropertykey_minoutputpresentationtimestampofframesbeingdecoded.md): The minimum output presentation timestamp of the frames currently being decoded.

# kVTDecompressionPropertyKey_NumberOfFramesBeingDecoded (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Returns the number of frames currently being decoded.

## Declaration

```objectivec
extern CFStringRef const kVTDecompressionPropertyKey_NumberOfFramesBeingDecoded;
```

<a id="Discussion"></a>

## Discussion

This number may decrease asynchronously as frames are output.

## See Also

### Asynchronous State

- [kVTDecompressionPropertyKey_MaxOutputPresentationTimeStampOfFramesBeingDecoded](kvtdecompressionpropertykey_maxoutputpresentationtimestampofframesbeingdecoded.md): The maximum output presentation timestamp of the frames currently being decoded.
- [kVTDecompressionPropertyKey_MinOutputPresentationTimeStampOfFramesBeingDecoded](kvtdecompressionpropertykey_minoutputpresentationtimestampofframesbeingdecoded.md): The minimum output presentation timestamp of the frames currently being decoded.
