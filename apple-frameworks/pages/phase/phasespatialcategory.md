> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasespatialcategory](https://developer.apple.com/documentation/phase/phasespatialcategory)

# PHASESpatialCategory (Swift)

**Framework:** PHASE  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Sound resonance effects for spatial mixing.

## Declaration

```swift
struct PHASESpatialCategory
```

<a id="Discussion"></a>

## Discussion

This class identifies the various audio layers that a spatial mixer offers as keys to the [entries](phasespatialpipeline/entries.md) dictionary.

## Topics

### Creating a Spatial Category

- [init(rawValue:)](phasespatialcategory/init%28rawvalue_%29.md): Initializes a spatial category with the given string.

### Categories

- [directPathTransmission](phasespatialcategory/directpathtransmission.md): A spatial category that refers to the unfiltered audio signal.
- [earlyReflections](phasespatialcategory/earlyreflections.md): A spatial category that refers to the earlier echoes along the duration of sound resonance.
- [lateReverb](phasespatialcategory/latereverb.md): A spatial category that refers to the later echoes along the duration of sound resonance.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sound Reflections and Resonance

- [PHASESpatialPipeline](phasespatialpipeline.md): An object that specifies the volume of optional environmental effects.
- [PHASESpatialPipelineEntry](phasespatialpipelineentry.md): An audio layer with an adjustable volume for a spatial mixer’s output.
- [PHASESpatialPipeline.Flags](phasespatialpipeline/flags-swift.struct.md): Sound resonance options for a spatial pipeline.

# PHASESpatialCategory (Objective-C)

**Framework:** PHASE  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Sound resonance effects for spatial mixing.

## Declaration

```objectivec
typedef NSString * PHASESpatialCategory;
```

<a id="Discussion"></a>

## Discussion

This class identifies the various audio layers that a spatial mixer offers as keys to the [entries](phasespatialpipeline/entries.md) dictionary.

## Topics

### Categories

- [PHASESpatialCategoryDirectPathTransmission](phasespatialcategory/directpathtransmission.md): A spatial category that refers to the unfiltered audio signal.
- [PHASESpatialCategoryEarlyReflections](phasespatialcategory/earlyreflections.md): A spatial category that refers to the earlier echoes along the duration of sound resonance.
- [PHASESpatialCategoryLateReverb](phasespatialcategory/latereverb.md): A spatial category that refers to the later echoes along the duration of sound resonance.

## See Also

### Sound Reflections and Resonance

- [PHASESpatialPipeline](phasespatialpipeline.md): An object that specifies the volume of optional environmental effects.
- [PHASESpatialPipelineEntry](phasespatialpipelineentry.md): An audio layer with an adjustable volume for a spatial mixer’s output.
- [PHASESpatialPipelineFlags](phasespatialpipeline/flags-swift.struct.md): Sound resonance options for a spatial pipeline.
