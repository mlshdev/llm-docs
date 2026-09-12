> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositioninstruction-swift.class/configuration/requiredsourcesampledatatrackids](https://developer.apple.com/documentation/avfoundation/avvideocompositioninstruction-swift.class/configuration/requiredsourcesampledatatrackids)

# requiredSourceSampleDataTrackIDs

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The identifiers of source sample data tracks that the compositor requires to compose frames for the instruction.

## Declaration

```swift
var requiredSourceSampleDataTrackIDs: [CMPersistentTrackID]
```

## See Also

### Inspecting the configuration

- [backgroundColor](backgroundcolor.md): The background color of the composition.
- [enablePostProcessing](enablepostprocessing.md): A Boolean value that indicates whether the composition enables post-processing.
- [layerInstructions](layerinstructions.md): Instructions that specify how to layer and compose video frames from source tracks.
- [timeRange](timerange.md): The time range to which the instruction applies.
