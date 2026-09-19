> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/objecttrackingprovider/trackingconfiguration-swift.struct/maximumtrackableinstances

# maximumTrackableInstances

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The total number of object instances that you can track at the same time.

## Declaration

```swift
var maximumTrackableInstances: Int
```

## See Also

### Inspecting a tracking configuration

- [detectionRate](detectionrate.md): The frequency at which object detection runs, in Hz.
- [maximumInstancesPerReferenceObject](maximuminstancesperreferenceobject.md): The maximum number of instances of each reference object type to allow tracking at once.
- [movingObjectTrackingRate](movingobjecttrackingrate.md): Deprecated. The frequency at which object tracking runs for moving objects, in Hz.
- [stationaryObjectTrackingRate](stationaryobjecttrackingrate.md): Deprecated. The frequency at which object tracking runs for stationary objects, in Hz.
