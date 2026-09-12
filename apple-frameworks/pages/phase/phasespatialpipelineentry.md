> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasespatialpipelineentry](https://developer.apple.com/documentation/phase/phasespatialpipelineentry)

# PHASESpatialPipelineEntry (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An audio layer with an adjustable volume for a spatial mixer’s output.

## Declaration

```swift
class PHASESpatialPipelineEntry
```

<a id="overview"></a>

## Overview

This property adjusts the amount of audio that passes through a spatial mixer’s pipeline ([spatialPipeline](phasespatialmixerdefinition/spatialpipeline.md)) to the output. The pipeline’s [entries](phasespatialpipeline/entries.md) contains an instance of this class for each type of audio layer that [PHASESpatialCategory](phasespatialcategory.md) defines. Depending on the layer’s type, the audio may sound like spatial relections, environmental reverb, or the unfiltered signal. An app adjusts the layer’s presence in the mixer’s output by:

- Defining an initial volume using [sendLevel](phasespatialpipelineentry/sendlevel.md)
- Adjusting the audio’s volume dynamically, for example, by fading it over a duration using [sendLevelMetaParameterDefinition](phasespatialpipelineentry/sendlevelmetaparameterdefinition.md)

## Topics

### Setting the Send Level

- [sendLevel](phasespatialpipelineentry/sendlevel.md): The amount of audio signal to add to the output.

### Fading the Send Level

- [sendLevelMetaParameterDefinition](phasespatialpipelineentry/sendlevelmetaparameterdefinition.md): A parameter that gradually updates the amount of audio signal that passes through to the output.

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

- [PHASESpatialPipeline](phasespatialpipeline.md): An object that specifies the volume of optional environmental effects.
- [PHASESpatialCategory](phasespatialcategory.md): Sound resonance effects for spatial mixing.
- [PHASESpatialPipeline.Flags](phasespatialpipeline/flags-swift.struct.md): Sound resonance options for a spatial pipeline.

# PHASESpatialPipelineEntry (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An audio layer with an adjustable volume for a spatial mixer’s output.

## Declaration

```objectivec
@interface PHASESpatialPipelineEntry : NSObject
```

<a id="overview"></a>

## Overview

This property adjusts the amount of audio that passes through a spatial mixer’s pipeline ([spatialPipeline](phasespatialmixerdefinition/spatialpipeline.md)) to the output. The pipeline’s [entries](phasespatialpipeline/entries.md) contains an instance of this class for each type of audio layer that [PHASESpatialCategory](phasespatialcategory.md) defines. Depending on the layer’s type, the audio may sound like spatial relections, environmental reverb, or the unfiltered signal. An app adjusts the layer’s presence in the mixer’s output by:

- Defining an initial volume using [sendLevel](phasespatialpipelineentry/sendlevel.md)
- Adjusting the audio’s volume dynamically, for example, by fading it over a duration using [sendLevelMetaParameterDefinition](phasespatialpipelineentry/sendlevelmetaparameterdefinition.md)

## Topics

### Setting the Send Level

- [sendLevel](phasespatialpipelineentry/sendlevel.md): The amount of audio signal to add to the output.

### Fading the Send Level

- [sendLevelMetaParameterDefinition](phasespatialpipelineentry/sendlevelmetaparameterdefinition.md): A parameter that gradually updates the amount of audio signal that passes through to the output.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Sound Reflections and Resonance

- [PHASESpatialPipeline](phasespatialpipeline.md): An object that specifies the volume of optional environmental effects.
- [PHASESpatialCategory](phasespatialcategory.md): Sound resonance effects for spatial mixing.
- [PHASESpatialPipelineFlags](phasespatialpipeline/flags-swift.struct.md): Sound resonance options for a spatial pipeline.
