> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/objecttrackingprovider/trackingconfiguration-swift.struct/movingobjecttrackingrate](https://developer.apple.com/documentation/arkit/objecttrackingprovider/trackingconfiguration-swift.struct/movingobjecttrackingrate)

# movingObjectTrackingRate

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+ (deprecated in 27.0)

The frequency at which object tracking runs for moving objects, in Hz.

> Use ReferenceObject.Configuration.highFrameRateTrackingEnabled instead

## Declaration

```swift
var movingObjectTrackingRate: Float
```

<a id="Discussion"></a>

## Discussion

The framework clamps this to between `0` and `30` Hz.

## See Also

### Inspecting a tracking configuration

- [detectionRate](detectionrate.md): The frequency at which object detection runs, in Hz.
- [maximumInstancesPerReferenceObject](maximuminstancesperreferenceobject.md): The maximum number of instances of each reference object type to allow tracking at once.
- [maximumTrackableInstances](maximumtrackableinstances.md): The total number of object instances that you can track at the same time.
- [stationaryObjectTrackingRate](stationaryobjecttrackingrate.md): Deprecated. The frequency at which object tracking runs for stationary objects, in Hz.
