> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasespatialpipeline](https://developer.apple.com/documentation/phase/phasespatialpipeline)

# PHASESpatialPipeline (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An object that specifies the volume of optional environmental effects.

## Declaration

```swift
class PHASESpatialPipeline
```

<a id="overview"></a>

## Overview

The [PHASESpatialMixerDefinition](phasespatialmixerdefinition.md) class contains an instance of this class, [spatialPipeline](phasespatialmixerdefinition/spatialpipeline.md), to add optional sound layers to the output.

On top of the original audio signal designated by [directPathTransmission](phasespatialpipeline/flags-swift.struct/directpathtransmission.md), this class optionally includes audio layers for environmental effects, such as [earlyReflections](phasespatialcategory/earlyreflections.md) or [lateReverb](phasespatialcategory/latereverb.md), in the output.  To control the amount of volume that either audio layer possesses in the mixer’s output, adjust the [sendLevel](phasespatialpipelineentry/sendlevel.md) for the layer’s respective [PHASESpatialPipelineEntry](phasespatialpipelineentry.md) member in the [entries](phasespatialpipeline/entries.md) dictionary.

## Topics

### Creating a Spatial Pipeline

- [init(flags:)](phasespatialpipeline/init%28flags_%29.md): Creates a spatial pipeline with the specified flags.
- [PHASESpatialPipeline.Flags](phasespatialpipeline/flags-swift.struct.md): Sound resonance options for a spatial pipeline.

### Inspecting Effects

- [flags](phasespatialpipeline/flags-swift.property.md): A collection of environmental effects to include in the output.
- [entries](phasespatialpipeline/entries.md): Audio layers for environmental effects to add to the output.

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

## See Also

### Sound Reflections and Resonance

- [PHASESpatialPipelineEntry](phasespatialpipelineentry.md): An audio layer with an adjustable volume for a spatial mixer’s output.
- [PHASESpatialCategory](phasespatialcategory.md): Sound resonance effects for spatial mixing.
- [PHASESpatialPipeline.Flags](phasespatialpipeline/flags-swift.struct.md): Sound resonance options for a spatial pipeline.

# PHASESpatialPipeline (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An object that specifies the volume of optional environmental effects.

## Declaration

```objectivec
@interface PHASESpatialPipeline : NSObject
```

<a id="overview"></a>

## Overview

The [PHASESpatialMixerDefinition](phasespatialmixerdefinition.md) class contains an instance of this class, [spatialPipeline](phasespatialmixerdefinition/spatialpipeline.md), to add optional sound layers to the output.

On top of the original audio signal designated by [PHASESpatialPipelineFlagDirectPathTransmission](phasespatialpipeline/flags-swift.struct/directpathtransmission.md), this class optionally includes audio layers for environmental effects, such as [PHASESpatialCategoryEarlyReflections](phasespatialcategory/earlyreflections.md) or [PHASESpatialCategoryLateReverb](phasespatialcategory/latereverb.md), in the output.  To control the amount of volume that either audio layer possesses in the mixer’s output, adjust the [sendLevel](phasespatialpipelineentry/sendlevel.md) for the layer’s respective [PHASESpatialPipelineEntry](phasespatialpipelineentry.md) member in the [entries](phasespatialpipeline/entries.md) dictionary.

## Topics

### Creating a Spatial Pipeline

- [initWithFlags:](phasespatialpipeline/init%28flags_%29.md): Creates a spatial pipeline with the specified flags.
- [PHASESpatialPipelineFlags](phasespatialpipeline/flags-swift.struct.md): Sound resonance options for a spatial pipeline.

### Inspecting Effects

- [flags](phasespatialpipeline/flags-swift.property.md): A collection of environmental effects to include in the output.
- [entries](phasespatialpipeline/entries.md): Audio layers for environmental effects to add to the output.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Sound Reflections and Resonance

- [PHASESpatialPipelineEntry](phasespatialpipelineentry.md): An audio layer with an adjustable volume for a spatial mixer’s output.
- [PHASESpatialCategory](phasespatialcategory.md): Sound resonance effects for spatial mixing.
- [PHASESpatialPipelineFlags](phasespatialpipeline/flags-swift.struct.md): Sound resonance options for a spatial pipeline.
