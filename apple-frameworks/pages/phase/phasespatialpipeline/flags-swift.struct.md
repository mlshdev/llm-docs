> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasespatialpipeline/flags-swift.struct](https://developer.apple.com/documentation/phase/phasespatialpipeline/flags-swift.struct)

# PHASESpatialPipeline.Flags (Swift)

**Framework:** PHASE  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Sound resonance options for a spatial pipeline.

## Declaration

```swift
struct Flags
```

<a id="overview"></a>

## Overview

Each [PHASESpatialPipeline](../phasespatialpipeline.md) specifies a flag in its [init(flags:)](init%28flags_%29.md) initializer.

## Topics

### Creating a Flag

- [init(rawValue:)](flags-swift.struct/init%28rawvalue_%29.md): Initializes a spatial flag with the given string.

### Choosing a Flag

- [directPathTransmission](flags-swift.struct/directpathtransmission.md): A spatial property that refers to the original audio signal.
- [earlyReflections](flags-swift.struct/earlyreflections.md): A spatial property that refers to the earlier echoes along the duration of sound resonance.
- [lateReverb](flags-swift.struct/latereverb.md): A spatial property that refers to the later echoes along the duration of sound resonance.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Sound Reflections and Resonance

- [PHASESpatialPipeline](../phasespatialpipeline.md): An object that specifies the volume of optional environmental effects.
- [PHASESpatialPipelineEntry](../phasespatialpipelineentry.md): An audio layer with an adjustable volume for a spatial mixer’s output.
- [PHASESpatialCategory](../phasespatialcategory.md): Sound resonance effects for spatial mixing.

# PHASESpatialPipelineFlags (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Sound resonance options for a spatial pipeline.

## Declaration

```objectivec
enum PHASESpatialPipelineFlags : NSUInteger;
```

<a id="overview"></a>

## Overview

Each [PHASESpatialPipeline](../phasespatialpipeline.md) specifies a flag in its [initWithFlags:](init%28flags_%29.md) initializer.

## Topics

### Choosing a Flag

- [PHASESpatialPipelineFlagDirectPathTransmission](flags-swift.struct/directpathtransmission.md): A spatial property that refers to the original audio signal.
- [PHASESpatialPipelineFlagEarlyReflections](flags-swift.struct/earlyreflections.md): A spatial property that refers to the earlier echoes along the duration of sound resonance.
- [PHASESpatialPipelineFlagLateReverb](flags-swift.struct/latereverb.md): A spatial property that refers to the later echoes along the duration of sound resonance.

## See Also

### Sound Reflections and Resonance

- [PHASESpatialPipeline](../phasespatialpipeline.md): An object that specifies the volume of optional environmental effects.
- [PHASESpatialPipelineEntry](../phasespatialpipelineentry.md): An audio layer with an adjustable volume for a spatial mixer’s output.
- [PHASESpatialCategory](../phasespatialcategory.md): Sound resonance effects for spatial mixing.
