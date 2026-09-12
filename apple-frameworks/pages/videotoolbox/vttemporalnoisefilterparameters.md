> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vttemporalnoisefilterparameters](https://developer.apple.com/documentation/videotoolbox/vttemporalnoisefilterparameters)

# VTTemporalNoiseFilterParameters (Swift)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Encapsulates the frame-level parameters necessary for processing a source frame using temporal noise-filter processor.

## Declaration

```swift
class VTTemporalNoiseFilterParameters
```

<a id="overview"></a>

## Overview

This object is intended for sending input parameters into the `processWithParameters` method of the `VTFrameProcessor` class. Temporal noise-filter processor utilizes past and future reference frames, provided in presentation time order, to reduce noise from the source frame. The `previousFrameCount` and `nextFrameCount` properties in [VTTemporalNoiseFilterConfiguration](vttemporalnoisefilterconfiguration.md) represent the maximum number of past and future reference frames that the processor can use to achieve optimum noise reduction quality. The number of reference frames provided shall depend on their availability, but at a minimum, you must provide one reference frame, either past or future. The parameter `destinationFrame` stores the output frame that the processor returns to the caller upon the successful completion of the `processWithParameters` operation.

## Topics

### Creating a parameters object

- [init(sourceFrame:nextFrames:previousFrames:destinationFrame:filterStrength:hasDiscontinuity:)](vttemporalnoisefilterparameters/init%28sourceframe_nextframes_previousframes_destinationframe_filterstrength_hasdiscontinuity_%29.md): Creates a new `VTTemporalNoiseFilterParameters` object.

### Inspecting the parameters

- [sourceFrame](vttemporalnoisefilterparameters/sourceframe.md): Current source frame; must be non `nil`.
- [nextFrames](vttemporalnoisefilterparameters/nextframes.md): Future reference frames in presentation time order that you use to process the source frame.
- [previousFrames](vttemporalnoisefilterparameters/previousframes.md): Past reference frames in presentation time order that you use to process the source frame.
- [filterStrength](vttemporalnoisefilterparameters/filterstrength.md): A parameter to control the strength of noise-filtering. The value can range from the minimum strength of 0.0 to the maximum strength of 1.0. Change in filter strength causes the processor to flush all frames in the queue prior to processing the source frame.
- [hasDiscontinuity](vttemporalnoisefilterparameters/hasdiscontinuity.md): A Boolean that indicates sequence discontinuity, forcing the processor to reset prior to processing the source frame.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [VTFrameProcessorParameters](vtframeprocessorparameters.md)

## See Also

### Temporal noise filter

- [VTTemporalNoiseFilterConfiguration](vttemporalnoisefilterconfiguration.md): A configuration object to initiate a frame processor and use temporal noise-filter processor.

# VTTemporalNoiseFilterParameters (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Encapsulates the frame-level parameters necessary for processing a source frame using temporal noise-filter processor.

## Declaration

```objectivec
@interface VTTemporalNoiseFilterParameters : NSObject
```

<a id="overview"></a>

## Overview

This object is intended for sending input parameters into the `processWithParameters` method of the `VTFrameProcessor` class. Temporal noise-filter processor utilizes past and future reference frames, provided in presentation time order, to reduce noise from the source frame. The `previousFrameCount` and `nextFrameCount` properties in [VTTemporalNoiseFilterConfiguration](vttemporalnoisefilterconfiguration.md) represent the maximum number of past and future reference frames that the processor can use to achieve optimum noise reduction quality. The number of reference frames provided shall depend on their availability, but at a minimum, you must provide one reference frame, either past or future. The parameter `destinationFrame` stores the output frame that the processor returns to the caller upon the successful completion of the `processWithParameters` operation.

## Topics

### Creating a parameters object

- [initWithSourceFrame:nextFrames:previousFrames:destinationFrame:filterStrength:hasDiscontinuity:](vttemporalnoisefilterparameters/init%28sourceframe_nextframes_previousframes_destinationframe_filterstrength_hasdiscontinuity_%29.md): Creates a new `VTTemporalNoiseFilterParameters` object.

### Inspecting the parameters

- [sourceFrame](vttemporalnoisefilterparameters/sourceframe.md): Current source frame; must be non `nil`.
- [nextFrames](vttemporalnoisefilterparameters/nextframes.md): Future reference frames in presentation time order that you use to process the source frame.
- [previousFrames](vttemporalnoisefilterparameters/previousframes.md): Past reference frames in presentation time order that you use to process the source frame.
- [destinationFrame](vttemporalnoisefilterparameters/destinationframe.md): Destination frame that contains a user-allocated pixel buffer that receives the output frame.
- [filterStrength](vttemporalnoisefilterparameters/filterstrength.md): A parameter to control the strength of noise-filtering. The value can range from the minimum strength of 0.0 to the maximum strength of 1.0. Change in filter strength causes the processor to flush all frames in the queue prior to processing the source frame.
- [hasDiscontinuity](vttemporalnoisefilterparameters/hasdiscontinuity.md): A Boolean that indicates sequence discontinuity, forcing the processor to reset prior to processing the source frame.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [VTFrameProcessorParameters](vtframeprocessorparameters.md)

## See Also

### Temporal noise filter

- [VTTemporalNoiseFilterConfiguration](vttemporalnoisefilterconfiguration.md): A configuration object to initiate a frame processor and use temporal noise-filter processor.
