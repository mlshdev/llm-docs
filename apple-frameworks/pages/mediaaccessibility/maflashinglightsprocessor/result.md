> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/maflashinglightsprocessor/result](https://developer.apple.com/documentation/mediaaccessibility/maflashinglightsprocessor/result)

# MAFlashingLightsProcessor.Result

**Framework:** Media Accessibility  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An object that reports the result of the flashing lights processor.

## Declaration

```swift
struct Result
```

<a id="overview"></a>

## Overview

An [MAFlashingLightsProcessor.Result](result.md) object is the result of calling [processSurface(\_:outSurface:timestamp:options:)](processsurface%28__outsurface_timestamp_options_%29.md). This object indicates whether the method successfully processed the input surface, the intensity of flashing lights in the input surface, and the amount of mitigation in the output surface.

## Topics

### Interpreting results from video processing

- [surfaceProcessed](result/surfaceprocessed.md): A Boolean value that indicates whether the flashing lights processor successfully processed the input surface.
- [intensityLevel](result/intensitylevel.md): The intensity of flashing lights in the input surface.
- [mitigationLevel](result/mitigationlevel.md): The amount of mitigation in the output surface.

## See Also

### Processing video content

- [processSurface(\_:outSurface:timestamp:options:)](processsurface%28__outsurface_timestamp_options_%29.md): Processes a surface by analyzing pixels for sequences of flashing lights and mitigates them by dimming the content.
- [MAFlashingLightsProcessor.OptionKey](optionkey.md): Options for the flashing lights processor.
