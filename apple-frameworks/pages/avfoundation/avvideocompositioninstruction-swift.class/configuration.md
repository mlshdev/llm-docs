> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositioninstruction-swift.class/configuration](https://developer.apple.com/documentation/avfoundation/avvideocompositioninstruction-swift.class/configuration)

# AVVideoCompositionInstruction.Configuration

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configurable properties for initializing a new AVVideoCompositionInstruction instance.

## Declaration

```swift
struct Configuration
```

## Topics

### Creating a configuration

- [init(backgroundColor:enablePostProcessing:layerInstructions:requiredSourceSampleDataTrackIDs:timeRange:)](configuration/init%28backgroundcolor_enablepostprocessing_layerinstructions_requiredsourcesampledatatrackids_timerange_%29.md)

### Inspecting the configuration

- [backgroundColor](configuration/backgroundcolor.md): The background color of the composition.
- [enablePostProcessing](configuration/enablepostprocessing.md): A Boolean value that indicates whether the composition enables post-processing.
- [layerInstructions](configuration/layerinstructions.md): Instructions that specify how to layer and compose video frames from source tracks.
- [requiredSourceSampleDataTrackIDs](configuration/requiredsourcesampledatatrackids.md): The identifiers of source sample data tracks that the compositor requires to compose frames for the instruction.
- [timeRange](configuration/timerange.md): The time range to which the instruction applies.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating an instruction

- [init(configuration:)](init%28configuration_%29.md): Initialize an AVVideoCompositionInstruction with a configuration.
